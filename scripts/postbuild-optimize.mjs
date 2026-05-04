// Post-build HTML optimization. Runs after `vite build` to:
//   1. Inline critical CSS into every dist/*.html (and dist/**/index.html
//      from prerender) using beasties, eliminating the 220ms render-block
//      that Lighthouse flagged on the main stylesheet.
//   2. Inject <link rel=preload> tags for the two critical woff2 fonts
//      with their actual hashed filenames, so the browser can fetch
//      fonts in parallel with CSS instead of waiting for CSS to parse.
//
// Why post-build: the Vite output uses content-hashed filenames (e.g.
// dm-sans-latin-400-normal-CW0RaeGs.woff2) that aren't known at source
// time. Doing this here keeps source HTML clean and survives prerender.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Beasties from "beasties";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const distRoot = path.join(repoRoot, "dist");

if (!fs.existsSync(distRoot)) {
  console.log("[postbuild-optimize] dist/ not found — skipping");
  process.exit(0);
}

// ─── 1. Find hashed font filenames ───────────────────────────────────
// We only need the 400-weight regulars on first paint; 700 weights are
// loaded via CSS as usual (most above-the-fold copy uses 400).
const assetsDir = path.join(distRoot, "assets");
const assetFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];

function findFont(prefix) {
  const m = assetFiles.find((f) => f.startsWith(prefix) && f.endsWith(".woff2"));
  return m ? `/assets/${m}` : null;
}
const playfair400 = findFont("playfair-display-latin-400-normal-");
const dmSans400 = findFont("dm-sans-latin-400-normal-");

const fontPreloads = [playfair400, dmSans400]
  .filter(Boolean)
  .map((href) => `    <link rel="preload" as="font" type="font/woff2" crossorigin href="${href}">`)
  .join("\n");

// ─── 2. Walk dist for HTML files ─────────────────────────────────────
// stats.html is the rollup-plugin-visualizer bundle map — large, not
// user-facing, and can't be processed without errors. airbnb-photo-tour
// is a static gallery that ships its own styles. Skip both.
const SKIP_HTML = new Set(["stats.html", "airbnb-photo-tour.html"]);

function* walkHtml(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkHtml(full);
    else if (entry.isFile() && entry.name.endsWith(".html") && !SKIP_HTML.has(entry.name)) yield full;
  }
}

const htmlFiles = [...walkHtml(distRoot)];
console.log(`[postbuild-optimize] processing ${htmlFiles.length} HTML file(s)`);

// ─── 3. Beasties config ──────────────────────────────────────────────
// `external` is the safe default — it pulls only used selectors into
// inline <style> and defers the rest of the stylesheet via media=print
// swap. Logging is suppressed except for warnings.
const beasties = new Beasties({
  path: distRoot,
  publicPath: "/",
  preload: "swap-high",   // <link rel=stylesheet media=print> → onload swap to all
  inlineFonts: false,     // don't try to inline @font-face — we preload them
  preloadFonts: false,    // we add our own preloads below
  pruneSource: false,     // keep the original stylesheet file on disk
  reduceInlineStyles: false,
  mergeStylesheets: false,
  logLevel: "warn",
});

let totalProcessed = 0;
let totalErrors = 0;

for (const fp of htmlFiles) {
  const rel = path.relative(distRoot, fp);
  let html = fs.readFileSync(fp, "utf8");
  const before = html.length;

  try {
    html = await beasties.process(html);
  } catch (err) {
    console.warn(`[postbuild-optimize] beasties failed on ${rel}: ${err.message}`);
    totalErrors++;
    continue;
  }

  // Inject font preloads just before </head>. Idempotent: skip if a
  // preload for the same href already exists.
  if (fontPreloads && !html.includes("rel=\"preload\" as=\"font\"")) {
    html = html.replace("</head>", `${fontPreloads}\n  </head>`);
  }

  if (html.length !== before) {
    fs.writeFileSync(fp, html);
    totalProcessed++;
    console.log(`  ${rel}: ${before} → ${html.length} bytes`);
  }
}

console.log(
  `\n[postbuild-optimize] processed ${totalProcessed}/${htmlFiles.length} HTML files, ${totalErrors} error(s)`,
);
if (!playfair400 || !dmSans400) {
  console.warn("  ! one or more font files not found — preload tags incomplete");
}
