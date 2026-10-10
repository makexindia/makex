# Commerce & Livelihoods
## Making Local Markets Legible Again

**Status:** BUILT + EXPLORING

### What if being nearby became an advantage again?

A city can become easier to buy from while becoming harder to earn a living in through an independent business. Our concern is whether existing shops and service providers can remain viable as discovery, ordering and delivery become increasingly coordinated through digital systems.

Local businesses already hold inventory, knowledge, skills and customer relationships. But proximity offers less protection when a platform can also position inventory nearby, for example in dark stores, and deliver quickly. Customers gain convenience; existing businesses need practical ways to offer it too.

We are exploring locally operated commerce nodes for a city, district or other trading area. A node would help businesses become discoverable and respond to relevant demand without requiring complete digital catalogues at the outset. Nodes could cooperate when a need extends beyond the local area and the buyer authorizes a wider search.

Our primary focus is smaller cities and towns, including Tier-2 and Tier-3 markets, where independent shops and service providers are important sources of livelihood. The system should work for merchants with limited formal education, digital confidence or time for catalogue maintenance, while recognizing the product knowledge and customer relationships they already possess. Participation should be possible through familiar language, voice, photographs and simple responses.

We are particularly concerned about markets where a loss of local business viability could narrow the opportunities to own a business, employ others and build a livelihood close to home.

The hypothesis is that shared discovery and coordination could improve the viability of independent local businesses. Whether it can do so at manageable participation costs remains to be tested. The prototypes described below were built; the wider federated system remains exploratory.

A shop may have exactly the product someone needs, sitting a few streets away. The buyer may be ready to purchase it immediately. Yet neither knows about the other. The product is physically available but digitally absent.

That brings us to the practical question behind this work:

> **Can local supply become meaningfully discoverable before the local business becomes fully digital?**

---

## Why this matters to us

For us, local commerce is not an abstract market category.

One of Makex's contributors, Vishal, grew up spending long days during casual childhood visits to his father's consumer-electronics and appliance shop in a Tier-2 Indian city.

Customers returned over years. People asked for advice before making purchases. Appliances and accessories were sometimes repaired rather than immediately replaced. Festive demand could transform the physical market. Relationships became part of the business infrastructure.

The shop also had a repairman who handled electrical and electronics repairs. One incident stayed with Vishal.

When he was eight, a customer arrived with a television remote that was not working while the repairman was unavailable. The customer's child was upset because the television could not be used. Vishal found a suitable battery-contact piece from one of his own broken toys and used it to get the remote working again.

It was a tiny repair. But it contained several things that still shape how we think about technology:

**understand the actual problem, use what is already available, restore usefulness with the smallest practical intervention, and remember that there is a person on the other side of the system.**

Local businesses have traditionally operated through a similar combination of proximity, practical knowledge, relationships and adaptation. Digital participation asks them to take on new work: catalogues, inventory updates, interfaces, advertising and online fulfilment. Time, language and digital confidence can all be barriers, especially before the effort produces useful demand.

### Why local business ownership matters to me

*Personal note by Vishal*

I began exploring local-commerce pods in 2014, while studying for my master's. This was a personal effort outside my academic research. The notes were rough, and the work did not become a sustained project. But the concern was already clear to me: how could the businesses in a city become easier to discover and buy from, with local delivery and cooperation between pods?

That concern came from our family's electronics and appliance shop. In 2014–15, sales were declining, although the shop was not loss-making. Some customers would examine a product in the store, then purchase it online when a discount appeared. I worried about where that trend could lead.

Delivery from distant warehouses often took several days. I thought local availability and quick delivery could give nearby businesses a practical advantage, if customers could discover what those businesses already had. I also worried that this advantage would diminish if large competitors brought their inventory closer to buyers.

Quick commerce has since reached our city. In our local market, I now see competitive pressure extending beyond electronics to general retailers too. The concern about nearby platform inventory is no longer only a possibility I imagined in those early notes.

In recent years, the shop has operated at a loss. It employs two people with families to support, and funds from other sources help keep it running. This experience has made me conscious of the difference between a business remaining open and a business providing a sustainable livelihood.

Customers have good reasons to choose online platforms. Price, convenience, selection and reliable delivery matter. A local business has to offer something useful in return for a customer's choice.

The wider concern is the range of livelihoods available in smaller cities. Can people continue to own shops, develop services, employ others and build something of their own? Our shop's experience does not establish what is happening to every local market, but it explains why I keep returning to this question.

The current proposal has developed considerably since those early notes. AI tools have helped me express and organize the present article. The concern behind it, and my personal work on local-commerce pods, began much earlier.

---

# A local commerce pod

A **local commerce pod** is a proposed node serving a city, district or practical trading area. Think of a local directory that can help answer an availability enquiry. A buyer describes what they need; relevant nearby businesses can confirm what they have, show it and offer terms.

The immediate goal is to find inventory within reach, perhaps for pickup the same day. An item missing from the apps serving a neighbourhood may still be available elsewhere in the city. Searching across participating local businesses could uncover those options. A listing or indicative snapshot suggests who might help; a seller still needs to confirm current availability.

The node first returns possible sellers without sending a live request. The buyer then chooses whom to contact or authorizes a bounded search. Merchants can respond manually or use rules, inventory software or an agent. Responses may include availability, price, offer validity, merchant identity, product details, supporting evidence and fulfilment options.

If local options do not meet the need, the buyer can explicitly authorize a search through neighbouring or other nodes. Replies return through the network. Pickup or delivery can be agreed separately.

The node's role is to make local capability discoverable and coordinate relevant communication. It need not own the inventory or require a complete database of every item. We want to test how much of this can run on modest infrastructure. Its operating costs, including human support, would still need to be covered.

The proposed flow below separates possible availability, live confirmation and agreement. It is an operating model to test, not a claim that the complete system exists today.

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

A merchant might begin with “I sell fruit,” alongside a location and contact preference. Later, photographs of the stall or a voice message in their own language could help the node suggest more specific categories for the merchant to confirm or correct.

Refinement could also work in the other direction. The node could occasionally ask whether the business normally handles a need such as “two dozen bananas” or “a mixed-fruit basket.” A conversation, a simple choice or a clearly labelled sample enquiry could help establish what the merchant offers. The interface remains an experiment; these optional interactions should be easy to skip and never mistaken for real customer orders.

Merchant-confirmed answers could improve future matching without requiring a complete catalogue. What a business usually sells would remain distinct from what it has in stock today.

We experimented with a prompt template and photographs of a store and its products to generate an initial indicative catalogue, which could then be checked and refined. This was a starting representation, not verified quantities, current prices or live stock.

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

Our recent implementation work began with catalogue-first experiments. These prototypes did not implement the full architecture described here. They started with a much simpler real-world problem.

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

Suppose a buyer needs something but does not know which local businesses sell it. Broadcasting the request to every merchant would turn discovery into an interruption for the whole market.

The first layer can instead work from merchant presence and indicative snapshots. It considers the requested category and exact requirements, geographical relevance and any previous merchant relationship to identify possible sellers.

> **Who might plausibly satisfy this request?**

That is a different question from deciding who should receive a live enquiry. Passive searches can return candidates without interrupting a merchant. Only an authorized enquiry asks sellers to spend time confirming availability.

---

# Discovery should not become merchant spam

A buyer may select one merchant, several merchants, or explicitly authorize a broader search. Within that scope, enquiries could begin with preferred merchants, then nearby high-confidence matches, and widen only when needed.

Moving into an adjacent commerce area requires the buyer's authorization, either given at that point or within an explicit search policy. A failed local search should not silently expose the request to an unlimited network.

> **Expand discovery only as far as necessary to fulfil the intent.**

The exact routing algorithm remains an implementation question. The purpose is to protect merchant attention while helping buyers obtain a useful response.

---

# The buyer should authorize the transition from discovery to demand

A search for “Where might I find this?” is not permission to notify every possible merchant. The buyer, or an authorized agent acting within an explicit policy, should decide when a live request is sent and how widely it may travel.

Participants should be able to limit the personal and contact information they disclose until they choose to share more, subject to what an agreed transaction needs. The platform should reduce repeated calls and irrelevant enquiries without removing the option of a direct conversation when that is useful.

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

Buyer convenience should not require sellers to hold stock indefinitely or spend unlimited unpaid time on enquiries. A small, optional reservation amount could be worth testing after availability and terms are confirmed. Any such arrangement would need a clear hold period, cancellation and refund terms, including what happens if the seller cannot fulfil. An enquiry should not itself create a charge.

---

# Communication that can be referred back to

Direct communication can help a buyer assess a seller's response. Current photos, a live video view or an acknowledged quote may help establish what is being offered. An indicative listing, a seller's confirmation and a completed purchase are different levels of evidence.

We envisage a communication channel that lets participants control what they disclose and preserve a verifiable record of offers and agreed terms. The node would retain exchanges only for a disclosed, limited period, while either party could export relevant history for a dispute handled outside the platform.

The design goal is to make later alteration detectable and identify which participant acknowledged which terms. The mechanism, retention period and verification process remain open. This would preserve evidence of an exchange; it would not guarantee the condition of the goods or prevent someone from disputing what happened.

A physical business that a buyer can visit offers another way to inspect goods, ask questions and raise concerns. That visibility can support accountability, although public access alone does not ensure appropriate storage, expiry checks or safe handling. Fulfilment history and reputation may also help, provided participants can challenge incorrect records and seek appropriate recourse when a transaction goes wrong.

A simple channel for enquiries, confirmation and agreement should be useful before elaborate payment or settlement infrastructure becomes necessary.

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

Parties may choose to continue outside the discovery channel. They should understand which exchanges remain in its record and preserve agreed terms before moving elsewhere. Pickup, payment and delivery can be arranged independently; the discovery infrastructure need not own the entire transaction lifecycle.

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

The same network could help businesses notice needs worth investigating. Aggregated enquiries that produced no confirmed match could reveal recurring gaps without exposing buyers or private conversations. A separate, voluntary public request board could let buyers express interest in a product, perhaps linking to a newly launched item to specify what they mean. These would be signals to investigate before acquiring stock: an unanswered enquiry does not prove local absence, and expressed interest is not a purchase commitment.

---

# Fulfilment does not have to belong to the marketplace

Finding an item and arranging its delivery are separate problems. The first useful outcome might simply be a confirmed item that the buyer can collect from a nearby shop.

Existing services illustrate some of these choices. BB Daily describes subscriptions and one-off purchases with next-morning delivery, while BigBasket publishes scheduled delivery slots.

Decathlon's Reserve and Collect process asks customers to wait for a readiness notification before visiting the store. It also describes a warehouse-delivery fallback when shelf stock is unavailable, illustrating why an order and confirmed local availability are different things.

These examples demonstrate scheduled delivery and confirmation before collection, rather than establish the economics of our proposed network. For some purchases, fulfilling the requested basket within an acceptable window may matter more than the fastest arrival of any one item. That preference is something to test with buyers.

The merchant may already deliver locally, or the parties may choose an independent delivery provider. Local gig workers could potentially offer this service, but their participation, costs and responsibilities would need to be established. A courier network should not be assumed to exist merely because workers are nearby.

Someone making another trip may eventually carry a non-urgent item. Different needs can tolerate different fulfilment models. For now, we leave the delivery arrangement open rather than making consolidated logistics a prerequisite for useful discovery.

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

The buyer, or an agent acting within the buyer's explicit policy, would need to authorize that expansion.

Fulfilment could then be negotiated independently.

Local nodes could handle representation, support and routing for their trading areas while sharing rules for interoperability, consent and transparent participation. The analogy is local discretion within common rules: each area can respond to its circumstances and cooperate with others. It does not require exclusive territories or a buyer being tied to one operator.

Local operation does not automatically ensure fairness. Operator accountability, sustainable costs and the ability to change providers remain design questions.

This remains exploratory.

But it is the kind of systems question that becomes visible when commerce is thought of as a distributed coordination problem rather than only as a website.

---

# What might a mature merchant journey look like?

The participation diagram describes possible stages, not a compulsory upgrade path. A merchant may begin with a basic presence and manual replies, adopt rules or inventory-connected responses when useful, and eventually expose a standards-compatible commerce interface.

A merchant can stop anywhere that creates sufficient value. The network should adapt to business maturity rather than making technological maturity the admission ticket.

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

Licensed roaming vendors and informal businesses are also possible participants. Their service areas may change, so a fixed shop address should not become an automatic requirement. Appropriate identity checks and participation requirements would need to be worked through.

The common problem is often not that the capability does not exist.

It is that the capability is difficult to discover at the moment someone needs it.

This is why we call the theme **Commerce & Livelihoods**, not merely local ecommerce.

The broader ambition is:

> **make distributed economic capability easier to discover and participate in.**

---

# What success would look like

The central question is whether participation helps people remain viable independent business owners. A shop remaining open through funds from elsewhere is different from a shop supporting its owner and employees through its own activity.

We would want to measure additional profitable demand, owner earnings after costs and an allowance for their work, reliance on outside subsidy, and the time required to maintain a presence and respond to enquiries. Sign-ups or transaction volume alone would not establish a livelihood benefit.

The practical experience matters too:

- A merchant with limited digital experience can become discoverable without creating a complete catalogue.
- A customer can find and confirm nearby options that previously existed only behind physical shopfronts.
- A shopkeeper can use their preferred language and respond manually, adopting automation only where it helps.
- The buyer controls when discovery becomes a live request and when the search extends beyond the local area.
- Relevant demand reaches merchants without overwhelming them with interruptions.
- Merchants retain useful customer relationships and can choose providers rather than becoming dependent on one operator.
- Open commerce interfaces remain available as participants mature.
- Local inventory has a better chance of finding demand before it is heavily discounted, discarded or indefinitely carried.

The hypothesis is that manageable discovery and coordination could support local enterprise. Whether it delivers these outcomes, for which businesses, and at what operating cost must be tested in practice.

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
