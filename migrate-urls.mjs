import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname;

// Files to convert — everything except index.html
const htmlFiles = fs.readdirSync(rootDir)
  .filter(f => f.endsWith('.html') && f !== 'index.html');

// Build link replacement map: old → new
const linkMap = {};
for (const file of htmlFiles) {
  const base = file.replace('.html', '');
  linkMap[file] = `/${base}`;
}

// Replace internal .html links and fix hash anchors
function fixLinks(content) {
  for (const [from, to] of Object.entries(linkMap)) {
    // href="page.html" → href="/page"
    content = content.replaceAll(`href="${from}"`, `href="${to}"`);
    // href="page.html#section" → href="/page#section"
    content = content.replaceAll(`href="${from}#`, `href="${to}#`);
  }
  return content;
}

// Convert relative asset paths to absolute (needed for files in subdirs)
function fixAssets(content) {
  // href="..." — skip absolute, mailto:, tel:, #, data:
  content = content.replace(
    /href="(?!https?:|\/|#|mailto:|tel:|data:)([^"]+)"/g,
    'href="/$1"'
  );
  // src="..." — skip absolute and data:
  content = content.replace(
    /src="(?!https?:|\/|data:)([^"]+)"/g,
    'src="/$1"'
  );
  return content;
}

// 1. Update index.html links only (it stays at root, assets already relative-correct)
let indexContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
indexContent = fixLinks(indexContent);
fs.writeFileSync(path.join(rootDir, 'index.html'), indexContent);
console.log('Updated index.html links');

// 2. Move each page into its own directory
for (const file of htmlFiles) {
  const base = file.replace('.html', '');
  const dirPath = path.join(rootDir, base);

  let content = fs.readFileSync(path.join(rootDir, file), 'utf-8');
  content = fixLinks(content);
  content = fixAssets(content);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(path.join(dirPath, 'index.html'), content);
  fs.unlinkSync(path.join(rootDir, file));
  console.log(`  ${file} → ${base}/index.html`);
}

console.log('\nDone! All pages are now clean URLs.');
