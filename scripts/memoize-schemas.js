import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/pages/blog');

// Get all TypeScript files
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

console.log(`Found ${files.length} blog files to process...`);

let updatedCount = 0;
let skippedCount = 0;

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has useMemo import
  if (content.includes("import { useMemo }")) {
    console.log(`✓ ${file} - already has useMemo`);
    skippedCount++;
    return;
  }

  // Check if file has schema generation
  if (!content.includes('generateArticleSchema') && !content.includes('generateBreadcrumbSchema')) {
    console.log(`⊘ ${file} - no schema generation found`);
    skippedCount++;
    return;
  }

  let modified = false;

  // 1. Add useMemo import
  if (content.includes('from "react"') || content.includes("from 'react'")) {
    // Add to existing react import
    content = content.replace(
      /(import\s*{[^}]*})\s+from\s+(['"])react\2/,
      "$1, useMemo } from $2react$2"
    );
    modified = true;
  } else if (content.match(/^import\s+.*from\s+['"]react['"]/m)) {
    // Add new import for useMemo
    content = content.replace(
      /import\s+(\w+)\s+from\s+(['"])react\2/,
      "import { useMemo } from $2react$2\nimport $1 from $2react$2"
    );
    modified = true;
  } else {
    // Add new useMemo import at the top
    const firstImportIndex = content.indexOf('import');
    const firstImportEnd = content.indexOf('\n', firstImportIndex);
    content = content.slice(0, firstImportEnd) + '\nimport { useMemo } from "react";' + content.slice(firstImportEnd);
    modified = true;
  }

  // 2. Wrap generateArticleSchema calls
  const articleSchemaPattern = /const articleSchema = generateArticleSchema\(([\s\S]*?)\);/g;
  content = content.replace(articleSchemaPattern, (match, schemaContent) => {
    modified = true;
    return `const articleSchema = useMemo(() => generateArticleSchema(${schemaContent}), []);`;
  });

  // 3. Wrap generateBreadcrumbSchema calls
  const breadcrumbSchemaPattern = /const breadcrumbSchema = generateBreadcrumbSchema\(([\s\S]*?)\);/g;
  content = content.replace(breadcrumbSchemaPattern, (match, schemaContent) => {
    modified = true;
    return `const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema(${schemaContent}), []);`;
  });

  // 4. Wrap generateRestaurantSchema calls (if present)
  const restaurantSchemaPattern = /const restaurantSchema = generateRestaurantSchema\(\);/g;
  content = content.replace(restaurantSchemaPattern, () => {
    modified = true;
    return 'const restaurantSchema = useMemo(() => generateRestaurantSchema(), []);';
  });

  // 5. Wrap generateLodgingReservationSchema calls (if present)
  const lodgingSchemaPattern = /const lodgingSchema = generateLodgingReservationSchema\(([\s\S]*?)\);/g;
  content = content.replace(lodgingSchemaPattern, (match, schemaContent) => {
    modified = true;
    return `const lodgingSchema = useMemo(() => generateLodgingReservationSchema(${schemaContent}), []);`;
  });

  // 6. Wrap generateFAQPageSchema calls (if present)
  const faqSchemaPattern = /const faqPageSchema = generateFAQPageSchema\(([\s\S]*?)\);/g;
  content = content.replace(faqSchemaPattern, (match, schemaContent) => {
    modified = true;
    return `const faqPageSchema = useMemo(() => generateFAQPageSchema(${schemaContent}), []);`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${file}`);
    updatedCount++;
  } else {
    console.log(`- Skipped: ${file} (no changes needed)`);
    skippedCount++;
  }
});

console.log(`\n=== Summary ===`);
console.log(`Updated: ${updatedCount} files`);
console.log(`Skipped: ${skippedCount} files`);
console.log(`Total: ${files.length} files`);
