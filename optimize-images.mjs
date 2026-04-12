import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targets = [
  // Main images
  { src: 'images/hem2.png',              dest: 'images/hem2.webp',              width: 1920, quality: 82 },
  { src: 'images/hem.png',               dest: 'images/hem.webp',               width: 1920, quality: 82 },
  { src: 'images/rentParkingSpot.png',   dest: 'images/rentParkingSpot.webp',   width: 1200, quality: 82 },
  { src: 'images/varaparkeringar.png',   dest: 'images/varaparkeringar.webp',   width: 1200, quality: 82 },
  // Logos
  { src: 'images/logos/Balder.png',              dest: 'images/logos/Balder.webp',              width: 300, quality: 85 },
  { src: 'images/logos/fabege-svart-logotyp.png',dest: 'images/logos/fabege-svart-logotyp.webp',width: 300, quality: 85 },
  { src: 'images/logos/nacka-forum.png',         dest: 'images/logos/nacka-forum.webp',         width: 300, quality: 85 },
  { src: 'images/logos/newsec.png',              dest: 'images/logos/newsec.webp',              width: 300, quality: 85 },
  { src: 'images/logos/sollentuna-centrum.png',  dest: 'images/logos/sollentuna-centrum.webp',  width: 300, quality: 85 },
  { src: 'images/logos/storebrand.png',          dest: 'images/logos/storebrand.webp',          width: 300, quality: 85 },
  { src: 'images/logos/tumba-centrum.png',       dest: 'images/logos/tumba-centrum.webp',       width: 300, quality: 85 },
  { src: 'images/logos/vasby-centrum.png',       dest: 'images/logos/vasby-centrum.webp',       width: 300, quality: 85 },
];

let totalSaved = 0;

for (const t of targets) {
  const srcPath = path.join(__dirname, t.src);
  const destPath = path.join(__dirname, t.dest);
  if (!fs.existsSync(srcPath)) { console.log(`SKIP (not found): ${t.src}`); continue; }
  const before = fs.statSync(srcPath).size;
  await sharp(srcPath).resize({ width: t.width, withoutEnlargement: true }).webp({ quality: t.quality }).toFile(destPath);
  const after = fs.statSync(destPath).size;
  const saved = before - after;
  totalSaved += saved;
  console.log(`${t.src}: ${(before/1024).toFixed(0)} KiB → ${(after/1024).toFixed(0)} KiB  (saved ${(saved/1024).toFixed(0)} KiB)`);
}

console.log(`\nTotal saved: ${(totalSaved/1024).toFixed(0)} KiB`);
