const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const QUALITY = 85;
const TARGET_DIRECTORIES = [
  'src/assets/blog',
  'public'
];

// Statistics
let totalFiles = 0;
let totalOriginalSize = 0;
let totalWebPSize = 0;
let conversions = [];

/**
 * Recursively find all PNG files in a directory
 */
function findPNGFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findPNGFiles(filePath, fileList);
    } else if (file.endsWith('.png')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Convert a single PNG to WebP
 */
async function convertPNGToWebP(pngPath) {
  try {
    const webpPath = pngPath.replace('.png', '.webp');
    const originalStats = fs.statSync(pngPath);
    const originalSize = originalStats.size;

    // Skip if WebP already exists and is newer
    if (fs.existsSync(webpPath)) {
      const webpStats = fs.statSync(webpPath);
      if (webpStats.mtime > originalStats.mtime) {
        console.log(`⏭️  Skipped (WebP newer): ${pngPath}`);
        return null;
      }
    }

    // Convert to WebP
    await sharp(pngPath)
      .webp({
        quality: QUALITY,
        method: 4,
        lossless: false
      })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSize = webpStats.size;
    const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

    conversions.push({
      png: pngPath,
      webp: webpPath,
      originalSize,
      webpSize,
      reduction
    });

    totalOriginalSize += originalSize;
    totalWebPSize += webpSize;
    totalFiles++;

    console.log(`✅ Converted: ${pngPath}`);
    console.log(`   ${formatBytes(originalSize)} → ${formatBytes(webpSize)} (${reduction}% smaller)`);
    console.log('');

    return webpPath;
  } catch (error) {
    console.error(`❌ Error converting ${pngPath}:`, error.message);
    return null;
  }
}

/**
 * Format bytes to human-readable format
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Main conversion process
 */
async function main() {
  console.log('🎨 PNG to WebP Converter');
  console.log('=' .repeat(50));
  console.log(`Quality: ${QUALITY}`);
  console.log(`Target directories: ${TARGET_DIRECTORIES.join(', ')}`);
  console.log('');

  // Find all PNG files
  console.log('🔍 Finding PNG files...');
  const pngFiles = [];
  TARGET_DIRECTORIES.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = findPNGFiles(dir);
      pngFiles.push(...files);
    }
  });

  console.log(`Found ${pngFiles.length} PNG files`);
  console.log('');

  // Convert each PNG
  console.log('🔄 Converting files...');
  console.log('');
  for (const pngFile of pngFiles) {
    // Skip unused files
    if (pngFile.includes('LOGO2.png') || pngFile.includes('Award.png')) {
      console.log(`⏭️  Skipped (unused): ${pngFile}`);
      console.log('');
      continue;
    }
    await convertPNGToWebP(pngFile);
  }

  // Print summary
  console.log('=' .repeat(50));
  console.log('📊 Conversion Summary');
  console.log('=' .repeat(50));
  console.log(`Total files converted: ${totalFiles}`);
  console.log(`Total original size: ${formatBytes(totalOriginalSize)}`);
  console.log(`Total WebP size: ${formatBytes(totalWebPSize)}`);

  if (totalOriginalSize > 0) {
    const totalReduction = ((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(1);
    const savedSpace = totalOriginalSize - totalWebPSize;
    console.log(`Total space saved: ${formatBytes(savedSpace)} (${totalReduction}%)`);
  }

  console.log('');
  console.log('✨ Conversion complete!');
  console.log('');
  console.log('📝 Next steps:');
  console.log('   1. Update code references from .png to .webp');
  console.log('   2. Test your application: npm run dev');
  console.log('   3. Run build: npm run build');
  console.log('   4. Delete original PNG files after verification');
}

// Run the conversion
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
