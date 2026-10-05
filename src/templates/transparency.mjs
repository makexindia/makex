import { markdownBlocks, renderBlock, inlineMarkdown } from '../../scripts/markdown.mjs';

export function transparencyPage(markdown) {
  const [heading, ...blocks] = markdownBlocks(markdown);
  const render = block => block.type==='heading' ? `<h${block.level}${block.text==='A note of gratitude'?' id="gratitude"':''}>${inlineMarkdown(block.text)}</h${block.level}>` : renderBlock(block);
  return `<article class="reading-wrap"><header class="article-hero"><a class="back-link" href="/">← Makex home</a><p class="eyebrow">Makex / Transparency</p>${render(heading)}</header><div class="article-prose transparency-copy">${blocks.map(render).join('\n')}</div></article>`;
}
