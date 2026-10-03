import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { site } from '../src/site.mjs';
import { base } from '../src/partials/shell.mjs';
import { homepage } from '../src/templates/home.mjs';
import { readSections } from './content.mjs';
import { ideasPage } from '../src/templates/ideas.mjs';
import { articlePage } from '../src/templates/article.mjs';
import { footer } from '../src/partials/footer.mjs';
import { articles } from '../src/articles.mjs';
import { transparencyPage } from '../src/templates/transparency.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
// The build never enumerates or deletes public files. Every write is allowlisted.
export const owned = ['index.html', 'assets/site.css', 'assets/site.js', 'assets/reading.css', 'ideas/index.html', 'transparency/index.html', 'sitemap.xml', ...articles.map(a=>'ideas/'+a.slug+'/index.html')];
const read = path => readFile(resolve(root, path), 'utf8');
async function output(path, value) {
  if (!owned.includes(path)) throw new Error(`Unowned build output: ${path}`);
  await mkdir(dirname(resolve(root,path)), { recursive: true });
  await writeFile(resolve(root,path), value);
}
const css = await read('src/styles.css');
const readingCss = await read('src/reading.css');
await output('assets/site.css', css);
await output('assets/reading.css', readingCss);
if (!process.argv.includes('--css')) {
  const js = await read('src/site.js');
  const theme = (await read('src/theme-init.js')).replace(/^\/\/.*\n/gm, '').trim();
  const content = readSections(await read('src/content/homepage.md'));
  const hash = text => createHash('sha256').update(text).digest('hex').slice(0,12);
  const home = homepage(content,site);
  await output('assets/site.js',js);
  const shared={site,theme,cssHash:hash(css),jsHash:hash(js)};
  await output('index.html',base({...shared,...home}));
  const readingShared={...shared,footer:footer(content,site),readingCssHash:hash(readingCss)};
  const ideas={path:'/ideas/',title:'Ideas | Makex India',description:'Explore Makex ideas and experiments across local commerce, learning, human-agent collaboration, shared mobility, personalized fabrication, accessible AI and the systems underneath.'};
  await output('ideas/index.html',base({...readingShared,page:ideas,body:ideasPage(await read('src/content/ideas-overview.md'),articles)}));
  const transparency={path:'/transparency/',title:'Legal & Transparency | Makex India',description:'About Makex India as a family-led technology initiative, with registration details and contact information.'};
  await output('transparency/index.html',base({...readingShared,page:transparency,body:transparencyPage(await read('src/content/transparency.md'))}));
  for(const config of articles) {
    const {body,article}=articlePage(await read('src/content/articles/'+config.slug+'.md'),config);
    await output('ideas/'+config.slug+'/index.html',base({...readingShared,body,page:{...config,article,socialTitle:article.title+' | Makex India'}}));
  }
  await output('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['/','/ideas/','/transparency/',...articles.map(a=>a.path)].map(path=>`  <url><loc>${site.origin+path}</loc></url>`).join('\n')}\n</urlset>\n`);
}
console.log(process.argv.includes('--css') ? 'Built assets/site.css, assets/reading.css' : `Built ${owned.join(', ')}`);
