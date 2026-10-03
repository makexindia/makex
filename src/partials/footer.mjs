import { inline, plain } from '../../scripts/content.mjs';
import { brand } from './shell.mjs';
const arrow = '<span aria-hidden="true">↗</span>';
export function footer(sections,site) {
  const foot = sections.get('Footer');
  const footer = `<footer class="site-footer"><div class="wrap"><div class="footer-top"><div>${brand}<p class="footer-description">${inline(foot.blocks[0])}</p></div><nav aria-label="Footer"><a href="#ideas">Ideas</a><a href="#builds">Builds</a><a href="${site.writing}">Writing</a><a href="${site.github}">GitHub</a><a href="#contact">Contact</a></nav><nav aria-label="Social"><a href="https://www.linkedin.com/company/makexindia">LinkedIn ${arrow}</a><a href="${site.github}">GitHub ${arrow}</a><a href="${site.writing}">Medium ${arrow}</a><a href="https://www.youtube.com/@makexindia">YouTube ${arrow}</a></nav></div>
<div class="footer-bottom"><p>${inline(plain(foot.blocks[3]))}</p><p>${inline(plain(foot.blocks[4]))}</p><div class="footer-small"><a href="#people">About</a><a id="transparency" href="/transparency/">Legal &amp; Transparency</a></div></div></div></footer>`;
  return footer.replace(/href="#([^"]+)"/g, (_,id)=>`href="${id==='ideas'?'/ideas/':'/#'+id}"`);
}
