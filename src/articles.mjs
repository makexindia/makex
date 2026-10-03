// This explicit registry is the publication boundary. Adding Markdown alone
// never generates a route. Reference dates record verification, not publication.
const a2a={id:'a2a',title:'Agent2Agent — Protocol specification',url:'https://a2a-protocol.org/latest/specification/',note:'Agent discovery, stateful tasks and asynchronous collaboration.'};
const tasks={id:'mcp-tasks',title:'MCP Tasks extension',url:'https://tasks.extensions.modelcontextprotocol.io/',note:'Durable task handles and asynchronous tool execution are negotiated extension capabilities; support is not universal.'};
const sampling={id:'mcp-sampling',title:'MCP — Sampling',url:'https://modelcontextprotocol.io/specification/2025-11-25/client/sampling',note:'Server-requested model sampling through the client, subject to client control.'};
const caching={id:'openai-cache',title:'OpenAI — Prompt caching',url:'https://developers.openai.com/api/docs/guides/prompt-caching',note:'Reuse of processed prompt prefixes. Eligibility and retention depend on the service and model.'};
const claudeCache={id:'claude-cache',title:'Anthropic — Prompt caching',url:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',note:'Reuse of prompt context with documented cache boundaries and lifetimes.'};
export const articles = [{
  slug: 'commerce-livelihoods',
  path: '/ideas/commerce-livelihoods/',
  title: 'Commerce & Livelihoods | Makex India',
  description: 'Can local supply become discoverable before a local business becomes fully digital?',
  referencesChecked: '2026-10-02',
  references: [
    { id: 'ondc-seller', title: 'ONDC — Seller Network Participants', url: 'https://ondc.org/pages/seller-network-participants.html', note: 'Seller participation and catalogue digitization.' },
    { id: 'ondc-buyer', title: 'ONDC — Buyer Network Participants', url: 'https://ondc.org/pages/buyer-network-participants.html', note: 'Buyer applications, search parsing and matching.' },
    { id: 'ucp', title: 'Universal Commerce Protocol — Core Concepts', url: 'https://ucp.dev/documentation/core-concepts/', note: 'Common interfaces and interoperability for commerce entities.' },
    { id: 'ucp-google', title: 'Google for Developers — Universal Commerce Protocol', url: 'https://developers.google.com/universal-commerce-protocol', note: 'Agentic commerce integration context.' }
  ],
  citations: [
    { startsWith: 'ONDC separates buyer-side', references: ['ondc-seller','ondc-buyer'] },
    { startsWith: 'Similarly, emerging standards such as Universal Commerce Protocol', references: ['ucp','ucp-google'] }
  ],
  diagrams: {
    'from-presence-to-participation': 'participation',
    'discovery-should-not-become-merchant-spam': 'routing'
  }
}, {
  slug:'learning-capability', path:'/ideas/learning-capability/', title:'Learning & Capability | Makex India',
  description:'Learning from existing knowledge, trusted sources and evidence of usable capability.', referencesChecked:'2026-10-03',
  references:[
    {id:'multilingual',title:'UNESCO — Languages matter: global guidance on multilingual education',url:'https://www.unesco.org/en/articles/languages-matter-global-guidance-multilingual-education',note:'Educational context for multilingual access; not evidence of this prototype’s learning outcomes.'},
    {id:'education-ai',title:'UNESCO — Guidance for generative AI in education and research',url:'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research',note:'Human agency, inclusion and educational use of generative AI.'},
    {id:'adaptive-learning',title:'OECD Digital Education Outlook 2021',url:'https://www.oecd.org/en/publications/2021/06/oecd-digital-education-outlook-2021_0f1487d9.html',note:'Established work on intelligent tutoring, learner modelling and adaptive assessment.'}
  ],
  citations:[
    {startsWith:'The language of the best resource',references:['multilingual']},
    {startsWith:'The goal is not to automate teachers',references:['education-ai']},
    {startsWith:'Adaptive learning and intelligent tutoring systems',references:['adaptive-learning']}
  ],
  diagrams:{'a-concept-graph-rather-than-a-syllabus':'learner-graph','learning-should-be-able-to-branch-without-getting-lost':'learning-harness'}
}, {
  slug:'human-agent-collaboration',path:'/ideas/human-agent-collaboration/',title:'Human + Agent Collaboration | Makex India',
  description:'Persistent responsibility, bounded delegation and continuity without loss of human agency.',referencesChecked:'2026-10-03',
  references:[a2a,tasks],
  citations:[{startsWith:'The Agent2Agent protocol allows',references:['a2a','mcp-tasks']}],
  diagrams:{'a-task-is-not-the-same-as-responsibility':'task-responsibility','delegation-should-be-narrower-than-identity':'responsibility-handoff'}
}, {
  slug:'shared-capacity-mobility',path:'/ideas/shared-capacity-mobility/',title:'Shared Capacity & Mobility | Makex India',
  description:'Making existing seats, public transport, parking and movement more useful through coordination.',referencesChecked:'2026-10-03',
  references:[
    {id:'carpool',title:'BlaBlaCar India — Terms and conditions',url:'https://legal.blablacar.com/en-in/terms-and-conditions/',note:'A specific private cost-sharing service model, not a determination of legality for another service or jurisdiction.'},
    {id:'ncrtc',title:'NCRTC — Transit-oriented development and value capture',url:'https://ncrtc.in/tod-vcf/',note:'Delhi–Ghaziabad–Meerut corridor context, multimodal integration and last-mile planning. No service timetable is asserted.'}
  ],
  citations:[{startsWith:'Existing platforms already connect drivers',references:['carpool']},{startsWith:'One of the observations behind our mobility exploration',references:['ncrtc']}],
  diagrams:{'public-transport-and-peer-mobility-can-complement-each-other':'transit-backbone','time-slack-is-a-resource':'custody-chain'}
}, {
  slug:'personalized-physical-solutions',path:'/ideas/personalized-physical-solutions/',title:'Personalized Physical Solutions | Makex India',
  description:'Connecting professional assessment, digital specification and qualified local fabrication.',referencesChecked:'2026-10-03',
  references:[
    {id:'shapecrunch',title:'Shapecrunch — Product and technology',url:'https://www.shapecrunch.com/product',note:'Provider description of foot scanning, digital design and 3D-printed footwear components; not independent clinical evidence.'},
    {id:'mechanics',title:'Compressive behavior of thermoplastic polyurethane with an active agent foaming for 3D-printed customized comfort insoles',url:'https://www.sciencedirect.com/science/article/pii/S0142941824001946',note:'2024 study: mechanical testing and customized stiffness zones. This does not establish safety of a proposed correction.'},
    {id:'tpu-insoles',title:'Kim (2025) — Influences of Personalized 3D-Printed Insole Orthoses on 3D Ankle Moments during Gait in Individuals with Pronated Hindfoot Deformity',url:'https://www.jkema.org/archive/view_article?pid=jkema-9-2-134',note:'Study methods describe 3D scanning, individualized geometry and TPU printing. Its specific population and outcomes do not validate every fabrication workflow.'}
  ],
  citations:[{startsWith:'Specialist providers in India already sell',references:['shapecrunch']},{startsWith:'Research also demonstrates that 3D-printed footwear',references:['mechanics']},{startsWith:'Flexible TPU is already used',references:['tpu-insoles']}],
  diagrams:{'a-distributed-fabrication-model':'fabrication-boundary'}
}, {
  slug:'ai-within-reach',path:'/ideas/ai-within-reach/',title:'AI Within Reach | Makex India',
  description:'Useful intelligence across existing devices, constrained resources and flexible workloads.',referencesChecked:'2026-10-03',
  references:[
    {id:'energy',title:'IEA — Energy and AI',url:'https://www.iea.org/reports/energy-and-ai',note:'2025 report on AI, data centres and electricity demand; projections are scenarios, not measured future outcomes.'},
    {id:'gemma-mobile',title:'Google — Deploy Gemma on mobile devices',url:'https://ai.google.dev/gemma/docs/integrations/mobile',note:'Documented mobile deployment options; feasibility varies by model, device and runtime.'},
    {id:'gemma-runtime',title:'Google — Run Gemma generation and inference',url:'https://ai.google.dev/gemma/docs/run',note:'Runtime options include CPU, GPU and NPU acceleration; this is not a claim that every phone supports every model.'},
    {id:'carbon',title:'Microsoft — Saving CO2 using location and time shifting in Azure',url:'https://devblogs.microsoft.com/ise/saving-co2-using-location-and-time-shifting-in-azure/',note:'A documented implementation of flexible workload scheduling; results do not establish the economics of small portable compute.'},caching
  ],
  citations:[{startsWith:'But their growth has real infrastructure consequences.',references:['energy']},{startsWith:'Increasingly there is a spectrum:',references:['gemma-mobile']},{startsWith:'NPUs and other accelerators are increasingly capable',references:['gemma-runtime']},{startsWith:'Cloud and data-centre sustainability work',references:['carbon']},{startsWith:'Prompt caching and reused context are already',references:['openai-cache']}],
  diagrams:{'a-hierarchy-of-intelligence':'intelligence-ladder','workloads-should-declare-flexibility':'resource-routing'}
}, {
  slug:'systems-for-useful-ai',path:'/ideas/systems-for-useful-ai/',title:'Systems for Useful AI | Makex India',layer:'systems',
  description:'The shared technical layer: authority, responsibility, reusable capability, evaluation and resource routing.',referencesChecked:'2026-10-03',
  references:[a2a,sampling,tasks,caching,claudeCache],
  citations:[{startsWith:'A2A standardizes discovery',references:['a2a']},{startsWith:'MCP has also evolved',references:['mcp-sampling','mcp-tasks']},{startsWith:'Modern AI providers already expose prompt caching',references:['openai-cache','claude-cache']}],
  diagrams:{'a-possible-runtime-architecture':'control-plane'}
}];
