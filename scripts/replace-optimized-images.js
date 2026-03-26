import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Images that were compressed (from previous script output)
const compressedImages = [
  { original: 'src/assets/terrace/IMG_1459.webp', optimized: 'src/assets/terrace/IMG_1459-opt.webp' },
  { original: 'src/assets/two_bed_room_apartment/IMG_1597.webp', optimized: 'src/assets/two_bed_room_apartment/IMG_1597-opt.webp' },
  { original: 'src/assets/terrace/IMG_2495.webp', optimized: 'src/assets/terrace/IMG_2495-opt.webp' },
  { original: 'src/assets/activites/IMG_3113_2.webp', optimized: 'src/assets/activites/IMG_3113_2-opt.webp' },
  { original: 'src/assets/suite/IMG_3599.webp', optimized: 'src/assets/suite/IMG_3599-opt.webp' },
  { original: 'src/assets/food/IMG_9939.webp', optimized: 'src/assets/food/IMG_9939-opt.webp' },
];

async function replaceWithOptimized() {
  console.log('Replacing original images with optimized versions...\n');

  for (const { original, optimized } of compressedImages) {
    const originalPath = path.join(__dirname, '..', original);
    const optimizedPath = path.join(__dirname, '..', optimized);

    if (!fs.existsSync(optimizedPath)) {
      console.log(`✗ Skipped: ${original} (optimized file not found)`);
      continue;
    }

    try {
      // Backup original just in case
      const backupPath = originalPath + '.bak';
      if (fs.existsSync(originalPath)) {
        fs.renameSync(originalPath, backupPath);
      }

      // Move optimized to original
      fs.renameSync(optimizedPath, originalPath);

      // Get file sizes
      const originalSize = fs.statSync(originalPath).size;
      const backupSize = fs.existsSync(backupPath) ? fs.statSync(backupPath).size : 0;
      const savings = backupSize > 0 ? ((1 - originalSize / backupSize) * 100).toFixed(0) : 0;

      console.log(`✓ Replaced: ${original}`);
      console.log(`  Size: ${(backupSize / 1024).toFixed(0)}KB → ${(originalSize / 1024).toFixed(0)}KB (${savings}% reduction)`);

      // Remove backup if satisfied
      if (fs.existsSync(backupPath)) {
        fs.unlinkSync(backupPath);
      }
    } catch (error) {
      console.error(`✗ Error replacing ${original}: ${error.message}`);
    }
  }

  console.log('\n✓ All images replaced successfully!');
  console.log('\nNext steps:');
  console.log('1. Run "npm run build" to verify the changes');
  console.log('2. Check that all images still look good');
  console.log('3. Commit the optimized images');
}

replaceWithOptimized().catch(console.error);
