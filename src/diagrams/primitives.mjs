import { escape } from '../../scripts/content.mjs';

// All diagrams use labelled nodes, solid flow and dashed optional progression.
// Mobile variants retain the same nodes and meaning, without shrinking the labels.
export const box = (x,y,w,label,kind='') => {
  const lines=w<250 && label.length>27 ? [label.slice(0,label.lastIndexOf(' ',label.length/2+5)),label.slice(label.lastIndexOf(' ',label.length/2+5)+1)] : [label];
  return `<g><rect class="diagram-box ${kind}" x="${x}" y="${y}" width="${w}" height="52" rx="10"/><text x="${x+w/2}" y="${y+(lines.length>1?22:31)}" text-anchor="middle">${lines.map((line,i)=>`<tspan x="${x+w/2}" dy="${i?19:0}">${escape(line)}</tspan>`).join('')}</text></g>`;
};
export const path = (id,d,kind='') => `<path class="diagram-line ${kind}" d="${d}" marker-end="url(#${id}-arrow)"/>`;
export const label = (x,y,text) => `<text class="flow-label" x="${x}" y="${y}">${escape(text)}</text>`;
export function svg(id,width,height,content) {
  return `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" aria-hidden="true" focusable="false"><defs><marker id="${id}-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 7 3.5 0 7" class="arrow-head"/></marker></defs>${content}</svg>`;
}
