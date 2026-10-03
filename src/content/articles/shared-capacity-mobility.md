# Shared Capacity & Mobility
## Use What Already Exists Better

**Status:** EXPLORING

### Sometimes the missing infrastructure already exists

A car is travelling with empty seats.

An office parking space remains unused all day.

A delivery vehicle has spare capacity.

Someone is already travelling from one neighbourhood to another carrying almost nothing.

A rapid-transit system moves people efficiently across a region, but the final few kilometres still make the journey inconvenient.

None of these situations necessarily require more physical infrastructure.

They may require better coordination of capacity that already exists.

At Makex, this leads us to a broad question:

> **Before building more, can we make existing capacity easier to discover, trust and coordinate?**

Transport is one of the clearest places to explore that question.

But the principle extends much further.

---

# Capacity can be available and still effectively not exist

Infrastructure is useful only when someone can access it at the right time.

Consider an empty passenger seat.

Physically, capacity exists.

But for a stranger needing to travel in roughly the same direction, that capacity might as well not exist unless several things become known:

- the journey,
- the approximate time,
- the available seat,
- whether the people are comfortable travelling together,
- where they could meet,
- whether the detour is acceptable.

The coordination problem can be larger than the transportation problem.

The same is true of parking.

An employee may own an allocated office parking slot and work from home that day.

Another employee may pay to park outside because there is no simple mechanism to discover that the internal slot is temporarily free.

No new parking space is required.

The information system is missing.

---

# Existing ride sharing already proves part of the idea

Carpooling is not new.

Existing platforms already connect drivers who were going to travel anyway with passengers heading in the same direction.

That is important prior art.

Our question is not:

> Can people share a ride?

We know they can.

The more interesting question is:

> **Can matching become more dynamic, contextual and trusted without turning every participant into a transport operator or forcing every possible journey to be published manually in advance?**

A bulletin-board model is beautifully simple.

A driver publishes a trip.

A passenger searches.

The two connect.

That simplicity can offer operational and trust advantages, while legal treatment depends on jurisdiction and implementation.

Dynamic matching introduces more complexity and should not be assumed to be automatically better.

But there are situations where the coordination cost of publishing and searching is itself the reason sharing does not happen.

Those are the situations we want to understand.

---

# Repeated journeys contain latent networks

Millions of people repeatedly travel similar routes.

Home to office.

College to home.

Rail station to neighbourhood.

Factory to nearby town.

Technology park to residential cluster.

The same people may cross paths week after week without knowing that their schedules overlap.

A dynamic system could potentially discover that overlap.

But unrestricted stranger matching is not the only model.

Trust can be layered.

A user might choose to discover potential matches among:

**the same organization**

then perhaps:

**verified institutions within the same technology park**

then:

**professional connections within an accepted trust distance**

and only if desired:

**the wider public network.**

This produces a different model from anonymous ride matching.

The system asks:

> Is there useful transport capacity inside a trust graph the user already participates in?

---

# Agents could make matching less tedious

Dynamic matching is difficult when humans must repeatedly maintain their own availability.

A person rarely wants to update:

> Leaving office at 6:10 instead of 6:20 today.

But a local agent may already have limited access to context such as:

- calendar availability,
- usual commute,
- declared travel preferences,
- current departure intention,
- constraints the person explicitly chooses to expose.

The agent does not need to publish a person's entire schedule.

It can answer a much smaller question:

> Is there a compatible shared journey available right now under my user's policies?

Two agents might discover a possible match.

Only then are their humans interrupted.

For example:

> A verified employee in the neighbouring office complex appears to be driving toward your area in 18 minutes. The route overlap is high and the pickup detour is approximately five minutes. Interested?

The computation happens quietly.

The social decision remains human.

---

# Dynamic does not mean uncontrolled

Just as demand-first commerce should not spam every merchant, dynamic mobility should not continually broadcast everyone's location and intentions.

Discovery can be progressive.

Begin with:

**known/repeat matches**

then:

**trusted circles**

then:

**nearby compatible participants**

and only when explicitly allowed:

**a wider pool.**

The user should determine how far discovery expands.

This has useful privacy properties too.

An agent can potentially ask:

> Does anyone satisfying these constraints exist?

without initially exposing:

> Vishal is currently at this exact location and will leave at 18:13.

The system can reveal additional information only as the interaction becomes more concrete.

---

# Trust is not a single score

Transport requires more trust than many digital transactions because people share physical space.

A five-star number is unlikely to be sufficient as the only mechanism.

Different trust signals may have different meanings:

- organization-issued credential,
- educational institution,
- verified recurring route,
- previous journeys,
- mutual connections,
- community membership,
- government identity where appropriate,
- simply a known colleague.

The system should not convert all of those into one mysterious universal ranking.

Instead, a user may express policy:

> I am comfortable matching with employees of my company or verified workers in my technology park.

Another may say:

> Only people I have travelled with before or second-degree professional contacts.

Another may choose:

> Public matches are fine.

Trust should therefore be **user-shaped**, not merely platform-scored.

---

# The last mile can determine whether excellent public transport gets used

Regional mass transit can move large numbers of people efficiently across long distances.

But a journey is experienced door to door.

A technically excellent transit corridor can still feel inconvenient if reaching the station or completing the final segment is expensive, uncertain or time-consuming.

One of the observations behind our mobility exploration came from repeated travel through the Delhi–Ghaziabad–Meerut regional transport geography.

The high-capacity part of the journey may be solved extremely well.

The unresolved question can be:

> **How do people efficiently reach and leave the high-capacity backbone?**

This is not necessarily a reason to create another fleet.

Existing movement around the station may itself contain capacity.

---

# Public transport and peer mobility can complement each other

Private shared mobility is often discussed as an alternative to public transport.

That need not be the framing.

A stronger public-good use case may be:

> **Use small-scale shared mobility to make high-capacity public transport easier to choose.**

Imagine someone deciding between:

**driving the entire distance**

and

**a short shared ride → regional transit → short shared ride.**

If the first/last-mile pieces are unreliable, the car wins.

If those pieces become easy to coordinate, the public option becomes more competitive.

The objective is therefore not necessarily:

> replace trains or buses with shared cars.

It can be:

> **increase the effective catchment area of public transport by coordinating the edges better.**

That is a much more interesting systems problem.

---

# A station can become a temporary coordination node

A transport hub naturally creates synchronized demand.

People arrive in batches.

Many continue toward overlapping neighbourhoods, offices, campuses or towns.

Today those travellers may separately:

book taxis, find autos, call relatives, wait for buses, or drive the entire trip precisely because the final connection is uncertain.

A coordination layer could treat the station as an event node.

> Several verified travellers have arrived and need to move toward related destinations.

Existing drivers, feeder services, shared vehicles or other permitted providers could respond.

As with local commerce, the system does not necessarily need to operate all of those services.

Its first role may simply be to make the relevant capacity visible.

---

# Parking is mobility infrastructure too

Transport efficiency is not only about vehicles in motion.

Parking contains large amounts of time-dependent capacity.

An office may technically have enough parking for its workforce while still experiencing scarcity because allocation is static.

One person's space remains empty.

Another person cannot use it.

An internal parking experiment we previously explored started from exactly this observation.

The technical system is relatively simple:

an owner releases unused capacity;

another verified participant requests it;

the system manages temporary allocation;

and incentives can reward participation.

The harder questions are social and operational:

How far in advance must a slot be released?

Can an owner reclaim it?

What happens if the guest overstays?

Should rewards be monetary, points-based or simply reciprocal?

Can organizations encourage sharing without converting employee parking into a commercial marketplace?

Again, the important principle is:

> **availability changes with time, while traditional allocation often assumes it is static.**

---

# Shared capacity needs incentives

Discoverability alone may not be enough.

A driver may accept a passenger only if the detour is minimal.

Someone may share a parking space if doing so creates reciprocal benefit.

A person may carry a package if the handoff is effortless and appropriately rewarded.

A system therefore needs to ask:

> Why would the capacity owner participate?

Not all incentives need to be cash.

Possibilities include:

- cost sharing,
- reciprocity,
- priority access later,
- community credit,
- employer incentives,
- reduced parking fees,
- social benefit,
- direct payment where law and context permit it.

The appropriate mechanism depends on the domain.

Incentive design can change system behaviour dramatically, so it should be treated as part of the architecture rather than added after the matching algorithm.

---

# Goods also move through partially empty networks

The same principle applies to logistics.

Most delivery systems optimize dedicated logistics networks.

That is necessary for urgent, predictable and high-volume delivery.

But not everything is urgent.

Suppose an item needs to travel 30 kilometres over the next two days.

During those two days, many people and vehicles may independently traverse pieces of that route.

This suggests another research question:

> **Can delay-tolerant goods move through spare capacity that was going to move anyway?**

This is conceptually different from conventional courier delivery.

The route may not be determined end-to-end in advance.

An item might move:

**A → B**

then wait safely;

then:

**B → C**

then eventually reach:

**C → destination.**

The analogy is almost packet routing, except the packets are physical, slow and subject to custody.

That changes everything.

---

# Piggyback logistics is mostly a trust problem

The routing algorithm may be easier than the real-world system.

A useful network must answer:

Who currently possesses the item?

Was the item handed over?

Was it damaged?

Can the carrier decline after accepting?

What happens if the next hop never appears?

Who is liable?

How are participants rewarded?

Which goods are safe and lawful to carry this way?

Can the sender inspect the chain of custody?

Can the recipient choose a maximum number of transfers?

Physical logistics therefore needs explicit **proof of handoff** and **custody state**.

A simple conceptual record might be:

> sender → carrier A → secure handoff B → carrier C → recipient.

Each transfer changes responsibility.

Interestingly, this connects back to our Human + Agent Collaboration work.

The object being transferred is different.

But the systems question is familiar:

> **How does responsibility move without becoming ambiguous?**

---

# Time slack is a resource

Traditional routing often optimizes heavily for speed.

But customers have different urgency.

A medicine needed immediately and a book needed next week should not necessarily consume the same logistics architecture.

Time flexibility can itself become a resource.

A user might specify:

> arrive within 48 hours; minimize additional vehicle kilometres.

That creates optimization opportunities unavailable to a same-hour system.

The matching objective becomes multi-dimensional:

**route overlap · time tolerance · trust · handoff count · cost · reliability · environmental impact**

No single metric always dominates.

---

# Movement can be thought of as a graph that changes over time

At any moment a city contains:

people, vehicles, stations, routes, parking spaces, goods, destinations.

Edges appear and disappear as people move.

Traditional transport planning often works with relatively stable infrastructure graphs.

Agent-mediated coordination introduces a more dynamic layer.

A person's commute today is a temporary edge.

An unused parking slot until 5 PM is a temporary resource.

A train arriving in six minutes creates a burst of future movement.

A delivery van with spare capacity creates another temporary opportunity.

This suggests a useful model:

> **mobility capacity is a time-varying graph.**

The research problem is not simply finding the shortest path.

It is deciding which temporary edges are safe, acceptable and worth exposing to whom.

---

# Not every theoretical match should be made

Pure optimization can create absurd systems.

A mathematically efficient ride may require someone to walk through an unsafe area.

An efficient handoff may be socially uncomfortable.

A small financial saving may not justify sharing a vehicle with a stranger.

A routing algorithm may repeatedly disadvantage one neighbourhood because aggregate efficiency improves.

Human preferences therefore cannot be treated as noise around the optimization problem.

They are part of the problem.

Useful mobility systems need constraints around:

safety, accessibility, gender and personal comfort, reliability, physical ability, luggage, time predictability, personal boundaries.

Optimization should happen **inside** those constraints.

Not over them.

---

# Accessibility changes what “efficient” means

The fastest route is not necessarily the usable route.

Someone with limited mobility may need:

- fewer transfers,
- accessible vehicles,
- shorter walking distances,
- reliable seating,
- additional boarding time.

A shared-capacity system therefore cannot simply optimize average journey time.

It may need to understand individual mobility constraints while disclosing as little sensitive information as possible.

The matching request need not say:

> This person has condition X.

It might only need to say:

> Step-free access required.

This is another recurring design principle:

> **share the requirement, not necessarily the reason behind it.**

---

# Regulation is part of the system, not an inconvenience around it

Dynamic transport touches regulated activity.

Carpooling, commercial passenger transport, insurance, payment, labour rules and liability vary by jurisdiction.

A clever matching algorithm does not make those constraints disappear.

Existing platforms sometimes deliberately keep the driver's journey primary rather than turning the driver into an on-demand taxi operator.

That boundary is instructive.

A public-good experiment should not assume that every unused seat can simply become a commercial ride.

A useful technical architecture needs to accommodate:

**permitted carpooling · licensed transport · institutional shuttles · public feeder services**

and other modes without pretending the regulatory distinctions do not matter.

---

# Agents could coordinate across modes rather than replace them

The most interesting mobility agent may not own a fleet.

It may understand a goal:

> Get me home reliably, cheaply and with minimal unnecessary driving.

It could reason across:

public transit, walking, shared rides, known colleagues, licensed feeder services, other available modes.

The user can define priorities.

One person optimizes cost.

Another minimizes transfers.

Another values predictable arrival.

Another prioritizes public transport whenever practical.

The system's role becomes **coordination**, not transportation.

---

# A useful agent should know when not to optimize

Suppose a user regularly drives with a colleague.

A global optimizer discovers a stranger whose route saves ₹8 and three minutes.

Should it continuously suggest switching?

Probably not.

Stable human relationships have value not captured in route cost.

A useful system should learn that an established reliable arrangement may be preferable to marginal numerical improvement.

The same principle applies to local commerce.

The cheapest seller is not always better than the shopkeeper the customer trusts.

Optimization systems need room for **relationship value**.

---

# What we would like to prototype

A first mobility experiment does not need vehicles or a new transportation company.

It could begin within one trusted community.

Consider employees travelling to the same office district.

Participants provide only broad recurring route and timing preferences.

A matching service identifies potential overlap.

Instead of automatically creating rides, it suggests high-confidence candidates.

Users decide whether to connect.

Over time we could evaluate:

- whether suggested matches actually become recurring arrangements,
- how often timing differences break apparently good matches,
- what trust signals matter,
- how much information must be revealed before users are comfortable,
- whether agent-mediated updates reduce coordination effort.

A second experiment could focus specifically on a transit hub:

> Can dynamically discoverable shared capacity improve the last-mile experience around a high-capacity public-transport station?

A third could investigate parking as the simplest form of time-dependent resource sharing.

And only later would it make sense to experiment with physical-goods relays.

---

# Research questions

### Discovery
How much mobility intent must someone reveal before useful matches can be found?

### Dynamic matching
When is real-time discovery better than the simpler bulletin-board model?

### Trust
Which signals actually make people comfortable sharing physical journeys, and which merely create the appearance of trust?

### Stable relationships
How should repeat trusted matches be valued relative to mathematically more efficient new ones?

### Last-mile integration
Can peer/shared capacity complement feeder services enough to measurably improve public-transport adoption?

### Progressive discovery
How should a search widen from known contacts to trusted communities and eventually broader networks?

### Incentives
What forms of reciprocity or reward increase participation without transforming ordinary sharing into an unintended commercial activity?

### Parking
Can time-dependent allocation substantially increase utilization without creating operational friction for the original slot owner?

### Delay-tolerant logistics
For which classes of goods does opportunistic movement actually reduce dedicated travel rather than merely adding complexity?

### Chain of custody
What is the minimum mechanism needed to make multi-hop physical handoffs trustworthy?

### Accessibility
How can mobility constraints influence matching without requiring users to expose unnecessary health or personal information?

### Regulation
How should coordination protocols expose transport type and participant role so local compliance rules can be applied correctly?

### Measurement
Does a system genuinely reduce vehicle kilometres, cost or human coordination effort — or merely redistribute them?

Those are empirical questions.

---

# The connection to local commerce

This theme eventually intersects strongly with Commerce & Livelihoods.

Discovering a product locally is only half the problem.

The buyer still needs access to it.

But a local-commerce system does not necessarily need to own a delivery fleet.

A seller may deliver.

The buyer may collect.

A professional logistics provider may fulfil the order.

Or, where appropriate, spare movement could provide another option.

Commerce therefore asks:

> **Where does the useful thing exist?**

Mobility asks:

> **What existing movement can connect it to the person who needs it?**

Those two systems can cooperate without becoming one giant vertically integrated platform.

That separation is deliberate.

---

# The deeper pattern: make idle capacity legible

Looking beyond mobility, a pattern appears.

An unsold product is idle economic capacity.

An empty car seat is idle mobility capacity.

An unused parking space is idle spatial capacity.

A machine sitting unused is idle compute capacity.

A skilled person who cannot be discovered has idle productive capacity.

Technology often responds to shortage by creating more supply.

Sometimes that is necessary.

But another question should come first:

> **How much capacity already exists but is invisible, inaccessible or poorly coordinated?**

That is the larger research theme.

---

# What success would look like

Success would not necessarily mean Makex operating fleets, parking garages or logistics depots.

A good outcome might look much lighter.

A commuter discovers that someone in a trusted professional circle already makes nearly the same journey.

Neither person has to continually advertise their commute.

A regional-transit passenger can reliably solve the final few kilometres without defaulting to driving the entire route.

An unused office parking slot becomes temporarily useful without its owner losing control of it.

A non-urgent parcel can occasionally exploit movement that was already going to happen.

Users decide how widely their mobility needs are exposed.

Agents perform the tedious matching.

Humans make the social decisions.

Existing public and commercial transport remains part of the system rather than something the platform tries to replace.

And most importantly:

> **measured efficiency improves because existing movement is used better, not because an optimization dashboard says it should.**

---

# The question behind the project

Cities contain enormous amounts of motion.

They also contain enormous amounts of waiting, duplication and unused capacity.

Our question is not:

> **Can AI optimize transport?**

That question is far too broad and has been explored for decades.

The question we find more interesting is:

> **Can lightweight intelligence make existing capacity visible at the right moment, to the right people, under the right trust and policy boundaries?**

If so, technology may occasionally solve a mobility problem without adding another vehicle.

A parking problem without pouring another parking structure.

A delivery problem without creating another dedicated trip.

And a last-mile problem without weakening the public-transport backbone it is supposed to connect to.

Sometimes the most useful infrastructure may be the infrastructure that is already there.

We just have to learn how to see it.

That is the experiment.

---

## References / implementation notes

For factual context, use current primary sources where possible:

- NCRTC / Namo Bharat official material: https://ncrtc.in/
- BlaBlaCar India terms / service model: https://www.blablacar.in/ and its legal pages

Keep regulatory claims qualified by jurisdiction. Do not imply that unused private seats can automatically be commercialized.
