import { escape } from '../../scripts/content.mjs';

import { box, path, label, svg } from './primitives.mjs';
import { researchDiagrams } from './research.mjs';

function participation(id,compact) {
  const names=['Offline business','Basic presence','Indicative snapshot','Buyer-authorized live enquiry','Manual / rules / merchant agent','Open commerce interface'];
  const x=compact?12:45,w=compact?296:375;
  return svg(id,compact?320:680,compact?628:568,
    names.map((name,i)=>box(x,20+i*82,w,name,i===3?'diagram-active':'')+(i<5?path(id,`M${x+w/2} ${72+i*82}v27`,'flow-optional'):'')).join('')+
    (compact?label(12,553,'Optional progression.')+label(12,581,'A merchant can stop wherever')+label(12,602,'value is sufficient.'):
      `<path class="diagram-line flow-optional" d="M447 46h16v410h-16"/>`+label(487,231,'A merchant can')+label(487,254,'stop wherever')+label(487,277,'value is sufficient.')+label(45,536,'Dashed arrows show optional progression.')));
}
function routing(id,compact) {
  if(compact) {
    return svg(id,320,824,
      box(10,14,225,'Buyer intent')+path(id,'M122 66v25')+
      box(10,94,225,'Local discovery / snapshot')+path(id,'M122 146v25')+
      box(10,174,225,'Candidate sellers')+path(id,'M122 226v25')+
      box(10,254,225,'Buyer authorization','diagram-active')+path(id,'M122 306v29')+
      box(10,338,225,'Preferred sellers')+path(id,'M122 390v45','flow-optional')+label(18,419,'no match')+
      box(10,438,225,'Nearby high-confidence sellers')+path(id,'M122 490v45','flow-optional')+label(18,519,'no match')+
      box(10,538,225,'Widen radius / adjacent pod')+
      path(id,'M235 364h49v304H165','flow-active')+path(id,'M235 464h49','flow-active')+path(id,'M235 564h49','flow-active')+
      label(242,636,'match')+box(10,642,155,'Offers','diagram-active')+
      label(10,744,'Widen only when needed,')+label(10,767,'within the buyer’s authorization.'));
  }
  return svg(id,680,800,
    box(40,16,390,'Buyer intent')+path(id,'M235 68v25')+
    box(40,96,390,'Local discovery / snapshot')+path(id,'M235 148v25')+
    box(40,176,390,'Candidate sellers')+path(id,'M235 228v25')+
    box(40,256,390,'Buyer authorization','diagram-active')+path(id,'M235 308v37')+
    box(40,348,390,'Preferred sellers')+path(id,'M235 400v53','flow-optional')+label(251,433,'no match')+
    box(40,456,390,'Nearby high-confidence sellers')+path(id,'M235 508v53','flow-optional')+label(251,541,'no match')+
    box(40,564,390,'Widen radius / adjacent pod')+
    path(id,'M430 374h170v320H430','flow-active')+path(id,'M430 482h170','flow-active')+path(id,'M430 590h170','flow-active')+
    label(464,360,'match')+label(464,468,'match')+label(464,576,'match')+
    box(40,668,390,'Offers','diagram-active')+label(40,768,'Widen only when needed, within the buyer’s authorization.'));
}
const diagrams = {
  ...researchDiagrams,
  participation: { title:'Progressive digital participation', caption:'A merchant can stop wherever value is sufficient.', description:'Optional stages connect offline business, basic presence, an indicative snapshot, buyer-authorized live enquiry, manual or rules-based or merchant-agent response, and an open commerce interface. No stage requires adopting the next.', render:participation },
  routing: { title:'Progressive demand routing', caption:'Expand discovery only as far as necessary to fulfil the intent.', description:'Buyer intent leads to local discovery and candidate sellers. Buyer authorization precedes live requests. Preferred sellers are tried first. If there is no match, the search can widen to nearby high-confidence sellers and then a wider radius or adjacent pod, within that authorization. A match at any stage can produce offers.', render:routing }
};
export function articleDiagram(key) {
  const d=diagrams[key];
  if(!d) throw new Error(`Unknown diagram: ${key}`);
  const id=`diagram-${key}`;
  return `<figure class="article-diagram" id="${id}" aria-labelledby="${id}-title ${id}-caption"><div class="diagram-heading"><span class="eyebrow">Concept diagram</span><h3 id="${id}-title">${d.title}</h3></div><div role="img" aria-label="${escape(d.title+'. '+d.description)}"><div class="diagram-wide">${d.render(id+'-wide',false)}</div><div class="diagram-compact">${d.render(id+'-compact',true)}</div></div><figcaption id="${id}-caption">${d.caption}</figcaption><details class="diagram-description"><summary>Text description</summary><p>${d.description}</p></details></figure>`;
}
