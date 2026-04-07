---
title: 'Creator Backlash, Betrayal, and Authenticity Collapse'
bucket: 'stress-test'
corePattern: 'When production cost drops toward zero, distribution and trust become the choke points. Creators who built the training data are now competing against it - without consent, without compensation, and without labels that let audiences choose.'
studyDate: 2026-04-04
eventWindowStart: 2022-01-01
eventWindowEnd: 2026-04-04
status: 'published'
summary: 'Making content got cheap faster than the rules caught up. Once that happened, the gate stopped being production and became distribution, labeling, and trust - shifting power away from creators and toward the labs, platforms, and institutions that control discovery.'
claim: 'Creator backlash is a governance story before it is a culture-war story: creative work was pulled into training and replacement systems before consent, provenance, contestability, and compensation were put in place.'
evidenceLevel: 'medium'
policyDomain:
  - 'technology-governance'
  - 'labor-market'
  - 'media'
  - 'consumer-protection'
  - 'competition'
tags:
  - 'ai'
  - 'creators'
  - 'media'
  - 'labor'
  - 'trust'
  - 'platforms'
  - 'governance'
receiptTags:
  - 'primary-documents'
  - 'independent-analysis'
sources: []
---
- [Creator Backlash, Betrayal, and Authenticity Collapse](#creator-backlash-betrayal-and-authenticity-collapse)
  - [At a glance](#at-a-glance)
  - [1. One scene](#1-one-scene)
  - [2. What's happening - the five buckets](#2-whats-happening---the-five-buckets)
  - [3. Why it's happening - the mechanism](#3-why-its-happening---the-mechanism)
  - [4. Harms taxonomy](#4-harms-taxonomy)
  - [5. Control stack: who governs what gate?](#5-control-stack-who-governs-what-gate)
  - [6. Shared Gains Test](#6-shared-gains-test)
  - [7. What good looks like - the minimum floor](#7-what-good-looks-like---the-minimum-floor)
  - [8. What to do](#8-what-to-do)
  - [9. How to talk about it](#9-how-to-talk-about-it)
  - [10. How creator backlash fits the larger pattern](#10-how-creator-backlash-fits-the-larger-pattern)
  - [Loop Effect](#loop-effect)
  - [North Star verdict](#north-star-verdict)
  - [11. Receipts appendix](#11-receipts-appendix)

---

## At a glance

- **What went wrong:** Making content got cheap faster than the rules caught up. Once that happened, the gate stopped being production and became distribution, labeling, and trust.
- **Where the power went:** Away from the people making the work and toward the people controlling discovery. Labs trained on creator work. Platforms control ranking and disclosure. Courts still have not answered the core legal question.
- **Who gets hit first:** Entry-level and gig workers feel it earliest - those are the roles that disappear first when "good enough" gets cheap. Mid-tier professionals face the deepest structural damage: no institutional backing, no audience scale to survive on brand alone, and a price floor that dropped before they had time to reposition.
- **What the minimum floor is:** Consent before training, labels where audiences actually see them, and a real way to challenge bad ranking or takedown decisions. Some of that is starting to move. Most of it still is not.
- **What to keep in view:** The whole story is not one-sided. Courts have not ruled training is infringement in the US or UK. Consumers do get cheaper content. More AI content does not automatically mean more reach. And some creators do benefit - just usually not the ones taking the hardest hit.

---

## 1. One scene

On April 30, 2025, the chair of Seattle Worldcon 2025 - the Hugo Awards host organization - disclosed that ChatGPT had been used to vet more than 1,300 panelist applications. The task was framed as information discovery prior to human review. No panelist had been excluded solely on AI output.

The community response was immediate. John Scalzi publicly criticized the decision. Yoon Ha Lee withdrew his novel from the Lodestar Award finalist list. Authors Elizabeth Bear and Fran Wilde withdrew from programming. Three senior administrators resigned: Hugo Administrator Nicholas Whyte, Deputy Hugo Administrator Esther MacCallum-Stewart, and WSFS Division Head Cassidy. Chair Kathy Bond issued a public apology: "I sincerely apologize for the use of ChatGPT in our program vetting process." [CREATOR-069, CREATOR-070]

The specific grievance was not that AI made wrong calls. It was that using AI to vet the people representing a craft community signaled indifference to the labor and judgment the community exists to honor. The institution used a tool trained on writers' work to decide which writers got to speak at the writers' convention.

That is the case, compressed. The backlash is emotional, but it is also a signal pointing at a structural problem: when production is cheap, institutions and platforms that once mediated trust now have incentives to offload judgment to automated systems - and the people whose work built those systems have no real recourse.

---

## 2. What's happening - the five buckets

Before the buckets, the legal posture needs to be stated clearly. Most of the conduct described below has not been explicitly determined illegal in the US or UK. The central copyright question around model training is still unresolved in those jurisdictions. In September 2024, a Hamburg court ruled that building public AI training datasets falls within the EU text-and-data-mining exception, at least in a research context. [CREATOR-010] That does not settle the broader moral or economic argument, but it does mean the creator backlash is not simply a story of firms openly violating clear black-letter law.

That is also why so much of the current "creator protection" landscape looks like damage control rather than binding governance. Opt-out registries, platform promises, and policy statements exist, but many are voluntary, weakly enforced, delayed, or limited to narrow contexts. At this stage, much of the industry is offering lip service to creators without being broadly legally obligated to do much more.

### Bucket 1: Unconsented training

The core point is simple: creative work was pulled into training pipelines first, and consent, compensation, and transparency were treated as afterthoughts. That does not automatically make the practice illegal under current law. The central legal question remains unsettled in major jurisdictions. A Hamburg court affirmed the practice in September 2024 under the EU text-and-data-mining exception for a research context. The industry still built first and treated creator protections as a follow-on PR and governance problem.

Opt-out frameworks do not change that basic sequence. Most arrived late, rely on voluntary compliance, or exist as policy language without proven enforcement. AI companies can move at startup speed when shipping products yet they somehow become glacial when the topic is creator consent.

**Receipts:**

LAION published LAION-5B: 5.85 billion image-text pairs from web crawls, released publicly for research. [CREATOR-001] In January 2023, artists Sarah Andersen, Kelly McKernan, and Karla Ortiz filed class-action copyright suit against Stability AI, Midjourney, and DeviantArt, alleging LAION-5B was used without consent or compensation (Andersen v. Stability AI, N.D. Cal. 3:23-cv-00201). Direct copyright and trademark claims survived motions to dismiss. Trial is set for September 8, 2026. [CREATOR-002]

In January 2024, a leaked Google spreadsheet titled "Midjourney Style List" contained 16,000+ artist names whose styles were used as training prompts. Many named artists had no prior knowledge. [CREATOR-003]

DeviantArt stated plainly in November 2022 that AI generators were trained on open-web datasets that included content from creator platforms like DeviantArt without permission. [CREATOR-004]

The Atlantic published a searchable tool for "Books3," a database of roughly 183,000 books used in AI training disputes. [CREATOR-005] Wired reported unredacted allegations that Meta used Library Genesis - a piracy library - as part of LLM training data, with internal discussions about the "economic value" of books. [CREATOR-006]

RIAA member labels filed complaints against Suno and Udio alleging unauthorized copying of sound recordings for model training. [CREATOR-007]

The Lovo lawsuit alleges voice recordings were obtained under limited-use representations, then used to create marketable synthetic voice products - "I consented to X" became "my identity became a product." [CREATOR-008]

Spawning's "Have I Been Trained" registry exists, but it is honored voluntarily by firms such as Stability AI and HuggingFace. [CREATOR-015] OpenAI announced an opt-out tool in May 2024; it had not shipped as of the research date. [CREATOR-016] The EU AI Act (Article 53, effective August 2025) codifies a machine-readable opt-out obligation, but this research pass found no demonstrated enforcement track record yet. [CREATOR-018]

**What the evidence does NOT say:**

No US or UK court has ruled that AI training on copyrighted images constitutes copyright infringement. Andersen v. Stability AI is in discovery. The UK High Court's November 2025 ruling in Getty v. Stability AI abandoned the primary copyright claim on jurisdictional grounds; the training question was not reached. [CREATOR-009] A Hamburg court ruled in September 2024 that building public AI training datasets falls within the EU text-and-data-mining (TDM) exception - legally validating what creators call theft, at least under EU research-use doctrine. [CREATOR-010] So the strongest current claim is not "this was already clearly illegal." It is that platforms moved aggressively into legally gray or contested terrain, then offered partial creator protections only after backlash.

### Bucket 2: Labor devaluation and lost work

AI has already devalued creative labor in documented parts of the market. The mechanism is straightforward: a cheaper substitute lowers the price anchor and weakens the bargaining position of human creators. Even when the AI product is worse, "cheap and fast" content is enough to push down rates, cut commissions, and eliminate entry-level work.

The scope should stay clear. No single confirmed industry-wide loss figure exists and some of the biggest numbers are projections rather than observed losses. Consumer surplus also exists in some markets. That does not change the underlying point. It means the gains and losses are distributed unevenly.

**Receipts:**

The Association of Illustrators (AOI) 2025 survey found more than 32% of respondents had lost work to AI, at an average loss of GBP 9,262 per affected artist. 37% said illustrated work had decreased in value due to generative AI. [CREATOR-021]

The Society of Authors 2024 survey found 26% of illustrators and 36% of translators reported already losing work due to generative AI; 43% of translators reported income decreases. [CREATOR-022]

CISAC/PMP Strategy's December 2024 global study projected: music creators face 24% revenue at risk by 2028; audiovisual creators face 21%; translators and dubbing adaptors face 56% revenue at risk - the highest among named roles. Cumulative projected loss: EUR 10 billion (music) + EUR 12 billion (audiovisual) over five years. These are forward projections, not observed losses. Note: CISAC represents rightsholders and has institutional interest in large projected-loss numbers; no independent validation of the model was found. [CREATOR-027]

SAG-AFTRA filed an unfair labor practice charge in May 2025 over Fortnite's use of an AI-generated "Darth Vader" voice, alleging Llama Productions "chose to replace the work of human performers with AI technology." [CREATOR-024] SAG-AFTRA video game performers struck in 2024 specifically over AI concerns, particularly digital voice replication. [CREATOR-025]

Getty Images' flagship "Creative" stock segment declined nearly 5% year-on-year in 2024, though the attribution to AI specifically is not confirmed - market cycle effects, subscription model shifts, and non-AI competition are all plausible contributors. [CREATOR-028]

In China-based game studios, illustrators were explicitly laid off as studios adopted AI image generation, with named studios and workers documented in a Rest of World investigation. [CREATOR-031]

**What the evidence does NOT say:**

There is no single confirmed industry-wide figure for total income lost to AI substitution in the US or globally. CISAC projections are model-based, not observed. Game industry layoff data does not cleanly separate AI-driven reductions from economic cycle effects and studio consolidation. [CREATOR-030]

The Stanford GSB study (May 2025) documented consumer surplus and creator income loss simultaneously. Consumers benefit economically from lower-cost AI-generated content entering markets. [CREATOR-038]

### Bucket 3: Slop saturation and discovery collapse

Cheap synthetic volume is already degrading discovery systems. Ranking, recommendation, and editorial intake all work worse when they have to process floods of low-value content, and fraud cases poison trust on top of that. The burden of filtering junk has shifted onto platforms, institutions, and audiences.

Not every creator's discoverability collapse can already be traced directly to AI, and volume is not the same as reach. That does not change the underlying point. A system can be degraded by low-value volume even when much of that volume gets little traffic.

Three distinct phenomena need to be separated because they work through different mechanisms and require different responses:

1. **Fraud**: fake authorship, bot-driven streams, fabricated reviews - these are theft and fraud.
2. **Volume displacement**: low-quality AI content occupying search and recommendation surfaces.
3. **Price competition**: AI-generated content of comparable quality competing on price.

**Receipts:**

Deezer reported receiving approximately 50,000 fully AI-generated tracks per day in 2024. [CREATOR-039] North Carolina man Michael Smith pleaded guilty to creating hundreds of thousands of AI-generated songs and using bots to stream them billions of times, generating $8 million in fraudulent royalties from Spotify, Amazon Music, and Apple Music. [CREATOR-040]

Fake AI-generated albums appeared on Spotify pages for established artists including FIT FOR AN AUTOPSY, ALPHA WOLF, Mos Def, Madvillain, and Lucy Pearl - without those artists' knowledge or consent. Spotify introduced "Artist Profile Protection" in response. [CREATOR-041, CREATOR-042]

A major sci-fi magazine halted submissions in early 2023 after being inundated with AI-generated stories. [CREATOR-043]

Reuters Institute for the Study of Journalism (Oxford, using Chartbeat data across 2,500+ news sites) reported global referrals from Google Search dropped 33% year-on-year between November 2024 and November 2025. Publishers expect further declines as AI-mediated discovery grows. This is correlation-plus-timing evidence, not a controlled causal estimate. [CREATOR-046]

In April 2026, a coalition of 200+ organizations urged YouTube and Google to address "AI slop" videos targeting children, calling for labeling, limits in YouTube Kids, and parental controls. [CREATOR-050]

**What the evidence does NOT say:**

There is no confirmed measurement of what share of human creators have lost discoverability due specifically to AI content flooding, as distinct from algorithm changes, platform policy changes, or market maturation. The Reuters Institute finding covers news publishers, not the broader creator ecosystem. The Michael Smith fraud case involved bot-driven artificial streams, not organic audience displacement - a distinct harm with a different mechanism. [CREATOR-040]

The New Publishing Standard (October 2025) argued the book flood is real but "neither the industry-ending flood nor the creative apocalypse that headlines suggest." [CREATOR-051] 92% of pink slime local news sites have no detectable traffic. [CREATOR-052]

This case study defers to `content-flood-gate-shift.md` for the children's books and local news receipts; the mechanism is proven there and is not reproduced here.

### Bucket 4: Consumer betrayal and authenticity collapse

Disclosure and provenance are breaking down, and that breakdown is poisoning trust. Synthetic work is being passed off as human. Human work is being accused of being synthetic. Either way, the creator pays. The practical result is that everyone has to spend more effort proving what should have been obvious.

The evidence is narrower than the rhetoric. This is not yet a story with clean large-scale evidence of refunds, canceled subscriptions, or measured brand damage. The stronger point is narrower and still important: once people stop trusting what they are looking at, creators have to keep proving their work is real.

**Receipts:**

Disney/Marvel faced audience backlash in June 2023 after disclosing that the opening sequence of Secret Invasion used AI imagery. [CREATOR-053] Late Night with the Devil faced calls for boycotts in March 2024 after viewers learned AI-generated images were used. [CREATOR-054]

In March 2025, OpenAI debuted its image-generation feature in ChatGPT. Users generated Ghibli-style images at scale. Sam Altman changed his profile picture on X to a Ghibli-style AI image. Karla Ortiz (plaintiff in Andersen v. Stability AI) called it "another clear example of how companies like OpenAI just do not care about the work of artists and the livelihoods of artists." Hayao Miyazaki, who has been publicly on record since 2016 calling AI animation "utterly disgusting," remained silent. Studio Ghibli issued no official comment. [CREATOR-057]

The specific grievance in the Ghibli case appears distinct from the general training-data question - it is about the commercial use of a specific living artist's creative identity, not just the training-data supply question - though that distinction is interpretive, not a confirmed legal category. [CREATOR-057]

FTC launched "Operation AI Comply" in September 2024, targeting companies using AI for deceptive conduct including AI-generated fake reviews. [CREATOR-059]

In March 2026, a major publisher reportedly pulled a novel after allegations circulated that it relied heavily on AI. The author denied personal use. This is an instance where trust failure became a reputational catastrophe amid factual uncertainty. [CREATOR-060]

A photographer was disqualified from a contest after their work was mistakenly deemed AI-generated. AI detection tools show significant false-positive rates and documented bias against non-native English writers. [CREATOR-062, CREATOR-063]

**Consumer preference findings - and the contradiction:**

A Springer cognitive research study found human-labeled art received higher ratings on liking, beauty, profundity, and worth. [CREATOR-064] A Bynder study found 93.75% of listeners do not value AI-generated music as much as human-created music. [CREATOR-065]

A contradicting finding: a separate engagement study found 56% of participants preferred AI-generated articles over human-written ones when shown both without disclosure. Source methodology for this study is unidentified; treat with caution. [CREATOR-068]

Those findings can sit together: people seem to prefer human content when they know the source, but they often cannot reliably detect AI content and may prefer it when it is unlabeled. The point is not to smooth over that contradiction.

**What the evidence does NOT say:**

There is no confirmed large-scale study of consumer behavior change (refunds, subscription cancellations, brand damage) triggered specifically by AI art disclosure. The Ghibli incident documents creator outrage clearly but does not document consumer withdrawal at scale. The commission fraud pattern (AI work sold as human-made in direct commissions) is widely reported in creator communities but no named, verified incident with documentation was found in this research pass. [CREATOR-061]

### Bucket 5: Institutional betrayal

Institutions that creators expected to defend human work have repeatedly acted according to their own incentives instead. Platforms monetized training access. Creator-serving organizations normalized AI as neutral productivity tooling long after replacement risk was obvious. The verifiable structural claim: institutions with leverage to set norms chose accommodation over constraint, and in documented cases - WorldCon, MWA, NaNoWriMo - faced resignation, backlash, and reputational damage when they did.

The pattern is broad, not universal. Some organizations are drawing clear lines and not every institution has capitulated. The broader pattern still holds. The pattern has two distinct layers: a structural incentive at the platform level and a signal failure at the level of non-platform creator organizations.

**The structural mechanism: platforms control the supply chain**

Creator-serving platforms have a structural incentive to monetize the training-data supply chain. Institutions have a parallel incentive to reduce labor costs via AI. When production cost drops, the platform that controls distribution is positioned to capture a disproportionate share of the durable gains. Three receipts show this posture directly:

Shutterstock announced a partnership with OpenAI, publicly stating "the data we licensed from Shutterstock was critical to the training of DALL-E." Shutterstock simultaneously pursued litigation against alleged unlicensed scraping. The dual posture - sue unlicensed training, sell licensed training - is not hypocrisy. It is the rational move for a platform that controls the distribution gate. Individual creators inside the Shutterstock marketplace have no equivalent leverage. [CREATOR-082]

Adobe does not offer an opt-out for standard-collection contributors to Firefly training. Adobe pays variable, discretionary annual bonus payments. Adobe's multiple public clarifications about its Terms of Service are themselves a receipt: creators had sufficient reason to fear silent training that Adobe had to make explicit promises publicly. [CREATOR-017, CREATOR-080]

Getty launched "Generative AI by Getty Images," trained on Getty content, while simultaneously pursuing litigation against Stability AI for unlicensed scraping. Same dual posture as Shutterstock. [CREATOR-083]

The underlying incentive is structural: platforms that control distribution can capture value from the training-data supply chain that individual creators cannot. Consent, provenance, and compensation become negotiating leverage for platforms - not rights for creators - because most creators have weak exit options once distribution is concentrated.

**Institutional signal failures: when non-platform creator orgs absorbed the wrong assumption**

WorldCon, MWA, SFWA, and NaNoWriMo do not prove the structural mechanism above. They document something different: that even creator-serving non-platform organizations internalized the assumption that AI is a neutral productivity or administrative tool, not a substitution threat. These are institutional signal failures. They corroborate the mechanism but operate through a different path.

WorldCon 2025 (detailed in the opening scene above): ChatGPT used in panelist vetting; three administrators resigned; chair issued a formal apology. [CREATOR-069, CREATOR-070]

At the Mystery Writers of America Edgar Awards ceremony (May 1, 2025), the opening video featured AI-generated images including an AI version of Humphrey Bogart and an AI-generated Edgar Allan Poe. The MWA board published an apology: "Such use is inconsistent..." [CREATOR-072, CREATOR-073]

SFWA initially amended Nebula Award rules to allow works created "in part" with generative AI. The same day, SFWA amended rules again to disqualify works created "either wholly or partially" by generative AI and stated it "does not support the use of LLM generative models in the production of creative work." [CREATOR-071]

NaNoWriMo asserted that "categorical condemnation" of AI has "classist and ableist undertones." The response included resignations, widespread criticism including from disabled writers who rejected being used as rhetorical cover, and reporting that characterized the AI controversy as a plausible contributing factor to the organization's financial strain and eventual shutdown - though direct causation was not established. [CREATOR-075] This is the clearest case of a creator-serving institution using inclusion language to defend AI adoption, with creators rejecting that framing explicitly.

**What is actually moving:**

WGA 2023 contract (ratified with 99% member approval): AI cannot be credited as a writer; AI-generated material cannot undermine a writer's credit or separated rights; companies cannot require writers to use AI; companies must disclose when materials given to writers were AI-generated. [CREATOR-076]

SAG-AFTRA 2023 TV/Theatrical contract and 2024 Animation Agreement: explicit, informed consent required before studios create or reuse a digital replica of a performer's voice or likeness. SAG-AFTRA also signed the Narrativ agreement in August 2024, allowing members to license digital voice replicas for audio ads at SAG minimums with member-controlled pricing - a structured opt-in pathway. [CREATOR-019, CREATOR-078]

Procreate published an explicit "No generative AI" pledge: "Creativity is made, not generated." [CREATOR-079] Etsy's CEO committed to keeping "commerce human" and removed four times the number of listings violating handmade policy versus the prior year. [CREATOR-081] Games Workshop announced a ban on AI use in all its designs in January 2026. [CREATOR-032]

**What the evidence does NOT say:**

WGA and SAG-AFTRA provisions address AI replacement within existing writing and performance workflows but do not cover AI training on writers' existing work or AI use in pre-production. CNBC reporting characterized Hollywood's AI issues as "far from settled." [CREATOR-077] No US or UK court has ruled on the central training question. The direction of travel is real, but the governance patchwork is still partial.

---

## 3. Why it's happening - the mechanism

The five buckets share one structural root cause but have different mechanisms and different remedies.

**Step 1: Production cost drops to near-zero.** AI tools collapse the cost of producing images, text, music, and voice content from thousands of dollars and days of skilled labor to cents and seconds. That shift is real and it is not reversing.

**Step 2: The gate moves.** When production is cheap, distribution and trust become the scarce resources. Whoever controls ranking, feed placement, labeling, and trust signals holds the choke point. That is now labs (which train models), platforms (which set ranking and disclosure rules), and institutions (which govern what counts as legitimate work). This is not a new structure - Getty, Shutterstock, and Spotify already controlled the distribution gate before generative AI existed, as the Pelly/Spotify research documents. AI amplified an existing platform-extraction pattern; it did not create the gate concentration.

**Step 3: Accountability disappears.** The platform's review team, the brand's legal department, the training data manager all have scripts. None has responsibility. No single actor made a bad decision; responsibility got distributed until it disappeared. This pattern appears across the AI case studies and lands hardest in creative markets because the thing being displaced is a person's livelihood and creative identity.

**Step 4: Creators pay twice.** First through economic displacement - lower price anchors, lost gigs, weakened bargaining leverage even when the substitute is worse. Then through authenticity collapse - reputational suspicion when real work is accused of being AI-generated, and lost trust when audiences discover they were not told what they were consuming. **Calibration note:** the reputational-suspicion half of this pattern - human work accused of being synthetic - is documented in isolated cases and reported widely in creator communities, but has not been measured at scale. It is a plausible mechanism with partial receipts, not a confirmed systematic harm.

The mechanism is structural, not malicious. It does not require coordinated intent. It requires only that production cost dropped faster than governance caught up - which is what happened.

---

## 4. Harms taxonomy

| Creator type                   | Primary harm vector                                                                            | Evidence                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Illustrators / visual artists  | Lost commissions, weakened price floor, training without consent                               | AOI 2025 (32%+ lost work); Andersen v. Stability AI [CREATOR-021, CREATOR-002]  |
| Translators / dubbing adaptors | Highest revenue risk of named roles (56%, projected, not observed)                             | CISAC 2024 [CREATOR-027]                                                        |
| Screen actors                  | Digital replica / likeness reuse risk; consent and replacement pressure                        | SAG-AFTRA TV/Theatrical and Animation agreements [CREATOR-019]                  |
| Voice actors                   | Digital replica risk; replacement without consent                                              | SAG-AFTRA ULP (Fortnite); SAG-AFTRA 2024 strike [CREATOR-024, CREATOR-025]      |
| Writers (literary / genre)     | Training-data use without consent; slop flood closing editorial intake                         | Books3; sci-fi magazine halt [CREATOR-005, CREATOR-043]                         |
| Songwriters / musicians        | Fraudulent streams; training without consent; 24% revenue at risk (projected, not observed)    | Smith guilty plea; RIAA lawsuits; CISAC [CREATOR-040, CREATOR-007, CREATOR-027] |
| Entry-level / gig workers      | First roles eliminated when "close enough" gets cheap enough                                   | Animation Guild report [CREATOR-026]                                            |
| Mid-tier professionals         | Gate shift hits hardest: no institutional backing, no audience scale to survive on brand alone | AOI/SoA surveys; stock segment declines [CREATOR-021, CREATOR-022, CREATOR-028] |

---

## 5. Control stack: who governs what gate?

| Gate                     | Who holds it                                     | Accountability                                                                                                                           |
| ------------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Training data            | AI labs                                          | Voluntary opt-out frameworks; EU AI Act codification (effective Aug 2025, enforcement not demonstrated); no binding US rule              |
| Model outputs            | AI labs                                          | RIAA, Getty litigation pending; no adjudicated ruling on training-as-infringement                                                        |
| Distribution / ranking   | Platforms (Spotify, Amazon KDP, Google, YouTube) | No disclosure requirement; no appeal path; no publication of ranking logic                                                               |
| Provenance / labeling    | Platforms + AI labs                              | No consumer-facing label at point of discovery mandated in US; EU AI Act requires disclosure for AI-generated content in some categories |
| Institutional legitimacy | Awards orgs, guilds, professional associations   | Highly variable: WGA/SAG-AFTRA negotiated floors; WorldCon, MWA, SFWA all experienced institutional failure in 2025                      |
| Legal clarity            | Courts                                           | No ruling on core training question in US or UK as of research date                                                                      |

The control stack has multiple actors and no single point of accountability. That is not an accident - it is how platform power operates. See also `content-flood-gate-shift.md` Section 6 for the parallel governance-gap analysis in children's books and local news.

---

## 6. Shared Gains Test

The E4E test: do gains flow to everyone in proportion to contribution, or do they concentrate at the top while costs flow down?

**Who benefits from the current arrangement:**

- AI labs: trained on decades of creative output at low or zero marginal cost; captured enormous economic value.
- Platforms: more content at lower cost; stronger lock-in of creator dependency.
- Consumers: lower prices, more available content. Stanford GSB (May 2025) documented this directly. [CREATOR-038]
- Some creators who adopted AI proactively and serve clients for whom AI-assisted delivery is valued.

**Who bears the costs:**

- Mid-tier professionals whose price floor dropped and whose gig volume declined before they had time to reposition.
- Entry-level workers whose on-ramp roles were eliminated.
- Creators whose work became training data without consent or compensation.
- Audiences who cannot verify what they are reading or consuming.
- Institutions that failed their communities and lost trust.

**Verdict:** Gains concentrated at labs and platforms. Costs distributed to creators (economic and reputational) and to audiences (trust). Consumer surplus is real but does not offset creator harm - they affect partially overlapping populations and the net effect is not established.

---

## 7. What good looks like - the minimum floor

The case study `content-flood-gate-shift.md` names the Market Integrity minimum floor. This case adds the creator-facing layer:

**Consent before training.** Creators should have a real, exercisable right to opt out of having their work used in AI training. "Voluntary registries honored by some platforms" is not that right. The EU AI Act codifies machine-readable opt-out (effective August 2025); the US has no equivalent. The Hamburg ruling established that opt-out matters enough to legislate; enforcement is the remaining gap.

**Provenance at the point of discovery.** AI-generated content should carry a consumer-facing label at the point of discovery - not buried in a description field, not disclosed only in a press release. This is the same floor that `content-flood-gate-shift.md` names for children's books and local news. It applies to the full creator ecosystem.

**Contestability when ranking and takedown go wrong.** Any platform that controls a creator's primary discovery path should have an auditable, appealable system. Right now, no major platform in this case offers creators a meaningful version of that standard. Amazon KDP's AI disclosure policy, for example, requires disclosure to Amazon but does not present a consumer-facing label or create an appeal right for creators who are demoted. A creator whose work is demoted or removed has a form and a wait. That is not recourse.

**Compensation pathways when work trains models.** The Shutterstock/Getty licensing model (platforms negotiate bulk deals with labs) exists and provides some creator share. Whether individual creators benefit is not established. [CREATOR-020, CREATOR-083] The SAG-AFTRA Narrativ agreement is a structured opt-in model for voice replica licensing - the architecture is replicable. [CREATOR-078]

**What is actually moving (as of research date):**

- WGA 2023 contract: floors on AI credit, disclosure, and opt-in. [CREATOR-076]
- SAG-AFTRA: consent requirements for digital replicas; structured opt-in licensing path. [CREATOR-019, CREATOR-078]
- EU AI Act: machine-readable opt-out obligation (Article 53); disclosure requirements for some AI-generated content. [CREATOR-018]
- Procreate's explicit "no generative AI" pledge. [CREATOR-079]

**The gap:** WGA and SAG-AFTRA provisions cover members within specific contract jurisdictions. They do not cover non-signatory companies, pre-production AI use, or training on existing work. The EU AI Act's opt-out enforcement is not yet demonstrated. Platforms have not adopted consumer-facing provenance labels voluntarily. Courts have not ruled on the core question.

---

## 8. What to do

### Creator-level

- **Strengthen signals that are hard to synthesize.** Direct relationships, documented process, revision history, named clients and collaborators. These resist substitution better than polished output alone.
- **Build at least one channel you own.** Newsletter, direct booking, community - a channel that does not depend on a platform's ranking logic for survival. When platform ranking shifts, owned channels survive.
- **When you lose ranking or get removed, ask in writing for the specific reason.** Document the response - or the non-response. That record is important if accountability catches up.
- **Use Glaze if you publish visual art online.** Pixel perturbations that prevent style copying are available, functional at current download scale (6+ million downloads), and do not require legal action. Independent peer review of Nightshade's effectiveness at production model scale is pending. [CREATOR-012]

### Community and policy level

- **Push for consumer-facing provenance labels.** Platform disclosure in a description field is not a label. The floor is AI disclosure at the point of discovery - at the listing, the stream, the search result.
- **Support contestable ranking.** Platforms that control primary discovery paths should have auditable, appealable ranking systems. This is a regulatory ask, not a voluntary one.
- **Support opt-out with teeth.** The EU AI Act model (machine-readable opt-out, enforceable) is more durable than voluntary registries. Advocate for equivalent US legislation. Monitor EU enforcement.
- **Require compensation pathways when training uses licensed content.** The Shutterstock/Getty bulk-licensing model is a starting architecture. The missing piece is individual creator benefit flowing through platform deals, not just platform revenue.
- **Support guild provisions where they exist and push for extension.** WGA and SAG-AFTRA floors are real but jurisdiction-limited. Non-signatory companies, pre-production use, and training on existing work remain ungoverned. Extend the model.

### Institutional level (for organizations serving creators)

- **Institutions that treated AI as a neutral administrative tool in creative-labor contexts faced predictable backlash.** WorldCon and MWA both used AI at ceremonies honoring creative work; both issued formal apologies after administrators resigned and community members withdrew. The incidents were not anomalies - they followed directly from treating efficiency logic as context-independent.
- **Institutions that used inclusion language to defend AI adoption while affected creators explicitly rejected that framing lost credibility on both fronts.** NaNoWriMo's "classist and ableist undertones" framing generated resignations and widespread criticism - including from the disabled writers invoked as cover. [CREATOR-075]
- **Adopt platform position clarity.** Procreate's explicit pledge is a model. Adobe's repeated clarifications under creator pressure show that ambiguity is not neutral - it is trust-damaging.

---

## 9. How to talk about it

**What it is (in plain language):**

The work that built AI creative tools was used without consent or a deal. And now creators are competing against it, inside a system that decides who gets found and paid, without explaining how and without an appeal process.

**What it is not:**

Not a claim that AI will eliminate all creative work. Not a demand to stop AI development. Not anti-technology. It is a governance argument: you can have AI creative tools without betraying the people whose work made them possible, but only if consent, provenance, and recourse are built in.

**The counterweight to name honestly:**

Consumers are paying less for some of the content they want. The question is who is being made to finance that benefit - creators whose work was used without consent and who now face replacement pressure, or the labs and platforms that captured most of the economic value.

**Bridge language:**

- "I'm not mad that tools exist. I'm mad that my work became raw material for a competitor - without consent, without a deal, and without a label that lets readers choose."
- "When production goes cheap, trust gets expensive. Right now, the bill for trust is being sent to creators and audiences instead of to the platforms that control the gate."
- "If you want abundance without betrayal, you need consent, provenance, and recourse. Otherwise 'abundance' just means a cheaper way to break trust."

**What to avoid:**

- "AI is stealing" - legally contested, possibly not accurate under current doctrine, and forecloses the mechanism argument.
- "This is the death of creativity" - not supported by the evidence. Specific segments face severe disruption; others are adapting.
- Presenting creator sentiment as majority public opinion - creator communities are overrepresented in the source base.

---

## 10. How creator backlash fits the larger pattern

**Connection to the larger pattern:**

The creative economy is a labor market. What AI is doing to creative labor is a version of what concentrated platform power does to any labor market: it weakens the floor, concentrates gains at the top, and removes the exit options that would force fair treatment. A visual artist who has no channel except a platform whose ranking they cannot contest has no real exit. A voice actor whose likeness can be replicated without consent has lost a property right without negotiation.

In the [core model](https://economyforeveryone.org/core-model/), the pattern we are stuck in is: squeeze -> insecurity -> manipulation -> scapegoating -> no fixes -> more squeeze. The creator labor market is showing the squeeze and insecurity stages now. An emerging reframing pattern - structural complaints about consent, pay, or replacement getting dismissed as creators being ungrateful for the tools - is reported widely in creator community coverage and in the NaNoWriMo incident specifically. This has not been measured systematically.

**What the evidence supports:**

You can see the pattern across five channels: training without consent, labor-price pressure, discovery problems, authenticity failures, and institutional betrayal. The severity varies by role and segment: translators and mid-tier illustrators face severe disruption now; other roles are earlier in the curve. Labs and platforms captured gains; creators and audiences bear costs. Courts have not resolved the legal question; governance has not caught up to the mechanism.

**What the evidence does not support:**

A clean villain narrative. A single coordinated plan. Industry-wide collapse. The claim that creator sentiment represents the majority public view.

**North Star verdict:**

When production cost drops to near-zero and the gate shifts to distribution and trust, the economic gains concentrate at whoever controls the gate - not at the people who built the foundation the gate runs on. For illustrators, translators, and voice actors, the evidence is strong enough to confirm the mechanism: documented income loss, weakened price floors, and displacement in markets where AI substitution is already cheap and fast enough to matter. For the creator economy as a whole, the net effect is not established - gains and losses are distributed unevenly and the full accounting is incomplete. The mechanism is confirmed where the evidence is strongest. The outcome is not irreversible. Consent, provenance, and contestability are not technically mysterious. What is missing is the requirement.

> **Security -> choice -> competition -> shared gains -> more security.**
> The loop breaks when gains concentrate at the gate and recourse disappears. The fix is governing the gate, not closing it.

**System lesson in one sentence:**

Cheap production without governed distribution and trust infrastructure transfers wealth from creators to platforms and redistributes the cost of broken trust to everyone downstream.

---

## Loop Effect

### Effect on the bad loop

- **Monthly squeeze:** Mid-tier creative workers face a dropped price floor and lost gig volume before they had time to reposition. Entry-level roles -- the jobs that pay while you build a portfolio -- are eliminated first when "good enough" gets cheap. Illustrators report average losses of GBP 9,262 per affected worker. [CREATOR-021] Translators face projected revenue at risk of 56% by 2028. [CREATOR-027] For the mid-tier professional with no institutional backing and no audience scale to survive on brand alone, the squeeze arrives without a safety net and without warning.
- **Insecurity:** Creators whose work was used in training often do not know whether they are in the data, cannot opt out retroactively, and face opaque ranking logic they cannot contest. A creator who gets demoted on a platform has a support form and a wait -- no explanation, no appeal path, no realistic exit that does not mean leaving the discovery system entirely. The gate that controls who gets found is invisible and unaccountable.
- **Manipulation / scapegoats:** "Tools are neutral" framing transfers the moral weight of structural displacement onto individual creators who "won't adapt." NaNoWriMo's "classist and ableist undertones" framing tried to use inclusion language to deflect creator concerns -- and the disabled writers invoked as cover explicitly rejected being used that way. [CREATOR-075] The pattern: labs and platforms captured the value from creator work; when creators object, the objection gets reframed as resistance to progress.
- **No fixes / more squeeze:** No US court has ruled on the core training question. No binding US consent requirement exists. Voluntary opt-out registries are honored selectively. EU AI Act enforcement is not yet demonstrated. Platforms control ranking without disclosure or appeal. The governance gap is not accidental -- it is the product of fast deployment and slow accountability, with no institution currently required to close it.

### Effect on the good loop

- **Security:** Binding opt-out rights before training -- not voluntary registries, not platform promises with no enforcement track record. Consumer-facing provenance labels at the point of discovery, not buried in a description field. Contestable ranking with specific reasons and real appeals. Compensation pathways when licensed work trains commercial models, with individual creator benefit flowing through the deal rather than stopping at the platform.
- **Choice:** Creators need channels they own. Direct relationships, owned newsletters, documented process and revision history -- alternatives to platform-controlled discovery that survive ranking shifts. This is individual strategy; the structural version is multiple viable discovery paths or regulated access to a dominant one.
- **Competition:** When the platform controls the only discovery path and creators have no realistic exit, the platform can extract without constraint. Real competition here requires either platform diversity or regulated non-discrimination in access to dominant discovery infrastructure.
- **Shared gains:** Consumer surplus from AI-generated content is real and documented. [CREATOR-038] The question is who is financing it. Currently: creators whose work trained the models, without consent and without compensation. Labs and platforms captured the value; consumers received the discount; creators absorbed the cost of both displacement and broken trust. The SAG-AFTRA Narrativ structured opt-in licensing model is a working architecture for shifting this. [CREATOR-078]

### Case verdict

- **Net effect right now:** Bad loop -- concentrated at the gate layer.
- **Why:** Production cost dropped faster than governance caught up. Labs moved at startup speed on training; they moved at governance speed on creator consent. Platforms that already controlled distribution used the AI transition to deepen lock-in. Creators who built the foundation are competing against it without binding consent rights, without labels that let audiences choose, and without recourse when ranking goes wrong. The mechanism is structural, not malicious -- but structural problems require structural fixes.
- **What would change the verdict:** Binding opt-out with enforcement (EU AI Act implementation at scale; US equivalent legislation), consumer-facing provenance labels at the point of discovery, contestable ranking systems with specific reasons, compensation pathways flowing to individual creators through commercial licensing deals, and courts resolving the training question. Any two of these delivered with real enforcement would meaningfully shift the balance.

### One steady action

When you commission or procure creative work -- and you care whether it is human-made -- put it in writing. Make provenance a line in the contract or the brief. Every documented request builds the norm. Undocumented preferences stay invisible, and invisible preferences are easy to ignore.

---

## North Star verdict

The E4E thesis is that security enables choice, choice enables competition, competition produces shared gains. The creator economy case is a test of what happens when that loop breaks at the gate.

When production cost drops to near-zero, the gate shifts to distribution and trust. Whoever controls the gate -- ranking, discoverability, training-data pipelines -- captures the economic gain. The people who built the foundation the gate runs on get displaced and then told to adapt. Labs trained on decades of creative output at low or zero marginal cost. Platforms used the AI transition to deepen the lock-in they already held. The people who made the work got a price floor that dropped, a discovery system that became more opaque, and a governance framework that is still mostly voluntary.

The documented harm is concentrated in specific roles and segments. Translators and illustrators face confirmed income loss and the highest projected displacement rates. Entry-level creative work is disappearing first -- those are the roles that get cut when "close enough" gets cheap. Mid-tier professionals face the deepest structural damage: no institutional backing, no brand scale to survive on audience loyalty, and a price floor that dropped before they had time to reposition. For illustrators, translators, and voice actors, the mechanism is confirmed where the evidence is strongest.

This is not a verdict that AI creative tools are bad or that creative work is ending. The evidence points in multiple directions: some creators adopted early and benefit; consumer surplus is real; outcomes vary enormously by role and segment. The full accounting is not complete and the outcome is not irreversible.

The fix is governing the gate, not closing it. Consent, provenance, and contestability are not technically mysterious. The SAG-AFTRA Narrativ opt-in licensing architecture, WGA contract floors, and EU AI Act opt-out codification all exist as working models. What is missing is not a blueprint -- it is the requirement.

**System lesson in one sentence:** When production cost drops faster than governance catches up, gains concentrate at whoever controls the gate, and the cost of broken trust gets distributed to the people who built the foundation and the audiences who trusted it.

---

## 11. Receipts appendix

Receipts are tracked in Methods and Sources under the linked receipt groups for this case study.

| ID          | Claim                                                                                                       | Bucket | Strength | Source                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ------ | -------- | ---------------------------------------------------- |
| CREATOR-001 | LAION-5B: 5.85B image-text pairs from web crawls                                                            | B1     | A        | LAION announcement and FAQ                           |
| CREATOR-002 | Andersen v. Stability AI; trial Sept 8, 2026                                                                | B1     | A        | Court filings; BakerHostetler tracker                |
| CREATOR-003 | Midjourney 16,000-artist style list leaked                                                                  | B1     | A        | The Art Newspaper, Jan 2024                          |
| CREATOR-004 | DeviantArt: "without ... your permission"                                                                   | B1     | A        | DeviantArt team update, Nov 2022                     |
| CREATOR-005 | Books3: ~183,000 books in AI training disputes                                                              | B1     | B        | The Atlantic, Sep 2023                               |
| CREATOR-006 | Meta/LibGen allegations (unredacted)                                                                        | B1     | B        | Wired, Jan 2025                                      |
| CREATOR-007 | RIAA vs Suno and Udio                                                                                       | B1     | A        | Filed complaints and reporting                       |
| CREATOR-008 | Lovo voice cloning lawsuit                                                                                  | B1     | B        | Skadden case analysis                                |
| CREATOR-009 | Getty UK court: primary copyright claim abandoned on jurisdictional grounds; training not ruled on          | B1     | A        | UK High Court; Mayer Brown analysis, Nov 2025        |
| CREATOR-010 | Hamburg: LAION dataset legal under EU TDM exception                                                         | B1     | A        | Hamburg Regional Court, Sep 2024                     |
| CREATOR-012 | Glaze: 6M+ downloads; Nightshade corrupts SD with <100 poisoned images                                      | B1     | A        | MIT Tech Review; UChicago project site               |
| CREATOR-015 | Spawning DNT registry: voluntary; honored by Stability AI and HuggingFace                                   | B1     | A        | Spawning announcement                                |
| CREATOR-016 | OpenAI opt-out tool announced May 2024; not shipped as of research date                                     | B1     | A        | OpenAI announcement                                  |
| CREATOR-017 | Adobe Firefly trained on Adobe Stock; no contributor opt-out; discretionary bonus                           | B1     | A        | Adobe policy documentation                           |
| CREATOR-018 | EU AI Act Art. 53: machine-readable opt-out obligation (effective Aug 2025)                                 | B1     | A        | EU AI Act text                                       |
| CREATOR-019 | SAG-AFTRA: explicit consent required for digital replicas (2023/2024 contracts)                             | B5     | A        | Contract text                                        |
| CREATOR-021 | AOI 2025: 32%+ lost work to AI; avg loss GBP 9,262                                                          | B2     | A        | AOI 2025 survey                                      |
| CREATOR-022 | Society of Authors 2024: 26% illustrators, 36% translators lost work; 43% translators income down           | B2     | A        | SoA survey, Apr 2024                                 |
| CREATOR-024 | SAG-AFTRA ULP: Fortnite AI "Darth Vader" voice replacement                                                  | B2     | A        | SAG-AFTRA statement, May 2025                        |
| CREATOR-025 | SAG-AFTRA video game performers struck 2024 over AI voice replication                                       | B2     | A        | Reporting                                            |
| CREATOR-026 | Animation Guild: entry-level roles most exposed                                                             | B2     | A        | IATSE Local 839 report, Jan 2024                     |
| CREATOR-027 | CISAC/PMP: music 24%, AV 21%, translators 56% revenue at risk by 2028; EUR 22B projected loss               | B2     | A        | CISAC/PMP Strategy, Dec 2024                         |
| CREATOR-028 | Getty "Creative" segment down ~5% YoY in 2024                                                               | B2     | A        | Getty earnings reporting                             |
| CREATOR-031 | China game studios: illustrators explicitly laid off, AI cited                                              | B2     | B        | Rest of World investigation, 2023                    |
| CREATOR-038 | Stanford GSB May 2025: consumer surplus and creator loss documented simultaneously                          | B2     | A        | Stanford Report, May 2025                            |
| CREATOR-039 | Deezer: ~50,000 fully AI-generated tracks per day in 2024                                                   | B3     | A        | Deezer statement, 2024                               |
| CREATOR-040 | Michael Smith guilty plea: $8M fraudulent royalties; fraud mechanism, not organic displacement              | B3     | A        | Court documents; Futurism                            |
| CREATOR-041 | Fake AI albums on Spotify pages for established artists                                                     | B3     | B        | Headphonesty, Oct 2024                               |
| CREATOR-042 | Spotify: Artist Profile Protection tool introduced                                                          | B3     | A        | Spotify announcement                                 |
| CREATOR-043 | Sci-fi magazine halted submissions 2023                                                                     | B3     | C        | Reporting, 2023                                      |
| CREATOR-046 | Reuters Institute/Chartbeat: Google Search referrals down 33% YoY (Nov 2024-Nov 2025)                       | B3     | B        | RISJ, Nov 2025                                       |
| CREATOR-050 | 200+ org coalition: YouTube/Google address AI slop for children (April 2026)                                | B3     | B        | AP report, April 2026                                |
| CREATOR-051 | The New Publishing Standard: book flood real but not apocalyptic                                            | B3     | B        | The New Publishing Standard, Oct 2025                |
| CREATOR-052 | 92% of pink slime sites have no detectable traffic                                                          | B3     | B        | Iffy.news                                            |
| CREATOR-053 | Secret Invasion AI credits: audience backlash                                                               | B4     | B        | Reporting, June 2023                                 |
| CREATOR-054 | Late Night with the Devil: backlash on AI imagery                                                           | B4     | B        | Reporting, March 2024                                |
| CREATOR-057 | Ghibli/OpenAI viral moment; Altman promoted it; Ortiz: "do not care about the work of artists"              | B4     | A        | Variety; TechCrunch; Vox, March 2025                 |
| CREATOR-059 | FTC Operation AI Comply: targets AI-generated fake reviews                                                  | B4     | A        | FTC, Sep 2024                                        |
| CREATOR-060 | Publisher pulls novel over AI allegations; author denied use                                                | B4     | C        | Reporting, March 2026                                |
| CREATOR-062 | Photographer disqualified after work mistakenly flagged as AI                                               | B4     | B        | Reporting                                            |
| CREATOR-063 | AI detection tools: significant false-positive rates; bias against non-native English writers               | B4     | B        | Research reporting                                   |
| CREATOR-064 | Springer study: human-labeled art rated higher on liking, beauty, profundity, worth                         | B4     | A        | Springer Cognitive Research                          |
| CREATOR-065 | Bynder: 93.75% do not value AI music as much as human-created                                               | B4     | B        | Bynder study                                         |
| CREATOR-068 | Separate study: 56% preferred AI articles over human when shown both unlabeled                              | B4     | B        | Engagement study (source methodology not identified) |
| CREATOR-069 | WorldCon 2025: ChatGPT used in panelist vetting                                                             | B5     | A        | Chair apology post; File 770, May 2025               |
| CREATOR-070 | WorldCon: three administrators resigned; John Scalzi, Yoon Ha Lee, Elizabeth Bear, Fran Wilde all responded | B5     | A        | File 770; author posts                               |
| CREATOR-071 | SFWA: Nebula eligibility reversed same day for AI-generated work                                            | B5     | A        | SFWA press releases                                  |
| CREATOR-072 | MWA Edgar Awards: AI imagery used in ceremony video (Bogart, Poe)                                           | B5     | A        | MWA board message; Fandom Pulse, May 2025            |
| CREATOR-073 | MWA board apology: "Such use is inconsistent..."                                                            | B5     | A        | MWA statement                                        |
| CREATOR-075 | NaNoWriMo: "classist and ableist" framing; resignations; shutdown                                           | B5     | B        | Wired; The Verge                                     |
| CREATOR-076 | WGA 2023 contract: AI not a writer; companies must disclose AI-generated source material                    | B5     | A        | Contract text; McGuireWoods analysis                 |
| CREATOR-077 | CNBC: Hollywood AI issues "far from settled"                                                                | B5     | B        | CNBC reporting                                       |
| CREATOR-078 | SAG-AFTRA Narrativ agreement: structured opt-in voice replica licensing                                     | B5     | A        | SAG-AFTRA statement, Aug 2024                        |
| CREATOR-079 | Procreate: "Creativity is made, not generated" - explicit No generative AI pledge                           | B5     | A        | Procreate statement                                  |
| CREATOR-080 | Adobe TOS clarifications in response to creator fear of silent training                                     | B5     | A        | Adobe public statements                              |
| CREATOR-081 | Etsy CEO: "commerce human"; 4x prior year handmade-policy removals                                          | B5     | B        | Etsy statement                                       |
| CREATOR-082 | Shutterstock/OpenAI: "data we licensed was critical to training DALL-E"; simultaneous litigation posture    | B5     | A        | Public statement; reporting                          |
| CREATOR-083 | Getty "Generative AI by Getty Images": creator compensation stated                                          | B5     | B        | Getty announcement                                   |

**Strength rubric:** A = primary source (policy, filing, official statement) | B = reputable investigation quoting primary materials | C = reputable reporting with limited direct documents

---

**[RESEARCH GAP: CREATOR-011]** Penguin Random House Germany lawsuit against OpenAI (March 2026): primary filing not located; sourced from reputable reporting. Omitted from case study body pending verification. Trial outcome unknown.

**[RESEARCH GAP: CREATOR-020]** Getty-Shutterstock merger (announced January 2025, ~$3.7B): whether individual creators benefit from any AI training licensing revenue flowing through the merged entity is not established.

**[RESEARCH GAP: CREATOR-029]** "25% of all stock photos sold in 2024 were AI-generated" - source not identified. Omitted from case study body.

**[RESEARCH GAP: CREATOR-061]** AI work sold as human-made in direct commissions: widely reported in creator communities, no named verified incident found. Treat as reported pattern, not confirmed specific incident.

**[RESEARCH GAP: Stock photo price decline]** Directional decline in stock photo pricing is supported by Getty Creative segment data; specific unit-price-decline data from primary sources was not found in this research pass.

---

Revision complete -> ready for human review.
