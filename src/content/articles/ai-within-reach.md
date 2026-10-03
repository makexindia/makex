# AI Within Reach
## Useful Intelligence Under Real-World Constraints

**Status:** BUILT + RESEARCH

### AI cannot empower billions if useful intelligence only works for those who can afford premium compute

Artificial intelligence is becoming capable of assisting with:

learning, communication, software development, translation, accessibility, commerce, research, and increasingly complex everyday tasks.

But capability is only one side of access.

The other side is infrastructure.

Who owns the hardware?

Who pays for inference?

Does a reliable internet connection exist?

Can a user afford repeated cloud calls?

Can the application continue working when connectivity disappears?

And as demand for AI grows, where does the required electricity come from?

At Makex, these questions lead to a broader principle:

> **AI should learn to operate within the resources people already have, rather than assuming unlimited cloud compute is a prerequisite for participation.**

---

# The infrastructure question is becoming difficult to ignore

Most advanced AI computation still happens in large data centres.

That model is extraordinarily effective.

Centralized infrastructure provides:

- high-performance accelerators,
- reliable networking,
- specialized cooling,
- large memory,
- operational expertise,
- economies of scale.

We are not proposing that those systems disappear.

But their growth has real infrastructure consequences.

The problem is therefore not simply:

> How do we build more AI?

It is also:

> **How do we make useful AI computationally and energetically sustainable enough to serve far more people?**

---

# Not every AI task needs the largest model

Modern AI usage tends to collapse many different problems into the same abstraction:

> Send it to the model.

But AI workloads vary enormously.

One task may require frontier-level reasoning.

Another may only need:

classification, summarization, intent extraction, translation, routing, structured-data generation, basic visual recognition, or a familiar deterministic workflow.

Using the most capable available model for every problem is analogous to using a supercomputer as a calculator.

It works.

But it is not necessarily a good systems architecture.

A more resource-conscious system asks:

> **What is the smallest amount of intelligence required to perform this step reliably?**

---

# Capability can be decomposed

Consider a complex workflow.

A user asks:

> Help me evaluate whether this job is worth applying to and what I would need to learn.

One large model could perform everything.

But the task naturally contains smaller pieces:

- extract job requirements,
- identify mandatory criteria,
- normalize technology names,
- match known evidence,
- calculate simple statistics,
- retrieve previous application history,
- identify recurring gaps,
- finally reason about the result.

Some stages need language understanding.

Some need deterministic computation.

Some may need a small local model.

Only a small part may genuinely require expensive frontier reasoning.

This principle appeared in our Career OS experiments.

The interesting architecture is not:

> Which single model can do everything?

It is:

> **How should a complex capability be decomposed so expensive reasoning is used only where it adds value?**

---

# Small models are becoming genuinely useful

The choice is no longer simply:

**AI available through the cloud**

versus

**no AI.**

Increasingly there is a spectrum:

**deterministic local logic → tiny specialist model → small local language model → larger local/desktop model → shared edge compute → cloud model → frontier model.**

The application can choose among them.

---

# Local AI changes more than cost

Running intelligence near the user has advantages beyond reducing cloud expenditure.

### Privacy

Some information may never need to leave the device.

### Resilience

Basic functions can continue without internet connectivity.

### Latency

Local responses can avoid network round trips.

### Personal context

A device can potentially interact with local files, sensors and applications without uploading everything centrally.

### Economic access

A user who already owns capable hardware may be able to reuse it rather than continuously purchase remote inference.

The trade-off is that local systems have tighter limits.

Memory is smaller.

Power is limited.

Thermals matter.

Models may be weaker.

Hardware differs dramatically.

That makes local AI a systems-engineering problem rather than simply a smaller deployment target.

---

# Old hardware may still contain useful capability

AI discussions often begin with the newest accelerator.

Public-good engineering may sometimes begin with the opposite question:

> **What useful computing capability has already been paid for?**

Households accumulate devices.

Old phones.

Laptops.

Tablets.

Single-board computers.

Desktop machines.

Some are no longer pleasant primary computing devices but remain surprisingly capable.

One Makex experiment grew from exactly this instinct.

An old Android phone was repurposed as a small always-on computing node.

Using Termux and networking tools, it has hosted services including automation workflows and remote-access utilities, exposed securely when necessary through technologies such as Cloudflare Tunnel and Tailscale.

That phone was not originally designed to be a server.

But the processor, storage, network interface and battery already existed.

Repurposing it extended the useful life of hardware that could otherwise have become electronic waste.

---

# A phone can increasingly become an AI node too

Modern phones add another interesting resource:

dedicated neural-processing hardware.

NPUs and other accelerators are increasingly capable of executing local inference efficiently.

In another personal experiment, local AI runtime on a computer's NPU was made available to other applications inside a private Tailscale network.

That suggests a different mental model.

Instead of:

> every application needs its own AI infrastructure,

we can imagine:

> **devices advertise useful capabilities to a trusted local network.**

Perhaps one device offers speech recognition.

Another offers a small multimodal model.

Another provides GPU compute.

Another is low-power but always available.

The user already owns all of them.

---

# A household could become a tiny compute fabric

Imagine several devices within a family.

A new laptop.

Two older laptops.

Several phones.

Perhaps a small home server.

Each has different capabilities and availability.

Instead of hardcoding an application to one machine, devices could announce a small capability description:

**available · power source · model/runtime available · memory · accelerator · expected speed · current load · privacy class**

A lightweight coordinator could decide:

> This summarization can run on the old laptop.

> This image task benefits from the desktop GPU.

> This private classification should remain on the phone.

> This difficult reasoning task should go to the cloud.

That begins to look like distributed computing at a very small scale.

---

# Availability matters more than fixed topology

Traditional distributed infrastructure often assumes relatively stable servers and addresses.

Consumer devices are not like that.

A phone appears.

Then leaves the Wi-Fi network.

A laptop sleeps.

A family desktop becomes available overnight.

A tablet may be charging.

The system therefore cares less about:

> server 192.168.x.x

and more about:

> **Is a device capable of performing task class X available right now?**

That suggests service discovery based around capabilities rather than machines.

Lightweight publish/subscribe mechanisms such as MQTT are one possible inspiration.

Low-power protocols such as Thread or Zigbee may also provide useful ideas for **control-plane signalling** among constrained devices, although they are not intended to replace high-bandwidth networking for moving large models or datasets.

The distinction matters:

> **small signals can coordinate heavy work without carrying the heavy work themselves.**

---

# AI workloads have different relationships with time

One assumption hidden inside many current AI applications is:

> A person is waiting for the answer.

That makes latency important.

But a surprising amount of useful computation is not interactive.

Consider:

- organizing photographs,
- building a personal search index,
- analysing months of documents,
- preparing tomorrow's learning material,
- evaluating job opportunities,
- running simulations,
- generating embeddings,
- testing agent workflows,
- performing non-urgent research,
- processing sensor history.

The user may not care whether such work finishes in:

10 seconds, 10 minutes, or overnight.

That flexibility is valuable.

---

# Time can become a computing resource

If the result is needed immediately, the system needs whatever compute is currently available.

If the result is needed tomorrow morning, there are more choices.

The system could wait for:

- the laptop to become idle,
- the phone to start charging,
- solar generation to increase,
- a cheaper cloud window,
- another local machine to appear,
- lower-carbon electricity to become available.

This creates an important category:

> **delay-tolerant AI.**

The task carries not just computational requirements but a deadline.

For example:

> Analyse these documents before 7 AM.

That allows the scheduler to decide **when** and **where** computation happens.

---

# Computing systems already use this principle

Demand shifting is not new.

Cloud and data-centre sustainability work already explores delaying flexible workloads or moving them between regions according to energy availability and carbon intensity.

That validates the broader systems principle.

Our more speculative question is:

> **How small and geographically distributed can that idea become?**

---

# What if computation followed surplus energy?

Consider a factory or industrial site that produces some of its own electricity.

At particular times it may generate more energy than it can consume economically.

Sending that electricity back into the grid may require:

infrastructure, regulatory approval, metering, grid upgrades, or economics that do not justify the investment.

Some generation may therefore remain poorly utilized.

At the same time, certain computational workloads can move geographically much more easily than physical industries.

Fiber connectivity changes the equation.

So we are interested in a deliberately exploratory question:

> **For workloads that do not care exactly where or when they execute, could portable computing occasionally move toward underutilized energy rather than requiring the energy to move toward permanent computing infrastructure?**

---

# This is not the same as building a data centre beside every generator

The economics may fail completely at small scale.

Compute hardware needs:

cooling, security, maintenance, networking, stable power quality, physical protection, sufficient utilization.

Moving machines around introduces operational cost.

Renewable generation may be intermittent.

AI accelerators are expensive assets and generally become economical through high utilization.

There are therefore many reasons the naïve idea may not work.

That is exactly why it is a research question rather than a claim.

A useful experiment might ask something much narrower:

> **For low-cost, portable compute and highly delay-tolerant workloads, are there circumstances where locally stranded energy meaningfully improves the economics?**

That can be measured.

---

# Portable compute changes the capital assumption

Traditional data-centre economics assume permanent infrastructure.

But not every computational resource needs to be a hyperscale data centre.

Imagine a ruggedized compute unit containing:

commodity accelerators, storage, networking, power conditioning, remote orchestration.

It could be deployed where sufficient connectivity and otherwise-unused power already exist.

Not for latency-sensitive services.

Not necessarily for giant frontier-model training.

Possibly for workloads such as:

- batch inference,
- model evaluation,
- embedding generation,
- simulation,
- rendering,
- dataset preprocessing,
- other interruptible work.

The more delay-tolerant and restartable the workload, the more flexible the placement can become.

---

# Workloads should declare flexibility

This suggests a useful abstraction.

Instead of every computational task simply saying:

> Run me.

it might declare:

### Deadline
When must the result exist?

### Locality
Can input data leave the device or region?

### Compute class
CPU, GPU, NPU or other accelerator?

### Minimum memory
What resources are actually required?

### Interruptibility
Can the task pause and resume?

### Data size
How expensive is moving the input compared with performing the computation?

### Energy preference
Can execution wait for charging, renewable availability or surplus supply?

### Privacy
Must it stay within a trusted local network?

The scheduler then has meaningful choices.

---

# Move computation only when moving data makes sense

One important limit is easy to miss.

Computation may be portable.

Large datasets may not be.

Moving terabytes across a network consumes:

bandwidth, time, energy, money.

So:

> **move compute toward energy**

cannot become a universal principle.

The true optimization involves several costs:

**energy movement versus data movement versus compute movement versus waiting.**

A task with a tiny input and huge computational requirement is a good candidate for remote placement.

A task requiring a massive local dataset may not be.

The right answer depends on the workload.

---

# Reused hardware introduces another dimension: embodied cost

The energy consumed while a device operates is only part of its environmental footprint.

Manufacturing the device already consumed materials and energy.

That makes extending hardware life valuable.

A discarded smartphone performing a modest automation may be less capable than a new mini-PC.

But if the phone already exists and is sufficiently efficient for the job, the comparison is not simply:

> Which machine executes fastest?

It may be:

> **Does purchasing new hardware create enough additional value to justify replacing useful capacity that already exists?**

---

# Small solar and low-power devices create another class of system

Consumer electronics consume dramatically less electricity than accelerator servers.

That opens another possibility.

A small device performing:

sensor processing, simple vision, local language interaction, classification, or automation

may operate from:

battery, small solar panel, or intermittent power source.

The system can adapt its workload to available energy.

When power is plentiful:

perform expensive indexing or inference.

When power is constrained:

maintain only basic monitoring.

This is **demand shaping** at a tiny scale.

---

# Intelligence can degrade gracefully

Applications often treat model availability as binary.

Either:

the premium model works

or:

the feature fails.

A more resilient public-good architecture could degrade through capability levels.

For example:

**frontier cloud model available → rich reasoning**

Cloud unavailable:

**local medium model → reduced but useful reasoning**

Device constrained:

**small specialist model → classification / routing only**

Model unavailable:

**deterministic rules → essential functionality continues**

This resembles graceful degradation in traditional distributed systems.

AI applications should learn the same lesson:

> **Reduced intelligence can be better than complete unavailability.**

---

# The system should know when local is good enough

More capable models often produce better results.

But applications need a concept of **sufficient quality**.

Consider spam classification.

A local model producing reliable classification may already solve the problem.

Sending every message to an expensive remote model adds little value.

But drafting a complex legal response may require a much stronger system.

So model routing should consider:

**task difficulty · consequence of error · privacy · latency · cost · available resources.**

Not simply:

> use the strongest model available.

---

# A hierarchy of intelligence

We can imagine an AI runtime making decisions through a hierarchy:

### 1. Reuse known deterministic procedure
Has this problem already been solved reliably?

### 2. Use specialized local logic/model
Can an inexpensive specialist component handle it?

### 3. Use local general model
Can the device solve it adequately?

### 4. Use nearby/shared compute
Is another trusted device better suited?

### 5. Use economical cloud model
Does remote inference add enough value?

### 6. Escalate to frontier reasoning
Is the problem genuinely difficult enough to justify it?

This connects AI Within Reach with our broader **Systems for Useful AI** research.

The intelligence architecture becomes a router.

---

# Reason once, reuse many times

Language models are extraordinarily useful because they can construct solutions dynamically.

But repeatedly asking them to rediscover the same deterministic solution can be wasteful.

Suppose a model is asked:

> Parse this familiar document format and perform these six transformations.

The first execution may require reasoning.

If the process is stable, the system can potentially extract:

code, rules, a tool workflow, or another deterministic artifact.

Test it.

Store it.

Reuse it.

Future invocations can execute the trusted procedure rather than regenerating it.

The model returns when the assumptions change.

That turns AI from:

> the runtime for everything

into:

> **a capability for creating and repairing runtimes.**

---

# A trusted library of reusable capabilities

Taken further, systems could maintain a repository of tested operations.

Something analogous to:

**bytecode · packages · skills**

for agent systems.

The runtime asks:

> Have we solved this exact operation safely before?

If yes, execute the verified artifact.

If no, invoke model reasoning.

Then test and optionally preserve the new artifact.

This can reduce:

token usage, latency, cost, variability, energy consumption.

It also improves inspectability.

The idea does not require replacing natural-language interfaces.

It changes what happens beneath them.

---

# Caching matters again

Traditional software engineers spent decades learning that repeated work should not always be repeated.

AI systems sometimes temporarily forget that lesson.

Prompt caching and reused context are already important techniques in model infrastructure.

The principle can extend further.

If many users request similar operations:

route similar workloads intelligently;

reuse common representations;

preserve embeddings;

cache stable results;

share deterministic artifacts;

avoid rebuilding context unnecessarily.

Mechanical sympathy still matters when the machine happens to contain a model.

---

# Locality can improve efficiency

A request that repeatedly depends on the same large context may benefit from staying near where that context is already loaded.

A model runtime with relevant weights and cache already resident may be a better destination than another theoretically faster machine that must rebuild everything.

This resembles traditional concerns such as:

cache locality, data locality, warm services, avoiding unnecessary transfer.

AI infrastructure introduces different scales, but familiar systems principles remain useful.

---

# Public-good AI should be designed around constraints from the beginning

An application built for unconstrained cloud execution and later “optimized for low-end devices” may carry architectural assumptions that are difficult to remove.

A more inclusive design begins by asking:

> What is the least infrastructure on which a useful version should still work?

For example:

A learning system might operate with cached source material, a small local model, and occasional cloud escalation.

A commerce agent may perform local intent extraction and only use remote models for difficult ambiguity.

A mobility coordinator may rely largely on deterministic matching.

A family automation agent may run from an old phone and wake a model only for exceptional decisions.

Constraint is not merely a deployment concern.

It shapes the system.

---

# Connectivity should also degrade gracefully

Billions of people do not experience internet connectivity as an unlimited, always-on resource.

A useful AI system may need to work with:

intermittent connectivity, high latency, data caps, temporary complete disconnection.

This favours architectures where:

local state remains useful;

requests can queue;

results can synchronize later;

workflows do not lose meaning when the cloud disappears.

Again, the model itself is only part of the problem.

Distributed-systems design becomes central.

---

# Old devices can become interaction points even when they cannot reason deeply

Not every reused device needs to run an advanced language model.

A low-power phone could serve as:

sensor gateway, notification interface, task queue, local credential holder, automation trigger, camera, microphone, or relay to more capable compute.

This suggests separating:

> **where interaction happens**

from

> **where reasoning happens.**

A cheap device can remain the trusted human interface while difficult computation executes elsewhere.

That separation can dramatically broaden hardware options.

---

# Privacy can determine placement

Energy and speed are not the only scheduling dimensions.

Some workloads should stay local because the data should stay local.

A personal email classifier may operate on-device.

A sensitive family automation may remain within the household network.

A public dataset analysis might move freely toward available compute.

A scheduler therefore needs multiple constraints simultaneously:

**privacy · cost · deadline · energy · hardware · network · quality.**

This is a multi-objective systems problem.

---

# The system can explain why a task ran where it did

If execution becomes dynamic, users need some transparency.

A system might say:

> Processed locally because the data was marked private.

Or:

> Deferred until the laptop was charging because the result was not needed until morning.

Or:

> Used the cloud because the local model's confidence was insufficient.

Or:

> Batch execution shifted because the task had a six-hour deadline and a lower-resource window became available.

This turns resource awareness into understandable behaviour rather than invisible infrastructure magic.

---

# A first experiment: household compute discovery

One practical experiment is already close to what we have explored.

Take several devices:

old phone, laptop, desktop, perhaps a Raspberry Pi.

Each publishes a lightweight capability record.

The coordinator discovers:

availability, compute capability, energy state, permitted workloads.

Submit a set of tasks:

classification, document summarization, image processing, automation, small-model inference.

Measure:

- how often useful work can be kept local,
- how much idle hardware becomes productive,
- task completion time,
- energy use,
- complexity introduced by orchestration.

The experiment may prove that coordination overhead is not worth it.

That would still be useful knowledge.

---

# A second experiment: deadline-aware AI scheduling

Create tasks with different urgency.

For example:

**interactive:** answer within seconds.

**near-line:** answer within a few minutes.

**batch:** finish within six hours.

**background:** finish overnight.

Then allow the scheduler to choose:

local device, shared household node, cloud, or defer execution.

Measure:

cost, quality, energy, latency, user-perceived usefulness.

This tests whether explicitly modelling urgency creates meaningful savings.

---

# A third experiment: energy-aware local compute

Use a small compute node with variable renewable generation.

The workload queue includes restartable, non-urgent tasks.

Allow the node to process more aggressively when surplus power exists and slow down when energy is scarce.

The experiment need not begin with AI training.

Embedding generation or batch inference is enough.

The research question is simply:

> **Can useful compute opportunistically absorb otherwise-underused small-scale generation without damaging user experience?**

---

# A fourth experiment: portable compute near stranded energy

This is the most speculative idea.

Identify a site where:

surplus electricity genuinely exists;

export economics are unattractive;

network connectivity is sufficient;

a computational workload is flexible.

Deploy modest portable compute.

Measure the full economics:

energy actually available, hardware utilization, network cost, cooling, maintenance, power conditioning, downtime, cost compared with ordinary cloud execution.

The experiment should be allowed to fail.

We should not assume:

> stranded electricity + computer = cheaper AI.

The purpose is to learn under which conditions, if any, the model works.

---

# A fifth experiment: capability-aware model routing

Take one real application.

Define several execution paths:

- deterministic function,
- tiny local model,
- small local language model,
- cloud model,
- frontier model.

Create an evaluation set.

For every task category, determine the cheapest execution path that meets an acceptable quality threshold.

Then build a router.

This directly tests a principle behind AI Within Reach:

> **intelligence should be provisioned according to the problem rather than according to the largest model available.**

---

# Research questions

### 1. Minimum useful intelligence
For a particular public-good application, what is the smallest model or deterministic system capable of providing meaningful value?

### 2. Model routing
How reliably can a system predict when a task genuinely needs a stronger model?

### 3. Local resource discovery
How should heterogeneous consumer devices advertise useful AI capability inside trusted networks?

### 4. Mobility of workloads
Which AI tasks are portable enough to move among devices or locations without excessive data-transfer cost?

### 5. Delay tolerance
How much AI workload can realistically be deferred without reducing user value?

### 6. Energy-aware execution
Can deadlines and renewable availability be combined into practical schedulers?

### 7. Hardware reuse
When does extending the useful life of old hardware outperform purchasing a more efficient new device?

### 8. Small-scale renewable AI
Which applications are low-power enough to operate meaningfully from small solar or intermittent sources?

### 9. Graceful degradation
How should an AI application reduce capability when high-end inference becomes unavailable?

### 10. Deterministic reuse
Which repeated AI tasks should eventually compile into tested deterministic procedures?

### 11. Locality and caching
How much energy/cost can be avoided by scheduling workloads near already-loaded context, data and model state?

### 12. Privacy-aware scheduling
How should privacy constraints interact with model quality, compute availability and cost?

### 13. Stranded-energy compute
Under what real economic conditions does moving flexible computation toward surplus generation outperform grid export, storage or conventional data-centre execution?

### 14. Public infrastructure
Could schools, libraries, community centres or local institutions eventually provide shared AI capacity in the same way they provide other public digital infrastructure?

---

# What we would not claim

This theme is particularly vulnerable to attractive but unsupported conclusions.

We are not claiming that:

- distributed consumer hardware will replace data centres,
- small models will replace frontier systems,
- old phones are always energy-efficient,
- every factory should host GPUs,
- AI can run meaningfully on any discarded device,
- moving compute toward renewable generation automatically reduces emissions or cost.

Each of those depends on real measurements.

The larger claim is more modest:

> **AI workloads contain far more flexibility than today's cloud-first interaction patterns often expose.**

That flexibility is worth engineering around.

---

# The public-good opportunity

Consider what these principles might mean for the other Makex themes.

### Learning & Capability
A learner's device might provide basic tutoring locally and escalate only difficult questions.

### Commerce & Livelihoods
A shopkeeper might use an inexpensive phone-based merchant agent rather than maintaining cloud AI infrastructure.

### Human + Agent Collaboration
A personal agent can continue basic functions locally even when a cloud service is unavailable.

### Shared Capacity & Mobility
Matching may be performed mostly through deterministic or small-model computation rather than expensive continuous reasoning.

### Personalized Physical Solutions
AI assistance for modelling or guidance can be split between local interaction and occasional specialist cloud capability.

AI Within Reach is therefore not one application.

It is an infrastructure philosophy supporting all of them.

---

# The deeper question is resource allocation

AI is often discussed as a model problem.

Which model is smartest?

Which benchmark is highest?

Which accelerator is fastest?

But broad access may depend just as much on a different discipline:

> **resource allocation.**

Which task deserves the expensive model?

Which result can wait?

Which data must remain local?

Which device is idle?

Which computation can be reused?

Which energy source is currently underutilized?

Which hardware has already been manufactured and paid for?

Which capability can degrade safely?

That is systems engineering.

And it determines whether impressive intelligence becomes practical infrastructure.

---

# Access should not require waste

There is an uncomfortable possible future where AI becomes broadly desirable but every improvement in capability demands:

larger models, larger data centres, more accelerators, more electricity, more cooling, increasingly expensive access.

That trajectory may be appropriate for some frontier capabilities.

It should not automatically dictate every AI application.

Engineering history repeatedly shows another path.

Computers become smaller.

Protocols become more efficient.

Hardware gets specialized.

Common operations become cached.

Expensive abstractions become commodity infrastructure.

Software learns to make more from less.

We expect AI systems to experience the same pressure.

---

# What success would look like

Success would not mean everyone running a frontier model on an old phone.

It might look like this:

A family's old computer still performs useful background AI work rather than becoming waste.

A merchant uses a modest device to interact naturally with a digital-commerce network.

A learner can continue basic tutoring without continuous cloud connectivity.

A personal automation runs mostly through deterministic logic and wakes a model only when necessary.

A capable household device makes its NPU available privately to trusted applications.

Background jobs wait for cheap or cleaner compute when nothing is urgent.

Some workloads shift toward underutilized renewable power where the economics genuinely support it.

Applications gracefully reduce capability instead of simply failing when premium inference disappears.

And a frontier model becomes one resource among many rather than the default implementation of every intelligent feature.

---

# The question behind the project

The AI industry is currently demonstrating how much intelligence can be created when enormous computational resources are concentrated.

That is an extraordinary achievement.

The complementary question interests us just as much:

> **How much useful intelligence can we deliver when resources are limited, intermittent, already owned or geographically scattered?**

That question matters because most of humanity does not live inside a data centre.

People live with:

phones, old laptops, unreliable networks, different purchasing power, local renewable resources, privacy constraints, tasks that do not all need answers immediately.

If AI systems learn to respect those realities, access can expand without pretending infrastructure is free.

The objective is not the weakest possible AI.

It is:

> **the right amount of intelligence, on the right resource, at the right time.**

And when the resource already exists, perhaps use it before building another one.

That is the experiment.

---

## References / implementation notes

Use current primary sources for factual numbers and examples before publication:

- IEA — Energy and AI: https://www.iea.org/reports/energy-and-ai
- Google developer material for current on-device Gemma / edge-model capabilities: https://developers.googleblog.com/
- Microsoft sustainability / demand-shifting material: https://www.microsoft.com/en-us/sustainability/ and Microsoft Research

The stranded/surplus-energy idea must remain explicitly speculative until real economics are measured.
