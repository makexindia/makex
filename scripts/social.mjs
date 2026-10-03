// Optional social artwork source generator; not required by the normal build.
// Rasterize the committed SVG at 1200 x 630 to refresh makex-og.png.
import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const logo = await readFile(new URL('Makex_green.svg',root),'utf8');
const vector = logo.slice(logo.indexOf('<g'),logo.lastIndexOf('</svg>'));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#f8faf9"/>
<g stroke="#c6d8cc" fill="none" stroke-width="1.4"><path d="M990 660C990 510 1070 400 1180 360M910 660C910 490 920 300 1160 160M1060 450C980 340 1020 250 1000 100"/></g>
<svg x="62" y="52" width="72" height="75" viewBox="-45 -45 546 563">${vector}</svg>
<g font-family="Segoe UI, Arial, sans-serif" fill="#17251e"><text x="153" y="100" font-size="30" font-weight="700" letter-spacing="3">MAKEX INDIA</text>
<text x="70" y="238" font-size="65" font-weight="650" letter-spacing="-2">Technology for things</text><text x="70" y="318" font-size="65" font-weight="650" letter-spacing="-2">that should work better.</text>
<text x="73" y="395" font-size="23" fill="#52665b">A family-led technology initiative.</text>
<path d="M73 486H1127" stroke="#d7e1da"/>
<text x="73" y="545" font-size="17" letter-spacing="2" fill="#08754e">BUILD · EXPLORE · ENABLE</text><text x="1127" y="545" text-anchor="end" font-size="20">makex.in</text></g></svg>`;
await writeFile(new URL('assets/social/makex-og.svg',root),svg);
console.log('Wrote assets/social/makex-og.svg');
