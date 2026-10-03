import { escape } from '../../scripts/content.mjs';
import { markdownBlocks, inlineMarkdown, renderBlock, unmark } from '../../scripts/markdown.mjs';
import { glyph, motif } from '../diagrams/home.mjs';

export function parseOverview(markdown) {
  const sections=[];
  for(const block of markdownBlocks(markdown)) {
    if(block.type==='rule') continue;
    if(block.type==='heading' && block.level===1) sections.push({title:block.text,blocks:[]});
    else sections.at(-1).blocks.push(block);
  }
  return sections;
}
const renderOverviewBlock = b => b.type==='heading'?`<h3>${inlineMarkdown(b.text)}</h3>`:renderBlock(b);
const renderStatus = b => renderBlock({...b,text:b.text.replace('**Research + Prototypes:**','**Research + Prototyped:**')});
export function ideasPage(markdown,articles) {
  const sections=parseOverview(markdown), intro=sections.shift(), closing=sections.splice(-2);
  const entries=sections.map((s,i)=>{
    const anchor=s.blocks.shift();
    if(!anchor?.text?.startsWith('Anchor: `')) throw new Error(`Missing overview anchor: ${s.title}`);
    const id=anchor.text.match(/`([^`]+)`/)[1];
    const question=s.blocks.shift().text;
    const reading=s.blocks.pop();
    const status=[];
    while(/^\*\*(Built|Prototyped|Exploring|Research)/.test(s.blocks.at(-1)?.text||'')) status.unshift(s.blocks.pop());
    const available=articles.find(a=>a.slug===id);
    return {...s,id,question,reading,status,available,index:i};
  });
  const entry=s=>`<section class="overview-entry${s.index===6?' overview-systems':''}" id="${s.id}" aria-labelledby="${s.id}-title"><div class="overview-label"><p class="eyebrow">${s.index===6?s.title:'0'+(s.index+1)+' / Exploration'}</p>${s.index<6?glyph(s.index):''}<h2 id="${s.id}-title">${escape(s.index===6?s.question:s.title)}</h2><div class="overview-status">${s.status.map(renderStatus).join('')}</div></div><div class="overview-copy">${s.index<6?`<h3 class="overview-question">${escape(s.question)}</h3>`:''}${s.blocks.slice(0,3).map(renderOverviewBlock).join('\n')}<details class="overview-detail"><summary>Continue the overview<span class="sr-only">: ${escape(s.title)}</span></summary>${s.blocks.slice(3).map(renderOverviewBlock).join('\n')}</details><div class="overview-reading">${s.available?`<a class="text-link" href="${s.available.path}">${inlineMarkdown(unmark(s.reading.text).replace(/^Read: /,''))}</a>`:`<p><span class="reading-label">Article · not yet published</span>${inlineMarkdown(unmark(s.reading.text).replace(/^Read: /,'').replace(/ →$/,''))}</p>`}</div></div></section>`;
  const heading=intro.blocks.shift().text;
  return `<header class="ideas-hero wrap"><p class="eyebrow">Makex / Ideas</p><h1>Ideas</h1><h2>${escape(heading)}</h2><div class="ideas-introduction">${intro.blocks.map(renderOverviewBlock).join('\n')}</div>${motif}</header>
<div class="wrap"><nav class="ideas-index" aria-label="Explore the ideas">${entries.map(e=>`<a href="#${e.id}"><span aria-hidden="true">${e.index===6?'↳':'0'+(e.index+1)}</span>${escape(e.index===6?e.question:e.title)}</a>`).join('')}</nav><div class="overview-entries">${entries.map(entry).join('\n')}</div>
${closing.map((s,i)=>`<section class="overview-closing${i?' overview-method':''}"><h2>${escape(s.title)}</h2><div>${s.blocks.map(renderOverviewBlock).join('\n')}</div></section>`).join('\n')}</div>`;
}
