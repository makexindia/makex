import { escape } from '../../scripts/content.mjs';
import { path, label, svg } from './primitives.mjs';

// Shared extensions to the Commerce grammar: wrapped nodes, labelled boundaries
// and reusable vertical chains. All coordinates are SVG units, not screen pixels.
const node=(x,y,w,text,kind='',h=56)=>{
  const max=Math.floor(w/8.2), lines=[];
  for(const word of text.split(' ')) {
    if(!lines.length || lines.at(-1).length+word.length+1>max) lines.push(word);
    else lines[lines.length-1]+=' '+word;
  }
  const first=y+h/2-(lines.length-1)*9+5;
  return `<g><rect class="diagram-box ${kind}" x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/><text x="${x+w/2}" y="${first}" text-anchor="middle">${lines.map((s,i)=>`<tspan x="${x+w/2}" dy="${i?18:0}">${escape(s)}</tspan>`).join('')}</text></g>`;
};
const boundary=(x,y,w,h)=>`<rect class="diagram-boundary" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/>`;
const line=(d,kind='')=>`<path class="diagram-line ${kind}" d="${d}"/>`;
const chain=(id,names,x,y,w,gap=84,kind='')=>names.map((name,i)=>node(x,y+i*gap,w,name)+(i<names.length-1?path(id,`M${x+w/2} ${y+i*gap+56}v${gap-61}`,kind):'')).join('');

function learnerGraph(id,c) {
  const width=c?320:680, offset=c?394:150;
  const course=c?chain(id,['Chapter 1','Chapter 2','Chapter 3','Chapter 4'],65,40,190,76):
    ['Chapter 1','Chapter 2','Chapter 3','Chapter 4'].map((s,i)=>node(10+i*172,35,144,s)+(i<3?path(id,`M${154+i*172} 63h23`):'')).join('');
  const left=c?6:55,right=c?174:395,w=c?140:230,mid=width/2;
  return svg(id,width,offset+310,label(10,18,'A fixed course')+course+
    line(`M10 ${offset-20}H${width-10}`)+label(10,offset+10,'A learner’s prerequisite graph')+
    node(mid-110,offset+35,220,'Target capability','diagram-active')+
    path(id,`M${mid} ${offset+91}v24H${left+w/2}v19`)+path(id,`M${mid} ${offset+91}v24H${right+w/2}v19`,'flow-active')+
    node(left,offset+140,w,'Known branch · collapsed')+node(right,offset+140,w,'Missing prerequisite','diagram-active')+
    path(id,`M${right+w/2} ${offset+196}v28`,'flow-active')+node(right,offset+230,w,'Bridge the gap','diagram-active'));
}
function learningHarness(id,c) {
  const w=c?320:680,x=c?10:80,nw=c?228:330,center=x+nw/2,branchY=300;
  return svg(id,w,855,
    chain(id,['Goal','Diagnose current knowledge','Active concept'],x,15,nw)+
    path(id,`M${center} 239v48`,'flow-optional')+label(x,275,'Prerequisite gap')+
    boundary(x-4,branchY-3,nw+8,167)+node(x+8,branchY+12,nw-16,'Temporary branch')+
    path(id,`M${center} ${branchY+68}v23`,'flow-optional')+node(x+8,branchY+99,nw-16,'Bridge')+
    path(id,`M${x+nw-10} 427H${w-20}V210H${x+nw}`,'flow-optional')+label(c?248:440,405,'Return')+
    path(id,`M${x} 211H${c?3:35}V521H${center}v19`)+label(x,506,'Sufficient → continue')+
    chain(id,['Apply','Reinforce','Capability evidence'],x,548,nw,90));
}
function taskResponsibility(id,c) {
  const states=['Defined','Active','Delegated','Awaiting human','Degraded / suspended','Returned','Closed'];
  const y=c?340:42,x=c?40:355,w=c?240:280;
  return svg(id,c?320:680,c?965:665,
    label(c?40:35,22,'Task')+chain(id,['Start','Execute','Done'],c?40:35,42,c?240:230,82)+
    label(x,y-20,'Responsibility')+chain(id,states,x,y,w,82,'flow-optional')+
    label(c?14:355,c?938:641,'Illustrative states; transitions vary.'));
}
function handoff(id,c) {
  const names=['Human owner','Local agent','Cloud agent','Human delegate'];
  if(c) return svg(id,320,788,chain(id,names,35,15,250,85,'flow-optional')+
    boundary(10,370,300,260)+label(25,399,'Bounded handoff manifest')+
    ['Goal','Authority','Minimal context','Expiry','Provenance'].map((s,i)=>label(30,435+i*36,s)).join('')+
    line('M15 664H305','flow-optional')+label(20,699,'Full identity and private context')+label(20,725,'remain outside the handoff.')+label(20,763,'Each transfer needs permission.'));
  return svg(id,680,510,chain(id,names,25,28,265,88,'flow-optional')+
    boundary(370,25,285,340)+label(390,57,'Travels with the handoff')+
    ['Goal','Authority','Minimal context','Expiry','Provenance'].map((s,i)=>node(390,80+i*53,245,s,'',42)).join('')+
    line('M305 80h35v230h-35','flow-optional')+line('M340 190h25','flow-optional')+
    line('M25 405H655','flow-optional')+label(30,443,'Full identity and private context remain outside the handoff.')+label(30,479,'Each transfer needs permission.'));
}
function transit(id,c) {
  if(c) return svg(id,320,530,node(50,15,220,'Home')+path(id,'M160 71v67','flow-optional')+label(20,109,'Flexible local edge')+
    node(50,145,220,'Transit station')+line('M151 201v105','flow-backbone')+path(id,'M169 201v105','flow-backbone')+label(185,244,'Public')+label(185,264,'transit')+
    node(50,312,220,'Transit station')+path(id,'M160 368v67','flow-optional')+label(20,408,'Flexible local edge')+node(50,442,220,'Destination'));
  return svg(id,680,390,node(15,15,210,'Home')+path(id,'M120 71v83','flow-optional')+label(145,118,'Flexible local edge')+
    node(15,161,210,'Transit station')+line('M225 181H445','flow-backbone')+path(id,'M225 197H445','flow-backbone')+label(267,164,'Public transit')+
    node(455,161,210,'Transit station')+path(id,'M560 217v87','flow-optional')+label(343,270,'Flexible local edge')+node(455,312,210,'Destination'));
}
function custody(id,c) {
  const names=['Sender','Carrier A','Handoff point','Carrier B','Recipient'];
  if(c) return svg(id,320,625,chain(id,names,35,20,250,94)+label(47,197,'Custody A')+label(47,291,'Handoff proof')+label(47,385,'Custody B')+
    boundary(12,499,296,103)+label(28,530,'Time slack')+label(28,560,'A flexible delivery window allows')+label(28,583,'verified transfers between trips.'));
  return svg(id,680,258,names.map((s,i)=>node(4+i*138,36,120,s)+(i<4?path(id,`M${124+i*138} 64h13`):'')).join('')+
    label(152,121,'Custody A')+label(289,121,'Proof')+label(428,121,'Custody B')+
    boundary(4,156,672,80)+label(24,186,'Time slack')+label(24,216,'A flexible delivery window allows verified transfers between trips.'));
}
function fabrication(id,c) {
  const width=c?320:680,x=c?12:70,w=c?252:470,center=x+w/2;
  return svg(id,width,872,chain(id,['Professional assessment','Approved requirement'],x,15,w,80)+
    line(`M6 180H${width-6}`,'flow-active')+line(`M6 228H${width-6}`,'flow-active')+
    label(c?20:90,200,'PROFESSIONAL DECISION')+label(c?20:90,219,'BOUNDARY')+
    path(id,`M${center} 233v22`)+
    chain(id,['Digital specification','Parametric design','Qualified local fabrication','Cobbler / footwear integration','Fit / professional review'],x,263,w,94)+
    path(id,`M${x+w} 667H${width-12}V290H${x+w}`,'flow-optional')+
    label(x,746,'Controlled revision within the')+label(x,770,'approved requirement.')+
    label(x,816,'Changed requirements return to')+label(x,840,'professional assessment.'));
}
function intelligence(id,c) {
  const names=['Known deterministic procedure','Specialist / tiny model','Local SLM','Trusted shared compute','Cloud model','Frontier model'];
  return svg(id,c?320:680,620,chain(id,names,c?15:90,18,c?290:500,86,'flow-optional')+
    label(c?15:90,550,'Escalate only if insufficient.')+label(c?15:90,584,'Use only as much intelligence')+label(c?15:90,606,'as required.'));
}
function resources(id,c) {
  const facets=['Urgency','Privacy','Quality need','Data locality','Available device','Energy state'];
  const width=c?320:680, nw=c?142:198, gap=c?164:226;
  const inputs=facets.map((s,i)=>node(5+(i%(c?2:3))*gap,15+Math.floor(i/(c?2:3))*76,nw,s)).join('');
  const bottom=c?223:147, router=c?300:222, outputs=router+154;
  return svg(id,width,c?674:500,inputs+
    label(12,bottom+28,'Together, these constraints inform:')+
    path(id,`M${width/2} ${bottom+30}V${router-7}`)+node(width/2-125,router,250,'Scheduler / router','diagram-active')+
    path(id,`M${width/2} ${router+56}v32`)+line(`M${c?4:30} ${router+93}H${width-(c?4:30)}`)+
    (c?line(`M4 ${router+93}V${outputs+118}M316 ${router+93}V${outputs+118}`):'')+
    ['Local','Shared','Cloud','Defer'].map((s,i)=>{
      const x=c?12+(i%2)*162:5+i*172,y=c?outputs+Math.floor(i/2)*90:outputs;
      return node(x,y,c?134:150,s)+path(id,c?`M${i%2?316:4} ${y+28}H${i%2?x+140:x-3}`:`M${x+75} ${router+93}V${y-7}`,'flow-optional');
    }).join('')+label(12,c?650:476,'Placement follows workload constraints.'));
}
function control(id,c) {
  const width=c?320:680,x=c?15:55,w=c?220:365,center=x+w/2;
  const names=['Stimulus','Identity + authority','Responsibility / policy','Capability registry','Planner / decomposer','Resource router'];
  const execY=c?710:585;
  return svg(id,width,c?1120:1000,
    boundary(4,4,width-8,c?680:552)+label(18,30,'Control plane')+chain(id,names,x,49,w,82)+
    path(id,c?`M${center} 515H28V684H${center}V${execY-7}`:`M${center} 515V${execY-7}`)+
    path(id,`M${x+w} 323H${width-16}V${c?552:355}`,'flow-active')+
    node(c?56:455,c?565:365,c?250:205,'Validated reusable capability','diagram-active',74)+
    path(id,c?`M306 602h8V${execY+28}H${x+w}`:`M558 439V${execY+28}H${x+w}`,'flow-active')+
    (c?label(56,666,'Reuse when applicable'):label(455,482,'Reuse when')+label(455,503,'applicable'))+
    chain(id,['Execution','Validation','Provenance / audit','Learn / compile capability'],x,execY,w,90)+
    path(id,`M${x} ${execY+298}H8V323H${x}`,'flow-optional')+
    label(20,c?1098:973,'Validated learning feeds the registry.'));
}

export const researchDiagrams={
  'learner-graph':{title:'Course sequence and learner graph',caption:'Courses are linear. Human knowledge is not.',description:'A fixed course moves through Chapters 1 to 4. A learner graph starts from a target capability, collapses a known prerequisite branch and highlights a missing prerequisite. Bridging that gap supports return to the target; it does not restart the entire course.',render:learnerGraph},
  'learning-harness':{title:'Branch, bridge and return',caption:'The harness preserves the goal while the learning path adapts.',description:'The learner sets a goal and the system diagnoses current knowledge. At the active concept, a prerequisite gap can open a temporary branch. A bridge returns the learner to that concept. When knowledge is sufficient, learning continues through application, reinforcement and capability evidence.',render:learningHarness},
  'task-responsibility':{title:'Task and responsibility',caption:'A task can finish while a responsibility continues.',description:'A task moves from start to execution to completion. A responsibility can be defined, active, delegated, awaiting a human, degraded or suspended, returned, or closed. The dashed sequence names illustrative lifecycle states, not a mandatory order or a complete transition model.',render:taskResponsibility},
  'responsibility-handoff':{title:'A bounded responsibility handoff',caption:'Transfer a bounded responsibility without transferring full identity.',description:'A human owner may delegate to a local agent, a cloud agent or a human delegate. Each permitted handoff carries the goal, scoped authority, minimal context, expiry and provenance. Full identity and private context do not automatically travel with it. The owner remains identifiable.',render:handoff},
  'transit-backbone':{title:'A strong backbone, flexible edges',caption:'Shared local capacity can extend the reach of public transport.',description:'A flexible local connection takes a traveller from home to a transit station. The visually dominant public-transport backbone connects stations. Another flexible local connection reaches the destination. Shared capacity supports the first and last miles rather than replacing the backbone.',render:transit},
  'custody-chain':{title:'A delay-tolerant custody chain',caption:'Time flexibility helps only when custody stays explicit.',description:'An item moves from sender to Carrier A, through a verified handoff point to Carrier B, and then to the recipient. Custody A, handoff proof and custody B remain explicit. A flexible delivery window permits combining trips; it does not remove accountability at any transfer.',render:custody},
  'fabrication-boundary':{title:'Professional judgment, distributed fabrication',caption:'Professional assessment defines the correction; fabrication implements the approved requirement.',description:'Professional assessment produces an approved requirement above the professional decision boundary. Below it, digital specification leads to parametric design, qualified local fabrication, footwear integration and fit or professional review. Controlled revisions stay within the approved requirement; changed requirements return to professional assessment. Neither AI nor the fabrication studio prescribes the correction.',render:fabrication},
  'intelligence-ladder':{title:'Use only the intelligence required',caption:'Escalation depends on whether the current step can meet the need.',description:'Start with a known deterministic procedure. Escalate only when insufficient: to a specialist or tiny model, a local small language model, trusted shared compute, a cloud model and finally a frontier model. These are possible routes, not a requirement to invoke every tier for every task.',render:intelligence},
  'resource-routing':{title:'Route around real constraints',caption:'Where and when a task runs are part of its design.',description:'Urgency, privacy, required quality, data locality, available devices and energy state inform a scheduler or router. It can select local execution, trusted shared compute, cloud execution or deferral. The placement decision depends on the combined constraints, not just the largest available model.',render:resources},
  'control-plane':{title:'The control plane for useful AI',caption:'Authority and policy govern both fresh reasoning and reusable execution.',description:'A stimulus passes through identity and authority, responsibility and policy, then the capability registry. A validated reusable capability can bypass fresh planning and resource routing to reach execution. Otherwise the planner and resource router prepare execution. Both paths lead through validation and provenance; learning can compile a capability for the registry. The boundary separates control-plane decisions from execution and its feedback.',render:control}
};
