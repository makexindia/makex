import assert from 'node:assert/strict';
import { readFile, stat, readdir, cp, mkdtemp, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readSections, plain } from './content.mjs';
import { articles } from '../src/articles.mjs';
import { parseArticle } from '../src/templates/article.mjs';
const root = fileURLToPath(new URL('../',import.meta.url));
const read = path => readFile(resolve(root,path),'utf8');
const html = await read('index.html');
const slugs=['commerce-livelihoods','learning-capability','human-agent-collaboration','shared-capacity-mobility','personalized-physical-solutions','ai-within-reach','systems-for-useful-ai'];
assert.deepEqual(articles.map(a=>a.slug),slugs,'Approved article registry');
const pages=['index.html','ideas/index.html',...slugs.map(s=>`ideas/${s}/index.html`)];
for(const page of pages) {
const pageHtml=await read(page);
const ids = [...pageHtml.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML/SVG IDs');
assert.equal((pageHtml.match(/<h1\b/g)||[]).length,1,'Exactly one h1');
let level=0;
for (const match of pageHtml.matchAll(/<h([1-6])\b/g)) { const next=Number(match[1]); assert.ok(next<=level+1,'Heading level skip'); level=next; }
for (const match of pageHtml.matchAll(/(?:href|src)="([^"]+)"/g)) {
  const url = new URL(match[1], 'https://makex.in/'+page.replace(/index.html$/,''));
  if (url.origin !== 'https://makex.in') continue;
  let target=resolve(root,'.'+url.pathname);
  if((await stat(target)).isDirectory()) target=join(target,'index.html');
  assert.ok((await stat(target)).isFile(),`Missing target ${url.pathname}`);
  if(url.hash) assert.ok((await readFile(target,'utf8')).includes(`id="${url.hash.slice(1)}"`),`Missing anchor ${url.href}`);
}
assert.ok(pageHtml.includes(`rel="canonical" href="https://makex.in/${page.replace(/index.html$/,'')}"`),'Canonical mismatch');
for(const match of pageHtml.matchAll(/class="status-chip">([^<]+)</g)) assert.ok(['BUILT','PROTOTYPED','EXPLORING','RESEARCH'].includes(match[1]),`Unknown status ${match[1]}`);
}
for (const match of html.matchAll(/<img\b[^>]*>/g)) assert.ok(/width="\d+"/.test(match[0]) && /height="\d+"/.test(match[0]) && /alt="/.test(match[0]),'Image dimensions/alt');
for (const match of html.matchAll(/<(?:input|textarea|select)\b[^>]*id="([^"]+)"/g)) assert.ok(html.includes(`for="${match[1]}"`),'Missing form label');
assert.equal((html.match(/class="idea-card"/g)||[]).length,6);
assert.equal((html.match(/class="evidence-card"/g)||[]).length,3);
for(const match of html.matchAll(/class="status-chip">([^<]+)</g)) assert.ok(['BUILT','PROTOTYPED','EXPLORING','RESEARCH'].includes(match[1]),`Unknown status ${match[1]}`);
for(const banned of ['cdn.tailwindcss.com','<video','<canvas','id="loader"','IT Consulting','Startup Incubation','Advising Founder','CRUNCHBASE','WELLFOUND','codex-handoff']) assert.ok(!html.includes(banned),`Stale production content: ${banned}`);
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/)[1]);
assert.deepEqual(schema['@graph'].map(x=>x['@type']), ['Organization','WebSite']);
assert.ok(!/founder|jobTitle|Service|FAQPage/.test(JSON.stringify(schema)));
assert.ok(!html.includes('/resources/'),'Resources must not be featured automatically');
assert.ok(html.includes('https://formspree.io/f/xzdanyql') && html.includes('https://formspree.io/f/xbdanqwk'));
assert.ok((await stat(resolve(root,'assets/social/makex-og.png'))).isFile(),'Social image missing');
const socialImage = await readFile(resolve(root,'assets/social/makex-og.png'));
assert.equal(socialImage.readUInt32BE(16),1200,'Social image width');
assert.equal(socialImage.readUInt32BE(20),630,'Social image height');
assert.deepEqual([...((await read('sitemap.xml')).matchAll(/<loc>([^<]+)<\/loc>/g))].map(m=>m[1]),['https://makex.in/','https://makex.in/ideas/',...articles.map(a=>'https://makex.in'+a.path)]);
assert.deepEqual((await readdir(resolve(root,'ideas'),{withFileTypes:true})).filter(x=>x.isDirectory()).map(x=>x.name).sort(),[...slugs].sort(),'Exactly seven article routes');

// Compare raw approved paragraphs independently of the Markdown renderer.
const normalize=s=>s.replace(/<\/(?:p|h[1-6]|li)>|<br\s*\/?>/g,' ').replace(/<[^>]+>/g,'').replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>').replace(/\s+/g,' ').trim();
let readingBlocks=0;
for(const [source,page] of [['src/content/ideas-overview.md','ideas/index.html'],...slugs.map(s=>[`src/content/articles/${s}.md`,`ideas/${s}/index.html`])]) {
  const output=normalize(await read(page));
  const approved=(await read(source)).replaceAll('\r\n','\n').split('## References / implementation notes')[0];
  for(const raw of approved.replace(/^(#{1,6} .+)$/gm,'\n\n$1\n\n').split(/\n\s*\n/).map(s=>s.trim())) {
    if(!raw.trim() || raw==='---' || raw.startsWith('Anchor:') || raw.startsWith('**Status:**') || raw.startsWith('# Ideas — Overview Page')) continue;
    const expected=plain(raw.replace(/^#{1,6} |^- /gm,'').replace('**Research + Prototypes:**','**Research + Prototyped:**').replace(/\*/g,'')).replace(/^Read: /,'').replace(/ →$/,'').replace(/\s+/g,' ').trim();
    assert.ok(output.includes(expected),`Reading copy missing: ${expected}`); readingBlocks++;
  }
}
const overview=await read('ideas/index.html');
assert.equal((overview.match(/class="overview-entry/g)||[]).length,7);
assert.equal((overview.match(/Article · not yet published/g)||[]).length,0);
let diagramCount=0;
for(const config of articles) {
const commerce=await read(`ideas/${config.slug}/index.html`);
const source=await read(`src/content/articles/${config.slug}.md`);
const article=parseArticle(source);
assert.ok(overview.includes(`href="${config.path}"`),'Every overview entry links to its article');
assert.deepEqual([...commerce.matchAll(/class="status-chip">([^<]+)</g)].map(m=>m[1]),article.status);
assert.equal((commerce.match(/class="article-diagram"/g)||[]).length,Object.keys(config.diagrams).length);
for(const [section,key] of Object.entries(config.diagrams)) {
  assert.ok(article.sections.some(s=>s.id===section),`Missing diagram placement ${section}`);
  assert.ok(commerce.includes(`id="diagram-${key}"`),`Missing diagram ${key}`); diagramCount++;
}
for(const citation of config.citations) assert.equal(article.sections.flatMap(s=>s.blocks).filter(b=>b.text?.startsWith(citation.startsWith)).length,1,`Citation must match exactly once: ${citation.startsWith}`);
for(const reference of config.references) assert.ok(commerce.includes(`id="cite-${reference.id}"`),`Uncited reference: ${reference.id}`);
// Text equivalents are static HTML in native disclosures, available even when
// scripts fail. Keep the accessible image description and visible text in sync.
for (const figure of commerce.matchAll(/<figure class="article-diagram"[\s\S]+?<\/figure>/g)) {
  const description=figure[0].match(/<details class="diagram-description"><summary>Text description<\/summary><p>([^<]+)<\/p><\/details>/)?.[1];
  assert.ok(description && description.length>100,'Diagram needs a substantive static text equivalent');
  assert.ok(figure[0].includes(description+'"'),'Diagram accessible description must include the text equivalent');
  assert.equal((figure[0].match(/aria-hidden="true" focusable="false"/g)||[]).length,2,'Responsive SVG variants must not duplicate accessible content');
}
assert.ok(!commerce.includes('Use clean public links'),'Editorial instructions leaked');
const articleSchema=JSON.parse(commerce.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/)[1]);
assert.deepEqual(articleSchema['@graph'].map(x=>x['@type']),['Organization','WebSite','Article']);
assert.ok(!/datePublished|dateModified|founder|jobTitle/.test(JSON.stringify(articleSchema)));
}
assert.equal(diagramCount,12,'Two Commerce and ten new specified diagrams');
assert.ok((await read('ideas/systems-for-useful-ai/index.html')).includes('class="longform article-systems"'));

// Guard substantive editorial paragraphs against accidental truncation or rewriting.
const text = html.replace(/<[^>]+>/g,' ').replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>').replace(/\s+/g,' ').trim();
const editorialControls = new Set(['Small identity line:','Secondary:','Small links:','Ideas · Builds · Writing · GitHub · Contact','LinkedIn · GitHub · Medium · YouTube','About · Legal · Transparency']);
let paragraphs=0;
for(const [name, section] of readSections(await read('src/content/homepage.md'))) {
  if(name === 'Makex Homepage — Approved Copy') continue;
  for(const block of [...section.blocks,...section.children.flatMap(x=>x.blocks)]) {
    if(block.startsWith('`') || editorialControls.has(plain(block))) continue;
    const expected=plain(block).replace(/\s*→$/,'').replace(/\s+/g,' ');
    assert.ok(text.includes(expected),`Editorial copy missing: ${expected}`); paragraphs++;
  }
}

// Build in an isolated copy with no handoff. Guard an unrelated public file and
// all copied compatibility files, then prove deterministic output on a second build.
const sandbox=await mkdtemp(join(tmpdir(),'makex-build-'));
for(const path of ['src','scripts','assets','package.json','CNAME','resources','whatsapp','Makex_green.svg','Makex_black.svg']) await cp(resolve(root,path),join(sandbox,path),{recursive:true});
await writeFile(join(sandbox,'unrelated-public.txt'),'Preserve this public file.');
async function files(directory,prefix='') {
  const result=[];
  for(const entry of await readdir(directory,{withFileTypes:true})) {
    const path=join(prefix,entry.name);
    if(entry.isDirectory()) result.push(...await files(join(directory,entry.name),path)); else result.push(path);
  }
  return result;
}
const digest=async path=>createHash('sha256').update(await readFile(path)).digest('hex');
const all=await files(sandbox);
const owned=new Set([...pages,'assets/site.css','assets/site.js','assets/reading.css','sitemap.xml']);
const preserved=all.filter(x=>!owned.has(x.replaceAll('\\','/')));
const before=new Map(await Promise.all(preserved.map(async x=>[x,await digest(join(sandbox,x))])));
execFileSync(process.execPath,['scripts/build.mjs'],{cwd:sandbox,stdio:'pipe'});
for(const [path,hash] of before) assert.equal(await digest(join(sandbox,path)),hash,`Build changed unowned file ${path}`);
for(const path of owned) assert.equal(await digest(join(sandbox,path)),await digest(resolve(root,path)),`Generated output out of date: ${path}`);
const first=await Promise.all([...owned].map(x=>digest(join(sandbox,x))));
execFileSync(process.execPath,['scripts/build.mjs'],{cwd:sandbox,stdio:'pipe'});
assert.deepEqual(await Promise.all([...owned].map(x=>digest(join(sandbox,x)))),first,'Non-deterministic build');
console.log(`PASS: ${paragraphs} homepage and ${readingBlocks} reading copy blocks; ${pages.length} routes; ${diagramCount} accessible diagrams; links, anchors, citations, sitemap, schema, statuses; isolated handoff-free build; public-file preservation; deterministic output.`);
console.log(`Isolated build evidence: ${sandbox}`);
