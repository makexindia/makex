# Human + Agent Collaboration
## Delegating Work Without Delegating Away Control

**Status:** RESEARCH

### The useful agent may not be the one you are talking to

Today, most AI interactions still begin with a familiar model:

**one person → one assistant → one task**

But real life is rarely organized that way.

We work across phones, laptops, messaging applications, calendars, email systems, workplace tools and cloud services.

We collaborate with families, teams, friends and organizations.

Some responsibilities happen only when we ask.

Others continue whether we are paying attention or not.

An email still arrives while we are travelling.

A family obligation still exists when the person normally handling it is unavailable.

A long-running technical task may continue after the laptop that started it disconnects.

A message in a group may require five people to stop what they are doing and individually check something that software could have checked safely on their behalf.

As AI systems become more capable, the interesting question is therefore becoming larger than:

> **What can my agent do?**

We are interested in:

> **How should humans, multiple agents and multiple people share responsibility without increasing cognitive load or giving away human control?**

---

# Reactive agents and persistent responsibilities are different things

Many current assistants are primarily reactive.

A person asks:

> Find this information.

The agent performs the task.

The interaction ends.

Even scheduled automation is often treated as a sequence of independent executions:

> At 9 AM, do X.

But some useful responsibilities are not naturally single tasks.

Consider:

> Keep an eye on my important email and help me respond appropriately.

That is not merely one prompt.

It is an ongoing responsibility.

The system needs to know:

- what counts as important,
- what can be handled automatically,
- what requires review,
- when the owner is available,
- what to do when the owner is unavailable,
- who may act as a substitute,
- which actions are reversible,
- what history must be retained.

That is closer to **standing responsibility** than task execution.

We think this distinction will matter increasingly as agents become persistent.

---

# A simple example: email while the owner is unavailable

Imagine a local agent running primarily on a phone.

Its normal responsibility is:

**monitor selected email → classify incoming messages → draft replies when useful → send low-risk notifications → request review before consequential actions.**

While the owner is active, a normal interaction might look like:

> Draft ready. Review?

But now suppose the owner suddenly takes emergency leave or loses connectivity for an extended period.

The responsibility still exists.

One option is simply:

> stop everything.

Sometimes that is correct.

But another policy might be:

- simple personal messages → allow a trusted cloud agent to continue routine handling,
- sensitive personal decisions → ask a nominated family member,
- routine work messages → use an approved policy,
- work decisions requiring judgment → route context to an authorized colleague,
- anything outside those boundaries → wait.

The interesting part is not whether another agent technically can receive a task.

The interesting part is:

> **What exactly is being transferred?**

---

# A task is not the same as responsibility

Current interoperability standards are already developing strong primitives for agent collaboration.

The Agent2Agent protocol allows independent agents to discover capabilities and manage collaborative, stateful tasks. MCP has also developed durable asynchronous task primitives for long-running tool execution.

These are important foundations.

But consider the email example again.

The owner is not merely transferring:

> reply to email #3487.

They may be transferring:

> **For the next three days, assume responsibility for this class of communication under these limits, preserve this history, involve these people under these conditions, and return responsibility to me when I become available again.**

That contains more than a task.

It contains:

**authority · policy · duration · context · delegation boundaries · escalation rules · audit requirements · ownership · revocation**

That is the layer we find interesting.

---

# A possible abstraction: the Responsibility Manifest

We use the phrase **Responsibility Manifest** as a working concept, not a proposed standard.

It represents the information that might need to accompany a persistent responsibility when it moves between humans and agents.

### Goal

What responsibility is being maintained?

> Handle routine inbound communication while I am unavailable.

### Scope

Which systems, people or categories are included?

> Personal email except banking and medical messages.

### Authority

What may the delegate actually do?

> Draft all replies. Send routine acknowledgements. Never authorize payment.

### Human boundaries

Which actions always require a person?

> Changes in travel, financial commitments or legally consequential communication.

### Escalation

Who is approached when the owner cannot respond?

> Family member A for personal matters; colleague B for project-specific work.

### Context

What state does the recipient need in order to continue safely?

> Relevant conversation history, current commitments and pending decisions, not the user's entire personal memory.

### Provenance

What has already happened?

> Message received → classified → reply drafted → delegated → reviewed by B.

### Lifecycle

When does the responsibility begin and end?

> Begins on explicit handoff. Expires after 72 hours or immediately when revoked.

### Return

How does control come back?

> Summarize actions taken, unresolved items and decisions delegated before returning authority.

The precise fields are an implementation question.

The principle is more important:

> **Responsibility should not silently become unlimited agent authority.**

---

# Delegation should be narrower than identity

One dangerous shortcut would be to give another agent all the credentials and context available to the original one.

That makes transfer easy.

It also defeats least-privilege design.

If a temporary agent only needs to handle travel confirmations, it may not need access to banking correspondence.

If a colleague is helping review work email, they should not inherit personal context simply because both were available to one meta-agent.

So responsibility portability requires **context minimization** as much as context transfer.

The question becomes:

> What is the minimum context and authority needed to continue this responsibility correctly?

This resembles familiar systems-security thinking:

**capabilities rather than blanket access**

**time-bound credentials rather than permanent secrets**

**purpose-specific context rather than full memory**

**auditable delegation rather than invisible impersonation**

Human-centered agent systems may need those principles from the beginning.

---

# Availability should influence autonomy

Agent behaviour may also need to change depending on human availability.

### Human available

The system can behave conservatively.

> Draft → ask → execute.

### Human intermittently available

The system may batch decisions.

> Handle trivial work → collect uncertain items → request approval when connectivity returns.

### Human unavailable under a declared delegation policy

The system may temporarily exercise broader but explicitly bounded authority.

> Continue defined responsibilities → delegate where allowed → log everything → avoid irreversible exceptions.

This is more nuanced than:

**HITL ON**

versus

**HITL OFF.**

Human involvement becomes a dynamic systems property.

---

# Presence itself may become a signal

A persistent agent may eventually reason about signals such as:

- device connectivity,
- declared working hours,
- calendar state,
- explicit leave status,
- network reliability,
- whether the human acknowledged previous prompts,
- whether a trusted delegate is currently available.

But inference should never casually replace authorization.

A phone going offline should not automatically mean:

> You have permission to act as me.

There is an important difference between:

> **I cannot reach the human**

and

> **the human previously authorized this behavior when unreachable.**

Good agent systems need to preserve that distinction.

---

# The meta-agent idea

As people use more AI systems, another problem appears.

The user may have:

- a local private agent,
- a workplace assistant,
- a cloud research agent,
- a calendar automation,
- a coding agent,
- a family coordination agent,
- specialized services from several vendors.

No single system is necessarily the best place to perform every task.

We therefore imagine another possible role:

> **an agent whose primary responsibility is coordinating the user's other agents.**

We call this a **meta-agent** only as a working description.

It does not need to be the smartest model.

Its role might be more like an operating-system scheduler or control plane.

It could know:

- which agents exist,
- what each is allowed to do,
- which tools they possess,
- their privacy boundaries,
- current availability,
- cost,
- where relevant context lives,
- whether a task is portable,
- which human approvals apply.

Then:

> “Move this responsibility from my phone agent to the cloud until Monday”

becomes a meaningful operation.

---

# Portability is more than exporting a prompt

Modern agent systems are changing quickly.

A workflow created in one product may later work better elsewhere.

A user may wish to move because of:

privacy, cost, model capability, device availability, new tools, organizational policy, or preference.

Today, recreating an automation elsewhere may require manually rebuilding:

instructions, tools, credentials, schedules, context, failure handling, approval rules, and output expectations.

That creates another form of vendor lock-in.

True portability would mean more than exporting:

> **the prompt.**

It might require exporting something closer to:

**intent + dependencies + tests + authority model + expected outcomes + known state + failure policy.**

The receiving system could then prove that it can satisfy the contract before assuming responsibility.

---

# Portability needs verification

Suppose Agent A has successfully run an automation for six months.

We transfer it to Agent B.

Agent B says:

> Imported successfully.

That proves very little.

Different systems may interpret instructions differently.

Tools may expose different semantics.

Models may make different decisions.

Environmental assumptions may not hold.

So responsibility migration should ideally include tests.

For example:

- **historical replay**: could the new system process prior cases correctly?
- **shadow mode**: can it run alongside the existing workflow without acting?
- **policy tests**: does it request approval in the situations where approval is required?
- **failure injection**: what happens when an external tool is unavailable?
- **rollback**: can responsibility immediately return to the original system?

This begins to resemble CI/CD for agentic automation.

Software teams learned long ago that configuration cannot simply be copied into production and trusted.

Why should persistent AI responsibilities be treated differently?

---

# Human-human collaboration is part of the same problem

Agent systems are often discussed as:

> human ↔ agent

or:

> agent ↔ agent.

But most important human activity happens in groups.

Families.

Project teams.

Friends.

Communities.

Organizations.

Responsibilities already move among people.

AI could either make that coordination easier or create another layer of messages everyone needs to monitor.

We are interested in the first outcome.

---

# A small example: “Can someone check this for me?”

Consider a message in a group of friends:

> This product is unavailable around me. Can someone check whether it is available near you?

Without automation, every participant receiving the message performs a context switch.

Unlock phone.

Open application.

Search item.

Check location.

Return to group.

Maybe nothing is available.

A very small request has consumed attention from several people.

But suppose the message could carry a machine-readable optional task.

A participant's personal agent could recognize:

- required application/service,
- requested read-only action,
- information that may be returned,
- privacy implications,
- and perhaps perform a local simulation.

The human may then receive:

> This item appears available near your saved location. Share result with Vishal?

One tap.

No unnecessary search.

The human remains the authority.

The agent removes mechanical work.

---

# Not every request should become an agent task

This could become terrible very quickly.

Imagine every message in every group generating tasks for everybody's agents.

Automation would merely create machine-speed spam.

So the system needs social and technical boundaries.

A person might allow:

- family group → calendar assistance,
- close friends → selected read-only availability checks,
- work team → project coordination,
- unknown groups → no autonomous tasks.

The recipient should control what incoming agentic requests can execute locally.

Group membership alone cannot imply authority.

---

# Messaging may eventually need a new kind of message

Human messaging currently transports text, media, files, reactions and a few structured objects.

Agent-rich communication may eventually need something else:

> **an optional executable intent.**

Not arbitrary remote code.

A declarative description of a task.

For example:

**Goal:** Check whether product X is available.

**Dependency:** Application Y with authenticated account.

**Allowed operation:** Search/read only.

**Return:** Boolean availability + approximate location.

**Disclosure:** Do not reveal recipient's exact address.

**Expiry:** 20 minutes.

The human-visible message remains:

> Can anyone check this?

But the machine-readable layer allows compatible personal agents to assist.

This is conceptually similar to how calendar invitations made:

> “Let's meet Tuesday at 4”

into a structured object that software can act upon.

Perhaps some collaborative requests will eventually gain their own structured representation too.

---

# Shared agents are different from group chatbots

Another possibility is an agent belonging to the group itself.

Families already maintain shared structures:

calendars, shopping lists, documents, expenses, travel plans, reminders.

But coordination around those artifacts remains largely manual.

A family agent could have a bounded shared role.

Not:

> read everything and interfere constantly.

But perhaps:

> maintain shared commitments and help resolve coordination gaps.

For example:

The family discusses a possible trip.

The shared agent notices that no travel options have been researched.

It can research quietly.

If clarification is necessary, it asks one relevant person rather than interrupting everyone.

It may temporarily consult an individual's personal agent for availability, subject to permission.

Then it returns to the group with:

> These two dates appear compatible, and these travel options fit what was discussed.

The goal is not more conversation.

It is:

> **less coordination overhead per human decision.**

---

# Shared agents raise an ownership problem

A personal agent has an obvious principal.

A group agent may not.

Whose preferences dominate?

Who can change its policy?

Can one member give it access to something another member considers private?

What happens when two members disagree?

Can it contact an individual's personal agent without explicit permission?

What context belongs to the group versus an individual?

This becomes less like chatbot design and more like collaborative-systems design.

A useful group agent may require:

**shared policy · member-specific privacy · role-aware authority · decision provenance · conflict handling · transparent boundaries.**

These are social structures encoded into software.

That should be done carefully.

---

# Agents could reduce chatter by working in the background

Many group discussions contain unresolved micro-problems.

Someone says:

> We should find somewhere accessible for dinner.

Three hours later:

> Did anyone check?

Or:

> Who is bringing the document?

Or:

> Which day works for everyone?

A shared agent could maintain a list of unresolved coordination needs.

It may resolve some through available data.

Others may require a specialist member.

Others need a collective decision.

The system can therefore classify:

- can resolve autonomously,
- can research but not decide,
- needs one person's input,
- needs group approval.

The better it becomes at that classification, the less unnecessary human attention it consumes.

---

# Cognitive load should be a design metric

Agent systems are often evaluated on:

- task success,
- latency,
- cost,
- tool-call accuracy,
- reasoning benchmarks.

Those matter.

But human-assistance systems may need another metric:

> **How much human cognitive load did the system remove or create?**

Suppose an automation successfully completes 90% of its work but interrupts the user fifteen times per day.

Another succeeds only 80% autonomously but batches uncertainty into one useful review.

Which is the better assistant?

Likewise, a group agent that sends thirty helpful updates may be worse than one that sends two carefully chosen interventions.

Useful automation is not necessarily maximal automation.

---

# Human attention is a scarce resource

This suggests treating human attention similarly to other constrained resources in a distributed system.

Do not interrupt everyone if one person can answer.

Do not ask immediately if the decision can wait.

Do not request approval for an action already covered by policy.

Do not exercise authority merely because a human is slow to respond.

Batch related questions.

Escalate progressively.

Use confidence and consequence together.

A trivial reversible action with high confidence might proceed.

A consequential irreversible action should probably wait even at high confidence.

So an agent's escalation model might consider:

**uncertainty × consequence × reversibility × urgency × existing authority × human availability.**

That is far richer than a universal confidence threshold.

---

# Always-running does not have to mean always-thinking

Persistent agents introduce another systems concern.

An agent monitoring the world does not necessarily need an expensive model continuously running.

Much of a persistent system can be deterministic.

Email arrives.

Sensor changes.

Calendar event approaches.

A queue receives a message.

A merchant request expires.

A task changes status.

These events can be detected by conventional software.

Only some transitions require model reasoning.

A useful architecture may therefore look like:

**event → deterministic filter → policy evaluation → retrieve minimal context → invoke model only if necessary → deterministic validation → human approval if required → action → audit log.**

This is important for cost, reliability and explainability.

Agentic systems do not need to reinvent everything as probabilistic reasoning.

---

# Reusable procedures should become machinery

There is another consequence.

Suppose an agent solves the same deterministic problem repeatedly.

On the first occasion, model reasoning may be valuable.

But after the workflow is understood and validated, repeatedly paying a language model to rediscover the same procedure may be wasteful and less reliable.

The system could potentially convert stable behavior into reusable machinery:

**model reasoning → candidate procedure → tests → validated deterministic workflow → invoke without model where appropriate.**

The model remains available for exceptions.

This resembles compilation:

expensive reasoning creates a reusable artifact.

That idea belongs to our broader interest in efficient agent systems, but human-agent collaboration provides a strong reason for it:

> predictable responsibilities benefit from predictable execution.

---

# Environmental events should be first-class triggers

Many useful responsibilities do not begin with a chat message.

They begin because something happened.

An email arrived.

The weather changed.

A train was delayed.

A family member reached a destination.

A build failed.

A payment status changed.

A device came online.

A deadline approached.

The agentic ecosystem therefore needs to connect **events** with **authorized responsibilities**.

The layer we are interested in is the policy around invocation:

> **Which event is allowed to activate which responsibility under whose authority?**

That is as much an authorization question as an automation question.

---

# Auditability matters more as agents become invisible

A chatbot interaction is naturally visible.

The user sees the conversation.

An always-running system may make decisions while the person is doing something else.

That increases the importance of records.

Not exhaustive hidden reasoning.

Operational provenance.

For example:

**14:03** — work email arrived  
**14:03** — classified as routine scheduling  
**14:04** — owner's leave policy permitted delegate handling  
**14:04** — draft produced  
**14:05** — delegated reviewer approved  
**14:05** — reply sent  
**authority:** temporary leave policy  
**responsibility returns:** Friday 09:00

That is comprehensible.

And it gives the owner something meaningful to inspect later.

---

# The user should be able to ask: “Why did this happen?”

Agent autonomy without understandable provenance creates anxiety.

A good system should answer operational questions such as:

> Why did you contact this person?

> Why didn't you ask me?

> Which policy allowed this?

> What context did you share?

> Which agent actually performed the action?

> Who approved it?

> Can I prevent this next time?

Those questions should not require reading infrastructure logs.

They should be normal features of human-agent interaction.

---

# Responsibility should always have an owner

Delegation can form chains.

Human A delegates to Agent A.

Agent A delegates a subtask to Agent B.

Agent B requires input from Human B.

That makes one principle increasingly important:

> **Delegation should not make ownership disappear.**

At every point, it should remain possible to determine:

- who originated the responsibility,
- which authority is currently being exercised,
- who currently owns execution,
- who is accountable for the next decision,
- how the process can be stopped.

Distributed execution should not imply distributed ambiguity.

---

# Failure should return responsibility somewhere

What happens if the delegate fails?

A cloud service becomes unavailable.

The local agent loses connectivity.

The substitute human never responds.

Credentials expire.

A model refuses an action.

The responsibility should not vanish into a failed task record.

A persistent responsibility may need a fallback graph:

**primary agent → secondary agent → human delegate → owner queue for later review**

Different responsibilities may choose different behavior.

A reminder can wait.

A security incident might escalate aggressively.

A routine newsletter reply can expire.

The important part is defining that behavior before failure occurs.

---

# A possible responsibility lifecycle

A useful lifecycle might look something like:

**Defined**: the owner establishes purpose and boundaries.

**Active**: an agent currently maintains the responsibility.

**Delegated**: execution temporarily moves elsewhere.

**Awaiting Human**: a policy boundary requires human judgment.

**Degraded**: the normal execution environment is unavailable, so fallback rules apply.

**Suspended**: no permitted actor can proceed safely.

**Returned**: control moves back to the original owner or agent.

**Closed**: the responsibility no longer exists.

This is only a thought model.

But thinking in terms of lifecycle makes persistent agents much easier to reason about than treating everything as another chat session.

---

# What should be standardized, and what should remain personal?

Not every part of this belongs in a global protocol.

Transport and basic interoperability benefit from standards.

Personal policies may not.

A person's rule:

> My brother may approve travel changes while I am unreachable, but only below this budget.

is not a protocol specification.

It is personal policy.

A useful architecture may therefore need clean separation between:

**interoperability standards · execution/runtime primitives · identity and authorization · user-controlled policy · local/private context · domain-specific responsibility definitions.**

The open question is where those boundaries should sit.

---

# What we would like to prototype

## Experiment 1: Responsibility handoff

Create two deliberately different agent harnesses.

Give Agent A an ongoing bounded responsibility.

Define a simple manifest containing:

- goal,
- allowed actions,
- required tools,
- approval policy,
- relevant state,
- test cases,
- expiry,
- return conditions.

Transfer the responsibility to Agent B.

Measure:

- how much information had to move,
- whether behavior remained equivalent,
- where assumptions broke,
- whether the owner could understand the handoff.

## Experiment 2: Shadow migration

Before Agent B receives authority, let it process the same historical or live events without acting.

Compare its proposed decisions with Agent A.

Only transfer responsibility when defined policy tests pass.

This would explore whether agent automation can borrow ideas from deployment practices such as:

**shadow traffic · canary rollout · contract testing · rollback.**

## Experiment 3: Group task request

Create a small structured request that can be posted into a trusted group.

Each participant's local agent decides whether the request falls within permitted read-only capabilities.

The agent does not automatically reveal the result.

It asks the participant for lightweight approval where needed.

Measure:

**human interruptions · task completion time · privacy leakage · number of manual context switches.**

The objective is not to maximize autonomous task completion.

It is to determine whether software can reduce the coordination burden.

## Experiment 4: Family coordination agent

Give a shared agent access only to deliberately shared resources:

family calendar, shared notes, selected travel information, and explicitly permitted personal-agent queries.

Ask it to maintain unresolved coordination items without continuously messaging the group.

Evaluate whether it can determine:

- what it can resolve alone,
- which individual should be asked,
- which questions genuinely require group attention.

---

# Research questions

### 1. Responsibility vs task
What information distinguishes an ongoing responsibility from a normal stateful task?

### 2. Authority portability
How can authority move between agents without sharing blanket credentials or complete personal context?

### 3. Behavioral portability
How do we determine whether two different agent systems implement the same responsibility safely enough?

### 4. Human substitution
How should authority move temporarily from the owner to another person and then return?

### 5. Availability-aware autonomy
How should behavior change when the human is available, intermittently reachable or explicitly unavailable?

### 6. Group agency
Who owns a shared agent, and how should conflicting member preferences and privacy boundaries be handled?

### 7. Cognitive load
How should human interruption cost be measured alongside task success?

### 8. Incoming agentic requests
What makes a structured request safe enough for another person's local agent even to evaluate?

### 9. Event-driven agents
How should environmental events activate persistent responsibilities without accidentally expanding authority?

### 10. Provenance
What minimum operational history makes autonomous activity understandable and auditable to an ordinary user?

### 11. Failure ownership
Where does a responsibility go when every automated execution route fails?

### 12. Portability
Which parts belong in interoperable standards, and which should remain private user policy?

---

# What success would look like

Success is not a world where agents make every decision.

It might look like something quieter.

A person can assign recurring work without constantly supervising it.

Their phone going offline does not cause important responsibilities to disappear.

Their phone going offline also does not silently give an AI unlimited authority.

A task can move from a local system to a cloud system without losing its boundaries.

The receiving system can prove it behaves correctly before taking control.

A colleague or family member can temporarily exercise only the authority intentionally delegated to them.

Several people's agents can perform mechanical coordination without exposing private information or filling the group with machine chatter.

A shared agent knows when one person can answer a question instead of interrupting everyone.

Routine workflows become deterministic once they are understood.

Models are invoked where reasoning is actually useful.

Every consequential action retains understandable provenance.

And the human can always determine:

**what is happening · who is acting · under whose authority · how to stop it.**

---

# The question behind the project

The first generation of AI assistants asks:

> **What can I do for you?**

Persistent agent systems introduce a harder question:

> **What may I continue doing for you when you are not here, and who may safely continue when I cannot?**

That is not only an artificial-intelligence problem.

It is a distributed-systems problem.

An identity problem.

An authorization problem.

A human-computer interaction problem.

A collaboration problem.

And eventually a social problem.

The goal is therefore not maximum autonomy.

It is:

> **continuity without loss of agency.**

Humans have always delegated responsibilities to other humans.

Software agents may make that delegation dramatically more flexible.

The opportunity is to ensure that flexibility does not erase the boundaries that make delegation trustworthy in the first place.

That is the experiment.

---

## References / implementation notes

Use current primary protocol documentation for factual claims:

- Agent2Agent protocol: https://a2a-protocol.org/
- Model Context Protocol Tasks: https://tasks.extensions.modelcontextprotocol.io/

Do not claim that agent delegation itself is missing. The research focus is the higher-level transfer of **persistent responsibility, authority, context, provenance, and return conditions** above task-level interoperability.
