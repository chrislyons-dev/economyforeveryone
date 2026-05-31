---
title: 'Grid resilience and distributed power'
status: published
docType: 'Lever'
families:
  - 'Capacity building'
tags:
  - 'levers'
  - 'energy'
  - 'infrastructure'
  - 'resilience'
---

# Grid resilience and distributed power

North star: mesh + islands

## 1) What's happening

The U.S. power system is a three-layer machine:

- bulk generation
- high-voltage transmission
- local distribution

It was built for "power flows one way" and "big stuff fails rarely."

Now we're in a world where:

- extreme weather is routine
- cybersecurity is a constant
- demand is rising (data centers, electrification)
- small-scale generation + storage is getting cheap and common

So the old design assumptions are breaking.

## 2) The simple model (plain language)

The useful split is fragile vs resilient, not centralized vs distributed.

Resilience means **many paths, not one fragile path**.

A resilient grid needs both:

1. a strong backbone that can reroute power when something breaks (the mesh)
2. local resources that can keep critical loads alive and smooth peaks (the islands)

Think of it like roads + neighborhoods:

- highways move lots of people far
- side streets keep local life moving when a bridge is out
- you want both, and you want detours

## 3) What the U.S. looks like now (why it feels fragile)

### The load-bearing weaknesses

- Transmission bottlenecks: we can't move power where it's needed fast enough.
- Interconnection queue hell: connecting new generation (and storage) is slow and expensive.
- Distribution upgrades lag: feeders and transformers weren't designed for two-way flows.
- Utility incentives don't match outcomes: many utilities earn more by building big capex, not by orchestrating customer-side flexibility.
- Governance fragmentation: state rules, federal rules, different utilities, different markets. Hard to scale anything uniformly.
- Single points of failure still exist: key substations, corridors, and control systems can take out large areas.

### The current coping pattern

We often "solve" reliability by:

- building peaker plants
- overbuilding capacity
- throwing money at emergency response

That can keep lights on, but it's expensive and it keeps customers powerless.

## 4) North star (what good looks like)

A grid that's:

- hard to knock over
- fast to recover
- cheap to run
- fair to access

Call it:

**Mesh + islands**

- Mesh: modern transmission backbone with enough transfer capacity to route around failures and access lowest-cost power.
- Islands: lots of microgrids + virtual power plants so critical loads and communities can ride through outages and reduce peaks.

In E4E terms:

- security: fewer catastrophic outages, fewer price spikes
- choice: customers can generate/store/shift and get paid fairly
- competition: more supply can connect and compete
- shared gains: savings show up as lower long-run system costs for households
- more security: repeat

## 5) The toolbelt (what "distributed" means in practice)

Distributed energy resources (DERs) = small things, coordinated well:

- rooftop solar
- community solar
- batteries (home, business, utility-scale at distribution)
- EV charging (and eventually EVs as flexible load / storage)
- smart thermostats and HVAC
- water heaters (huge hidden battery)
- backup generators (with guardrails on emissions and runtime)
- demand response (pay people to reduce load when it matters)

Two "systems glue" concepts matter:

### Microgrids

A microgrid can run connected to the larger grid, then "island" during an outage.

Best targets:

- hospitals and clinics
- water and wastewater
- emergency shelters / resilience hubs
- grocery cold storage
- telecom sites
- key community centers

### Virtual power plants (VPPs)

A VPP is many small devices that act like one power plant.

It's the fastest way to scale "distributed" without requiring everyone to install rooftop solar.

## 6) Guardrails (non-negotiables)

Distributed power can become a new inequality machine if we're not careful.

### Equity

- renters must be able to participate (community solar, behind-the-meter batteries at multifamily, VPP enrollment through landlords or programs)
- low-income households must get first-class incentives and protections
- no "rich people get resilience, everyone else gets outages" outcome

### Cybersecurity and safety

- device standards and update policies (no "internet toaster botnet" controlling the grid)
- clear responsibility lines: who can control what, when, and how it's audited
- fail-safe defaults: loss of comms should not create unsafe behavior

### Interoperability

- avoid vendor lock-in
- require open standards / portable enrollment
- make it easy to switch aggregators or programs without bricking devices

### Cost allocation fairness

- transmission and distribution upgrades should not become a stealth regressive tax
- if large new loads (data centers, crypto, heavy industry) drive upgrades, they should pay an appropriate share

## 7) Transition plan (what it looks like in practice)

The transition happens in stages.

### Stage 1: Stop the bleeding (0-2 years)

Goal: reduce outage pain and peak-cost spikes fast.

- Map and harden critical substations and corridors.
- Build microgrids for critical facilities first (water, shelters, clinics).
- Stand up a VPP program that's simple:
  - easy opt-in
  - clear payments
  - strong consumer protections
  - includes renters
- Fix the interconnection process locally where possible:
  - transparent timelines
  - predictable upgrade costs
  - standard contracts

### Stage 2: Make distributed a dispatchable grid asset (2-5 years)

Goal: turn "random devices" into dispatchable flexibility.

- Deploy DERMS / orchestration tools at utilities and ISOs (with guardrails).
- Shift rate design away from punishing participation:
  - avoid export bans as a blunt instrument
  - avoid "gotcha" fees that kill adoption
- Expand community solar + storage.
- Use non-wires alternatives:
  - pay DERs to solve local congestion before defaulting to new wires

### Stage 3: Build the backbone (5-15 years)

Goal: cheap power + strong reliability at scale.

- Build transmission like it's national infrastructure.
- Increase inter-regional transfer capacity (more sharing, fewer islands forced by politics).
- Standardize markets for flexibility so VPPs can bid everywhere.
- Integrate EVs as flexible load (and eventually storage), without making it a reliability hazard.

## 8) Scoreboard (measure what matters)

If we can't measure it, it becomes vibes.

### Reliability

- SAIDI / SAIFI (outage minutes and outage frequency)
- major outage events per year (and restoration time)
- critical facility coverage:
  - % of water/wastewater plants with islandable backup
  - % of designated resilience hubs with islandable backup

### Build velocity

- median interconnection timeline for:
  - small solar
  - storage
  - community solar
  - utility-scale generation
- queue size and churn rate (projects entering vs exiting)
- time-to-permit for:
  - distribution upgrades
  - transmission projects

### Affordability

- peak price events per year (and magnitude)
- congestion costs (where available)
- household bill volatility (month-to-month swings)
- share of system cost spent on peakers and emergency measures

### Participation and fairness

- VPP enrollment:
  - total MW available
  - % renters / multifamily participation
  - % low-income participation
- community solar subscriptions by income bracket (where data exists)
- percentage of customers offered at least one "get paid for flexibility" option

### Security and safety

- number of critical cyber incidents disclosed (trend)
- compliance with device standards (coverage %)
- audit findings for aggregator / utility control programs

## 9) How to talk about it (bridge language)

- "The useful split is fragile vs resilient, not centralized vs distributed."
- "We need a strong backbone and local backup. Highways and side streets."
- "People don't want energy ideology. They want the lights on and bills that make sense."
- "Distributed power should be available to renters too."

## 10) One-page civic asks (copy/paste)

Pick one lane and push it consistently.

### Ask A: Critical facilities first

"Publish a list of critical facilities and a 3-year plan to add islandable backup power for each one."

### Ask B: VPP for everyone

"Create a VPP program that includes renters and pays customers for peak support, with simple enrollment and strong protections."

### Ask C: Interconnection transparency

"Publish interconnection timelines, costs, and queue status in a public dashboard. Make delays explainable and appealable."

### Ask D: Cost allocation fairness

"If new large loads drive upgrades, require transparent cost-sharing so households aren't quietly subsidizing private growth."

## 11) Open questions / research stubs

Use these to drive future notes, posts, and interviews.

- Where are the most dangerous single points of failure (substations, corridors, control systems) in my region?
- What share of outages are transmission vs distribution vs generation?
- What are the current rules for:
  - net metering / export
  - storage interconnection
  - community solar
  - aggregator access (VPP participation)
- What's the local utility incentive structure (how do they earn)?
- Who can approve or block transmission and distribution upgrades (veto points)?
- What are the best "resilience hub" microgrid case studies and financing models?
- What's the best renter-friendly package:
  - community solar + bill credits
  - shared storage
  - appliance incentives tied to VPP enrollment

## 12) Notes for E4E framing

This is a monthly squeeze issue.

- Outages are a direct cost (spoiled food, missed work, hotel nights, repairs).
- Price spikes and congestion costs show up in bills.
- Resilience is household security.

The "loop" version:

- insecurity (outages + volatile bills) -> fear + blame -> no durable fixes -> more insecurity

The "north star" loop:

- security -> choice -> competition -> shared gains -> more security
