import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon','.pdf':'application/pdf','.webmanifest':'application/manifest+json' };
createServer(async (request,response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    const path = decodeURIComponent(url.pathname);
    // Do not expose Git, source content, or the locally excluded handoff.
    if (path.split('/').some(x=>x.startsWith('.')) || /^\/(src|scripts|codex-handoff)(\/|$)/.test(path)) throw new Error('private');
    let file = resolve(root, '.'+path);
    if (file !== resolve(root) && !file.startsWith(root.endsWith(sep)?root:root+sep)) throw new Error('path');
    if ((await stat(file)).isDirectory()) file = resolve(file,'index.html');
    const bytes = await readFile(file);
    const headers = { 'Content-Type':types[extname(file)]||'application/octet-stream', 'Cache-Control':'no-store' };
    // Local QA only: exercise graceful failure with every script blocked.
    if (url.searchParams.get('qa') === 'no-js') headers['Content-Security-Policy'] = "script-src 'none'";
    response.writeHead(200, headers);
    response.end(bytes);
  } catch { response.writeHead(404, {'Content-Type':'text/plain'}); response.end('Not found'); }
}).listen(8765,'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:8765'));
