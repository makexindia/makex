import { escape } from './content.mjs';

// A small, explicit Markdown subset for the reviewed editorial sources.
// Raw HTML is escaped. New syntax should be added deliberately with a content check.
export const slug = text => text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
export const unmark = text => text.replace(/^>\s?/gm, '').replace(/\*\*|`/g, '').replace(/\*([^*]+)\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
export function inlineMarkdown(text) {
  return escape(text)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|#[^\s)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/ {2,}\n/g, '<br>\n');
}
export function markdownBlocks(markdown) {
  const lines = markdown.replaceAll('\r\n','\n').split('\n');
  const blocks=[];
  for(let i=0;i<lines.length;) {
    const line=lines[i];
    if(!line.trim()) { i++; continue; }
    const heading=line.match(/^(#{1,6}) (.+)$/);
    if(heading) { blocks.push({type:'heading',level:heading[1].length,text:heading[2]}); i++; continue; }
    if(line.trim()==='---') { blocks.push({type:'rule'}); i++; continue; }
    const type=line.startsWith('> ') ? 'quote' : line.startsWith('- ') ? 'list' : 'paragraph';
    const chunk=[];
    while(i<lines.length && lines[i].trim() && !/^#{1,6} |^---$/.test(lines[i])) chunk.push(lines[i++]);
    blocks.push({type,text:chunk.join('\n').trim()});
  }
  return blocks;
}
export function renderBlock(block) {
  if(block.type==='rule') return '<hr>';
  if(block.type==='quote') return `<blockquote><p>${inlineMarkdown(block.text.replace(/^>\s?/gm,''))}</p></blockquote>`;
  if(block.type==='list') return `<ul>${block.text.split(/\n- /).map(x=>`<li>${inlineMarkdown(x.replace(/^- /,''))}</li>`).join('')}</ul>`;
  if(block.type!=='paragraph') throw new Error(`Unhandled Markdown block: ${block.type}`);
  return `<p>${inlineMarkdown(block.text)}</p>`;
}
