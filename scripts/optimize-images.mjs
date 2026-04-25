// One-shot image-size optimizer. Resizes WebP files in src/assets/ and
// public/ that are over a threshold size or wider than the cap. Re-encodes
// in place at quality 78. Skips small images and SVG/icon-class files.
//
// Run via:  node scripts/optimize-images.mjs
//      or:  node scripts/optimize-images.mjs --dry-run
//
// Why: Lighthouse measured 43 MB total page payload on mobile homepage.
// Many WebPs ship at full camera resolution (4032x3024+, 2-10 MB each).
// Display dimensions are ≤1600 px wide on every viewport we render at, so
// the extra resolution is pure waste.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");

const MAX_WIDTH = 1600;
const QUALITY = 78;
const SIZE_THRESHOLD = 500 * 1024; // skip files smaller than 500 KB
const ROOTS = ["src/assets", "public"];
const SKIP_PATH_FRAGMENTS = ["LOGO", "favicon", "icon-", "preview.webp", "Award"];

const dryRun = process.argv.includes("--dry-run");

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile() && /\.webp$/i.test(entry.name)) yield full;
  }
}

const candidates = [];
for (const root of ROOTS) {
  for (const fp of walk(path.join(repoRoot, root))) {
    if (SKIP_PATH_FRAGMENTS.some((s) => fp.includes(s))) continue;
    const stat = fs.statSync(fp);
    if (stat.size < SIZE_THRESHOLD) continue;
    candidates.push({ fp, size: stat.size });
  }
}

candidates.sort((a, b) => b.size - a.size);
console.log(`[optimize-images] ${candidates.length} candidates over ${SIZE_THRESHOLD / 1024} KB threshold`);

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;
let errors = 0;

for (const { fp, size } of candidates) {
  totalBefore += size;
  const rel = path.relative(repoRoot, fp);
  try {
    const meta = await sharp(fp).metadata();
    const needsResize = meta.width && meta.width > MAX_WIDTH;
    const needsRecompress = size > 800 * 1024;

    if (!needsResize && !needsRecompress) {
      skipped++;
      totalAfter += size;
      continue;
    }

    if (dryRun) {
      console.log(`  WOULD: ${rel}  ${meta.width}x${meta.height}, ${(size / 1024).toFixed(0)} KB`);
      processed++;
      // Estimate post-resize size — sharp's output is hard to predict precisely
      const ratio = needsResize ? Math.min(1, MAX_WIDTH / meta.width) : 1;
      totalAfter += Math.round(size * ratio * ratio * 0.75);
      continue;
    }

    const buf = await sharp(fp)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toBuffer();

    fs.writeFileSync(fp, buf);
    const newSize = buf.byteLength;
    totalAfter += newSize;
    processed++;
    const reduction = ((1 - newSize / size) * 100).toFixed(1);
    console.log(`  ${rel}  ${(size / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB  (-${reduction}%)`);
  } catch (e) {
    errors++;
    totalAfter += size;
    console.error(`  ! ${rel}: ${e.message}`);
  }
}

const savedKB = (totalBefore - totalAfter) / 1024;
const savedMB = savedKB / 1024;
console.log(
  `\n[optimize-images] processed ${processed}, skipped ${skipped}, errors ${errors}`,
);
console.log(
  `  ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB  (saved ${savedMB.toFixed(1)} MB)`,
);
