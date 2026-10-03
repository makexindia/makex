import { escape, inline, plain, prose } from '../../scripts/content.mjs';
import { footer as siteFooter } from '../partials/footer.mjs';
import { motif, glyph, evidence } from '../diagrams/home.mjs';

const arrow = '<span aria-hidden="true">↗</span>';
const link = (text, href, cls='text-link') => `<a class="${cls}" href="${href}">${inline(plain(text).replace(/\s*→$/, ''))} ${arrow}</a>`;
const eyebrow = text => `<p class="eyebrow">${escape(text)}</p>`;
const chips = text => `<div class="chips">${text.split(' + ').map(x=>`<span class="status-chip">${escape(x)}</span>`).join('')}</div>`;
const head = (s,number) => `<div class="section-heading"><div>${eyebrow(number+' / '+s.name)}<h2>${inline(s.heading)}</h2></div><div class="section-intro">${prose(s.blocks)}</div></div>`;

export function homepage(sections, site) {
  const get = name => { const result = sections.get(name); if(!result) throw new Error(`Missing content: ${name}`); return result; };
  const hero = get('Hero'), ideas = get('Ideas Worth Exploring'), systems = get('The Systems Underneath');
  const builds = get("Things We've Actually Tried"), approach = get('Build · Explore · Enable');
  const principles = get('A Pattern Keeps Appearing'), multiply = get('Multiply Your Potential');
  const people = get('The People Behind Makex'), future = get('Where This May Lead');
  const contact = get('Share a Problem Worth Exploring'), newsletter = get('Stay in the Loop');

  const body = `
<section class="hero" aria-labelledby="hero-title"><div class="wrap hero-inner">
<div class="hero-copy">${eyebrow(plain(hero.blocks.at(-1)))}<h1 id="hero-title">${inline(hero.heading)}</h1>
<p class="hero-lede">${inline(hero.blocks[0])}</p><p class="hero-support">${inline(hero.blocks[1])}</p>
<div class="actions">${link(hero.blocks[2], '#ideas','button')}${link(hero.blocks[3], '#builds','button button-outline')}</div></div>
${motif}<div class="hero-note" aria-hidden="true"><span class="signal-dot"></span> BUILD · EXPLORE · ENABLE</div></div></section>

<section class="section ideas-section" id="ideas" aria-labelledby="ideas-title"><span id="services" class="legacy-anchor"></span><div class="wrap">
<div class="section-heading"><div>${eyebrow('01 / '+ideas.name)}<h2 id="ideas-title">${inline(ideas.heading)}</h2></div><div class="section-intro">${prose(ideas.blocks)}</div></div>
<div class="rail-toolbar"><p class="rail-hint">Six areas of exploration</p><div class="rail-controls" hidden><button class="icon-button" type="button" data-rail="-1" aria-label="Previous ideas" aria-controls="idea-rail">←</button><button class="icon-button" type="button" data-rail="1" aria-label="Next ideas" aria-controls="idea-rail">→</button></div></div>
<div class="idea-rail" id="idea-rail" tabindex="0" role="region" aria-label="Six ideas, horizontally scrollable">
${ideas.children.map((card,i)=>`<article class="idea-card" id="idea-${site.themes[i]}">
<div class="card-top">${chips(plain(card.blocks[3]))}${glyph(i)}</div><p class="card-number" aria-hidden="true">0${i+1}</p><h3>${escape(card.title)}</h3><p class="idea-thesis">${inline(card.blocks[0])}</p><p class="idea-question">${inline(plain(card.blocks[1]))}</p>
<div class="idea-discovery"><a class="text-link" href="/ideas/#${site.themes[i]}"><span>${inline(plain(card.blocks[4]).replace(/\s*→$/, ''))}<span class="sr-only"> ${escape(card.title)}</span></span><span aria-hidden="true">→</span></a><details class="idea-detail"><summary>Quick summary<span class="sr-only">: ${escape(card.title)}</span></summary>${prose([card.blocks[2]])}</details></div></article>`).join('\n')}
</div>
<aside class="systems-strip" id="systems" aria-labelledby="systems-title"><div>${eyebrow(systems.name)}<h2 id="systems-title">${inline(systems.heading)}</h2>${prose([systems.blocks[0]])}
<a class="text-link" href="/ideas/#systems-for-useful-ai">${inline(plain(systems.blocks.at(-1)).replace(/\s*→$/, ''))} <span aria-hidden="true">→</span></a><details><summary>Questions behind the systems</summary><div class="systems-questions">${prose(systems.blocks.slice(1,-1))}</div></details></div>${motif}</aside>
</div></section>

<section class="section builds-section" id="builds"><span id="impact" class="legacy-anchor"></span><div class="wrap">${head(builds,'02')}
<div class="evidence-list">${builds.children.slice(0,3).map((item,i)=>{
  const status = ['BUILT','PROTOTYPED','BUILT'][i];
  const topic = plain(item.blocks[0]).split(' · ')[1];
  return `<article class="evidence-card">${evidence[i]}<div class="evidence-copy"><div class="evidence-meta">${chips(status)}<span class="topic">${i===2?'RUNNING EXPERIMENT · ':''}${escape(topic)}</span></div><h3>${escape(item.title)}</h3><div class="prose">${prose(item.blocks.slice(1,-1))}</div>${link(item.blocks.at(-1), '#idea-'+site.themes[[0,1,5][i]])}</div></article>`;
}).join('\n')}</div>
<div class="more-experiments"><div><h3>${builds.children[3].title}</h3>${prose([builds.children[3].blocks[0]])}</div><div class="actions">${link(builds.children[3].blocks[1],site.github)}${link(builds.children[3].blocks[2],site.writing)}</div></div>
</div></section>

<section class="section" id="approach"><div class="wrap">${head(approach,'03')}<div class="approach-grid">${approach.children.map((item,i)=>`<article class="approach-item">${eyebrow('0'+(i+1)+' / '+item.title)}<h3>${inline(plain(item.blocks[0]))}</h3><div class="prose">${prose(item.blocks.slice(1))}</div></article>`).join('')}</div></div></section>

<section class="section principles-section" aria-labelledby="principles-title"><div class="wrap"><div class="compact-heading"><h2 id="principles-title">${principles.name}</h2>${prose(principles.blocks)}</div><ol class="principles-path">${principles.children.map(item=>`<li><h3>${item.title}</h3>${prose(item.blocks)}</li>`).join('')}</ol></div></section>

<section class="section multiply-section"><div class="wrap">${eyebrow(multiply.name)}<h2>${inline(multiply.heading)}</h2><ul class="potential-examples">${multiply.blocks.slice(0,6).map(x=>`<li>${inline(x)}</li>`).join('')}</ul><div class="multiply-close">${prose(multiply.blocks.slice(6))}</div></div></section>

<section class="section" id="people"><span id="team" class="legacy-anchor"></span><div class="wrap">${head(people,'04')}<div class="people-grid">${people.children.slice(0,3).map((person,i)=>`<article class="person"><img src="/assets/img/${site.people[i].image}.jpg" width="360" height="360" alt="${escape(person.title)}" loading="lazy" decoding="async"><h3>${escape(person.title)}</h3><p class="person-role">${inline(plain(person.blocks[0]))}</p><div class="person-description">${prose(person.blocks.slice(1,-1))}</div>${link(person.blocks.at(-1),site.people[i].linkedin)}</article>`).join('')}</div>
<div class="banyan-note"><img class="banyan-monochrome" src="/Makex_black.svg" width="104" height="108" alt="" loading="lazy" decoding="async"><div><h3>${people.children[3].title}</h3>${prose(people.children[3].blocks)}</div></div></div></section>

<section class="section future-section"><div class="wrap future-layout"><div>${eyebrow('05 / '+future.name)}<h2>${inline(future.heading)}</h2></div><div class="future-copy">${prose(future.blocks)}</div></div></section>

<section class="section" id="contact"><div class="wrap contact-layout"><div>${eyebrow(contact.name)}<h2>${inline(contact.heading)}</h2><div class="contact-copy">${prose(contact.blocks.slice(0,4))}</div><p class="contact-email"><a href="mailto:reach@makex.in">${inline(plain(contact.blocks.at(-1)))}</a></p></div>
<form action="${site.contact}" method="POST" class="contact-form"><h3>Share an Idea</h3><div class="field"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="email">Email</label><input id="email" type="email" name="email" autocomplete="email" required></div><div class="field"><label for="topic">Topic <span class="optional">(optional)</span></label><select id="topic" name="topic"><option value="">Select a topic</option><option>Problem</option><option>Research</option><option>Collaboration</option><option>Something else</option></select></div><div class="field"><label for="query">What are you thinking about?</label><textarea id="query" name="query" rows="5" required></textarea></div><button class="button" type="submit">Share an Idea ${arrow}</button></form>
</div></section>

<section class="newsletter-section" aria-labelledby="newsletter-title"><div class="wrap newsletter-layout"><div><h2 id="newsletter-title">${newsletter.name}</h2>${prose([newsletter.blocks[0]])}<div class="newsletter-note">${prose(newsletter.blocks.slice(1,4))}</div></div><form action="${site.newsletter}" method="POST"><label for="newsletter-email">Email</label><div class="subscribe-row"><input id="newsletter-email" type="email" name="email" autocomplete="email" required><button class="button" type="submit">Subscribe ${arrow}</button></div></form></div></section>`;

  return { body, footer: siteFooter(sections,site) };
}
