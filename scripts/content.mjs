// Deliberately limited to the reviewed homepage's Markdown vocabulary.
// Reading pages use the separate focused parser in markdown.mjs.
export const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
export const plain = text => text.replace(/^>\s*/gm, '').replace(/\*\*|`/g, '').replace(/^\*|\*$/g, '').trim();
export function inline(text) {
  return escape(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
export function prose(blocks) {
  return blocks.map(text => {
    if (text.startsWith('> ')) return `<blockquote><p>${inline(text.replace(/^>\s*/gm, ''))}</p></blockquote>`;
    return `<p>${inline(text)}</p>`;
  }).join('\n');
}
export function readSections(markdown) {
  const sections = new Map();
  for (const part of markdown.replaceAll('\r\n', '\n').split(/^# /m).slice(1)) {
    const [name, ...lines] = part.split('\n');
    const chunks = lines.join('\n').split(/^### /m);
    const split = body => body.split(/\n\s*\n/).map(x => x.trim()).filter(x => x && x !== '---');
    let blocks = split(chunks[0]);
    const heading = blocks[0]?.startsWith('## ') ? blocks.shift().slice(3) : name;
    const children = chunks.slice(1).map(chunk => {
      const [title, ...body] = chunk.split('\n');
      return { title, blocks: split(body.join('\n')) };
    });
    sections.set(name, { name, heading, blocks, children });
  }
  return sections;
}
