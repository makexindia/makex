# Commerce & Livelihoods
## Making Local Markets Legible Again

**Status:** BUILT + EXPLORING

### What if being nearby became an advantage again?

A surprising amount of commerce is invisible.

A shop may have exactly the product someone needs, sitting a few streets away. The buyer may be ready to purchase it immediately. The seller may even be willing to offer a competitive price.

Yet neither knows about the other.

The product is physically available but digitally absent.

Modern commerce has become exceptionally good at finding things that have already entered a digital catalogue. It is much less effective at finding supply that exists outside those catalogues, especially fragmented inventory and capability belonging to small local businesses.

At Makex, we are interested in that missing layer.

Not necessarily another marketplace.

Not another merchant dashboard that assumes every shopkeeper wants to become an ecommerce operator.

A smaller question comes first:

> **Can local supply become meaningfully discoverable before the local business becomes fully digital?**

---

## Why this matters to us

For us, local commerce is not an abstract market category.

One of Makex's contributors, Vishal, grew up spending long days during casual childhood visits to his father's consumer-electronics and appliance shop in a Tier-2 Indian city.

A shop was more than shelves and inventory.

Customers returned over years. People asked for advice before making purchases. Appliances and accessories were sometimes repaired rather than immediately replaced. Festive demand could transform the physical market. Relationships became part of the business infrastructure.

The shop also had a repairman who handled electrical and electronics repairs.

One incident stayed with Vishal.

When he was eight, a customer arrived with a television remote that was not working while the repairman was unavailable. The customer's child was upset because the television could not be used. Vishal found a suitable battery-contact piece from one of his own broken toys and used it to get the remote working again.

It was a tiny repair.

But it contained several things that still shape how we think about technology:

**understand the actual problem, use what is already available, restore usefulness with the smallest practical intervention, and remember that there is a person on the other side of the system.**

Local businesses have traditionally operated through a similar combination of proximity, practical knowledge, relationships and adaptation.

What changed was the information environment around them.

First ecommerce made enormous remote catalogues searchable.

Then quick commerce made a subset of inventory available almost immediately.

Convenience improved dramatically for consumers.

But the neighbourhood business often remained exactly where it had always been:

**physically close, economically useful and digitally difficult to see.**

A shopkeeper may have spent decades learning products, customers, suppliers, repairs and selling.

The new competitive requirement suddenly includes a very different skill set:

structured catalogues, digital inventory, ecommerce interfaces, advertising, ranking algorithms, compliance workflows and online fulfilment.

Time is one barrier.

Education and digital comfort can be another.

Language can be another.

The economic benefit of going digital may be unclear until business actually arrives through the digital channel.

We do not believe every small merchant should first have to become a technology company in order to remain economically visible.

---

# The missing step before ecommerce

Most digital-commerce systems begin with an assumption:

> **the seller's inventory is already represented digitally.**

That is a reasonable assumption for a large retailer.

It is a significant assumption for millions of smaller businesses.

A local appliance shop may know that it sells televisions, mixers, irons, fans, adapters, remotes and replacement accessories without maintaining a continuously synchronized SKU-level catalogue.

A clothing shop may receive inventory whose exact size, colour and brand distribution changes frequently.

A general retailer may possess slow-moving products that are perfectly useful but economically irrational to catalogue individually.

The first useful form of digital participation therefore does not necessarily need to be:

> **Upload your entire shop.**

It could begin with:

> **Tell us where you are, what kinds of things you usually sell, and how you would like relevant customers to reach you.**

That is a much smaller onboarding problem.

---

# From presence to participation

We think merchant digitization can be progressive rather than binary.

### Level 1: Basic presence

A merchant might provide little more than:

**location  
business category  
broad product categories  
contact preferences  
working hours**

That alone may be sufficient to answer:

> *Who nearby might plausibly sell this?*

### Level 2: Indicative presence

The next step could be a lightweight snapshot of the business rather than a perfect live catalogue.

Representative products.

Typical brands.

Approximate prices.

Common categories.

Seasonal availability.

Services offered.

This representation does not necessarily need to be maintained through spreadsheets and dashboards.

A merchant could talk to an assistant in their own language.

They might photograph shelves.

Send voice messages.

Answer a few questions.

Correct what the system inferred incorrectly.

The system could iteratively turn those interactions into structured merchant data.

We experimented earlier with this idea through prompt-guided catalogue generation: using a small amount of merchant information to create an initial storefront representation that could then be refined.

The exact implementation is less important than the principle:

> **Digitization should adapt to the merchant's existing way of communicating, rather than requiring the merchant to first learn the software's preferred representation.**

Multimodal and multilingual AI may make this increasingly practical.

### Level 3: Live interaction

Only when a buyer has a sufficiently specific need does exact availability matter.

At that point, selected merchants might receive a live request such as:

> A buyer nearby is looking for a particular appliance model for pickup today. Is it currently available, and at approximately what price?

The seller can answer manually.

A rules engine can answer.

An inventory application can answer.

An agent can answer.

A future standards-compatible commerce system can answer.

The discovery layer should not require all merchants to reach the same level of technical maturity before they become visible.

---

# Our first experiments were catalogue-first

Our earliest work did not begin with this full architecture.

It started with a much simpler real-world problem.

## A real canteen digitization pilot

**Accent On Health**, a small office canteen, was located on a floor where many potential customers rarely passed by.

The first challenge was not sophisticated commerce infrastructure.

It was simply **discoverability**.

We created a lightweight digital menu with direct WhatsApp ordering and used QR codes near high-footfall areas such as office coffee machines to make the canteen visible to people on other floors.

There was no need for a marketplace to own the transaction.

The customer discovered the menu.

The vendor received the order.

The relationship remained direct.

Internally, this experiment had a short project name, but the useful story is the problem it solved:

> **a digitally invisible local business gained a very inexpensive path to discovery and direct ordering.**

## A multi-merchant architecture experiment

We then explored what the same idea might look like if many businesses needed simple storefronts.

Instead of maintaining a separate application stack for every merchant, we created a common frontend capable of loading merchant-specific structured data from inexpensive object storage.

Vendor-specific routing could map an address to the appropriate merchant data, while CDN caching kept repeated reads inexpensive.

One test merchant represented Vishal Electronics, with only a few sample products.

It was not a real production catalogue.

It was an architectural probe:

> **How cheaply can a small merchant be given a useful digital representation?**

Our first prototypes were therefore still **catalogue-first**.

And that exposed an important limitation.

Even an extremely cheap digital storefront still assumes someone creates and maintains the digital representation.

That led to the larger question:

> **Can useful discovery begin before complete catalogue maintenance?**

---

# Demand-first discovery

Suppose a buyer needs something but does not know which local businesses sell it.

The obvious design would be:

> broadcast the request to every merchant.

That would be a terrible system.

A discovery network should reduce noise, not manufacture it.

Instead, the first layer can work from merchant presence and indicative snapshots.

The system first asks:

> **Who might plausibly satisfy this request?**

Only then does it ask:

> **Who should actually receive the live demand?**

This creates a natural funnel.

**Buyer intent**  
↓  
**category / semantic interpretation**  
↓  
**geographical relevance**  
↓  
**merchant snapshot / previous relationship**  
↓  
**candidate sellers**  
↓  
**buyer authorization**  
↓  
**live request**  
↓  
**offers**

The majority of queries may therefore never interrupt a merchant.

---

# Discovery should not become merchant spam

There are several useful ways the buyer can proceed after potential sellers are identified.

They may select **one merchant**, just as they might physically walk into one shop.

They may select **several merchants** and ask each for availability.

They may explicitly authorize a broader discovery request when there is no obvious preference.

That broader search does not need to happen all at once.

A useful analogy is driver discovery in ride-hailing systems.

When a suitable provider is not immediately found, discovery can expand progressively.

A local-commerce request might begin with:

**preferred merchants**

then, if unsuccessful:

**high-confidence nearby matches**

then:

**a slightly wider geographical or category radius**

then:

**adjacent local commerce areas**

rather than broadcasting city-wide demand immediately.

The exact algorithm is an implementation question.

The principle is:

> **Expand discovery only as far as necessary to fulfil the intent.**

This makes the network more usable for sellers and more efficient for buyers.

---

# The buyer should authorize the transition from discovery to demand

This boundary is important.

A user searching:

> Where might I find this?

does not automatically mean:

> Tell every possible merchant that I am trying to buy this.

A discovery system can first return potential sellers from snapshots or lightweight representations.

The buyer (or an authorized buying agent acting under an explicit policy) can then decide whether a live request should be sent.

This is closer to existing human behaviour.

A person discovers three appliance shops.

Then decides:

**visit one  
call one  
call several  
ask a friend  
or broaden the search.**

The platform removes search friction without removing human choice.

---

# Merchants need controls too

Buyers are dynamic.

Merchants are finite.

Without controls, even targeted demand could become another inbox that businesses learn to ignore.

Merchant-side systems should therefore be able to express preferences.

A merchant might say:

**do not send requests outside these categories**

**ignore requests below/above particular value ranges**

**only notify a human when confidence is high**

**automatically respond when stock information is reliable**

**ignore particular pseudonymous requesters**

**prioritize repeat customers**

**allow an agent to screen requests first**

The simplest merchant might handle everything manually.

A larger merchant might automate almost everything.

Both should remain valid participants.

---

# A local commerce pod

One way we think about this is as a **local commerce pod**.

A pod does not necessarily mean one platform owning a complete database of every item in an area.

It is closer to an economic event domain.

A need appears:

> Someone here is trying to find X.

The system first determines which local capability may be relevant.

If the buyer authorizes live discovery, that need progresses through an appropriately bounded set of merchants.

Relevant sellers can respond.

Responses may eventually contain:

**availability  
price  
offer validity  
merchant identity  
product details  
authenticity evidence  
fulfilment options**

The buyer or buyer agent compares them and decides what happens next.

The platform's first job is therefore not to operate the merchant's business.

Its first job is to make previously invisible local capability **legible**.

---

# Traction can pull digitization forward

A business owner may have little reason to maintain structured digital data merely because someone says digital transformation is important.

But the incentives change when digital presence produces real demand.

> **Visible demand can become the incentive for deeper digitization, rather than deeper digitization being the prerequisite for demand.**

A merchant who initially responds manually may later decide to maintain better snapshots.

Then live inventory.

Then automated responses.

Then open commerce interfaces.

Digitization becomes an evolutionary path tied to demonstrated value.

---

# Where agents may help

Artificial intelligence becomes interesting here not because every shop needs a chatbot.

It becomes interesting because AI can reduce the translation cost between a human business and a machine-readable economic network.

A merchant might describe their business verbally in Hindi.

Another might send photographs of products.

Another might communicate comfortably in Punjabi, Tamil, Kannada or another language while the commerce network underneath uses a common structured representation.

An assistant could:

**extract categories**

**suggest product records**

**identify missing information**

**ask follow-up questions**

**translate between local language and structured commerce data**

**maintain an indicative snapshot**

**screen incoming demand**

**help the merchant formulate an offer**

The merchant should remain free to choose how much automation is useful.

Manual participation should remain possible.

Deterministic rules should remain possible.

Models should remain optional.

A system claiming to include small businesses should not make sophisticated AI infrastructure another barrier to entry.

---

# Existing open commerce is something to build with, not around

India already has substantial infrastructure and experimentation around open digital commerce.

ONDC separates buyer-side and seller-side network participation; seller-side participants connect sellers and digitize catalogues, while buyer applications parse and match buyer search requests across the network.

That solves important interoperability problems.

Our question begins somewhat earlier in the digitization journey:

> **How little structured information does an offline merchant need before they can become usefully discoverable?**

Similarly, emerging standards such as Universal Commerce Protocol create common interfaces for agentic commerce and interoperability.

These are useful future integration points.

A digitally mature merchant may eventually expose a rich standards-compatible commerce interface.

But a small local business should perhaps be able to begin much earlier:

**a location  
a category  
an indicative snapshot  
a phone  
and willingness to respond.**

Both ends of that maturity spectrum should eventually be able to coexist.

---

# Neutrality is part of the architecture

Commerce discovery has an unusual systems problem.

The entity deciding what a buyer sees can also have an economic interest in what the buyer purchases.

Advertising may influence ranking.

A platform may have preferred suppliers.

A platform operating its own inventory may potentially possess information advantages over independent merchants.

These conflicts are not inevitable, and open networks can introduce useful separation and transparency.

But we believe neutrality should be treated as an architectural concern rather than only a policy promise.

A lightweight discovery layer should therefore minimize the information and economic control it needs to own.

Where possible, it should **connect parties rather than permanently intermediate between them.**

After discovery, buyer and seller may continue through:

**direct pickup**

**WhatsApp**

**telephone**

**merchant delivery**

**a third-party logistics provider**

**an open commerce checkout**

**a trusted local human courier**

The discovery infrastructure need not own the entire transaction lifecycle.

---

# Can the economics stay lightweight too?

A system intended to support local commerce should be careful about how its own incentives evolve.

Percentage commissions naturally encourage the intermediary to maximize the value flowing through itself.

That may not always align with a system whose goal is primarily discovery.

One hypothesis worth testing is whether such infrastructure could remain sustainable through mechanisms such as:

**small subscriptions**

**cooperative ownership**

**merchant associations**

**local-body support**

**public infrastructure funding**

or other low-distortion models.

We do not yet know the answer.

The important principle is that the network's survival mechanism should not quietly turn it into the same kind of intermediary it was designed to avoid.

---

# Dead stock is partly an information problem

A product sitting unsold on a shelf is not necessarily unwanted.

Sometimes the buyer simply does not know where it exists.

That creates an interesting duality.

The merchant has:

> **unused supply**

while somewhere else the consumer may have:

> **unfulfilled demand**

Centralized ecommerce solves this extremely well for inventory that is economically worthwhile to catalogue centrally.

Local markets contain a much longer tail.

Indicative discovery followed by live demand may help surface some of it.

We are interested in whether this could measurably improve utilization of slow-moving or fragmented local inventory.

We are deliberately not claiming that such a system automatically reduces inflation or transforms local economies.

A much more useful research question is:

> **Does demand-driven local discovery increase the probability that existing local inventory finds a buyer before the merchant heavily discounts, discards or indefinitely carries it?**

That can be measured.

The larger economic claims should follow evidence.

---

# Fulfilment does not have to belong to the marketplace

Discovery and fulfilment are often bundled together.

They do not always need to be.

A buyer may walk to the shop.

The merchant may already deliver locally.

A logistics provider may be hired.

Someone making another trip may eventually carry a non-urgent item.

Different needs can tolerate different fulfilment models.

This becomes especially interesting when local commerce pods are adjacent.

---

# A small human experiment that looked like a distributed query

One observation behind this idea came from an ordinary purchasing problem.

An item visible on a quick-commerce service was unavailable around Vishal's location but appeared to exist elsewhere in Bengaluru.

He sent a message to a group of friends asking them to check availability around their saved addresses.

Several people queried their own local inventory view.

One location returned a match.

The item was ordered there and later relayed onward.

For humans, this involved unnecessary context switching.

But conceptually the process looked familiar:

**fan out a query**  
→ **receive partial responses**  
→ **select a successful node**  
→ **relay the result**

It raises a broader question:

> **Could neighbouring commerce domains cooperate on discovery and fulfilment without first becoming one giant centralized marketplace?**

A local pod unable to fulfil a request might progressively widen the search to an adjacent pod.

The buyer's agent might explicitly authorize that expansion.

Fulfilment could then be negotiated independently.

This remains exploratory.

But it is the kind of systems question that becomes visible when commerce is thought of as a distributed coordination problem rather than only as a website.

---

# What might a mature merchant journey look like?

The model need not force every merchant toward the same endpoint.

A possible progression is:

**Offline business**

↓

**Basic digital presence**

↓

**AI-assisted indicative snapshot**

↓

**Buyer-authorized live enquiries**

↓

**Rules-based response**

↓

**Inventory-connected automation**

↓

**Merchant agent**

↓

**Open commerce / agent protocol integration**

A merchant can stop anywhere that creates sufficient value.

The network should adapt to business maturity rather than making technological maturity the admission ticket.

---

# Questions we want to test

### 1. Minimum onboarding
How little information is sufficient to make an offline business meaningfully discoverable?

### 2. Assisted digitization
Can text, speech and photographs be turned into a useful merchant snapshot without requiring conventional catalogue management skills?

### 3. Discovery quality
How accurately can an indicative merchant representation identify who is likely to satisfy a buyer's request?

### 4. Progressive search
What is the right strategy for widening discovery from preferred merchants to nearby candidates and eventually adjacent commerce areas?

### 5. Merchant attention
How do we prevent demand discovery from becoming another spam channel?

### 6. Buyer privacy
How much of a buyer's intent and identity needs to be exposed at each stage of discovery?

### 7. Trust
What is the lightest useful mechanism for proving merchant identity, stock availability and eventually product authenticity?

### 8. Neutrality
Can ranking and routing be sufficiently inspectable that merchants and buyers understand why particular options were surfaced?

### 9. Economics
Can the infrastructure remain sustainable without transaction commissions becoming its dominant incentive?

### 10. Interoperability
Can a merchant start with a phone and gradually adopt open commerce or agent standards without rebuilding their digital presence from scratch?

---

# Beyond retail inventory

The same architecture may eventually extend beyond products sitting on shelves.

A tailor has productive capacity.

A repair technician has knowledge and time.

A home cook has capability.

A local manufacturer may have small-batch capacity.

A gig worker has availability.

A neighbourhood service provider has expertise.

The common problem is often not that the capability does not exist.

It is that the capability is difficult to discover at the moment someone needs it.

This is why we call the theme **Commerce & Livelihoods**, not merely local ecommerce.

The broader ambition is:

> **make distributed economic capability easier to discover and participate in.**

---

# What success would look like

Success is not necessarily millions of transactions flowing through Makex.

A good version of this system might deliberately own very little.

Success might instead mean:

A merchant with limited digital experience can become discoverable in minutes.

A customer can find nearby options that previously existed only behind physical shopfronts.

A shopkeeper can speak in their preferred language instead of learning a catalogue-management system.

An indicative presence can create value before perfect digital inventory exists.

A buyer controls when discovery becomes a live merchant request.

Search expands progressively rather than disturbing an entire market.

A merchant can respond manually today and automate tomorrow.

Existing merchant-customer relationships remain useful rather than being replaced by a platform relationship.

Open commerce standards can be adopted as participants mature.

Local inventory gets another opportunity to find demand.

And the infrastructure connecting those participants remains lightweight enough that it does not need to extract a large share of each transaction merely to survive.

---

# The question behind the project

Technology has made global supply astonishingly searchable.

We want to explore whether it can do something seemingly simpler:

> **Help a person discover what their own city already has.**

And do it in a way that recognizes a reality often lost in digital transformation:

> **people and businesses do not all begin from the same level of technology, education, capital or digital confidence.**

If the system can meet participants where they are, instead of demanding they first become sophisticated enough for the system, then local commerce may gain something more useful than another marketplace.

It may gain a bridge.

A bridge from physical presence to digital discoverability.

From informal knowledge to structured participation.

From a manual response today to an interoperable commerce agent tomorrow.

And from invisible local capacity to something the people around it can actually find.

That is the experiment.

---

## References / implementation notes

Use clean public links in the rendered article where factual statements need support:

- ONDC participant/network documentation: https://www.ondc.org/
- Universal Commerce Protocol documentation: https://developers.google.com/universal-commerce-protocol

Do not present ONDC as inherently centralized or exploitative. The article's concerns about ranking, economics and neutrality are design questions/hypotheses, not claims that all open-commerce networks exhibit those failures.
