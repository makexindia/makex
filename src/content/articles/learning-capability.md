# Learning & Capability
## Education That Starts From the Learner

**Status:** PROTOTYPED + EXPLORING

### People do not arrive with course-shaped minds

Most education is organized around content.

Chapter 1.

Then Chapter 2.

Then Chapter 3.

A course assumes a sequence. A textbook assumes certain prerequisites. A tutorial chooses one level of explanation. A classroom has limited time to adapt itself separately to every learner.

But people do not arrive with identical backgrounds.

Someone may already understand half of a course deeply but be missing one concept introduced years earlier.

Another learner may understand the idea but struggle with the language in which the best resource is written.

Someone else may be able to listen comfortably but have difficulty reading a dense PDF.

A professional returning to a subject after years of specialized work may possess substantial adjacent knowledge while missing vocabulary that a newer graduate takes for granted.

The learner's mind is not a blank page.

It is an uneven graph.

At Makex, this leads us to a question:

> **What if learning systems started from the learner's existing knowledge and destination, rather than asking every learner to follow the same path through the material?**

---

# Why this matters to us

This question emerged from a very practical problem.

After spending years focused on a particular set of production systems and business problems, Vishal wanted to update his understanding across technologies he had not had an opportunity to work with directly.

A text-based learning platform offered well-structured technical courses.

The quality of the material was not the main problem.

The problem was the interface between the material and the learner.

Some sections covered things he already knew well and therefore felt unnecessarily slow.

Other sections assumed prerequisite knowledge that had either never been learned formally or had faded over time.

Stopping every few paragraphs to search for missing background created its own cognitive overhead.

Reading large amounts of technical text also imposed a different pace from having an expert conversation where questions could be asked immediately.

This suggested an experiment:

> Could a capable multimodal model sit between high-quality learning material and the learner without replacing the material itself?

The idea was not to ask an LLM to invent a course.

The idea was to give it a trusted source and make the interaction adaptive.

---

# Our first experiment: a source-grounded personal tutor

The first prototype was deliberately assembled from existing tools rather than built as a new AI platform.

High-quality web learning material was captured for offline study.

Pages were combined into a single document.

Where useful, that document could be transformed into a representation easier for a frontier model to process.

A prompt established the tutoring contract:

- the supplied source remained the primary learning material,
- the model should follow the learner's pace,
- known material could be compressed,
- confusing ideas could be explored deeply,
- missing prerequisite concepts could be explained when necessary,
- additional knowledge could be introduced to clarify the source without silently replacing it.

Once the text model had processed the material and acknowledged the learning instructions, the same learning context could continue through a live voice interface where the product supported it.

The learner could then say:

> Start from this topic.

Or:

> I understand this part; skip ahead.

Or:

> I don't understand why this is necessary.

Or simply interrupt.

The interaction became much closer to tutoring than reading.

But the experiment also revealed something more important:

> **A conversational interface is not the interesting part. The interesting part is deciding what the learner needs to understand next.**

---

# Grounding changes the role of the model

A generic AI tutor faces an obvious problem.

It can answer almost anything.

That does not mean it should.

When the learning objective is based on a particular book, course, paper, standard or technical document, unrestricted generation can gradually pull the learner away from the thing they intended to study.

Source grounding introduces a useful boundary.

The model can distinguish between:

**what the chosen material says**

and

**additional explanation introduced to help understand it.**

That distinction matters.

A learner studying a technical specification should know when an explanation comes from the specification and when the tutor is supplying outside context.

A student reading a historical source may need a different boundary.

A professional studying a regulatory standard may require much stricter traceability.

So one architectural principle is:

> **The more important the source of truth, the more explicitly the tutoring system should preserve provenance.**

The tutor should not merely sound convincing.

It should help the learner understand where knowledge came from.

---

# The larger problem is not tutoring

The experiment points toward something broader.

A tutor answers questions about learning material.

A **capability-building system** asks a different question:

> **What does this person need to understand in order to achieve a particular objective?**

Imagine someone wants to understand distributed consensus.

The system should not immediately begin with a course titled “Distributed Consensus.”

It should first understand what knowledge the learner already has.

Perhaps they understand networking and concurrency but not failure models.

Perhaps they know databases but have never thought carefully about clocks.

Perhaps the word “quorum” is familiar but its implications are not.

The target can therefore be represented as a graph rather than a sequence.

**Target capability**  
↓  
**supporting concepts**  
↓  
**their prerequisites**  
↓  
**learner's current evidence of understanding**

Learning can then follow the missing edges.

---

# A concept graph rather than a syllabus

Consider a simplified target:

> Understand how a distributed consensus algorithm works.

A conventional course might provide a fixed sequence of lessons.

A capability-oriented system might instead construct a dependency graph containing concepts such as:

- distributed state,
- network partitions,
- failure models,
- leader election,
- quorums,
- replication,
- ordering,
- timeouts,
- safety,
- liveness.

Each concept depends on others to different degrees.

The learner does not necessarily need to study every prerequisite equally.

If their understanding of networking is already strong, that branch can collapse.

If reasoning about concurrency is weak, the system may temporarily descend into that branch.

When enough prerequisite understanding exists, the learner returns to the original subject.

So instead of:

> Chapter 1 → Chapter 2 → Chapter 3

the flow becomes:

> **Goal → diagnose → bridge → return → reinforce**

That is closer to how a patient human tutor behaves.

---

# The prerequisite problem

One of the most frustrating forms of learning failure happens when the learner does not know what they do not know.

A tutorial says:

> As we know from linear algebra...

The learner does not.

Now several things can happen.

They may continue reading without understanding.

They may abandon the topic.

They may open another tutorial whose own prerequisite assumptions create another branch of confusion.

Or they may spend hours learning far more mathematics than was actually necessary for the immediate objective.

An adaptive system could instead identify the smallest useful bridge.

Suppose a particular machine-learning concept requires understanding a matrix operation.

The learner may not need an entire linear-algebra course before proceeding.

They may first need:

- what the operation means,
- why it appears here,
- what intuition is sufficient for the current problem,
- which deeper mathematical questions can safely wait.

This produces an important distinction:

> **Prerequisite learning should be contextual, not merely remedial.**

The learner should know not only *what* the missing concept is, but *why this particular concept matters for the thing they are trying to understand.*

---

# Context engineering for learning

This is where the problem becomes technically interesting.

Explaining the same concept to two learners may require completely different representations.

Suppose both need to understand a queue.

For one learner, the best analogy may be a line of people waiting at a counter.

For an experienced software engineer, that analogy may be unnecessary; comparing queue semantics with an event stream or ring buffer may produce faster understanding.

For someone learning operating systems, the important context may be scheduling.

For someone studying messaging systems, the important context may be durability and consumer semantics.

The concept is the same.

The *useful explanation* depends on:

**the learner's prior knowledge + the target topic + why the concept is needed now.**

That is a context-engineering problem.

A useful learning system therefore needs more than a prompt saying:

> Explain this simply.

It needs to reason about:

> **Explain concept A to learner B specifically so that B can later understand concept C.**

That is a much stronger constraint.

---

# Learning should be able to branch without getting lost

Once learning becomes adaptive, another problem appears.

Conversations can wander.

A learner studying distributed systems asks about memory visibility.

That leads to concurrency.

Concurrency leads to the Java Memory Model.

Then cache coherence.

All of those branches may be useful.

But eventually the learner still needs to return to distributed systems.

So adaptive tutoring needs structure above the conversation.

We think of this as a **learning harness**.

The harness maintains:

- the original objective,
- the current concept,
- temporary prerequisite branches,
- what has already been established,
- what remains unresolved,
- when the learner should return to the parent topic.

This could allow multiple temporary sub-conversations without losing the main learning path.

The model provides reasoning and explanation.

The harness preserves educational state.

---

# Remembering is part of learning too

Understanding something once does not mean it remains available when needed later.

A useful capability system should therefore know which concepts are foundational enough to deserve reinforcement.

Not all revision needs to look like an exam.

A concept can return naturally.

A later topic may ask the learner to explain it.

A new problem may require applying it.

The tutor may notice that an earlier misconception has resurfaced.

The system could therefore build a lightweight model of concept strength over time:

**new → understood with support → applied independently → reinforced → likely durable**

This should not become an invasive psychological score.

It is simply a way to distinguish:

> “We discussed this once”

from

> “There is evidence that this capability is usable.”

---

# Multilingual interaction can change who gets access

The language of the best resource and the language in which someone thinks most comfortably do not have to be the same.

That matters much more broadly than translation convenience.

AI potentially introduces an unusual possibility:

> **keep the source fixed while changing the interaction layer around it.**

An English technical document might remain the source.

The learner could ask questions in Hindi.

The tutor might explain a difficult idea conversationally in another local language.

Technical keywords could remain in English when that makes subsequent reading easier.

The learner could gradually switch language as their confidence grows.

The objective is not merely translation.

It is to reduce the amount of cognitive effort spent crossing the language boundary so more effort can be spent understanding the concept itself.

---

# Modality is another accessibility layer

The same applies to how information is consumed.

A PDF assumes sight and comfortable reading.

A lecture assumes hearing and a fixed pace.

A diagram may help one learner enormously and provide little value to another.

Modern multimodal systems can potentially translate among several representations:

**text ↔ speech ↔ diagram explanation ↔ image understanding ↔ interactive questioning**

That has obvious accessibility implications.

But accessibility cannot mean:

> “Let the model improvise something.”

It means:

> **adapt the interface while preserving reliability.**

The source-grounded tutor was a small experiment in exactly that direction.

---

# Personalization should not become intellectual isolation

A system capable of adapting everything to the learner also creates a danger.

If every explanation is optimized for what someone already believes and understands, learning may become too comfortable.

Education sometimes needs friction.

A learner should encounter unfamiliar terminology.

Different perspectives.

Hard texts.

Contradictory evidence.

The objective is therefore not:

> make everything easy.

It is:

> **remove accidental difficulty while preserving productive difficulty.**

Language barriers, missing prerequisites and inaccessible formats are often accidental difficulty.

Reasoning through a difficult proof or defending an argument may be productive difficulty.

A good system should learn to distinguish them.

---

# The learner model should remain subordinate to the learner

Personalized education requires information about the person.

That creates another architectural concern:

**Who owns the learner model?**

A system might know:

- what someone has studied,
- where they struggled,
- what they repeatedly misunderstand,
- their professional history,
- their goals,
- perhaps even patterns in how they reason.

That is extraordinarily sensitive data.

A learner should therefore be able to inspect, correct and ideally control the model describing them.

The system should be able to say:

> I believe you already understand X because of evidence Y.

And the learner should be able to say:

> No. I used that technology but never understood this part properly.

Personalization without correction becomes profiling.

We are more interested in **learner-controlled context**.

---

# Career development is another version of the same problem

This theme extends beyond formal education.

Consider a professional trying to change roles.

They face the same underlying problem:

> What do I know, what evidence do I have, what am I missing, and what should I learn next?

That question led to another Makex experiment: **Career OS**.

The system collects job opportunities and extracts recurring capability requirements.

Instead of judging a resume only as a document, it can compare those requirements against a broader evidence base:

- professional experience,
- projects,
- learning,
- public work,
- other verifiable history.

This allows an important distinction:

**Capability exists but resume evidence is missing**

versus

**Capability is genuinely missing**

Those require completely different interventions.

The first suggests resume improvement.

The second suggests learning or project work.

---

# Failure can become curriculum

A job search produces unusual data.

A candidate may evaluate dozens or hundreds of roles.

Across those roles, patterns emerge.

Perhaps Kafka appears repeatedly.

Perhaps system-design depth is consistently missing.

Perhaps the candidate understands a technology conceptually but lacks demonstrable hands-on evidence.

Perhaps a particular domain requirement appears only in one narrow class of jobs and is therefore a poor learning priority.

Career OS was built around a simple idea:

> **Repeated mismatch can be transformed into a learning signal.**

Instead of each rejected or unsuitable role disappearing into history, the system can aggregate capability gaps.

Over time:

**job-market demand + candidate evidence + historic misses**

can produce a prioritized learning plan.

This converts career development from:

> Which course should I take next?

into:

> **Which capability gap repeatedly prevents access to the work I want to do, and what evidence would demonstrate that I closed it?**

That is again a learning problem.

---

# From courses to capability evidence

This leads to a broader principle.

Finishing content is not the same as gaining capability.

A course-completion certificate is evidence that content was consumed.

A project is stronger evidence that concepts were applied.

An explanation may demonstrate understanding.

A benchmark may demonstrate engineering competence.

A publication may demonstrate research capability.

A production incident may demonstrate diagnostic reasoning.

So a learning system could eventually maintain not just:

> What have you studied?

but:

> **What evidence exists that you can use what you studied?**

That creates a possible capability ledger.

Not a universal score.

Not a ranking of people.

A personal record connecting:

**concept → learning source → practice → artifact → feedback → real-world application**

Such a record might help people maintain professional continuity across jobs, courses and independent learning.

---

# Learning systems should complement educators, not erase them

The goal is not to automate teachers out of education.

Human educators do things that a personalized model may not reproduce well:

- understand social context,
- notice emotional changes,
- create group learning experiences,
- challenge students deliberately,
- teach values and disciplinary culture,
- take responsibility for educational outcomes.

AI may instead change where human attention is most valuable.

A tutor does not necessarily need to repeat the same prerequisite explanation twenty times.

A teacher may gain better visibility into which concepts are blocking a class.

A mentor can spend more time on judgment, motivation, synthesis and difficult edge cases.

The machine handles some repetition.

The human retains educational responsibility.

---

# Existing work gives us a foundation

Adaptive learning and intelligent tutoring systems have existed for decades.

They already explore learner modelling, adaptive feedback, assessment and personalized sequencing.

Generative AI does not erase that history.

It adds new primitives:

- natural conversation,
- flexible explanation,
- multilingual interaction,
- multimodal understanding,
- dynamic content generation,
- tool use,
- much larger context windows.

The interesting research question is therefore not:

> Can AI personalize education?

That question predates modern LLMs.

A more useful question is:

> **How can generative systems extend adaptive learning without losing grounding, pedagogical structure, learner agency or evidence of actual understanding?**

That is much closer to what interests us.

---

# A possible learning architecture

We currently imagine several cooperating layers rather than one giant tutor prompt.

At the top sits the **learner's objective**.

Below it is a **concept graph** representing what that objective depends upon.

A **learner model** estimates which nodes are already understood and where evidence is weak.

A **learning harness** decides which branch should be active.

A **grounding layer** connects explanations to trusted sources.

A **context-engineering layer** determines how a concept should be explained to this learner for this target.

A **multimodal interaction layer** adapts language and interface.

An **evaluation layer** checks whether apparent understanding survives application.

And a **capability record** preserves evidence over time.

The language model is an important component.

It is not the entire system.

---

# What needs research

### Diagnosing knowledge

A learner may confidently claim to understand something they misunderstand.

Another may know something well but fail a vocabulary-based assessment.

How do we infer capability without turning learning into continuous examination?

### Building prerequisite graphs

Concept dependencies are not universal.

The prerequisites required for academic mastery may differ from those required for practical application.

Who determines the graph?

Can models propose it reliably?

How should experts correct it?

### Choosing depth

A prerequisite branch can become infinite.

How does the system know when the learner understands enough to return to the primary objective?

### Context transfer

If a concept is taught specifically to support a later concept, how should the explanation be constructed so that transfer actually occurs?

### Grounding

How do we let a model add useful background knowledge while maintaining clear provenance and avoiding confident contradictions of authoritative material?

### Reinforcement

Which concepts should return, when, and through what kind of activity?

### Evaluation

How do we distinguish fluent conversation from durable understanding?

### Learner ownership

How can personalization work without creating an opaque lifelong educational profile controlled by a platform?

These are the questions that make this theme interesting to us.

---

# What we would like to prototype next

The source-grounded tutor demonstrated that existing models can already make static material far more interactive.

The next useful experiment is not simply a prettier tutor.

It would be a small **goal-driven learning harness**.

Give it one target capability.

Give it a trusted source set.

Let it construct an initial concept dependency graph.

Let the learner inspect and correct what the system believes they already know.

Allow the system to open temporary prerequisite branches.

Require every branch to retain a path back to the original objective.

Capture lightweight evidence when a concept is applied successfully.

Then test whether learners reach the target faster or retain it better than when following the source linearly.

Only an experiment can tell us whether the architectural idea actually helps.

---

# Equal access is the larger reason

The implications extend beyond professional upskilling.

High-quality personal tutoring has historically been expensive because human attention is scarce.

The best educational material may exist in a language someone does not comfortably use.

A learner with a disability may encounter resources created for a different sensory interface.

A student may have missed one foundational concept years earlier and continue accumulating confusion above it.

A worker whose industry changes may need to rebuild capability without returning to formal education.

AI does not automatically solve any of these problems.

It can reproduce bad pedagogy, confidently explain something incorrectly, create dependency, amplify inequality and expose sensitive learner data.

But it also creates a possibility worth investigating:

> **A learning interface that can meet people closer to where they actually are.**

Not where their age says they should be.

Not where their degree says they should be.

Not where a standardized syllabus assumes they are.

Where they actually are.

---

# What success would look like

Success would not be an AI that answers every educational question.

It might look much simpler.

A learner can bring material they trust.

The system understands the destination they are trying to reach.

It notices a missing prerequisite before that gap becomes frustration.

It explains that prerequisite in a way connected to the eventual goal.

It lets the learner skip what they already understand without skipping what they only *think* they understand.

It supports the language and modality that make interaction accessible.

It remembers enough to reinforce fragile concepts later.

It clearly distinguishes source material from supplementary explanation.

It gives the learner control over the context used to personalize them.

And over time, it helps transform learning activity into evidence of usable capability.

---

# The question behind the project

Education has traditionally been forced to scale by standardizing the path.

Everyone receives approximately the same chapter, lecture or curriculum because deeply adapting instruction to every individual is expensive.

AI changes some of those economics.

So the question we want to explore is not:

> **Can an AI teach?**

It is:

> **Can we build learning systems that understand both where a person wants to go and enough about where they are starting from to construct a trustworthy path between the two?**

If that becomes possible, the important outcome is not a better chatbot.

It is something much more fundamental:

> **fewer people being excluded from capability simply because the path to acquiring it was designed for someone else.**

That is the experiment.

---

## References / implementation notes

Suggested sources for factual context:

- OECD work on intelligent tutoring / adaptive assessment: https://www.oecd.org/
- UNESCO guidance on multilingual education: https://www.unesco.org/en/articles/languages-matter-global-guidance-multilingual-education
- UNESCO guidance on generative AI in education and research: https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research

Do not imply adaptive tutoring is novel. The distinctive research angle here is the combination of source grounding, dynamic prerequisite repair, learner-controlled context, multimodality, and evidence of usable capability.
