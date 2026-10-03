# Personalized Physical Solutions
## Bringing Custom Fit Within Reach

**Status:** EXPLORING

### Sometimes the problem is not that a solution does not exist

It is that the solution does not exist **where you are, at a price and in a form you can practically access.**

Mass-produced products work because standardization makes them affordable.

Shoes are manufactured around standard sizes.

Soles have standard geometries.

Materials are chosen for typical users.

Retail supply chains work best when thousands of people can buy approximately the same thing.

Most of the time, this works remarkably well.

But individual human bodies are not standardized.

Sometimes a person needs a very small change that makes an enormous difference:

- a particular height,
- a slightly different geometry,
- different cushioning,
- different stiffness,
- a product shaped around one person's requirement rather than an average one.

At Makex, that leads us to a question:

> **Can emerging digital fabrication make useful physical personalization available locally, without requiring every town to have a specialist manufacturer?**

---

# The problem became real inside our own family

This question did not begin as a startup idea.

It began after Vishal's mother underwent knee-replacement surgery.

Afterwards, a difference between the two legs created a practical footwear problem.

The exact correction itself is something that should be determined with appropriate professional guidance.

But once the requirement exists, another problem begins:

> **Where do you actually get footwear that implements it properly?**

In a large city there may be specialist orthotic or customized-footwear providers.

In a Tier-2 city, the most immediate option may be the neighbourhood cobbler.

That is what we tried.

The local solution was straightforward: add a thick rubber layer underneath an existing shoe to compensate for the height difference.

It also proved unsafe.

The resulting geometry and bulk changed how the shoe behaved enough that Vishal's mother nearly fell.

That was the point where improvisation stopped being acceptable.

---

# The lesson was not “cobblers cannot do this”

That would be the wrong conclusion.

A local cobbler possesses useful skills:

- shoe construction,
- repair,
- bonding,
- finishing,
- material handling,
- the ability to integrate modifications into real footwear.

Those skills remain valuable.

The missing capability was different.

The cobbler was being asked to solve a **custom engineering problem** using the tools and materials normally available for footwear repair.

Determining:

- the correction geometry,
- how it should transition across the sole,
- what mechanical behaviour is needed,
- how much material should be added,
- where flexibility must remain,
- what form is stable during walking

is not simply a shoe-repair task.

So instead of replacing the cobbler, a better system could give the cobbler a better component to work with.

That changes the question from:

> Can the local cobbler somehow manufacture a medical-grade customized sole?

into:

> **Can a digitally designed component be fabricated accurately elsewhere locally, then integrated into footwear using existing local skill?**

That is a very different model.

---

# The missing middle

Today there are increasingly capable specialist companies at one end.

At the other end are local footwear and repair businesses available almost everywhere.

Between them sits a gap.

A possible workflow could connect several existing capabilities:

**professional assessment → digital requirement → custom design → local 3D-printing studio → local footwear integration → fit / professional validation → iteration**

No single participant has to do everything.

The clinical professional does not need to manufacture shoes.

The 3D-printing studio does not need to diagnose the person.

The cobbler does not need to become a CAD engineer.

The user does not need to learn 3D modelling.

Technology becomes the glue between existing capabilities.

---

# This is not hypothetical manufacturing technology

Customized digitally manufactured footwear components already exist.

Specialist providers in India already sell customized insoles and footwear using digital measurement / scanning and digital fabrication.

Research also demonstrates that 3D-printed footwear components can combine individualized geometry with controllable mechanical behaviour.

So our question is not:

> Can someone 3D-print an insole?

That has already been demonstrated.

Our question is:

> **Can the capability be decomposed into a safe, affordable workflow that reaches places where specialist customized-footwear services are not locally available?**

---

# A distributed fabrication model

Consider a person in a Tier-2 city.

A qualified professional determines that a particular external correction is appropriate.

Instead of sending the person repeatedly to a specialist fabrication centre, the requirement could become a structured digital specification.

That specification might describe:

- geometry,
- height,
- transition profile,
- material constraints,
- footwear constraints,
- clinically relevant limits.

A digital model can then be generated.

The actual fabrication might happen at a general-purpose local 3D-printing studio.

The resulting component can then go to a local footwear specialist or cobbler who understands how to integrate it cleanly into a usable shoe.

The final result should still be checked for fit and appropriateness.

The architecture becomes distributed:

> **specialist knowledge can remain specialized while manufacturing and integration become local.**

---

# The role of the cobbler changes rather than disappears

This distinction matters to us.

Technology projects often start from:

> How do we automate this occupation?

We are more interested in:

> **How can technology expand what an existing skilled person can safely offer?**

The cobbler may understand footwear construction far better than a software engineer.

A 3D-printing studio understands fabrication equipment.

A clinician understands the person's physical requirement.

A digital system can help those three capabilities interoperate.

That may create economic opportunity rather than remove it.

The local craftsperson can provide:

- integration,
- finishing,
- repair,
- replacement,
- adjustment,
- practical advice around actual footwear.

The new technology supplies the component that was previously difficult to fabricate locally with sufficient precision.

---

# Personalization becomes a data problem

A handmade correction can disappear when the shoe wears out.

The next shoe starts almost from zero.

A digital workflow changes that.

Suppose the effective correction becomes a model containing explicit parameters.

The next version can begin from the previous one.

Instead of:

> Make something similar again.

the system can record:

> Version 1: these dimensions.

> Version 2: reduce this region.

> Version 3: change this transition.

> Version 4: same geometry, different material.

The user's experience becomes feedback into a controlled design process.

That is one of the most powerful properties of digital manufacturing:

> **customization becomes reproducible.**

---

# Material matters as much as shape

A correction cannot be designed purely by increasing a dimension in CAD.

The component also has to behave properly.

It must deal with repeated loading.

It may need to flex in one region and remain firm in another.

It needs sufficient grip and durability.

It must integrate with footwear.

And it should not introduce a new instability while solving the original problem.

This is where materials such as TPU become interesting.

Flexible TPU is already used in published work on personalized 3D-printed insoles, including workflows combining scanning, geometry customization and flexible printed structures.

But “use TPU” is not itself a solution.

Different:

- hardness,
- infill structures,
- wall thickness,
- printing orientation,
- geometry,
- material formulations

change mechanical behaviour.

That makes material selection an engineering problem requiring testing, not an AI-generated guess.

---

# AI is helping us explore the engineering space

This is one of those problems where AI assistance is valuable without being the product itself.

A person beginning from software engineering may not already know:

- which additive-manufacturing techniques are appropriate,
- which materials have useful mechanical properties,
- how orthotic products are traditionally constructed,
- which CAD strategies support parameterization,
- how lattice structures influence stiffness,
- which measurements matter,
- what published research already exists,
- which failure modes need testing.

An AI research/coding environment can dramatically accelerate that exploration.

It can help:

- find terminology,
- survey research,
- compare materials,
- explain biomechanics literature,
- generate initial parametric-design approaches,
- assist with CAD scripting,
- create test plans,
- connect unfamiliar manufacturing concepts to engineering principles the user already understands.

But there is an important boundary:

> **AI can help us understand and implement the engineering problem. It should not invent the medical requirement.**

That requirement needs appropriate professional input.

---

# The useful AI may sit between people

There is another role for multimodal AI.

Different participants speak different technical languages.

A professional may express a correction clinically.

A designer needs geometric parameters.

A print studio needs manufacturing files and material specifications.

A cobbler needs to understand how the piece fits into the footwear.

The user needs something understandable enough to evaluate and report problems.

AI may help translate among those representations.

For example:

**professional requirement → structured specification → parameterized geometry → fabrication instructions → integration guide → user feedback → revision request.**

The system is valuable because it coordinates expertise.

Not because it replaces expertise.

---

# Geometry can be captured in increasingly accessible ways

High-end scanning equipment is not the only source of useful spatial information.

Depending on the accuracy the problem requires, future workflows might use:

- professional scanning,
- smartphone depth sensors,
- photogrammetry,
- guided photographs with known calibration objects,
- manual measurements,
- combinations of them.

The right question is not:

> Which technology produces the most impressive 3D model?

It is:

> **What is the least expensive measurement workflow that provides sufficient accuracy for this particular product?**

Different use cases will require different answers.

A clinically consequential orthotic may need much tighter control than a personalized everyday product.

That boundary should remain explicit.

---

# The model itself should be parameterized

A one-off manually sculpted 3D model is useful.

A parameterized design is more powerful.

Suppose a component can be described through meaningful dimensions:

- overall correction height,
- heel region,
- transition length,
- forefoot thickness,
- shoe boundary,
- flex zones,
- material behaviour.

Changing the requirement then means changing parameters rather than rebuilding the model.

This can also make the design inspectable.

A professional can see:

> This version implements 6 mm here and transitions over this distance.

rather than being asked to trust an opaque mesh produced by software.

---

# AI-generated CAD still needs engineering verification

Generative design tools will increasingly make physical modelling accessible.

That does not remove manufacturing reality.

A generated model may be:

unprintable, mechanically weak, uncomfortable, dimensionally inaccurate, poorly oriented, or incompatible with the shoe.

The workflow therefore needs verification around the AI.

This resembles software engineering.

Generating code is easy.

Trusting the code requires:

- tests,
- constraints,
- review,
- observable behaviour.

For physical products:

**generate → simulate where useful → inspect → fabricate test piece → measure → load test → fit → iterate.**

AI accelerates the loop.

It does not eliminate the loop.

---

# Why a local 3D-printing studio is interesting

General-purpose fabrication capacity is spreading more widely than specialist custom-footwear expertise.

A local studio may already print:

prototypes, replacement components, architectural models, industrial pieces, student projects.

That equipment can potentially support entirely different applications if supplied with:

- the correct model,
- the correct material,
- appropriate printing parameters,
- a validation method.

This creates a different development strategy from building a specialized factory.

> **Bring the design intelligence to existing fabrication capacity.**

The studio gains a new type of work.

The customer gains local production.

Specialist expertise can remain remote where appropriate.

---

# But general-purpose printers need qualification

A file that prints correctly on one machine is not guaranteed to behave identically on another.

Flexible materials are particularly sensitive to:

- printer capability,
- extruder design,
- temperature,
- speed,
- calibration,
- moisture,
- orientation,
- post-processing.

So distributed fabrication needs a qualification process.

A studio might print a calibration artifact first.

The system can verify dimensions and mechanical behaviour.

Only then should it manufacture the personalized component.

This resembles deployment certification in software:

> Don't assume environments are identical simply because they accept the same artifact.

---

# The first prototype should solve one person's problem well

We do not need to begin by designing a national platform.

The first meaningful goal is much smaller:

> **Can we produce one safe, professionally informed, precisely fabricated footwear modification for one person in a place where the obvious local workaround was inadequate?**

That is enough.

The process itself can reveal the research questions.

What measurements were missing?

Which CAD work was difficult?

Which material behaved appropriately?

What did the print studio need?

What could the cobbler integrate?

What needed revision?

What did the professional need to verify?

How much did the whole workflow cost?

Only after completing that loop does it make sense to generalize.

---

# The first version may not be fully 3D printed

This is another important point.

Emerging technology should not become ideology.

Perhaps the optimal solution is:

- a printed corrective structure,
- plus conventional cushioning,
- plus an existing shoe,
- plus skilled local integration.

That may be better than attempting to print an entire shoe.

The goal is not:

> maximize percentage of product produced by a 3D printer.

The goal is:

> **produce the safest, most comfortable and affordable result using the appropriate combination of technologies and local skills.**

---

# There is a broader access question

Companies already demonstrate that personalized footwear can be commercially delivered in India.

That is encouraging.

But the current specialist model still raises questions worth studying.

What happens outside major service locations?

How much of the cost comes from specialist manufacturing versus assessment, fitting and logistics?

Could some steps happen remotely?

Could validated digital designs be manufactured closer to the user?

Can local integration reduce replacement cost?

Could an existing professional prescribe a correction while a distributed fabrication network handles implementation?

These are not criticisms of current providers.

They are questions about **how a proven capability might become more geographically and economically accessible.**

---

# Pricing matters because personalization competes with improvisation

A family rarely compares a specialized solution only with another specialized solution.

They may compare it with:

> The local cobbler can do something for a few hundred rupees.

That comparison is unfair technically but very real economically.

If the inexpensive workaround appears to work initially, people may choose it.

This means an accessible customized solution does not merely need to be cheaper than today's premium custom product.

It needs to provide an understandable value proposition:

**safer · repeatable · professionally informed · replaceable · repairable · affordable enough that improvisation is no longer the obvious choice.**

That is a difficult engineering and economic target.

Which makes it interesting.

---

# The solution can create local work rather than centralize it

Imagine the eventual workflow in a smaller city.

A physiotherapist, orthopaedic professional or other appropriate practitioner defines the physical requirement.

A local scanning or measurement point captures the necessary geometry.

Software produces an inspectable model.

A qualified local print studio manufactures the component.

A cobbler or footwear specialist integrates it into footwear.

The user returns locally for adjustment.

The digital specification remains available for replacement or revision.

Several local participants gain economic activity.

The user gains access to a capability that previously required travelling to a specialist provider or accepting a crude workaround.

That is a much more interesting public-good model than simply shipping another consumer product from a central warehouse.

---

# This connects to a larger Makex principle

Many of our ideas share one pattern:

> **Do not assume sophisticated capability must be delivered by one vertically integrated organization.**

Local commerce can combine:

merchant knowledge, open protocols, buyer agents, lightweight digital infrastructure.

Mobility can combine:

public transport, private capacity, coordination.

Personalized fabrication can combine:

professional expertise, digital design, local machines, traditional craft.

The system becomes valuable by **connecting capabilities that already exist but do not naturally interoperate.**

---

# What we would like to test

### 1. Requirement representation
Can a professionally defined footwear modification be expressed as a clear digital specification rather than an informal instruction?

### 2. Measurement
What measurements are genuinely required, and which can be acquired using accessible tools?

### 3. Parametric design
Can one reusable model generate appropriate geometry for different corrections and footwear?

### 4. Material
Which printable materials and structures provide an appropriate combination of flexibility, stability, durability and comfort?

### 5. Local fabrication
Can a general-purpose 3D-printing studio reproduce the component within acceptable tolerances?

### 6. Local integration
Can a normal cobbler or footwear specialist integrate the component reliably without needing specialist manufacturing equipment?

### 7. Safety
What checks must happen before and after fabrication to avoid creating an unstable or inappropriate product?

### 8. Iteration
Can feedback from real use produce controlled revisions rather than starting again?

### 9. Portability
Can the same validated specification be manufactured elsewhere if the person moves or the original provider disappears?

### 10. Economics
What is the actual end-to-end cost when measurement, design, fabrication, integration and revision are included?

### 11. AI assistance
Which parts of the workflow can AI accelerate safely, and where must deterministic engineering or professional judgment remain authoritative?

---

# What success would look like

Success does not require Makex to manufacture footwear.

It does not require every cobbler to own a 3D printer.

And it certainly does not mean an AI diagnosing someone's gait from a photograph.

It might look like this:

A person in a Tier-2 city receives an appropriate professional recommendation.

That recommendation can be expressed digitally.

A model is generated transparently.

A nearby fabrication studio can manufacture the custom component using validated material and parameters.

A local cobbler integrates it properly into suitable footwear.

The finished result is reviewed and adjusted where necessary.

If the shoe wears out, the design does not disappear.

If the user moves, the specification can move with them.

If the first version is imperfect, the second begins from what was learned rather than from zero.

The local professionals remain valuable.

The technology fills the gap between them.

---

# The question behind the project

Specialized custom products already prove that physical personalization is possible.

The unresolved question for us is different:

> **Can the capability be unbundled enough that someone outside a major specialist market can still access it safely?**

Emerging tools make that increasingly plausible.

Affordable scanning.

Parametric CAD.

AI-assisted technical learning.

Flexible-material 3D printing.

Distributed fabrication.

Digital specifications.

Local craft.

None of these individually solves the problem.

Together they may form a new production model.

One where a difficult personal requirement does not automatically mean:

travel to a metro;

pay for a premium vertically integrated service;

or accept whatever improvised solution happens to be available locally.

Instead, expertise can define the requirement.

Software can carry it.

Machines can fabricate it.

Local skill can finish it.

And the resulting solution can remain personal.

That is the experiment.

---

## References / implementation notes

Use current, clean references for factual claims:

- Shapecrunch / specialist customized-footwear example: https://www.shapecrunch.com/
- Peer-reviewed research on 3D-printed orthoses / TPU / adjustable structures should be linked directly from the final article after verifying the exact paper references.

Editorial guardrails:

- Do not frame this as a disability story.
- Do not imply the cobbler is being displaced; the proposed system deliberately preserves a local integration role.
- Do not let AI infer or prescribe the medical correction.
- Professional/clinical decision must be visually separated from engineering/fabrication in diagrams.
