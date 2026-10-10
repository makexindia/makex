# Ideas — Overview Page

## Practical technology for things that should work better

Makex is a family-led technology initiative exploring practical problems that sit between existing systems.

We are interested in situations where capability already exists (in people, businesses, devices, infrastructure or emerging technology) but remains difficult to discover, combine or use.

Some of the work below has been built.

Some is being prototyped.

Some is still a question.

We prefer to make that distinction visible.

---

# Commerce & Livelihoods

Anchor: `commerce-livelihoods`

## Can local supply become discoverable before the local business becomes fully digital?

Can better discovery help people remain viable independent business owners? Our primary focus is smaller cities and towns, including Tier-2 and Tier-3 markets.

A shop may have exactly what someone nearby needs while having no searchable inventory, ecommerce catalogue or digital advertising operation.

Our recent implementation experiments addressed a simple version of that problem: helping a small office canteen become easier to discover through a lightweight digital menu and direct ordering, followed by a technical experiment in extremely low-cost multi-merchant storefronts.

Those experiments helped refine a concern Vishal first explored personally in 2014.

Instead of demanding complete digitization first, could a business begin with only a location, category and indicative presence, perhaps built conversationally from text, voice and photographs?

Locally operated nodes could coordinate discovery within a city or trading area. Buyer-authorized enquiries would seek confirmation from selected businesses, with searches extending to neighbouring nodes only with permission.

The aim is to support local livelihoods while preserving direct relationships, merchant choice and compatibility with open-commerce systems. The wider network and its livelihood benefits remain hypotheses to test.

**Built:** Local canteen digitization, lightweight storefront architecture

**Exploring:** Assisted merchant digitization, demand routing, neutral discovery, open commerce interoperability

**Read:** Making Local Markets Legible Again →

---

# Learning & Capability

Anchor: `learning-capability`

## Can learning start from where a person actually is?

Courses are linear.

Human knowledge is not.

A learner may understand most of a subject while missing one prerequisite. Another may understand the concept but struggle with the language or format of the material. A professional returning to a field may possess deep adjacent experience while lacking terminology assumed by a modern course.

Our first experiments used trusted source material together with multimodal AI to create a more adaptive tutoring workflow: compress familiar material, stop where understanding breaks, explain prerequisites when needed, and return to the original learning objective.

That leads to a larger systems question.

Could a learning system model the target capability as a concept graph, estimate which parts the learner already understands, temporarily branch into missing prerequisites and then return to the main objective?

Career OS explores the same idea from another direction: repeated job-market gaps can become learning signals rather than disappearing as isolated rejections.

The broader goal is not simply a better AI tutor.

It is to explore systems that connect **goal → prerequisite → learning → evidence of usable capability**.

**Prototyped:** Grounded multimodal tutoring, Career OS workflows

**Exploring:** Prerequisite graphs, learner-controlled context, reinforcement and capability evidence

**Read:** Education That Starts From the Learner →

---

# Human + Agent Collaboration

Anchor: `human-agent-collaboration`

## Can agents take responsibility without taking control away from people?

Most AI systems still operate around individual tasks.

Real life contains responsibilities.

Email still arrives while someone is unavailable. Shared family or workplace obligations continue across devices, people and applications. A task may begin on a local agent and need to continue elsewhere when connectivity, availability or authority changes.

Existing agent standards increasingly support discovery, task state and agent-to-agent interaction.

Our interest sits one level above that:

**What exactly moves when ongoing responsibility moves?**

A responsibility may carry a goal, authority limits, context, escalation rules, human delegates, expiry conditions and a record of what already happened.

We are also interested in group coordination.

Many small requests force several people to context-switch even when their personal agents could safely perform the mechanical work and ask only when human approval is genuinely needed.

The design objective is not maximum autonomy.

It is **continuity without loss of agency**.

**Research:** Responsibility manifests, portability, availability-aware autonomy

**Exploring:** Group agents, structured agentic requests, shared coordination and provenance

**Read:** Delegating Work Without Delegating Away Control →

---

# Shared Capacity & Mobility

Anchor: `shared-capacity-mobility`

## Before creating more infrastructure, can we use existing capacity better?

A car travels with empty seats.

A parking space remains unused.

A train moves efficiently across a region while the final few kilometres remain inconvenient.

Someone is already travelling toward where a non-urgent item needs to go.

Physical capacity exists, but coordination does not.

This theme explores mobility as a **time-varying capacity graph**.

Trusted ride matching could begin inside existing social or professional circles and widen only when needed. Public transport could remain the high-capacity backbone while peer or commercial services help coordinate the edges. Parking could become temporarily discoverable instead of remaining statically assigned.

For non-urgent goods, time flexibility creates another possibility: fulfilment may occasionally piggyback on movement that was already going to happen rather than creating a dedicated trip.

The difficult questions are not only routing.

They are trust, incentives, privacy, custody, accessibility, regulation and whether the system measurably reduces duplication rather than merely shifting it around.

**Exploring:** Trusted ride discovery, last-mile coordination, shared parking

**Research:** Delay-tolerant logistics, custody chains and progressive matching

**Read:** Use What Already Exists Better →

---

# Personalized Physical Solutions

Anchor: `personalized-physical-solutions`

## Can custom physical solutions become accessible without requiring a specialist manufacturer nearby?

Mass production makes standard products affordable.

But bodies and physical requirements are not standardized.

This theme began from a practical family problem: a footwear correction was needed after surgery, while the locally available workaround was crude enough to introduce a safety concern.

The interesting opportunity was not to replace the cobbler.

It was to connect capabilities that normally live apart:

**professional guidance → digital specification → parametric design → local 3D fabrication → local footwear integration → validation and iteration**

Flexible materials such as TPU, increasingly accessible digital fabrication and AI-assisted technical exploration make such workflows more plausible.

The research question is not whether customized footwear already exists; it does.

It is whether the capability can be safely **unbundled**, allowing specialist knowledge to remain specialist while fabrication and integration become more geographically distributed.

That same model may eventually apply to other low-volume personalized physical products.

**Exploring:** Parametric design, material choices, digital specification

**Research:** Distributed fabrication, local integration, portability and economics

**Read:** Bringing Custom Fit Within Reach →

---

# AI Within Reach

Anchor: `ai-within-reach`

## How much useful intelligence can we deliver using resources people already have?

Advanced AI increasingly assumes access to capable cloud infrastructure.

But real users live with heterogeneous devices, intermittent connectivity, different purchasing power and workloads that do not all need an answer immediately.

We are interested in designing for those constraints rather than treating them as an afterthought.

Some AI tasks can remain deterministic.

Some can run on small local models.

Some deserve larger cloud models.

Others can wait until a device is charging, idle or connected.

Old phones and computers may still provide useful always-on infrastructure. Modern NPUs can expose local inference to trusted applications. Delay-tolerant workloads can potentially shift in time or location according to resource availability.

At a more speculative edge, we are interested in whether flexible computation can sometimes move toward otherwise underused energy rather than assuming all energy must move toward permanent computing infrastructure.

The principle is simple:

> **Use the right amount of intelligence, on the right resource, at the right time.**

**Built:** Repurposed-device infrastructure and local AI-runtime experiments

**Research:** Model routing, household compute discovery, delay-tolerant AI and energy-aware workloads

**Read:** Useful Intelligence Under Real-World Constraints →

---

# The Systems Underneath

Anchor: `systems-for-useful-ai`

## Systems for Useful AI

The six domains above look different.

Underneath them, many of the same engineering questions appear.

A language model may discover a useful workflow once. Should the system continue asking the model to rediscover it forever, or compile that behaviour into tested reusable machinery?

A sensor may detect an event. What gives that event authority to activate an agent?

An agent may delegate work. How does the original human principal remain visible through the delegation chain?

A workflow may have several possible execution paths. When should it use deterministic code, a small local model, a shared device or a frontier model?

A physical system may involve AI interpretation. Where should deterministic safety constraints sit before actuation?

**Systems for Useful AI** is our horizontal research layer for questions such as these.

The goal is not another universal agent framework.

It is to explore the systems properties required when intelligence stops being a demo and starts behaving like infrastructure:

**authority · provenance · evaluation · reuse · event semantics · resource routing · failure handling · human control**

**Research + Prototypes:** Event-driven agents, reusable capabilities, delegation provenance, model routing and mechanically sympathetic AI systems

**Read:** Making Intelligence Behave Like Infrastructure →

---

# A Common Thread

The domains differ, but several principles keep recurring.

## Make invisible capacity discoverable.

A local merchant, spare car seat, unused parking space or idle compute device cannot help anyone if nobody can find it.

## Coordinate before centralizing.

Useful systems do not always need to own the entire transaction, journey or workflow.

## Reuse what already exists before demanding more infrastructure.

Hardware, local skill, public transport, traditional craft and human relationships can remain part of the solution.

## Use intelligence to reduce human friction, not remove human agency.

Automation should make work easier while leaving authority understandable and recoverable.

## Meet people where they are.

A shopkeeper should not need to become an ecommerce engineer.

A learner should not need to fit a fixed syllabus.

A local craftsperson should not need to become a CAD specialist.

A useful system adapts some of its complexity to the participant.

---

# Build · Explore · Enable

## Build

Turn practical problems into working experiments.

## Explore

Use prototypes to uncover deeper technical and social questions.

## Enable

Look for ways technology can extend useful capability to people, places and systems that are currently underserved by it.

Not every experiment will become a product.

Some may become open tools.

Some may become research.

Some may lead to collaborations.

Some may simply teach us that an idea does not work.

That is part of the process too.

**Multiply Your Potential.**
