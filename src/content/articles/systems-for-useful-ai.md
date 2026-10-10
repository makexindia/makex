# Systems for Useful AI
## Making Intelligence Behave Like Infrastructure

**Status:** RESEARCH + PROTOTYPES

### A powerful model is not the same thing as a dependable system

Modern AI systems can write code, interpret images, reason over documents, call tools and coordinate increasingly complex workflows.

That is extraordinary.

But useful infrastructure has always required more than intelligence.

It requires:

repeatability, authorization, state, failure handling, resource awareness, observability, interoperability, and predictable behaviour when the clever part is not needed.

At Makex, this technical layer sits underneath our other themes.

Where commerce uses agents, they should interact without overwhelming merchants.

Learning needs adaptive reasoning without losing grounding.

Human-agent collaboration needs persistent responsibilities and clear authority.

Mobility needs event-driven coordination.

Local AI needs intelligent routing across constrained resources.

So the question here is not:

> **What else can a language model do?**

It is:

> **What systems primitives are needed before model intelligence can become dependable infrastructure?**

---

# Not every intelligent action should require fresh reasoning

Large language models are valuable partly because they can solve unfamiliar problems from context.

But many real workflows repeat.

Suppose an agent repeatedly receives the same kind of document, extracts the same fields, applies the same validation rules and produces the same structured output.

The first time, model reasoning may be extremely useful.

After the workflow is understood and tested, repeatedly asking a probabilistic model to rediscover the exact same procedure may be:

more expensive, slower, harder to verify, less deterministic

than necessary.

That suggests a general principle:

> **Reason when the problem is novel. Reuse machinery when the problem has become understood.**

---

# From model output to reusable capability

Imagine an agent solves a recurring task.

The system could preserve more than the final answer.

It might preserve the **procedure**.

For example:

**natural-language request → model reasons about solution → proposes code, rules or structured workflow → tests run → human or automated validation succeeds → result becomes a reusable capability.**

Future tasks of the same class can invoke that capability directly.

The model returns only when:

inputs fall outside the validated range;

the procedure fails;

requirements change;

or judgment is genuinely required.

This resembles compilation.

The expensive flexible reasoning stage produces something cheaper and more predictable for repeated execution.

---

# A trusted capability repository

We can imagine a runtime maintaining a library of validated operations.

Not simply prompts.

Something closer to:

**procedure + input contract + output contract + permissions + tests + version + provenance + known limitations.**

A workflow might ask:

> Do we already have a trusted capability for extracting these fields?

If yes, use it.

If no, invoke a model to help create one.

This begins to resemble:

packages, bytecode, skills, or compiled automation

for agent systems.

The analogy is imperfect, but the engineering goal is clear:

> **Avoid spending model reasoning on work that has already become deterministic.**

---

# This does not mean eliminating language models

Some problems remain irreducibly ambiguous.

A model may still be needed to:

- interpret unfamiliar requests,
- resolve ambiguity,
- generate candidate plans,
- handle exceptions,
- synthesize information,
- make judgments where rules are insufficient.

The architecture therefore becomes hybrid.

**Deterministic software** handles stable mechanics.

**Small models** handle bounded language or perception tasks.

**Larger models** handle complex reasoning.

The system chooses among them.

That is much more interesting than replacing every `if` statement with an agent.

---

# Model choice should happen per task, not per application

Applications are often designed around a chosen model.

> This is our GPT application.

> This is our Gemini agent.

> This runs on model X.

But a useful workflow may contain many different levels of difficulty.

Consider a research pipeline:

- download documents,
- extract metadata,
- deduplicate them,
- classify relevance,
- summarize candidate sections,
- compare conflicting claims,
- produce a final interpretation.

Some of those operations are ordinary software.

Some may need a small model.

A few may deserve frontier-level reasoning.

The application should therefore ask:

> **What does this particular step require?**

rather than:

> **Which model does this whole application use?**

---

# Decomposition can reduce the amount of expensive intelligence required

One large model can often solve a complex task end to end.

That convenience can hide structure.

A task may decompose into:

**deterministic operations → simple semantic decisions → specialized reasoning → one genuinely difficult synthesis step.**

Career OS provided one practical example in our experiments.

A frontier model does not need to recompute every numerical comparison or retrieve every known candidate fact.

Deterministic components can:

parse, normalize, filter, calculate, retrieve, score according to explicit rules.

Model reasoning can focus on the parts that actually benefit from interpretation.

This can improve:

cost, reproducibility, latency, inspectability.

---

# Small models become more useful when the task is shaped correctly

A small model may fail at:

> Solve this entire complicated problem.

It may perform very well at:

> Given these five already-filtered options, classify which one satisfies this explicitly defined condition.

That means model capability is partly an orchestration question.

Instead of asking:

> How do we make a small model as capable as the largest model?

we can also ask:

> **How do we structure the system so a smaller model receives a problem it can solve reliably?**

This connects directly with AI Within Reach.

Task decomposition is not only a cost optimization.

It can be an access strategy.

---

# The event problem

Most agent interactions still begin with a deliberate invocation.

A person types something.

A schedule fires.

A program calls an API.

But the physical and digital world generates useful signals continuously.

A sensor detects rain.

A build fails.

A payment changes state.

A door sensor triggers.

A train is delayed.

A merchant receives a new request.

A vehicle enters a geographical region.

A family member reaches a destination.

These are not naturally conversations.

They are **events**.

The interesting question is:

> **How should an event safely become an input to an intelligent system?**

---

# Existing protocols already solve important pieces

The surrounding protocol ecosystem has advanced quickly.

A2A standardizes discovery and collaborative task interaction between independent agents.

MCP has also evolved beyond simple one-way tool invocation, including multi-round-trip interaction patterns and durable task handling.

Those are important building blocks.

So it would now be inaccurate to say:

> MCP is simply one-directional tool invocation.

But another problem remains.

---

# An event is not automatically authority

Suppose a rain sensor reports:

> Rain detected.

What should happen?

Close a window?

Notify someone?

Cancel watering?

Move something indoors?

Tell a shared family agent?

Do nothing because nobody authorized any of those actions?

The sensor does not possess authority merely because it produced information.

The system needs a rule connecting:

**event**

to

**standing responsibility**

under

**human-approved policy.**

That is a layer above transport.

---

# A possible abstraction: the Stimulus Envelope

As with the Responsibility Manifest in our Human + Agent Collaboration work, we use **Stimulus Envelope** only as a working idea.

An event entering an agentic system might carry fields such as:

### Source
Who or what generated this signal?

> rain-sensor-3

### Event
What happened?

> rainfall threshold exceeded

### Confidence
How reliable is the observation?

> 0.97

### Time
When did it happen?

### Scope
Which location, device or user does it concern?

### Provenance
Can the origin be authenticated?

### Allowed consumers
Which responsibilities are permitted to receive this signal?

### Sensitivity
Does the event contain private information?

The agent system then asks:

> **Is there an authorized responsibility whose policy says this event matters?**

That is different from allowing the sensor to call an arbitrary agent.

---

# Sensors should publish facts, not invent authority

A useful architecture might look like:

**environmental event → authenticated event source → deterministic policy filter → matching standing responsibility → context retrieval → model reasoning only if needed → permitted action → provenance record.**

The rain sensor does not decide:

> Message the user's family.

It says:

> Rain observed.

A previously authorized responsibility decides what that observation means.

This separation is important.

It keeps environmental systems composable.

---

# Physical-world experiments make this tangible

Several Makex experiments point in this direction.

A low-cost ESP8266-based secure gate explored the idea that inexpensive physical hardware can expose controlled actions to a more capable digital system.

A Raspberry Pi-based vision experiment explored local classification of animals approaching vehicles, where perception could eventually become a trigger for an alarm or deterrent.

These are simple prototypes.

But they expose the larger architecture:

**sense → interpret → decide → act.**

The difficult question is often not making each component work individually.

It is determining how authority moves safely across that chain.

---

# A travel experiment exposed the same missing layer

On a motorcycle trip from Bengaluru to Rameswaram, Vishal wanted to explore whether an online AI system could adapt to real travel progress.

If the journey was delayed, perhaps the system could help with:

amenities, replanning, catch-up options, or other situational assistance.

But the agent did not naturally receive the changing physical context.

A custom application had to push location updates into an online spreadsheet, while an online agent periodically inspected that data.

It worked as an experiment.

It was not an elegant interface.

The deeper question was:

> **Why should every developer create a bespoke bridge between changing environmental state and an agent that has already been authorized to help?**

---

# Event-driven AI should not mean constant model execution

An obvious implementation would be:

> Every event wakes the model.

That would be expensive and noisy.

Most events can be filtered conventionally.

A better flow may be:

**event arrives → schema validation → authorization check → cheap deterministic rules → deduplication → threshold / temporal logic → retrieve minimal state → model invoked only if interpretation is required.**

For example:

A motion sensor producing fifty events in one minute does not require fifty LLM calls.

The system may collapse those signals into:

> sustained motion detected for 90 seconds.

Only then does higher-level reasoning become useful.

---

# Human attention should be treated similarly

The same layered filtering applies before notifying people.

Raw event:

> location changed.

Derived event:

> traveller is 42 minutes behind expected schedule.

Policy:

> Only notify if delay exceeds 30 minutes and threatens a reservation.

Agent reasoning:

> Determine whether replanning would help.

Human interruption:

> Your delay may cause you to miss X. I found these two alternatives. Review?

That is dramatically more useful than:

> You moved again.

---

# Agent traffic needs provenance

As agents interact with more systems and other agents, another problem grows:

> **Who is this agent acting for?**

A request may originate from:

the owner, a delegated family member, an employer, another agent, a shared group agent, or an automated responsibility.

Without provenance, the receiver sees only:

> an agent requested something.

That will become increasingly insufficient.

---

# The principal should remain visible through delegation

Consider a chain:

**Vishal → personal agent → research agent → merchant agent.**

The merchant agent should potentially be able to distinguish:

> This request ultimately originates from Vishal under a shopping authorization

from:

> This request originates from an autonomous crawler.

Likewise, delegated authority matters.

Perhaps:

**Vishal → family delegate → delegate's agent → service.**

The original authority chain should not disappear simply because several agents are involved.

This links directly with the Responsibility Manifest idea.

---

# Identity is not the same as disclosure

Preserving provenance does not require exposing a person's entire identity everywhere.

A merchant may only need to know:

> this request comes from a cryptographically accountable consumer principal with a valid local-commerce authorization.

A service may need:

> this agent is acting under employer X's policy.

Another interaction may genuinely require full identity.

So the problem is:

> **bind actions to accountable authority while revealing only the identity information necessary for the interaction.**

That is both a security and privacy problem.

---

# Rate limits should understand principals too

Agent-generated traffic may grow rapidly because software can act much faster than humans.

Traditional rate limiting often focuses on:

IP addresses, API keys, accounts, devices.

But if agents delegate freely, those identifiers may not map cleanly to the actual actor.

Suppose one person launches ten agents.

Should they receive ten times the request quota?

Probably not automatically.

Another system may need to distinguish:

**agent instance** from **organization** from **ultimate principal.**

That introduces interesting questions around credential binding and delegated identity.

---

# Provenance should be operational, not philosophical

We do not need every agent to reveal hidden reasoning.

What systems need is understandable operational history.

For example:

**08:42** — user-authorized commerce search created  
**08:42** — buyer agent decomposed request into 3 items  
**08:43** — local discovery agent contacted 4 candidate merchants  
**08:44** — merchant agent returned stock confirmation  
**authority:** purchase-discovery policy  
**principal:** pseudonymous verified buyer  
**no purchase executed**

This is enough to answer:

> Why did this happen?

without attempting to record private internal chain-of-thought.

---

# Mechanical sympathy still matters

The AI era sometimes makes ordinary computer-systems concerns appear old-fashioned.

They are not.

AI workloads run on:

processors, memory, networks, storage, caches.

The same basic principle remains:

> **software should understand the machine it asks to do the work.**

The exact techniques used in low-latency Java do not transfer mechanically to AI systems.

The mindset does.

---

# Repeated context is repeated computation

Large AI prompts often contain substantial stable context.

System instructions.

Tool definitions.

Policies.

Long reference documents.

Repeated examples.

If those tokens are processed from scratch every time, work is repeated.

Modern AI providers already expose prompt caching specifically to avoid some of that repeated computation.

That is a concrete example of a broader principle:

> **AI performance benefits from locality and reuse just like traditional computing does.**

---

# Context placement becomes architecture

Suppose a thousand related tasks all use:

the same policy, the same tool definitions, the same long reference corpus, and similar instructions.

There may be value in keeping those workloads near:

the same cached prompt state, the same retrieved data, the same embeddings, or the same warm model/runtime.

The fastest theoretical processor is not always the fastest end-to-end execution environment if everything useful must first be reconstructed there.

This is traditional systems thinking appearing at a new scale.

---

# Data movement matters too

A model may be remote.

But the data may be local.

Sending enormous context repeatedly can dominate both cost and latency.

A useful system therefore asks:

**Can we move the model closer to the data?**

or:

**Can we reduce the data before moving it?**

or:

**Can we reuse a cached representation?**

or:

**Can a local component answer enough of the question that remote reasoning receives only the relevant subset?**

That connects Systems for Useful AI with AI Within Reach.

---

# Batch when the human is not waiting

Many model requests are treated as independent interactive calls.

But if fifty background tasks are waiting, batching may improve utilization.

Similarly:

embedding generation, classification, evaluation, document processing, simulation

may be scheduled differently from interactive chat.

The runtime should know whether:

a human is waiting;

a deadline exists;

the job can be interrupted;

results can be processed together.

Systems should not optimize every workload for conversational latency.

---

# Mechanical sympathy should become AI sympathy

Traditional mechanical sympathy asks:

> What does the hardware actually do when this code executes?

An analogous AI-systems mindset asks:

> What actually happens when this model workflow executes?

How much context is reread?

Which model is loaded?

Where does the data move?

How much work is duplicated?

Which state can be reused?

Which calls genuinely require reasoning?

Which steps serialize unnecessarily?

Where are the latency tails?

What happens under concurrent demand?

How does cost scale?

That is much more useful than simply counting tokens after the fact.

---

# Evaluation should be built into the runtime

A model choosing its own strategy can produce impressive results.

But if a workflow matters repeatedly, there must be a way to know whether changes improve or degrade it.

This suggests preserving:

test cases, reference outputs, policy assertions, failure cases, performance measurements

alongside reusable capabilities.

When:

the prompt changes;

the model changes;

a tool changes;

or an automation moves to another agent harness,

the system can rerun those tests.

This connects directly with our responsibility-portability work.

AI workflows need regression testing too.

---

# The agent system should know what it knows how to do reliably

There is an important difference between:

> I can attempt this task.

and:

> I have a validated procedure for this task.

An agent runtime could represent this distinction explicitly.

For example:

**experimental capability**: model will reason from scratch.

**learned capability**: a workflow has succeeded but lacks sufficient validation.

**validated capability**: known tests and policies pass.

**restricted capability**: works only within declared conditions.

That gives orchestration systems a way to prefer reliable machinery before open-ended reasoning.

---

# Capability discovery could include quality, not just existence

Agent protocols increasingly allow systems to discover what other agents can do.

But capability descriptions could eventually become richer.

Instead of:

> This agent can summarize documents.

perhaps:

> This agent can summarize English financial PDFs under 50 pages; evaluated on test set X; average cost Y; no external network access; output schema Z.

Then another orchestrator can make an informed decision.

This resembles service discovery plus behavioural metadata.

It becomes especially valuable when multiple agents claim the same capability.

---

# Tool choice should be testable

When an agent has ten possible tools, model selection is often left to semantic reasoning.

That works surprisingly well.

But stable tasks can be evaluated.

For a known request class:

Which tool does the agent select?

Does it choose the cheapest valid one?

Does it avoid a dangerous tool?

Does it ask for authorization where required?

Those cases can become tests.

Again:

> **flexibility during discovery, determinism after confidence.**

---

# Physical AI needs the same discipline

A language-model mistake in a draft may be inconvenient.

A mistake controlling a physical system may cause damage.

So systems involving:

doors, vehicles, machinery, alarms, or other physical actions

need stronger boundaries.

One useful hierarchy might be:

**sensor → deterministic safety constraints → intelligent interpretation → proposed action → independent validation → actuation.**

The LLM should not necessarily be the last thing between an ambiguous signal and a motor.

---

# Scarecrow Vision illustrates the pattern

A small Raspberry Pi vision system classifying animals near parked vehicles can be useful even with a modest model.

The perception model might answer:

> animal detected.

A deterministic system can then decide:

Is detection persistent?

Is confidence sufficient?

Is the target within the relevant region?

Is deterrent action currently allowed?

Only then:

sound alarm or trigger another safe response.

The intelligence identifies the situation.

Policy governs the action.

That is a safer architecture than asking:

> AI, what should I do?

for every video frame.

---

# Secure Gate exposes the authorization side

A low-cost microcontroller can physically unlatch a door.

That action is simple.

The hard question is:

> **Who is allowed to cause it?**

An intelligent system may provide:

face or gesture interpretation, context, communication, or orchestration.

But final actuation should pass through explicit authentication and authorization.

In the Secure Gate experiment, TOTP-style authorization was part of treating the network itself as untrusted.

That principle transfers directly to agentic physical systems:

> intelligence can propose; authority must still be proven.

---

# AI systems need control planes

As these pieces accumulate, a familiar architecture emerges.

Traditional distributed systems separate:

**data plane**

from

**control plane.**

Agentic systems may benefit from a similar distinction.

The execution plane performs actual work.

The control plane manages:

capability discovery, policy, identity, delegation, model selection, resource routing, evaluation, provenance, event subscriptions, failure handling.

The language model does not need to own all of that.

In fact, it probably should not.

---

# A possible runtime architecture

One possible conceptual stack looks like this:

### 1. Stimulus layer
Human messages, schedules, sensors, webhooks, system events.

### 2. Identity and authority layer
Who caused this event, and under whose permissions may anything happen?

### 3. Responsibility / policy layer
Which standing responsibility, if any, should react?

### 4. Capability registry
Is there already a tested way to perform this work?

### 5. Planner / decomposer
If not, how should the task be divided?

### 6. Resource router
Deterministic code, local model, specialist model, shared compute or frontier model?

### 7. Execution
Tools and agents perform bounded work.

### 8. Validation
Did outputs satisfy policy and correctness constraints?

### 9. Provenance
What happened, under whose authority, and with what result?

### 10. Learning / compilation
Should a successful repeated solution become a reusable capability?

The model participates in several layers.

It is not the stack itself.

---

# This is where the other Makex themes converge

### Commerce & Livelihoods
A merchant agent receives bounded buyer demand, uses deterministic inventory where possible and model reasoning only for ambiguous interactions.

### Learning & Capability
A tutor uses deterministic concept state and evaluation while language models generate explanations.

### Human + Agent Collaboration
Responsibilities move among agents while authority and provenance remain intact.

### Shared Capacity & Mobility
Events and matching can be processed cheaply before asking models or humans to intervene.

### Personalized Physical Solutions
AI helps translate requirements and assist design, while deterministic engineering constraints protect the physical output.

### AI Within Reach
Resource-aware routing decides where and how much intelligence should execute.

Systems for Useful AI is therefore not another application domain.

It is the infrastructure logic underneath them.

---

# What we would like to prototype

## Experiment 1: Reason once, reuse

Give an agent a recurring structured task.

Allow it to reason freely the first several times.

Capture the stable procedure it converges on.

Turn that procedure into:

code, rules, or a declarative workflow.

Create tests.

Compare future executions:

**fresh LLM reasoning**

versus

**validated deterministic capability.**

Measure:

cost, latency, failure rate, maintenance effort, behaviour when assumptions change.

## Experiment 2: Capability router

Create several implementations for the same broad task:

deterministic logic, small local model, larger local model, economical cloud model, frontier model.

Use an evaluation set.

Build a router that attempts the least expensive adequate capability first.

Escalate when confidence or validation fails.

Test whether the system can reduce model usage without unacceptable quality loss.

## Experiment 3: Environmental event gateway

Connect several event sources:

weather sensor, device state, software webhook, location update, calendar event.

Represent each through a common event structure.

Do **not** let them call agents directly.

Instead:

authenticate event;

match authorized responsibilities;

filter deterministically;

invoke reasoning only where useful;

record provenance.

This tests whether environmental inputs can become composable without granting sensors uncontrolled agency.

## Experiment 4: Agent provenance chain

Create a task delegated through several actors:

human → personal agent → specialist agent → external service.

Preserve:

principal, delegated authority, scope, operation history

through every hop.

Measure what identity information must actually be disclosed at each stage.

## Experiment 5: Compile repeated agent behaviour

Give an agent a family of recurring tasks.

Detect when its successful trajectories become sufficiently similar.

Generate a candidate reusable artifact.

Run historical cases against it.

If it passes:

prefer the artifact.

If it encounters an unsupported condition:

escalate back to model reasoning.

This tests whether an agent can gradually convert experience into cheaper dependable machinery.

## Experiment 6: Cache/locality-aware scheduling

Create workloads sharing large common context.

Compare naive independent routing with routing that tries to preserve:

stable prompt prefixes, warm context, retrieval results, local data.

The experiment asks how far reuse principles can extend across an application pipeline.

## Experiment 7: Physical action boundary

Use a harmless physical prototype.

Perception model detects an event.

The model proposes an action.

A deterministic policy layer decides whether action is permitted.

Require authenticated authority for actuation.

Inject:

false detections, network failure, stale events, conflicting commands.

Measure whether the safety boundary remains intact.

---

# Research questions

### 1. Deterministic compilation
When has a probabilistic workflow become stable enough to turn into reusable software?

### 2. Capability representation
What metadata should a reusable agent capability carry beyond its tool name?

### 3. Model escalation
How can a runtime determine reliably that a cheaper capability is insufficient?

### 4. Task decomposition
Can complex frontier-model workflows be decomposed automatically into smaller bounded tasks suitable for specialist or local models?

### 5. Event invocation
What standard representation should connect environmental events to authorized agent responsibilities?

### 6. Authority
How do events, agents and tools prove whose authority is being exercised?

### 7. Delegation provenance
How should the principal remain visible across multi-agent chains without unnecessary identity disclosure?

### 8. Agent traffic
Should rate limits and abuse prevention operate partly against the ultimate principal rather than only against agent instances or credentials?

### 9. Capability testing
What constitutes sufficient evidence that a reusable automation behaves safely?

### 10. Portability
Can validated capabilities move between agent runtimes without losing behavioural guarantees?

### 11. Caching and locality
How should AI workloads be routed to maximize reuse of context, data and model state?

### 12. Physical AI
Where should deterministic safety boundaries sit between probabilistic perception/reasoning and real-world actuation?

### 13. Observability
What operational provenance is sufficient for people to understand agent actions without exposing private internal reasoning?

### 14. Graceful degradation
How should systems preserve useful function when their preferred model, network, device or external agent becomes unavailable?

---

# What we would not claim

This work should avoid several tempting overstatements.

We are not claiming that:

- LLMs should be replaced by rules,
- agents should autonomously compile arbitrary code and trust it,
- a new protocol is necessarily required for every concept described here,
- MCP or A2A fail to support asynchronous agent interaction,
- small models can replace frontier models for every task,
- conventional software engineering already has every answer.

The existing standards are evolving quickly.

Those developments reduce the amount of new plumbing developers should invent.

The research opportunity is increasingly **above and between those protocol primitives**:

policy, authority, reuse, evaluation, routing, event semantics, resource efficiency, human control.

---

# What success would look like

Success would not mean creating one universal agent framework.

It might look like this:

A system receives an environmental event without immediately waking an expensive model.

It knows which human-authorized responsibility, if any, the event belongs to.

A repeated task uses a validated procedure instead of generating new code every time.

A difficult step escalates to a powerful model while simple work stays local and cheap.

Several agents can cooperate while the original principal remains accountable and visible.

A physical action cannot occur merely because an LLM suggested it.

A workflow can move to another runtime and rerun its behavioural tests.

Repeated context is cached rather than recomputed unnecessarily.

Known capabilities advertise their limits as well as their strengths.

Failures degrade into simpler useful behaviour rather than collapsing the whole system.

And the human can still answer:

**What happened?**

**Why did it happen?**

**Who authorized it?**

**Which system performed it?**

**Can it be stopped or changed?**

---

# The question behind the project

The first phase of the generative-AI revolution has demonstrated something astonishing:

> **general-purpose models can dynamically construct behaviour that previously required explicitly programmed software.**

The next systems question may be almost the reverse:

> **Once useful behaviour has been discovered, when should we stop rediscovering it?**

When should reasoning become machinery?

When should conversation become an event?

When should repeated behaviour become a tested capability?

When should a large model hand work to a smaller one?

How should authority survive when execution moves between agents?

How do we connect environmental change to intelligence without making the physical world an uncontrolled prompt stream?

And how do we make all of this efficient enough that intelligence becomes infrastructure rather than an expensive novelty?

The goal is not to make AI less intelligent.

It is to make intelligent systems more engineered.

> **Flexible where flexibility helps.  
> Deterministic where certainty matters.  
> Efficient where work repeats.  
> Accountable wherever actions affect people or the physical world.**

That is the experiment.

---

## References / implementation notes

Use current primary documentation for claims about protocol capabilities:

- A2A: https://a2a-protocol.org/
- MCP: https://modelcontextprotocol.io/ and https://tasks.extensions.modelcontextprotocol.io/
- OpenAI prompt caching documentation: https://developers.openai.com/api/docs/guides/prompt-caching
- Anthropic prompt caching documentation: https://platform.claude.com/docs/en/build-with-claude/prompt-caching

Do not frame A2A/MCP as missing task delegation or async primitives. The research angle is the higher-level policy/control plane around authority, responsibility, event semantics, reusable capability, evaluation and resource routing.
