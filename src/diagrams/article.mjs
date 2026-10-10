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
    const steps=[
      ['1. Buyer → local node','Need, place and timing'],
      ['2. Local node → buyer','Possible sellers; unconfirmed'],
      ['3. Buyer → local node','Authorize a bounded enquiry'],
      ['4. Local node → sellers','Relevant requests only'],
      ['5a. Sellers → local node','Confirmation and offers'],
      ['5b. Local node → buyer','Relay responses'],
      ['6. Buyer ↔ node ↔ seller','Clarify and acknowledge terms']
    ];
    return svg(id,320,1330,
      steps.map(([actors,message],i)=>{
        const y=12+i*112;
        return label(12,y+14,actors)+box(12,y+28,296,message,i===2||i===6?'diagram-active':'')+
          (i<steps.length-1?path(id,`M160 ${y+82}v20`):'');
      }).join('')+
      label(12,805,'Live exchanges: limited retention;')+label(12,827,'participants can preserve records.')+
      label(12,882,'Optional during search:')+label(12,904,'buyer authorizes a wider scope.')+
      box(12,926,216,'Local node')+
      path(id,'M88 978v82','flow-optional')+label(12,1008,'Enquiry')+
      box(12,1064,216,'Neighbouring node')+
      path(id,'M228 1090h57V952h-55','flow-optional')+
      label(186,1032,'Replies')+
      label(12,1164,'After agreement, separately:')+
      box(12,1188,296,'Pickup or arranged delivery')+
      label(12,1280,'Manual participation remains valid.')+
      label(12,1302,'Dashed paths: optional wider search.'));
  }
  return svg(id,680,1030,
    box(10,20,160,'Buyer / optional agent')+
    box(245,20,190,'Local commerce node','diagram-active')+
    box(510,20,160,'Local businesses')+
    label(10,102,'Describe the need')+label(245,102,'Match available presence')+label(510,102,'Manual or automated')+
    `<path class="diagram-line" d="M90 120v495M340 120v495M590 120v495"/>`+
    path(id,'M90 165H338')+label(106,150,'1. Need, place and timing')+
    path(id,'M340 235H92')+label(106,206,'2. Possible sellers')+label(106,226,'Availability unconfirmed')+
    path(id,'M90 305H338','flow-active')+label(106,290,'3. Authorize contact / scope')+
    path(id,'M340 375H588')+label(353,360,'4. Relevant enquiries')+
    path(id,'M590 435H342')+label(353,420,'5a. Confirmation and offers')+
    path(id,'M340 485H92')+label(106,470,'5b. Relay responses')+
    label(106,532,'6. Clarify and agree terms')+label(353,532,'Relay / acknowledge')+
    path(id,'M90 555H338','flow-active')+path(id,'M340 555H588','flow-active')+
    path(id,'M590 590H342','flow-active')+path(id,'M340 590H92','flow-active')+
    label(35,659,'Live exchanges: limited retention; participants can preserve records.')+
    label(35,718,'Optional during search: buyer authorizes a wider scope.')+
    box(35,754,190,'Local node')+box(455,754,190,'Neighbouring node')+
    path(id,'M225 768H453','flow-optional')+label(255,752,'Authorized enquiry')+
    path(id,'M455 794H227','flow-optional')+label(313,820,'Replies')+
    label(35,876,'After agreement, separately:')+
    box(35,900,610,'Pickup or separately arranged delivery')+
    label(35,1000,'Dashed paths show optional wider search, not an automatic next step.'));
}
const diagrams = {
  ...researchDiagrams,
  participation: { title:'Progressive digital participation', caption:'A merchant can stop wherever value is sufficient.', description:'Optional stages connect offline business, basic presence, an indicative snapshot, buyer-authorized live enquiry, manual or rules-based or merchant-agent response, and an open commerce interface. No stage requires adopting the next.', render:participation },
  routing: { title:'From a local enquiry to an agreed next step', caption:'Proposed flow. Live enquiries require buyer authorization; pickup or delivery is arranged separately.', description:'1. The buyer sends a need, location and timing to the local node. 2. The node returns possible sellers from basic or indicative presence without contacting them; availability is unconfirmed. 3. The buyer authorizes selected sellers or a bounded search. 4. Relevant enquiries reach merchants within that scope and their preferences; manual response remains valid. 5a. Sellers return confirmation, supporting evidence and offers to the node. 5b. The node relays those responses to the buyer. 6. Buyer and seller clarify and acknowledge terms through the channel. Live exchanges would have limited retention and participant-exportable records. Optional during search: only with buyer authorization, a local node sends an enquiry to a neighbouring node and receives replies. This is not an automatic step after agreement. Pickup or separately arranged delivery follows any agreement outside the discovery responsibility. The complete system remains exploratory.', render:routing }
};
export function articleDiagram(key) {
  const d=diagrams[key];
  if(!d) throw new Error(`Unknown diagram: ${key}`);
  const id=`diagram-${key}`;
  return `<figure class="article-diagram" id="${id}" aria-labelledby="${id}-title ${id}-caption"><div class="diagram-heading"><span class="eyebrow">Concept diagram</span><h3 id="${id}-title">${d.title}</h3></div><div role="img" aria-label="${escape(d.title+'. '+d.description)}"><div class="diagram-wide">${d.render(id+'-wide',false)}</div><div class="diagram-compact">${d.render(id+'-compact',true)}</div></div><figcaption id="${id}-caption">${d.caption}</figcaption><details class="diagram-description"><summary>Text description</summary><p>${d.description}</p></details></figure>`;
}
