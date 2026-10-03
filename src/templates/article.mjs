import { escape } from '../../scripts/content.mjs';
import { markdownBlocks, inlineMarkdown, renderBlock, slug } from '../../scripts/markdown.mjs';
import { articleDiagram } from '../diagrams/article.mjs';

export function parseArticle(markdown) {
  const blocks=markdownBlocks(markdown);
  const [theme,title,status,deck]=blocks.splice(0,4);
  if(theme?.level!==1 || title?.level!==2 || !status?.text.startsWith('**Status:** ') || deck?.level!==3) throw new Error('Article opening must contain theme, title, status and deck');
  const referencesStart=blocks.findIndex(b=>b.type==='heading' && b.text==='References / implementation notes');
  if(referencesStart>=0) blocks.splice(referencesStart);
  const sections=[{id:'article-opening',title:'Opening question',level:2,blocks:[]}];
  const ids=new Set(['article-opening']);
  const headingId=text=>{
    const base=slug(text); let id=base,index=2;
    while(ids.has(id)) id=base+'-'+index++;
    ids.add(id); return id;
  };
  let seenTopLevel=false;
  for(const block of blocks) {
    if(block.type==='rule') continue;
    if(block.type==='heading') {
      const level=block.level===1 || (!seenTopLevel && block.level===2)?2:3;
      if(block.level===1) seenTopLevel=true;
      if(level===2) sections.push({id:headingId(block.text),title:block.text,level,blocks:[]});
      else sections.at(-1).blocks.push({...block,level:3,id:headingId(block.text)});
    } else sections.at(-1).blocks.push(block);
  }
  return {theme:theme.text,title:title.text,deck:deck.text,status:status.text.slice('**Status:** '.length).split(' + ').map(s=>s==='PROTOTYPES'?'PROTOTYPED':s),sections};
}
function contents(article) {
  return `<ol>${article.sections.map(s=>`<li><a href="#${s.id}">${escape(s.title)}</a></li>`).join('')}<li><a href="#references">References</a></li></ol>`;
}
function renderParagraph(block,config) {
  let rendered=renderBlock(block);
  const citation=config.citations?.find(c=>block.text?.startsWith(c.startsWith));
  if(citation) {
    const links=citation.references.map(id=>{
      const index=config.references.findIndex(r=>r.id===id);
      if(index<0) throw new Error(`Missing reference: ${id}`);
      return `<a class="citation" id="cite-${id}" href="#ref-${id}" aria-label="Reference ${index+1}: ${escape(config.references[index].title)}">[${index+1}]</a>`;
    }).join(' ');
    rendered=rendered.replace(/<\/p>$/,` <span class="citations">${links}</span></p>`);
  }
  return rendered;
}
export function articlePage(markdown,config) {
  const article=parseArticle(markdown);
  const checkedDate=new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(config.referencesChecked+'T00:00:00Z'));
  const toc=contents(article);
  const body=`<article class="longform${config.layer==='systems'?' article-systems':''}" aria-labelledby="article-title">
<header class="article-hero reading-wrap"><a class="back-link" href="/ideas/">← All ideas</a><p class="eyebrow">${config.layer==='systems'?'The systems underneath':'Exploration'} / ${escape(article.theme)}</p><div class="chips">${article.status.map(s=>`<span class="status-chip">${escape(s)}</span>`).join('')}</div><h1 id="article-title">${escape(article.title)}</h1><p class="article-deck">${escape(article.deck)}</p></header>
<div class="article-layout reading-wrap"><aside class="article-toc-desktop"><nav class="article-toc" aria-label="Article contents"><p class="eyebrow">In this exploration</p>${toc}<a class="toc-return" href="#article-title">Back to top ↑</a></nav></aside>
<details class="article-toc-mobile"><summary>In this exploration</summary><nav class="article-toc" aria-label="Article contents">${toc}</nav></details>
<div class="article-prose">${article.sections.map((section,i)=>`<section class="article-section" id="${section.id}"${i?' aria-labelledby="heading-'+section.id+'"':''}>${i?`<h2 id="heading-${section.id}">${escape(section.title)}</h2>`:''}${section.blocks.map(b=>b.type==='heading'?`<h3 id="${b.id}">${inlineMarkdown(b.text)}</h3>`:renderParagraph(b,config)).join('\n')}${config.diagrams?.[section.id]?articleDiagram(config.diagrams[section.id]):''}</section>`).join('\n')}
<section class="article-references" id="references" aria-labelledby="references-title"><h2 id="references-title">References</h2><p class="reference-date">External references checked <time datetime="${config.referencesChecked}">${checkedDate}</time>.</p><ol>${config.references.map((r,i)=>`<li id="ref-${r.id}"><a href="${r.url}">${escape(r.title)} <span aria-hidden="true">↗</span></a><p>${escape(r.note)} <a class="reference-return" href="#cite-${r.id}" aria-label="Return to reference ${i+1} in the article">Back to text ↑</a></p></li>`).join('')}</ol></section>
<nav class="article-end" aria-label="Continue exploring"><a class="text-link" href="/ideas/#${config.slug}">← ${escape(article.theme)} overview</a><a class="text-link" href="/ideas/">All ideas →</a></nav></div></div></article>`;
  return {body,article};
}
