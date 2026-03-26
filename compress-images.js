import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Images to compress - create optimized versions
const images = [
  {
    src: './src/assets/activites/img1.webp',
    output: './src/assets/activites/img1-opt.webp',
    width: 1200,
    height: 800,
    quality: 70
  },
  {
    src: './src/assets/garden-terrace.webp',
    output: './src/assets/garden-terrace-opt.webp',
    width: 1400,
    height: 900,
    quality: 70
  },
  {
    src: './src/assets/view/IMG_0754.webp',
    output: './src/assets/view/IMG_0754-opt.webp',
    width: 1400,
    height: 900,
    quality: 70
  },
  {
    src: './src/assets/terrace/IMG_2926.webp',
    output: './src/assets/terrace/IMG_2926-opt.webp',
    width: 1200,
    height: 800,
    quality: 70
  },
  {
    src: './src/assets/activites/IMG_2495.webp',
    output: './src/assets/activites/IMG_2495-opt.webp',
    width: 1200,
    height: 800,
    quality: 70
  }
];

async function compressImage(config) {
  try {
    const stats = fs.statSync(config.src);
    const originalSize = stats.size;

    await sharp(config.src)
      .resize(config.width, config.height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: config.quality })
      .toFile(config.output);

    const newStats = fs.statSync(config.output);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${path.basename(config.src)}`);
    console.log(`   Before: ${(originalSize / 1024).toFixed(0)}KB`);
    console.log(`   After:  ${(newSize / 1024).toFixed(0)}KB (-${savings}%)`);
    console.log(`   Output: ${config.output}\n`);

    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`❌ Error compressing ${config.src}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🎨 Compressing images for better mobile performance...\n');

  let totalOriginal = 0;
  let totalNew = 0;

  for (const image of images) {
    const result = await compressImage(image);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
    }
  }

  const totalSavings = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

  console.log('📊 Summary:');
  console.log(`   Total before: ${(totalOriginal / 1024).toFixed(0)}KB`);
  console.log(`   Total after:  ${(totalNew / 1024).toFixed(0)}KB`);
  console.log(`   Saved:        ${((totalOriginal - totalNew) / 1024).toFixed(0)}KB (-${totalSavings}%)`);

  console.log('\n📝 Next steps:');
  console.log('   1. Review the optimized images (*-opt.webp)');
  console.log('   2. Update imports in component files to use -opt versions');
  console.log('   3. Run npm run build to update dist');
  console.log('   4. Commit the optimized images');
}

main();
