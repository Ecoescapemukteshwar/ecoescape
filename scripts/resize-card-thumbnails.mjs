// One-shot resizer for "card thumbnail" images flagged by PageSpeed as
// larger than their displayed dimensions. The general optimize-images.mjs
// caps width at 1600 px (suitable for hero/full-bleed images), but room
// cards, the logo, and gallery thumbnails render far smaller and don't
// benefit from that ceiling.
//
// Run via:  node scripts/resize-card-thumbnails.mjs
//      or:  node scripts/resize-card-thumbnails.mjs --dry-run

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const dryRun = process.argv.includes("--dry-run");

// Display dimension on retina = CSS px * 2. PageSpeed report shows
// largest displayed dimensions per file; targets are 2x of that, rounded
// to a sane stop. Quality is per-file because logos tolerate higher
// compression than photographic content.
const targets = [
  { file: "src/assets/room-deluxe.webp",  width: 800, quality: 76 },
  { file: "src/assets/room-family.webp",  width: 800, quality: 76 },
  { file: "src/assets/suite/IMG_4065.webp", width: 800, quality: 76 },
  { file: "src/assets/suite/img123.webp", width: 800, quality: 76 },
  { file: "src/assets/hero-sunrise.webp", width: 1920, quality: 70 },
  { file: "public/LOGO.webp",  width: 350, quality: 82 },
  { file: "public/LOGO2.webp", width: 350, quality: 82 },
];

let totalBefore = 0;
let totalAfter = 0;

for (const { file, width, quality } of targets) {
  const fp = path.join(repoRoot, file);
  if (!fs.existsSync(fp)) {
    console.log(`  ! missing: ${file}`);
    continue;
  }
  const sizeBefore = fs.statSync(fp).size;
  totalBefore += sizeBefore;
  const meta = await sharp(fp).metadata();

  if (dryRun) {
    console.log(`  WOULD: ${file}  ${meta.width}x${meta.height}, ${(sizeBefore / 1024).toFixed(0)} KB → width ${width}, q${quality}`);
    totalAfter += sizeBefore;
    continue;
  }

  const buf = await sharp(fp)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();

  fs.writeFileSync(fp, buf);
  const sizeAfter = buf.byteLength;
  totalAfter += sizeAfter;
  const reduction = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
  console.log(`  ${file}  ${meta.width}x${meta.height} ${(sizeBefore / 1024).toFixed(0)} KB → width ${width}, ${(sizeAfter / 1024).toFixed(0)} KB  (-${reduction}%)`);
}

console.log(
  `\n  total: ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(0)} KB  (saved ${((totalBefore - totalAfter) / 1024).toFixed(0)} KB)`,
);
