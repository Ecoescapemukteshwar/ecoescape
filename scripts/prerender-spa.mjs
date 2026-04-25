// Custom SPA prerender — runs after `vite build` to render every route's
// React content into the static dist HTML. Replaces the broken
// vite-plugin-prerender + puppeteer 1.20 path which can't launch on
// Vercel's Linux build container.
//
// Strategy:
//   1. Serve dist/ on a local port via Node's http module (no extra dep)
//   2. Launch puppeteer-core. On Linux/Vercel use @sparticuz/chromium;
//      on Mac use the user's installed Google Chrome.
//   3. For each route in getAllRoutes(), navigate, wait for Helmet to
//      settle, capture HTML, write dist/<route>/index.html.
//   4. Rename /404/index.html to dist/404.html so platforms auto-serve
//      it as the 404 page.
//
// Opt-in: requires ENABLE_PRERENDER=1. Without it, build ships the SPA
// shell as before — same as today's production behavior.

import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { getAllRoutes } from "./lib/routes.mjs";

if (process.env.ENABLE_PRERENDER !== "1") {
  console.log("[prerender-spa] skipped (set ENABLE_PRERENDER=1 to enable)");
  process.exit(0);
}

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const distRoot = path.join(repoRoot, "dist");

if (!fs.existsSync(distRoot)) {
  console.error("[prerender-spa] dist/ not found — run `vite build` first");
  process.exit(1);
}

// ─── 1. Serve dist/ on a free local port ─────────────────────────────
function startServer() {
  return new Promise((resolve, reject) => {
    const MIME = {
      ".html": "text/html; charset=utf-8",
      ".js": "application/javascript",
      ".css": "text/css",
      ".webp": "image/webp",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".svg": "image/svg+xml",
      ".woff2": "font/woff2",
      ".woff": "font/woff",
      ".json": "application/json",
      ".ico": "image/x-icon",
      ".txt": "text/plain",
      ".xml": "application/xml",
    };
    const server = http.createServer((req, res) => {
      const url = decodeURIComponent(req.url.split("?")[0]);
      let filePath = path.join(distRoot, url === "/" ? "index.html" : url);
      // Fallback to SPA index.html for non-asset paths
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        const indexFallback = path.join(filePath, "index.html");
        if (fs.existsSync(indexFallback)) {
          filePath = indexFallback;
        } else {
          filePath = path.join(distRoot, "index.html");
        }
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      resolve({ server, port });
    });
    server.on("error", reject);
  });
}

// ─── 2. Resolve a Chromium executable for puppeteer ──────────────────
async function getBrowserConfig() {
  const cjsRequire = createRequire(import.meta.url);
  const isLinux = process.platform === "linux";
  const isCI = !!(process.env.VERCEL || process.env.NETLIFY || process.env.CI);

  if (isLinux || isCI) {
    // Use @sparticuz/chromium (designed for serverless Linux containers).
    const sparticuz = (await import("@sparticuz/chromium")).default;
    const executablePath = await sparticuz.executablePath();
    return {
      args: [...sparticuz.args, "--no-sandbox", "--disable-setuid-sandbox"],
      executablePath,
      headless: true,
      defaultViewport: { width: 1280, height: 720 },
    };
  }

  // macOS local dev — use system Google Chrome
  const macChrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (process.platform === "darwin" && fs.existsSync(macChrome)) {
    return {
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || macChrome,
      headless: true,
      defaultViewport: { width: 1280, height: 720 },
      args: ["--no-sandbox"],
    };
  }

  // Fallback: hope PUPPETEER_EXECUTABLE_PATH points somewhere usable
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return {
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      headless: true,
      defaultViewport: { width: 1280, height: 720 },
      args: ["--no-sandbox"],
    };
  }

  throw new Error(
    "[prerender-spa] No Chromium binary available. Install @sparticuz/chromium for Linux, or set PUPPETEER_EXECUTABLE_PATH.",
  );
}

// ─── 3. Render every route ───────────────────────────────────────────
async function renderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  // Block third-party scripts to keep prerender fast and deterministic
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const u = req.url();
    if (
      u.includes("googletagmanager.com") ||
      u.includes("google-analytics.com") ||
      u.includes("vercel-insights.com") ||
      u.includes("vercel-scripts.com") ||
      u.includes("tripadvisor")
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const url = `${baseUrl}${route}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  // Wait for Helmet's rAF batch to flush per-page <head> tags. 3s is the
  // empirical floor across all routes; some lazy chunks take ~2s to settle.
  // Verify by checking that the document title differs from the homepage's.
  const homepageTitle = "Ecoescape Mukteshwar | Boutique Homestay with Sunrise Views & Garden";
  let attempts = 0;
  while (attempts < 6) {
    await new Promise((r) => setTimeout(r, 1000));
    const title = await page.title();
    // Homepage's own correct title matches homepageTitle — bail after 1s.
    if (route === "/" || title !== homepageTitle) break;
    attempts++;
  }

  const html = await page.content();
  await page.close();
  return html;
}

function outputPathForRoute(route) {
  if (route === "/") return path.join(distRoot, "index.html");
  if (route === "/404") return path.join(distRoot, "404.html");
  return path.join(distRoot, route.replace(/^\//, ""), "index.html");
}

// ─── Main ────────────────────────────────────────────────────────────
const startTime = Date.now();
const { server, port } = await startServer();
const baseUrl = `http://127.0.0.1:${port}`;
console.log(`[prerender-spa] static server on :${port}`);

const puppeteer = (await import("puppeteer-core")).default;
const browserConfig = await getBrowserConfig();
console.log(`[prerender-spa] launching Chromium: ${browserConfig.executablePath}`);
const browser = await puppeteer.launch(browserConfig);

const routes = [...getAllRoutes(), "/404"];
console.log(`[prerender-spa] rendering ${routes.length} routes…`);

const failures = [];
let rendered = 0;

// Render with bounded concurrency. 2 = good balance of speed + Helmet
// rAF settling reliability. Concurrency 4 occasionally raced.
const concurrency = 2;
let nextRouteIdx = 0;

async function worker() {
  while (nextRouteIdx < routes.length) {
    const route = routes[nextRouteIdx++];
    try {
      const html = await renderRoute(browser, baseUrl, route);
      const outPath = outputPathForRoute(route);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, "utf8");
      rendered++;
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1].slice(0, 60) : "(no title)";
      console.log(`  ✓ ${route} → ${title}`);
    } catch (e) {
      failures.push({ route, error: e.message });
      console.error(`  ✗ ${route}: ${e.message}`);
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

await browser.close();
server.close();

const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(
  `[prerender-spa] done in ${elapsed}s — ${rendered} ok, ${failures.length} failed`,
);

if (failures.length > 0) {
  console.error("[prerender-spa] failures:", failures);
  process.exit(1);
}
