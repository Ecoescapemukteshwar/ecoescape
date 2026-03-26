import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of large images from build output
const largeImages = [
  'img2-juk6B-tF.webp',  // 324K
  'IMG_1459-auJK0aiO.webp',  // 418K
  'IMG_1597-DeHNKbbl.webp',  // 313K
  'IMG_1603-fdtB-3Mg.webp',  // 402K
  'IMG_2495-CtboQC5M.webp',  // 434K
  'IMG_3113_2-CMavQVww.webp', // 312K
  'IMG_3599-D4X_2LuG.webp',  // 338K
  'IMG_9939-Dmjs_Yrn.webp',  // 404K
];

// Search directories for source images
const searchPaths = [
  path.join(__dirname, '../src/assets'),
  path.join(__dirname, '../public'),
];

async function findAndCompressImages() {
  console.log('Searching for large images to compress...\n');

  for (const imageName of largeImages) {
    // Extract original name (remove hash)
    const originalName = imageName.replace(/-[^-]+\.webp$/, '.webp').replace(/-[^-]+\.jpg$/, '.jpg');

    // Try to find in various directories
    for (const searchPath of searchPaths) {
      const foundFiles = [];

      // Search recursively
      function searchDir(dir) {
        if (!fs.existsSync(dir)) return;

        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);

          if (entry.isDirectory()) {
            searchDir(fullPath);
          } else if (entry.isFile()) {
            // Check if this file matches (either original or hashed name)
            if (entry.name === imageName || entry.name === originalName) {
              foundFiles.push(fullPath);
            }
          }
        }
      }

      searchDir(searchPath);

      if (foundFiles.length > 0) {
        for (const filePath of foundFiles) {
          try {
            const stats = fs.statSync(filePath);
            const sizeKB = (stats.size / 1024).toFixed(0);

            console.log(`Found: ${path.basename(filePath)} (${sizeKB}KB)`);
            console.log(`  Path: ${filePath}`);

            // Only process if over 250KB (to avoid re-compressing)
            if (stats.size > 250000) {
              // Create output path with -opt suffix
              const outputPath = filePath.replace(/(\.(webp|jpg|jpeg))$/, '-opt$1');

              console.log(`  Compressing to: ${path.basename(outputPath)}`);

              // Get image dimensions
              const metadata = await sharp(filePath).metadata();
              console.log(`  Original: ${metadata.width}x${metadata.height}`);

              // Calculate new dimensions if needed
              let width = metadata.width;
              let height = metadata.height;

              // Resize if larger than 1920px wide
              if (width > 1920) {
                const ratio = 1920 / width;
                width = 1920;
                height = Math.round(height * ratio);
                console.log(`  Resizing to: ${width}x${height}`);
              }

              // Compress with lower quality
              await sharp(filePath)
                .resize(width, height, { fit: 'inside', withoutEnlargement: true })
                .webp({ quality: 70, effort: 6 })  // Lower quality, higher compression effort
                .toFile(outputPath);

              const newStats = fs.statSync(outputPath);
              const newSizeKB = (newStats.size / 1024).toFixed(0);
              const savings = ((1 - newStats.size / stats.size) * 100).toFixed(0);

              console.log(`  ✓ Compressed: ${sizeKB}KB → ${newSizeKB}KB (${savings}% reduction)`);
              console.log(`  Replace manually: del "${filePath}" && ren "${outputPath}" "${filePath}"\n`);
            } else {
              console.log(`  Already optimized (under 250KB)\n`);
            }
          } catch (error) {
            console.error(`  ✗ Error: ${error.message}\n`);
          }
        }
        break; // Found in this search path, move to next image
      }
    }
  }

  console.log('\nDone! Review the -opt files and replace manually if satisfied.');
  console.log('Make sure to update any imports in your code after replacing.');
}

findAndCompressImages().catch(console.error);
