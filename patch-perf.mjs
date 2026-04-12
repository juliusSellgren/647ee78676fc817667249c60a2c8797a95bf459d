import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Async Google Fonts snippet — replaces the blocking <link> tag
const FONTS_ASYNC = `  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600;700&display=swap" /></noscript>`;

// Also handle the 300;400;600 variant (no 700)
const FONTS_ASYNC_SHORT = `  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;600&display=swap" /></noscript>`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const before = content;

  // Replace blocking Google Fonts link (with 700 weight)
  content = content.replace(
    /\s*<link\s[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=Roboto\+Slab:wght@300;400;600;700[^"]*"[^>]*rel="stylesheet"[^>]*\/?>|<link\s[^>]*rel="stylesheet"[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=Roboto\+Slab:wght@300;400;600;700[^"]*"[^>]*\/?>/g,
    '\n' + FONTS_ASYNC
  );

  // Replace blocking Google Fonts link (without 700 weight)
  content = content.replace(
    /\s*<link\s[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=Roboto\+Slab:wght@300;400;600[^";]*"[^>]*rel="stylesheet"[^>]*\/?>|<link\s[^>]*rel="stylesheet"[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=Roboto\+Slab:wght@300;400;600[^";]*"[^>]*\/?>/g,
    '\n' + FONTS_ASYNC_SHORT
  );

  // Switch style.css → style.min.css
  content = content.replace(/href="style\.css"/g, 'href="style.min.css"');
  content = content.replace(/href="\/style\.css"/g, 'href="/style.min.css"');

  if (content !== before) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

function walk(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', '.git', 'temporary screenshots', 'Assets'].includes(entry.name)) {
      count += walk(full);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (processFile(full)) {
        console.log('Updated:', path.relative(__dirname, full));
        count++;
      }
    }
  }
  return count;
}

const n = walk(__dirname);
console.log(`\nDone — updated ${n} files.`);
