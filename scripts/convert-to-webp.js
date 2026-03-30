import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const MAX_WIDTH = 1400;
const WEBP_QUALITY = 80;
const FORCE = process.argv.includes('--force');

function findJpgFiles(dir) {
  const results = [];
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const fullPath = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && /\.(jpe?g)$/i.test(entry.name)) {
        results.push(fullPath);
      }
    }
  }
  walk(dir);
  return results;
}

async function convertFile(jpgPath) {
  const webpPath = jpgPath.replace(/\.(jpe?g)$/i, '.webp');

  if (!FORCE && fs.existsSync(webpPath)) {
    const jpgStat = fs.statSync(jpgPath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs >= jpgStat.mtimeMs) {
      return { status: 'skipped', file: path.relative(ASSETS_DIR, jpgPath) };
    }
  }

  const originalSize = fs.statSync(jpgPath).size;

  await sharp(jpgPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpPath);

  const newSize = fs.statSync(webpPath).size;
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

  return {
    status: 'converted',
    file: path.relative(ASSETS_DIR, jpgPath),
    originalKB: (originalSize / 1024).toFixed(0),
    newKB: (newSize / 1024).toFixed(0),
    savings,
  };
}

function printSummary(results) {
  const converted = results.filter(r => r.status === 'converted');
  const skipped = results.filter(r => r.status === 'skipped');
  const errors = results.filter(r => r.status === 'error');

  console.log('\n=== Conversion Summary ===\n');

  if (converted.length > 0) {
    console.log(
      'File'.padEnd(55) +
      'Original'.padStart(10) +
      'New'.padStart(10) +
      'Savings'.padStart(10)
    );
    console.log('-'.repeat(85));
    for (const r of converted) {
      console.log(
        r.file.padEnd(55) +
        (r.originalKB + ' KB').padStart(10) +
        (r.newKB + ' KB').padStart(10) +
        (r.savings + '%').padStart(10)
      );
    }
  }

  console.log(`\nConverted: ${converted.length} | Skipped: ${skipped.length} | Errors: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\nErrors:');
    for (const e of errors) {
      console.log(`  ${e.file}: ${e.error}`);
    }
  }
}

async function main() {
  console.log('Scanning for JPG files in:', ASSETS_DIR);
  console.log(FORCE ? 'Force mode: converting all files\n' : '');

  const jpgFiles = findJpgFiles(ASSETS_DIR);
  console.log(`Found ${jpgFiles.length} JPG files\n`);

  const results = [];

  for (const jpgPath of jpgFiles) {
    try {
      const result = await convertFile(jpgPath);
      results.push(result);
      if (result.status === 'converted') {
        console.log(`  [OK] ${result.file} (${result.originalKB}KB -> ${result.newKB}KB, -${result.savings}%)`);
      } else {
        console.log(`  [--] ${result.file} (up to date, skipped)`);
      }
    } catch (err) {
      const rel = path.relative(ASSETS_DIR, jpgPath);
      results.push({ status: 'error', file: rel, error: err.message });
      console.error(`  [ERR] ${rel}: ${err.message}`);
    }
  }

  printSummary(results);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
