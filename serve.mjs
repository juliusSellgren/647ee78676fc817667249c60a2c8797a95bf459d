import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  // Try the exact path first, then [path]/index.html for clean URLs
  const candidates = [
    path.join(__dirname, urlPath),
    path.join(__dirname, urlPath, 'index.html'),
    path.join(__dirname, urlPath.replace(/\/$/, ''), 'index.html'),
  ];

  const tryNext = (i) => {
    if (i >= candidates.length) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    fs.readFile(candidates[i], (err, data) => {
      if (err) { tryNext(i + 1); return; }
      const ext = path.extname(candidates[i]) || '.html';
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/html' });
      res.end(data);
    });
  };

  tryNext(0);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
