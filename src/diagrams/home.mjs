export const motif = `<svg class="root-motif" viewBox="0 0 640 640" aria-hidden="true"><g fill="none" stroke="currentColor"><path d="M130 650C130 510 290 505 290 380S415 200 570 80"/><path d="M230 650C230 530 395 490 410 340S360 190 340 70"/><path d="M315 650C320 560 450 530 530 450S580 310 620 280"/><path d="M290 380C240 300 185 250 90 210"/><path d="M410 340C480 300 525 245 555 190"/><path class="active-path" d="M165 650C160 520 275 480 345 440S415 330 410 270S450 145 530 115"/></g><g class="root-nodes"><circle cx="290" cy="380" r="7"/><circle cx="410" cy="270" r="7"/><circle cx="570" cy="80" r="5"/><circle cx="340" cy="70" r="5"/><circle cx="90" cy="210" r="5"/><circle cx="530" cy="450" r="5"/></g></svg>`;
const glyphPaths = [
  '<circle cx="9" cy="12" r="4"/><circle cx="9" cy="36" r="4"/><circle cx="28" cy="24" r="5"/><circle cx="45" cy="24" r="3"/><path d="m13 14 11 7m-11 13 11-7m9-3h9"/>',
  '<circle cx="8" cy="12" r="3"/><circle cx="8" cy="36" r="3"/><circle cx="27" cy="12" r="3"/><circle cx="27" cy="36" r="3"/><circle cx="45" cy="24" r="5"/><path d="M11 12h13M11 36h13m6-23 11 8M30 35l11-8"/>',
  '<circle cx="12" cy="24" r="6"/><rect x="33" y="5" width="13" height="13" rx="3"/><rect x="33" y="30" width="13" height="13" rx="3"/><path d="m18 21 15-9M18 27l15 9M27 4v40"/>',
  '<path d="M4 38 17 24h17L48 9M4 10l13 14h17l14 14"/><circle cx="17" cy="24" r="3"/><circle cx="34" cy="24" r="3"/>',
  '<path d="M5 35c7-30 35-30 42 0M5 42c12-18 31-18 42 0M12 30v14M39 30v14"/><circle cx="26" cy="13" r="3"/>',
  '<rect x="4" y="27" width="11" height="18" rx="2"/><rect x="23" y="17" width="11" height="28" rx="2"/><rect x="42" y="7" width="7" height="38" rx="2"/><path d="m15 32 8-7m11-4 8-7"/>'
];
export const glyph = i => `<svg class="theme-glyph" width="52" height="48" viewBox="0 0 52 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${glyphPaths[i]}</svg>`;
function box(x,y,w,label,active=false) { return `<rect class="diagram-box${active?' diagram-active':''}" x="${x}" y="${y}" width="${w}" height="48" rx="10"/><text x="${x+w/2}" y="${y+29}" text-anchor="middle">${label}</text>`; }
function flow(id,title,description,content,caption) { return `<figure class="evidence-visual"><div class="diagram-label">${title}</div><svg viewBox="0 0 360 350" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${title}</title><desc id="${id}-desc">${description}</desc><defs><marker id="${id}-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 7 3.5 0 7" class="arrow-head"/></marker></defs>${content}</svg><figcaption>${caption}</figcaption></figure>`; }
const path = (id,d,dashed=false)=>`<path class="diagram-line${dashed?' dashed':''}" d="${d}" marker-end="url(#${id}-arrow)"/>`;
export const evidence = [
  flow('canteen','01 / DIRECT DISCOVERY','A QR code near a coffee machine links to the canteen menu. Customers order directly from the vendor on WhatsApp.',
    box(60,12,240,'Coffee area')+path('canteen','M180 60v37')+box(60,102,240,'QR → digital menu',true)+path('canteen','M180 150v37')+box(60,192,240,'WhatsApp order')+path('canteen','M180 240v37')+box(60,282,240,'Canteen'), 'QR discovery → menu → direct ordering.'),
  flow('career','02 / CAPABILITY EVIDENCE','Job requirements are compared with candidate evidence. A representation gap informs the resume; a capability gap informs learning.',
    box(70,12,220,'Job requirements')+path('career','M180 60v27')+box(70,92,220,'Candidate evidence',true)+path('career','M180 140v25H88v32')+path('career','M180 165h92v32')+box(8,202,160,'Resume gap')+box(192,202,160,'Capability gap')+path('career','M272 250v37')+box(192,292,160,'Learning'), 'Different gaps call for different next steps.'),
  flow('phone','03 / REUSED COMPUTE','A repurposed Android phone runs Termux and automation services. Tailscale and Cloudflare Tunnel provide remote access.',
    box(60,12,240,'Retired Android phone',true)+path('phone','M180 60v27')+box(60,92,240,'Termux')+path('phone','M180 140v27')+box(60,172,240,'n8n / remote services')+path('phone','M180 220v27')+box(30,252,300,'Tailscale · Cloudflare Tunnel'), 'Existing hardware, a new role.')
];
