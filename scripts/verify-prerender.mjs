// Postbuild guard. Asserts every route in scripts/lib/routes.mjs has a
// prerendered HTML file with a non-empty <title>, a self-canonical <link>,
// and JSON-LD blocks that all parse as JSON. Exits 1 on any failure so the
// build fails loudly when prerender silently regresses.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL, getAllRoutes } from "./lib/routes.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const distRoot = path.join(repoRoot, "dist");

// Skip cleanly when prerender wasn't run (Vercel/Netlify default build path).
// Heuristic: a non-homepage route's HTML existing means prerender ran.
const sentinelPath = path.join(distRoot, "about", "index.html");
if (!fs.existsSync(sentinelPath)) {
  console.log(
    "verify-prerender: skipping — prerender did not run (no dist/about/index.html). Set ENABLE_PRERENDER=1 to enable.",
  );
  process.exit(0);
}

const failures = [];
const fail = (route, msg) => failures.push(`${route}: ${msg}`);

function fileForRoute(route) {
  if (route === "/") return path.join(distRoot, "index.html");
  return path.join(distRoot, route.replace(/^\//, ""), "index.html");
}

function checkRoute(route, htmlPath) {
  if (!fs.existsSync(htmlPath)) {
    fail(route, `missing ${path.relative(repoRoot, htmlPath)}`);
    return;
  }
  const html = fs.readFileSync(htmlPath, "utf8");

  // Title — must exist and be non-empty.
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    fail(route, "missing or empty <title>");
  }

  // Canonical — react-helmet-async marks its tags with data-rh="true".
  // Prefer that one; if absent, accept any rel="canonical" link.
  const helmetCanonical = html.match(
    /<link[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*data-rh="true"/,
  );
  const anyCanonical = html.match(
    /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/,
  );
  const canonical = helmetCanonical?.[1] ?? anyCanonical?.[1];
  if (!canonical) {
    fail(route, "no canonical link");
  } else {
    const expected = `${SITE_URL}${route === "/" ? "/" : route}`;
    if (canonical !== expected) {
      fail(route, `canonical mismatch: got "${canonical}", expected "${expected}"`);
    }
  }

  // JSON-LD blocks — every block must parse.
  const blocks = [
    ...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ];
  if (blocks.length === 0) {
    fail(route, "no JSON-LD blocks");
  }
  for (const [i, m] of blocks.entries()) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      fail(route, `JSON-LD block ${i} invalid: ${e.message}`);
    }
  }

  // ErrorBoundary fallback check — pages that hit ErrorBoundary during
  // prerender ship the "Something went wrong" string and almost no real
  // content. That's a build-time bug we want to fail on.
  if (html.includes("Something went wrong</h1>")) {
    fail(route, "page rendered ErrorBoundary fallback");
  }
}

const routes = getAllRoutes();
for (const r of routes) {
  checkRoute(r, fileForRoute(r));
}

// /404 is also prerendered; vite.config.ts postProcess writes it to
// dist/404.html instead of dist/404/index.html.
checkRoute("/404", path.join(distRoot, "404.html"));

if (failures.length > 0) {
  console.error(`\nverify-prerender: ${failures.length} failure(s)\n`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}

console.log(
  `verify-prerender: ${routes.length + 1} route(s) OK (title, canonical, JSON-LD)`,
);
