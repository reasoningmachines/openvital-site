import http from 'node:http';
import { readFile } from 'node:fs/promises';
const assets = new Map([['/', ['index.html', 'text/html; charset=utf-8']], ['/index.html', ['index.html', 'text/html; charset=utf-8']], ['/styles.css', ['styles.css', 'text/css; charset=utf-8']], ['/favicon.svg', ['favicon.svg', 'image/svg+xml']]]);
const server = http.createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
  const asset = assets.get(new URL(request.url, 'http://localhost').pathname);
  if (!asset) { response.writeHead(404); response.end('Not found'); return; }
  try {
    const body = await readFile(new URL(`../dist/${asset[0]}`, import.meta.url));
    response.writeHead(200, { 'Content-Type': asset[1], 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store', 'Content-Security-Policy': "default-src 'self'; style-src 'self'; img-src 'self'; script-src 'none'; connect-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'" });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(503); response.end('Run npm run build first.'); }
});
server.listen(4174, '127.0.0.1', () => console.log('OpenVital preview: http://127.0.0.1:4174'));
