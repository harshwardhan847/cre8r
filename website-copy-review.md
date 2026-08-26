# Cre8r.ai — Website Copy for Review

> Compiled for copywriter review. This document contains every piece of user-facing text found in the site's React/TypeScript source — headings, body copy, CTAs, nav links, form labels, testimonials, FAQs, stats, and footer content — reproduced verbatim. No paraphrasing.
>
> **Global elements note:** The Navbar and Footer are rendered once, site-wide, from `app/root.tsx` (they wrap every page via `Navbar` / `Footer` from `HomePage/components/`). Their copy is documented in full under **Home** and applies identically to every other page listed below, so it is not repeated per-page.
>
> **Legal pages excluded:** `app/routes/brands_tc.tsx`, `app/routes/creators_tc.tsx`, and `app/routes/privacy_policy.tsx` contain lengthy Terms & Conditions / Privacy Policy legal boilerplate (not marketing copy). They exist on the site but are omitted here as out of scope for a copywriting pass — flag if you'd like them included separately.

---

## Global Navigation (Navbar — appears on every page)

**Logo:** Cre8r.ai (image, alt text "Logo")

**Primary nav links:**
- Home
- Product *(dropdown, see below)*
- Resources *(dropdown, see below)*
- Company *(dropdown, see below)*
- For Influencers
- **Book a Demo** (button, links to Calendly)

**Product dropdown** — tagline: "Explore our modular marketing platform"
| Module | Description | "Key Capabilities" (bullets shown on hover) |
|---|---|---|
| Discovery Module | Find pre-vetted creators matching your demographics. | 25+ deep filters · 4.1Mn+ creator database · Audience credibility scores · Engagement auditing |
| Execution Module | Streamline campaigns, reviews, and messaging. | Application tracking · Unified direct messages · Content review workflows · Secure contracts |
| Affiliate & ROI | Track conversions, sales, and referral traffic. | Attributed revenue · Referral link tracking · Creator promo codes · ROI performance dashboards |
| Lead Generation | Scale target outreach to capture high-intent leads. | Outreach pipeline · Target list builder · Campaign response rates · Live feedback tracking |

Dropdown CTA button: **"Explore Module"**

**Resources dropdown** — tagline: "Free tools and playbooks for scaling ROI"

Column 1 — "Growth Tools":
- Resources Hub — "Get all guides, checklist, and toolkits." *(hidden; feature-flagged off)*
- ROI Calculator — "Estimate campaign sales and CAC before you spend." *(hidden; feature-flagged off)*
- Barter Collabs — "Access premium product-gifting partnerships."

Column 2 — "Collabs & Creators":
- Creator Community — "Network of 4.1Mn+ creators monetizing influence."

**Company dropdown** — tagline: "Our story, team, and success stories"

Column 1 — "About Cre8r":
- About Us — "Learn about our mission, values, and team."
- Case Studies — "See real customer results and campaign ROI." *(hidden; feature-flagged off)*

Column 2 — "Join Us":
- We are hiring — "Join our fast-growing creator tech startup."

**Mobile menu:** Same items collapsed into accordion sections (Product, Resources, Company), plus Home and For Influencers.

Mobile menu toggle button aria-labels: "Open menu" / "Close menu"

---

## Home

*Render order (`HomePage/index.tsx`): Header → Brands → Transform → Features → (Case Studies Preview, feature-flagged off) → Blogs Preview*

### Header (Hero)

Badge: **"New"**
Pill text: "135K+ Registered creators on Cre8r"

**H1:** "End-to-End Influencer Marketing Powered by AI"

**Subhead:** "From first brief to final conversion. Discover, execute, track affiliates, and generate leads — All in one place."

CTA button (WhatsAppButton component): **"Chat on WhatsApp"** *(falls back to "Book a Demo" when WhatsApp flag is off — currently off, so live button reads "Book a Demo")*
Caption under button: "Trusted by 200+ brands across India"

**Video Example strip** — auto-scrolling creator video carousel with floating brand badges: Reebok, IDFC, Bontress Pro, Reequil, Fortune (no additional copy, just badges).

### Brands (Traction / Logos + Stats)

Section eyebrow: "Traction"

**H2:** "Automate Influencer Marketing to Drive ROI"

Body: "Thousands of brands trust Cre8r to discover creators, run campaigns and measure what matters most."

**Stat tiles:**
| Stat | Label |
|---|---|
| 4Mn+ | Discoverable profiles |
| 500Mn+ | Views generated |
| 6000+ | Content published |
| 200+ | Campaigns delivered |

Brand logo marquee: Bontress Pro, Fortune, IDFC Bank, Reebok, Reequil (looping)

### Transform

Badge: "AI" + "Influencer Marketing Platform"

**H2:** "Understand your audience through voices they trust."

Body: "We prioritize authentic influencer relationships that create lasting impact for your brand."

CTA button: **"Request a call back"**

**Floating feature cards:**
- Find & Track Creators — "Discover 4mn+ creators filtered by niche, reach and engagement."
- Intelligent Matchmaking — "AI-powered recommendations to connect brands with ideal creators."
- Live Performance Tracking — "Monitor views, engagement and ROI in real-time across campaigns."

> Note: An additional hidden section (`className="hidden"`, not visible to visitors) contains a marquee of keyword pills — "Never miss a campaign opportunity" heading, and scrolling tag rows: Influencer Discovery, Campaign Analytics, Creator Outreach, ROI Tracking, Audience Insights, Brand Collaboration / Micro-Influencers, Nano Creators, Content Calendar, Performance Reports, Creator Briefs, Campaign Goals / Engagement Rate, Reach & Impressions, Brand Awareness, Sponsored Posts, Story Views, Conversion Rate. Included for completeness though currently not rendered.

### Features ("How it works?")

**H2:** "How it works?"
Subhead: "Find your ideal influencers in seconds — no matter the niche, reach or region."

**Steps (numbered 01–04):**
1. **Find & Track 4mn+ Creators** — "Filter by engagement metrics, niche, audience demographics & more."
2. **Advanced Creator Briefing System** — "The intuitive briefing system helps you set clear goals and share detailed guidelines."
3. **Intelligent Matchmaking** — "Make data-driven decisions with every click, every view, every comment."
4. **Live Performance Tracking** — "Monitor views, engagement and ROI in real-time across campaigns."

### Testimonials ("Case-study previews" — currently placeholder content)

Eyebrow: "Credibility"
**H2:** "Case-study previews"
Subhead: "Detailed case studies are being added. Explore structured placeholders for now."

**Placeholder testimonial cards** (labeled "Case study placeholder"):
> "A structured creator-discovery framework improved shortlist quality and reduced decision cycles for campaign planning."
> — D2C Skincare Brand, Discovery + execution

> "Campaign briefing and performance visibility helped teams iterate faster during active creator collaborations."
> — Consumer Tech Launch, Execution + reporting

> "Geo-targeted creator workflows and better matching logic improved consistency while scaling campaign volume." *(featured/center card)*
> — F&B Expansion, Acquisition at scale

> "Clear campaign feedback loops reduced communication lag and improved delivery confidence across stakeholders."
> — Retail Pilot, Collaboration ops

> "Integrated discovery, matching, and monitoring gave teams stronger control over outcomes in every campaign phase."
> — Growth Team, Planning + optimisation

Link (shown only if case studies flag on): "View all case studies"

> Note: This component isn't currently included in `HomePage/index.tsx`'s render list — confirm with engineering whether it's live.

### Case Studies Preview (feature-flagged off — `enableCaseStudies: false`)

**H2:** "Proven Results"
Subhead: "See how brands are scaling acquisition and ROI with us."
Button: **"View All Case Studies"**

**Cards:**
- **HealthCorp** — "How HealthCorp utilized our discovery and affiliate modules to scale customer acquisition." — Stat: 300% / "Increase in Lead Gen"
- **FashionNova India** — "Executing a massive campaign with 200+ micro-influencers seamlessly." — Stat: 4.5M / "Reach within 2 weeks"

### Blogs Preview ("Latest Insights")

**H2:** "Latest Insights"
Subhead: "Stay updated with the latest in influencer marketing, trends, and strategies."
Button: **"View All Posts"** (links to Medium)

Shows first 3 of the full blog list (see full list below). Each card: date, author, title, description, and link label **"Read Article"**.

**Full blog list** (from `CONSTANTS.BLOGS`, most recent first):
1. "The Hidden Costs of Partnering with Influencers Who Have Fake Followers" — Mar 10, 2025 — "Influencer marketing has exploded into a multi-billion-dollar industry, with brands leveraging social media personalities to build authentic connections with consumers. However, a growing challenge threatens the effectiveness of these partnerships: fake followers."
2. "Lufthansa Harnesses Influencer Marketing to Redefine Travel Experiences in Milan" — Oct 8, 2024 — "Traditional marketing strategies are giving way to more authentic and engaging approaches in the rapidly evolving world of travel. Recognizing this shift, Lufthansa has brilliantly utilized influencer marketing to showcase Milan in a fresh and captivating light, setting new standards for the industry."
3. "Paid Influencer Campaigns vs. Barter Campaigns: What's Best for Your Brand?" — Jul 31, 2024 — "While sending weekly emails, running paid ads, and then managing influencer campaigns. Adding another task might seem overwhelming. If your current strategies are effective, why consider influencer marketing?"
4. "New Supreme Court Mandate: What Influencers and Brands Need to Know" — Jun 26, 2024 — "Starting June 18th, all advertisements on TV, print or online must have a valid Self-Declaration Certificate (SDC). This applies to both print and digital media. To facilitate this, the MIB has updated its Broadcast Seva Portal for TV and Radio ads, and the PCI has done the same for print and digital ads. These portals are operational from June 4, 2024."
5. "Shocking Truth: Why Brands Are Obsessed with Regional Influencers!" — May 24, 2024 — "In the bustling world of marketing, there's a buzzworthy trend captivating brands far and wide — the meteoric rise of regional influencers."
6. "How to Hire an Influencers to Promote Your Business — Step By Step" — Apr 21, 2024 — "At cre8r.ai, we get it — the world of influencer marketing can feel like a maze. With so many creators out there, how do you find the ones that genuinely align with your brand? And once you've identified potential partners, building authentic connections while protecting your interests is easier said than done."
7. "KOLs vs. Influencers — What They Are & What Differentiates Them" — Apr 15, 2024 — "Forget the sponsored posts and perfectly curated feeds. The future of brand advocacy lies with the silent giants of the internet — the Key Opinion Leaders (KOLs). These aren't your average social media celebrities; they're the trusted experts, the industry gurus, the voices that hold weight in their respective corners of the web."
8. "How Brands Can Legally Structure Influencer Contracts and Agreements?" — Mar 27, 2024 — "In this digital age, influencer marketing is no longer just an option; it's a necessity. But with great power comes great responsibility — and legality."
9. "Influencer Marketing is the Fashion Industry's new Fortune Cookie" — Mar 11, 2024 — "\"According to Influencer Marketing Hub, the Indian influencer marketing industry is projected to grow at a staggering compound annual growth rate (CAGR) of 25% between 2020 and 2025, reaching a whopping $2.4 billion by 2025.\""
10. "How is Influencer marketing revolutionizing the global media landscape today?" — Jan 19, 2024 — "There are no two ways around the fact that all businesses need a constant brand push to get consumers to trust them. Advertisement remains to be a substantial part of marketing."
11. "Why Engagement Rate is a Key Metric for Brands to Track Spending?" — Jan 10, 2024 — "You may have stumbled across the quote, 'All that shines is not gold', well it certainly holds when talking about a high follower count. While a sky-high following might add a star to an influencer's badge, it doesn't necessarily affect the way their content is consumed. Yep! You heard that right. It doesn't matter if you are an insanely popular public figure if your followers are not engaging with the content you are posting."
12. "From Sponsored Posts to Brand Partnerships — The Evolution of Influencer Marketing in a…" — Dec 15, 2023 — "The world of influencer marketing has come a long way from its humble beginnings, where perfectly curated flat lays and #OOTD selfies reigned supreme. Today's influencer marketing landscape is a far cry from its humble beginnings, evolving into a strategic partnership ecosystem built on mutual respect, shared values, and long-term vision."
13. "Building Authentic Brand-Influencer Relationships — The cre8r.ai Approach" — Nov 29, 2023 — "In the dynamic landscape of influencer marketing, authenticity isn't just a buzzword; it's the backbone of every successful campaign. But how do brands and influencers cut through the clutter to create genuine connections in a world awash with options?"
14. "How Long Should Your Medium Article Be?" — Nov 15, 2023 — "Medium stands as a beacon for writers who seek to share their insights, stories, and expertise. As a platform that celebrates diverse voices and ideas, Medium has become a hub for thought leaders, content creators, and avid readers."
15. "One right hook can make you go viral" — Oct 9, 2023 — "Have you ever wondered what makes some content go viral while others barely get any attention? What is the secret to creating content that spreads like wildfire and reaches millions of people?"
16. "5-Step Strategy for Ensuring your Content is Reaching the Right Audience" — Sep 28, 2023 — "One of the most important aspects of growing your small business is reaching out to your ideal audience. You want to communicate your message to the people who are most likely to be interested in your brand, trust your solutions, and build long-term relationships with you."

### EmailCard ("Get started free" — not currently rendered on Home, commented out in index.tsx, included for completeness)

Eyebrow: "Get started free"
**H2:** "Build sustainable audience relationships"
Body: "Cultivate a community of brand advocates who will amplify your message for years to come."

**Perks list:**
- Access 4Mn+ verified creator profiles instantly
- Launch campaigns in minutes, not weeks
- Real-time ROI and performance analytics

Right panel copy: "Join thousands of brands already on Cre8r" + WhatsApp/Book a Demo button.

### Global Footer (appears on every page)

**CTA banner:**
**H2:** "Intelligent influencer matchmaking powered by AI"
Body: "From first brief to final conversion — discover, execute, and track campaigns with precision."
Button: **"Book a Demo"**
Secondary link (WhatsApp flag off, hidden): "Chat on WhatsApp"

Logo alt: "Cre8r.ai Logo"
Brand blurb: "End-to-end influencer marketing platform for brands that want to discover, execute, and scale campaigns with real ROI."

**Column: Platform**
- Home
- Product
- Case Studies *(hidden; flagged off)*
- Resources *(hidden; flagged off)*
- Book a Demo

**Column: Company**
- About Us
- Barter Collabs
- We're Hiring! *(badge: "Open")*

**Column: Contact**
- campaign@cre8r.ai
- +91 8800 411 522
- "For Creators:"
- collabs@cre8r.ai

**Bottom bar:**
- "© {year} Cre8r.ai · All rights reserved"
- Privacy Policy
- Terms (Brands)
- Terms (Creators)

---

## About

*Render order (`AboutPage/index.tsx`): Hero → Founders → Team → ScrollingTextAnimationSection → (FounderMessage, feature-flagged off)*

### Hero

**H2 (eyebrow):** "About Us"

**H1:** "Reimagining Influencer Marketing / One campaign at a time"

Body: "From concept to scale, we help brands discover top influencers, design impactful campaigns, and grow their reach effortlessly."

**Floating / mobile stat cards:**
| Value | Label |
|---|---|
| 4Mn+ | Creator profiles |
| 500Mn+ | Campaign views |
| 6000+ | Content pieces |
| 200+ | Campaigns delivered |

### Founders ("Our story")

**H2:** "**Our story.** We are a team of passionate marketers building influencer campaigns with performance, transparency, and genuine connections at the core."

**Founders listed** *(section currently hidden via `hidden` class, included for completeness)*:
- Gaurav Sharma — CEO & Founder
- Priya Kumar — Managing Partner
- Riddhi Mehta — Managing Partner

**Recognitions list** *(also hidden)*:
- "AI-powered creator discovery" — "4.1Mn+ creator profiles"
- "Advanced creator briefing" — "Clear goals and campaign guidelines"
- "Live performance tracking" — "Clicks, views, comments in one place"

### Team ("Meet our team")

Badge: "We're Hiring" + "Careers" (links to hiring form)

**H2:** "**Meet our team.** Join us as we build sustainable audience relationships and scale meaningful influencer campaigns."

**Team member carousel (names only, with avatars):**
Gaurav Sharma, Priya Kumar, Riddhi Mehta, Sangeeta Kushwaha, Shyam Panicker, Maahi Jumnani, Vitika Singh, Rahul Mehta, Akshita Bangar, Jainam Mehta, Prateek Pal, Dipisha Bose, Harmita Desai, Niharika Mittal, Simran Sharma, Aditya Mathur, Tanish Gadodia, Aarsh, Aditya Chaudhary, Tanvi, Hitansh

### ScrollingTextAnimationSection

Scroll-highlighted text blocks:
1. "We are a team of passionate marketers who have spent years navigating the digital media landscape."
2. "We saw firsthand the frustrations brands faced with influencer marketing and knew there had to be a better way."

*(Two additional blocks are commented out in source, not live: "Cre8r is built for performance, transparency, and genuine creator-brand connections." / "Our AI-powered matchmaking analyzes influencer profiles, audience demographics, and content themes to find voices authentically aligned with your brand.")*

Button: **"Request a call back"**

### FounderMessage (feature-flagged off — `enableFounderVideos: false`)

Founder: Gaurav Sharma, "CEO, Founder at Cre8r.ai"

**Rotating stat tiles** (4 groups, one random entry shown at a time per group):
- Group 1: 4Mn+ discoverable profiles / 4.1Mn+ creator profiles discovered / 3Mn+ creators tracked by brands / 135K+ registered creators
- Group 2: 500Mn+ views generated / 6000+ content published / 200+ campaigns delivered / 200+ campaigns executed
- Group 3: 2-4 Weeks average campaign go-live timeline / 48 Hours creator response window / 100% platform-led communication / 2 Rounds content iteration support
- Group 4: AI intelligent influencer matchmaking / Live performance tracking across campaigns / Clear advanced creator briefing workflows / Trusted authentic creator-brand relationships

### TightAboutUs — unused alternate draft component

> **Note:** `AboutPage/components/TightAboutUs.tsx` exists in the codebase but is **not imported or rendered anywhere** (confirmed via search — it's an orphaned/alternate draft of the About page). Included below for reference in case copywriters want to compare or reuse this copy.

Eyebrow: "About Us"
**H1:** "We exist to make / influencer marketing / actually work."
Body: "Cre8r was founded with a simple belief: authentic creator relationships drive measurable business outcomes. We built the platform to prove it."

**Stats bar:** 4Mn+ Creator Profiles · 200+ Campaigns Delivered · 500Mn+ Views Generated · ₹50Cr+ Revenue Attributed

**"Our Story" section:**
- "Cre8r started in 2021 when our founders kept seeing the same problem: brands were spending huge budgets on influencer campaigns with zero way to measure what actually worked."
- "We built the platform we wished existed — one that combines creator discovery, campaign execution, affiliate tracking, and real-time analytics into a single, seamless workflow."
- "Today, we power 200+ campaigns across industries from beauty to fintech, with 4Mn+ creator profiles discoverable through our platform."

**Timeline:**
- 2021 — "Cre8r founded with a focus on micro-influencer campaigns for D2C brands."
- 2022 — "Launched the discovery module. First 50 brand partnerships signed."
- 2023 — "Crossed 1Mn+ creator profiles. Launched affiliate and lead generation modules."
- 2024 — "4Mn+ creators, 200+ campaigns, ₹50Cr+ revenue attributed. Expanding to SaaS."
- 2025 — "AI-powered matchmaking launched. Enterprise plans introduced."

**"What we believe in" values:**
- Authenticity over Everything — "We believe creator marketing only works when it's genuine. We prioritize authentic connections over inflated numbers."
- Data-Driven Decisions — "Every recommendation on our platform is backed by real performance data — not gut feel or vanity metrics."
- Creators are Partners — "We treat creators as equal stakeholders. Their success is our success, and we've built the platform to reflect that."
- Transparency, Always — "Clear pricing, clear attribution, clear metrics. No hidden fees or black-box reporting."

**"Leadership" section:**
Heading: "Leadership" / Subhead: "The team building the future of influencer marketing."
- Gaurav Sharma — Co-Founder & CEO — "Former brand strategist with 10+ years in performance marketing. Built Cre8r to bridge the gap between brands and authentic creators."
- Priya Mehta — Co-Founder & COO — "Operations expert who scaled multiple D2C brands before co-founding Cre8r. Leads creator partnerships and campaign execution."
- Kartikey Agarwal — Head of Growth — "Growth strategist specializing in creator economy and B2B SaaS. Drives brand partnerships and platform adoption."

**CTA section:**
**H2:** "Ready to work with us?"
Body: "Whether you're a brand looking to scale or a creator looking to grow — Cre8r is built for you."
Buttons: **"Book a Demo"** / **"Join the Team"**

---

## Product

*Render order (`ProductPage/index.tsx`): Hero → ProductModules → WhyUs → Find → Cta → Faq*

### Hero

Eyebrow: "INFLUENCER PLATFORM"
**H1:** "Let AI build your next influencer campaign"
Body: "Discover 4.1mn+ creators. Execute campaigns. Track performance - all in one place."
Button: **"Request a call back"**

**Floating stat cards:** 4.1Mn+ Creators · Audience (Deep filters) · Briefs (Clear goals) · 200+ Campaigns · AI Match (Right creators) · Track (Live results) · ROI (Performance)

**Stats sub-section:**
**H2 (large number):** "200+"
Label: "Campaigns delivered"

*(A quote block below is present in source but hidden via `hidden` class: "We prioritize authentic influencer relationships that truly represent your brand and connect with your audience." — attributed to "Cre8r Team, Influencer Marketing Platform")*

### ProductModules ("Our Key Offerings")

**H2:** "Our Key Offerings"
Subhead: "Everything you need for a successful influencer marketing strategy, broken down into powerful modules."

1. **Discovery Module** — "Find the right creators with 25+ filters, optimizing for engagement, credibility, and brand fit." — Tags: Category, Location, Followers, Engagement
2. **Execution Module** — "End-to-end campaign management. Automated applications, built-in messaging, and tracking." — Tags: Quick review process, Messaging, Application tracking
3. **Affiliate & ROI** — "Map influencer performance across the content-to-commerce journey." — Tags: Real-time tracking, Performance metrics, ROI analysis
4. **Lead Generation** — "Scale multi-channel outreach and capture high-intent leads efficiently." — Tags: Custom lists, Campaign tracking, Status updates

### WhyUs ("How it works?")

**H2:** "How it works?"

**Reason cards:**
- Find & track 4mn+ creators — "Filter by engagement metrics, niche, audience demographics, and more to shortlist creators faster."
- Advanced creator briefing — "Set clear goals and share detailed guidelines with an intuitive briefing flow built for campaign teams."
- Live performance tracking — "Make data-driven decisions with every click, every view, and every comment from one central dashboard."

**Blockquote:**
> "Understand your audience through voices they trust. We prioritize authentic influencer relationships that truly represent your brand and connect with your audience."
> — Cre8r Team, "Intelligent influencer matchmaking powered by AI"

**"Industries we actively support"** section:
Label: "Industries we actively support"
List: Beauty, Fashion, Food, Beverage, Health, Fitness, Travel, Retail

### Find ("Automate Influencer Marketing to Drive ROI")

**H2:** "Automate Influencer Marketing to Drive ROI"

**Program cards:**
- **Find & Track 4mn+ Creators** — "Filter by engagement metrics, niche, audience demographics and more to discover the right voices quickly." — Button: "Request a call back"
- **Advanced Creator Briefing** — "Set clear goals and share detailed campaign guidelines with a structured briefing system." — Button: "Request a call back"
- **Intelligent Matchmaking** — "Our AI analyses creator profiles, audience demographics and themes to match campaigns with precision." — Button: "Request a call back"
- **Live Performance Tracking** — "Track every click, view and comment in one place to optimize performance while campaigns are live." — Button: "Request a call back"

**"Here's how to start" steps** *(section hidden via `hidden` class, included for completeness):*
**H3:** "Here's how / to start"
1. **01. Sign up & complete your profile**
2. **02. Connect with brands** — "Our AI helps you connect with brands that fit your audience and content so you can move faster."
3. **03. Land dream collabs** — "Partner with top brands, boost engagement, and grow your influence with every successful collaboration."

### Cta

**H2:** "Scale influencer / campaigns with cre8r"
Button: **"Request a call back"**

### Faq ("Frequently asked questions")

**H2:** "Frequently / asked questions"

1. **How long does it take for a campaign to go live?**
   "If we have to capture the entire project from finalizing the influencer pool, it typically takes 2-4 weeks from influencer discovery, selection, payments, and product shipping to the campaign going live."
2. **What industries does Cre8r focus on?**
   "Cre8r primarily works in the beauty, fashion, food, beverage, health, fitness, travel and retail industries."
3. **How does Cre8r ensure a high-quality creator network?**
   "Cre8r's vetting process thoroughly screens and onboards only creators who produce relevant, trustworthy and high-value content."
4. **What is Cre8r's revenue model?**
   "For barter campaigns, Cre8r charges a fixed platform fee per influencer. For paid campaigns, the margins are bundled in the influencer pricing."
5. **How do brands communicate with influencers?**
   "All communication happens through the Cre8r platform, eliminating the need for emails or DMs. Brands can provide briefs, and influencers share content for approval."
6. **What happens if a brand doesn't like the influencer content?**
   "Brands can reject content if it doesn't align with their requirements. They get two rounds of iterations with the influencer to provide feedback."

---

## Product — Discovery

*(`ProductPage/DiscoveryPage.tsx`, route `/product/discovery`)*

Back link: "Back to Products"

**Badge:** "Discovery Module"
**H1:** "Pinpoint the Perfect Creators in Seconds"
Body: "Stop guessing. Search across our pre-vetted index of 4.1Mn+ global creators. Refine by niche, audience location, engagement rate, and verified credibility scores to maximize your match rate."
Buttons: **"Book a Walkthrough"** / **"Join Creator Pool"**

**Interactive Demo section:**
Eyebrow: "Interactive Demo"
**H2:** "Test-drive the Filter Engine"
Body: "Adjust filters or watch an interactive walkthrough of our Discovery Module."
Mode switcher tabs: "Interactive Sandbox" / "Interactive Video Walkthrough"

Sandbox UI copy:
- Search placeholder: "Search by name, handle, tag..."
- "Niche:" / "Location:" labels
- Empty state: "No creators found" — "Try expanding your filter parameters or search query."
- Card fields: Followers, Eng. Rate, Credibility (with mock creator data: Aarav Sharma @aarav_tech, Riya Iyer @riyaiyer_fits, Karan Johar (Chef) @chef_karan, Neha Goel @nehagoel_travels)

**Feature grid — "Engineered for Precision":**
**H2:** "Engineered for Precision"
Subhead: "Our Discovery features enable brands to access clean, accurate datasets and bypass inflated bot accounts."
- **25+ Advanced Filters** — "Filter creators by exact audience demographics (age, gender, city, country), follower tier, active niche tags, and content format."
- **Fake Follower Audit** — "Instantly check fake follower percentages and lookalike bot engagement stats. See true brand safety metrics prior to contract offers."
- **View Attributed Performance** — "Examine actual historic views and performance benchmarks from previous brand collaborations hosted on the platform."

**Footer CTA:**
**H2:** "Unlock the Discovery Suite"
Body: "Start building targeted lists of pre-vetted niche creators for your next acquisition campaign."
Button: **"Book a Custom Walkthrough"**

---

## Product — Execution

*(`ProductPage/ExecutionPage.tsx`, route `/product/execution`)*

Back link: "Back to Products"

**Badge:** "Execution Module"
**H1:** "Seamless Campaign Management & Chat"
Body: "Move away from messy spreadsheets and messaging apps. Run content approvals, direct communication channels, briefs distribution, and creator contract completions in a single collaborative interface."
Buttons: **"Request a Demo Walkthrough"** / **"See Creator Results"** *(shown only if case studies flag on)*

**Interactive Demo section:**
Eyebrow: "Interactive Demo"
**H2:** "Interactive Workflow Dashboard"
Body: "Select a creator below to coordinate chat logs, review drafts, or explore interactive feature walkthroughs."
Mode switcher tabs: "Interactive Sandbox" / "Campaign Creation & Insights" / "Campaign Request" / "Creator Insights"

Sandbox UI copy: "Active Collaborations" panel header; mock campaigns (Maya Patel @mayacreates "Summer Lookbook Reel", Rohit Sen @rohitsen_tech "SaaS App Review Video", Sanya Gupta @sanyaeats "Healthy Snack Review"); stage labels "In Review" / "Approved & Scheduled" / "Brief Shared"; button "Approve Draft"; "Approved" status chip; chat input placeholder "Reply to {creator}..."

**Feature grid — "Full Lifecycle Campaigning":**
**H2:** "Full Lifecycle Campaigning"
Subhead: "Our Execution suite streamlines contract alignment, draft cycles, and post-scheduling to keep outreach programs moving."
- **Brief Distribution** — "Upload campaign guidelines, audio tracks, key highlights, and legal compliance checkboxes to automatically update shortlist creators."
- **Unified Creator Inbox** — "Message multiple creators in bulk or keep structured chat logs next to contract approvals and content preview links."
- **Draft Review Engine** — "Preview creator uploaded media (vlogs, Reels, static posts). Add comments directly timestamped to videos or click single-button approval."

**Footer CTA:**
**H2:** "Coordinate Your Campaigns Seamlessly"
Body: "Start building templates and launching campaigns without spreadsheet clutter."
Button: **"Book a Strategy Walkthrough"**

---

## Product — Lead Generation

*(`ProductPage/LeadGenPage.tsx`, route `/product/lead-gen`)*

Back link: "Back to Products"

**Badge:** "Lead Generation Module"
**H1:** "Scale High-Intent Brand Outreach Pipelines"
Body: "Acquire high-intent sponsor partners and manage outbound pipelines. Identify target brands, monitor response metrics, and organize creator sponsorships efficiently in a structured pipeline."
Buttons: **"Book a Pipeline Demo"** / **"Explore Company"**

**Interactive Demo section:**
Eyebrow: "Interactive Demo"
**H2:** "Outreach & Leads Manager"
Body: "Select a brand below to view notes, update statuses, and check estimated campaign budgets, or view interactive walkthroughs."
Mode switcher tabs: "Interactive Sandbox" / "Outreach Walkthrough" / "Competition Scanner Walkthrough"

Sandbox UI copy: "Prospects" panel header; mock leads (GlowUp Cosmetics — D2C Beauty, FitBite Nutrition — Food & Wellness, Zeta Fintech — Financial Services); status labels "In Discussion" / "Outreached" / "Closed Deal"; status action buttons "Outreached" / "In Discussion" / "Closed Deal"; field labels "Outreach Status Note", "Estimated Budget", "Prospect Response", "Response Rate"

**Feature grid — "Structured Pipeline Operations":**
**H2:** "Structured Pipeline Operations"
Subhead: "Our Lead Generation tools help creator networks and media hubs source brand opportunities efficiently."
- **Custom Lead Lists** — "Build lists of prospect brands sorted by target niche, regional focus, average campaign spend tiers, and team contacts."
- **Response Tracking** — "Monitor response metrics and tracking data. Optimize pitches based on brand response averages across various industries."
- **Outbound Pipelines** — "Keep outreach stages clear. Drag-and-drop lists through contact, meeting scheduled, and closed contract statuses."

**Footer CTA:**
**H2:** "Unlock Your Outreach Potential"
Body: "Organize leads and scale your sponsorship programs without losing pipeline tracking data."
Button: **"Schedule a Custom Demo"**

---

## Product — Affiliate & ROI

*(`ProductPage/AffiliatePage.tsx`, route `/product/affiliate-roi`)*

Back link: "Back to Products"

**Badge:** "Affiliate & ROI Module"
**H1:** "Content to Commerce Attribution & Sales"
Body: "Measure what actually impacts your bottom line. Generate custom referral links, track exclusive coupon promo codes, and monitor sales conversions in real-time, attributing ROI directly to each creator."
Buttons: **"Schedule a Platform Walkthrough"** / **"Try ROI Calculator"** *(shown only if calculators flag on)*

**Interactive Demo section:**
Eyebrow: "Interactive Demo"
**H2:** "Campaign ROI & Sales Tracker"
Body: "Select a creator below to view their specific campaign sales trends or view interactive walkthroughs."
Mode switcher tabs: "Interactive Sandbox" / "CRM Walkthrough" / "Collection Walkthrough"

Sandbox UI copy: Aggregate stat cards — "Total Sales", "Total Conversions", "Total Link Clicks", "Avg. Conv Rate"; "Creators Performance" panel header (mock creators Rohan Varma, Anjali Mehta, Divya Das); detail fields "Promo Code", "Sales Generated", "Clicks Tracked", "Campaign ROI"; chart label "Sales Conversion Trend (Daily)" with badge "UP 18%"

**Feature grid — "Enterprise Attribution Tech":**
**H2:** "Enterprise Attribution Tech"
Subhead: "Our Affiliate module integrates deeply to capture clean, non-duplicative conversion events."
- **Dynamic Promo Codes** — "Issue customizable influencer codes and sync tracking directly with popular platforms (Shopify, WooCommerce) to monitor checkout events."
- **Attributed ROI Charts** — "Understand CAC and ROI per campaign. Our analytics show clear cost-per-click, cost-per-acquisition, and total attributed values."
- **Live Post Performance** — "Watch click patterns spike in real-time as influencers post. Compare results across channels (Instagram vs YouTube)."

**Footer CTA:**
**H2:** "Start Tracking Campaigns By ROI"
Body: "Attribute conversions seamlessly and optimize creator partnerships based on performance."
Button: **"Schedule an Attribution Demo"**

---

## Influencer / For Creators

*Render order (`InfluencerPage/index.tsx`): Hero → PlatformDemo → Positives → Features → CreatorFAQ*

### Hero

Eyebrow: "CRE8R FOR CREATORS"
**H1:** "Discover campaigns. / Create content. / Get paid."
Body: "Focus on creating content, we'll handle the rest. Connect with vetted brands, unlock your earning potential, and grow your influence."
CTA: WhatsAppButton ("Chat on WhatsApp" / falls back to "Book a Demo")

### PlatformDemo

Eyebrow: "Interactive Demo"
**H2:** "See how Cre8r works"
Body: "Take a quick walkthrough of the platform, from discovering campaigns to getting paid."
Play button aria-label: "Load interactive demo"

### Positives ("Why creators choose Cre8r")

**H2:** "Why creators choose Cre8r"

- **Creator-friendly pricing logic** — "Unlock your earning potential with our performance-led pricing logic. We evaluate your data and insights to determine optimal compensation for your content."
- **Vetted brand opportunities** — "Partner with trustworthy brands that are pre-screened and verified. Work with companies that value authentic creators and deliver real value."
- **Grow your influence** — "Introduce your content to new followers and expand your fanbase. Every collaboration helps you reach wider audiences and strengthen your creator community."
- **Seamless collaboration** — "From signing up to getting paid, we make it simple. Manage campaigns, share content, and receive payments all in one intuitive platform."

**Testimonial:**
> "Cre8r makes it incredibly easy to find brand collaborations that align with my content. From discovery to payment, everything is seamless."
> — Creator Partner, Cre8r Community

*(Carousel controls: "Previous testimonial" / "Next testimonial" aria-labels; "chat metrics" caption on portrait card)*

### Features (step-by-step)

1. **Sign up & complete your profile** — "Join our community to expand your reach and opportunities. Showcase your content, audience demographics, and engagement metrics to help us match you with the perfect brand partnerships."
2. **Connect with brands that fit your niche** — "Our AI helps you connect with brands that align with your audience and content style. Browse vetted opportunities, receive personalized campaign offers, and partner with companies you actually want to work with."
3. **Land dream collaborations** — "Partner with top brands, boost your engagement, and watch your influence grow. Create authentic content that resonates, meet exciting brands, and build lasting professional relationships."
4. **Get paid seamlessly** — "Receive your payment directly in your account as per agreed terms. For barter campaigns, get exclusive products. For paid collaborations, earn competitive rates. Everything handled in one platform."

Visual card copy (Profile checklist): "Audience demographics", "Engagement metrics", "Content style"
Visual card copy (Match): sample brand match badges — GlowUp Cosmetics 96%, FitBite Nutrition 91%, Trailhead Gear 88%
Visual card copy (Collab): "FashionNova India" / "Reel + Story Bundle" / tags "Reels", "Unboxing", "48h turnaround" / "Offer accepted" / ₹18,500
Visual card copy (Payout): "Total earned" ₹125,500; transactions HealthCorp ₹42,000 (Paid), FreshBites ₹18,500 (Paid), Lufthansa ₹65,000 (Processing)

### CreatorFAQ

**H2:** "Creator FAQs"
Subhead: "Have questions about how Cre8r works? Find answers to commonly asked questions from our creator community."

1. **How much time do I have to respond to a campaign?**
   "You have up to 48 hours to decide if you want to participate in a campaign on a first-come, first-served basis. This gives you enough time to review the brand, content requirements, and compensation."
2. **Can I choose my own pricing?**
   "No, Cre8r evaluates various data sets and performance insights to determine optimal pricing for you. This ensures fair compensation based on your audience reach, engagement, and content quality."
3. **Is there a registration charge?**
   "No, your registration at Cre8r is completely free. We're here to provide a platform that helps you escalate your growth as an influencer and earn money for the content you create."
4. **What are the requirements to join Cre8r?**
   "You must be at least 13 years old, have an Instagram or YouTube account with 5,000-100,000 followers/subscribers, and be located in India."
5. **How do I get paid?**
   "Creators receive payments as per the agreed terms. For barter campaigns, you receive products. For paid campaigns, you earn a fee directly into your account."
6. **How will I know about new campaign opportunities?**
   "Cre8r notifies you about new campaign opportunities via phone call and email. You'll receive alerts for campaigns that match your profile and interests."

**"Still have questions?" callout:**
**H3:** "Still have questions?"
Body: "Reach out to our creator support team for more information."
Links: collabs@cre8r.ai / WhatsApp: +91 7754900652 *(or "Book a Demo" if WhatsApp flag off)*

---

## Creator (simple landing page)

*(`CreatorPage/index.tsx`, route `/creator`)*

Eyebrow: "For Creators"
**H1:** "Monetize Your Influence"
Body: "Join a network of 4.1M+ creators. Get discovered by top brands, manage your campaigns easily, and unlock exclusive barter and paid collaborations. Fill out our YouTube creator's form to get started."
Button: **"Apply as a Creator"**

---

## Barter Collabs

*(`BarterCollabsPage/index.tsx`, route `/barter-collabs`)*

### Hero

Eyebrow: "Barter Collaborations"
**H1:** "Collaborate for / Products"
Body: "Access exclusive barter collaboration opportunities with premium brands. Create authentic content, grow your portfolio, and get premium products — no cash required to start."
Buttons: **"Apply as Creator"** / **"For Influencers"**

**"Program at a glance" card:**
| Field | Value |
|---|---|
| Minimum Followers | 5,000+ |
| Platforms Supported | Instagram, YouTube |
| Content Quality | Original & Authentic |
| Engagement Rate | Above 2% |
| Niches Covered | All categories |
| Payout Method | Products / Cash |

### Types of Collabs

**H2:** "Types of Collabs"
Subhead: "Choose the collab format that works best for your content style and audience."

- **Product Gifting** — "Receive premium products from top brands in exchange for authentic, organic content posts. Perfect for building your portfolio." — Examples: Unboxing videos, Product reviews, Day-in-life features
- **Content Creation** — "Create high-quality content for brands — lifestyle shots, recipes, tutorials — without requiring paid promotion." — Examples: Instagram Reels, YouTube Shorts, Blog features
- **Brand Ambassador** — "Become a long-term ambassador for a brand. Ongoing barter arrangement with exclusive perks and early product access." — Examples: Monthly product kits, Exclusive launches, Brand events
- **Affiliate + Barter** — "Combine barter benefits with an affiliate code. Get products for free, plus earn commissions on every sale you drive." — Examples: Custom discount codes, Revenue sharing, Performance bonuses

### Brands

**H2:** "Brands actively seeking barter creators"
Body: "We have hundreds of brands across these categories looking for authentic creator collaborations right now."
Category pills: Beauty, Skincare, Fashion, Food, Fitness, Electronics, Home Decor, Wellness
Button: **"Apply to Collaborate"**

---

## Case Studies

*(`CaseStudiesPage/index.tsx`, route `/case-studies`)*

### Hero

Eyebrow: "Case Studies"
**H1:** "Proven Results, / Clear ROI"
Body: "See how leading brands are scaling customer acquisition, driving brand awareness, and measuring real returns with our end-to-end platform."
Buttons: **"See a Live Demo"** / **"Explore Platform"**

### Stats bar
4Mn+ Creators Tracked · 200+ Campaigns Delivered · 500Mn+ Views Generated · ₹50Cr+ Revenue Attributed *(note: order in code — 200+ Campaigns Delivered, 4Mn+ Creators Tracked, 500Mn+ Views Generated, ₹50Cr+ Revenue Attributed)*

### Case study cards (from `CONSTANTS.CASE_STUDIES`)

**1. HealthCorp** — D2C Health & Wellness
"HealthCorp needed to scale their customer acquisition beyond paid ads. Using our discovery module, they found 120+ niche health creators filtered by audience demographics. The affiliate module tracked every referral, attributing ₹2.4Cr in revenue directly to creator-driven traffic."
Stats: 3x "Increase in Qualified Leads" / ₹2.4Cr "Revenue Attributed"
Tags: Discovery, Affiliate, Lead Gen

**2. FashionNova India** — Fashion E-commerce
"FashionNova India's launch campaign required coordinated execution across 200+ micro-influencers. Our execution module enabled bulk outreach, content approval workflows, and real-time tracking — all from a single dashboard. The campaign hit 4.5M combined reach within two weeks."
Stats: 4.5M "Reach in 14 Days" / 200+ "Creators Deployed"
Tags: Execution, Campaign Mgmt, Reporting

**3. FreshBites** — Food & Beverage
"FreshBites needed to expand into 8 tier-2 cities with limited budget. Our city-level creator filtering helped them identify hyper-local food creators with strong engagement in target markets. The result was a 50% reduction in customer acquisition cost compared to their traditional advertising spend."
Stats: 50% "Lower CAC" / 8 Cities "Regional Expansion"
Tags: Discovery, Regional, Analytics

Card button (all): **"Request a walkthrough"**

### Industries

**H2:** "Industries we actively support"
- E-commerce — 40+ Campaigns
- Beauty & Wellness — 35+ Campaigns
- Food & Beverage — 28+ Campaigns
- Fashion — 32+ Campaigns
- Fintech — 15+ Campaigns
- EdTech — 18+ Campaigns

### CTA

**H2:** "Ready to write your own case study?"
Body: "Book a personalized demo and see how Cre8r can transform your influencer marketing strategy."
Button: **"Book a Demo"**

---

## Demo (Book a Demo)

*(`DemoPage/index.tsx`, route `/demo`)*

### Hero

Eyebrow: "Book a Demo"
**H1:** "See Cre8r / in Action"
Body: "Schedule a personalized walkthrough of the Cre8r platform. We'll show you how our tools for discovery, campaign execution, affiliate tracking, and lead generation can transform your brand's acquisition strategy."
Buttons: **"Book a Live Demo"** / **"Chat on WhatsApp"** *(shown only if WhatsApp flag on)*

Calendar embed placeholder card: "Book via Calendly" / "30 min · Online · Free" / Button: **"Open Calendly"**

### What we'll cover

**H2:** "What we'll cover"
Subhead: "A focused walkthrough of the platform modules most relevant to your use case."

- **Creator Discovery** (~8 min) — "Watch how to find the right creators using 25+ filters — category, city, age range, engagement rate, and more."
- **Campaign Execution** (~10 min) — "See how to create a brief, send bulk outreach, approve content, and track deliverables — all in one flow."
- **Affiliate & Attribution** (~6 min) — "Learn how Cre8r maps every referral to a specific creator, tracking revenue attribution in real-time."
- **Analytics & Reporting** (~7 min) — "Explore the reporting dashboard — from campaign-level metrics to creator-level ROI breakdowns."

### How the demo works

**H2:** "How the demo works"
1. **01 — Schedule a slot** — "Pick a 30-minute slot that works for you. Our team is available weekdays 10AM–7PM IST."
2. **02 — Share your goals** — "Tell us about your brand, current challenges, and what you're hoping to achieve with influencer marketing."
3. **03 — See a live walkthrough** — "We'll demo the platform end-to-end, tailored to your industry and use case — no generic slides."
4. **04 — Get a custom plan** — "We'll follow up with a recommended platform plan and an onboarding guide specific to your needs."

Button: **"Schedule Now"**

---

## Hiring (Careers)

*(`HiringPage/index.tsx`, route `/hiring`)*

### Hero

Eyebrow: "Careers at Cre8r"
**H1:** "Join Our Mission"
Body: "We're building the future of end-to-end influencer marketing. If you're passionate about the creator economy, data, and building scalable products, we want to hear from you."

Stats strip: "5" Open Positions · "3" Offices · "Remote" Friendly

### Open Positions

**H2:** "Open Positions"
Subhead: "All roles include competitive compensation, equity, and the opportunity to shape a fast-growing platform."

1. **Senior Frontend Engineer** — Engineering · Remote · Full-time
   "Build the next generation of our creator marketing platform using React, TypeScript, and modern web technologies."
   Skills: React, TypeScript, Tailwind CSS, Motion
2. **Growth Marketing Manager** — Marketing · Mumbai / Remote · Full-time
   "Drive B2B acquisition through content, partnerships, and data-driven campaigns. Own the full funnel from awareness to activation."
   Skills: Performance Marketing, B2B SaaS, Content Strategy, Analytics
3. **Sales Executive — Brand Partnerships** — Sales · Bangalore / Mumbai · Full-time
   "Identify and onboard brand partners. Build long-term relationships with marketing teams at consumer and D2C brands."
   Skills: B2B Sales, Influencer Marketing, CRM, Negotiation
4. **Creator Success Manager** — Operations · Delhi NCR · Full-time
   "Be the primary point of contact for our creator network. Help creators maximize their earnings and deliverable quality."
   Skills: Creator Economy, Communication, Campaign Management
5. **Product Designer** — Design · Remote · Full-time
   "Design intuitive and beautiful product experiences across our brand and creator-facing platforms."
   Skills: Figma, Product Design, User Research, Design Systems

Each card button: **"Apply Now"**

### Perks — "Why you'll love working here"

**H2:** "Why you'll love working here"
- **Remote-First** — "Work from anywhere. We trust you to do great work wherever you are."
- **Equity Upside** — "Be part of the growth story. We offer competitive ESOPs to all full-time hires."
- **Health Coverage** — "Full medical, dental, and vision coverage for you and your family."
- **Learning Budget** — "₹25,000/year for courses, conferences, and books of your choice."
- **Creator Access** — "Unique access to the creator economy — meet, collab, and learn from India's top creators."
- **Small, High-Impact Team** — "Move fast, own large scopes, and see your work affect thousands of users immediately."

### CTA

**H2:** "Don't see the right role?"
Body: "We're always open to exceptional talent. Send us your profile and tell us how you'd contribute to the team."
Buttons: **"Send Your Profile"** / **"Learn About Us"**

---

## Resources

*(`ResourcesPage/index.tsx`, route `/resources`)*

### Hero

Eyebrow: "Resources"
**H1:** "Tools & Guides / for Smarter Growth"
Body: "Free resources designed to help you master influencer marketing — from discovery to conversion. No fluff, just actionable frameworks."

### ROI Calculator (interactive tool — shown only if calculators flag on)

Eyebrow: "Interactive Tool"
**H2:** "Campaign ROI Calculator"
Body: "Estimate your influencer campaign performance before you launch."

Input labels: "Number of Creators", "Avg. Creator Reach", "Avg. Engagement Rate (%)", "Conversion Rate (%)", "Average Order Value (₹)"

Output panel heading: "Estimated Results"
Output labels: "Total Reach", "Engagements", "Conversions", "Attributed Revenue"
Button: **"Discuss with our team"**

### Free Resources grid

**H2:** "Free Resources"
Subhead: "Download guides, templates, and frameworks curated from 200+ campaign learnings."

1. **ROI Calculator** — Tag: Tool — "Estimate your influencer campaign ROI before you spend a rupee. Factor in creator fees, reach, engagement, and conversion projections." — CTA: "Use Calculator" *(available)*
2. **Influencer Discovery Playbook** — Tag: Guide — "A step-by-step guide to shortlisting the right creators for your brand — from defining your criteria to evaluating authenticity scores." — CTA: "Download Guide" *(Coming Soon)*
3. **Campaign Brief Template** — Tag: Template — "A structured brief template that ensures creators understand your brand voice, deliverables, timelines, and success metrics from day one." — CTA: "Get Template" *(Coming Soon)*
4. **Affiliate Growth Toolkit** — Tag: Toolkit — "Everything you need to set up, track, and scale your influencer affiliate program — from attribution setup to performance reporting." — CTA: "Get Toolkit" *(Coming Soon)*
5. **Campaign Launch Checklist** — Tag: Checklist — "A 40-point checklist to ensure every influencer campaign launch is airtight — no missed deliverables, no last-minute surprises." — CTA: "Get Checklist" *(Coming Soon)*
6. **Creator Vetting Framework** — Tag: Framework — "Know exactly what to look for beyond follower count. Our framework covers authenticity, audience overlap, content quality, and brand safety." — CTA: "Get Framework" *(Coming Soon)*

*(Note: since `enableCalculators` is currently `false`, the "ROI Calculator" resource card is filtered out of this list on the live site, leaving 5 visible cards.)*

### Lead Capture CTA

**H2:** "Want a custom strategy for your brand?"
Body: "Book a free 30-minute strategy call. We'll walk you through how to structure your influencer program for maximum ROI."
Buttons: **"Book Strategy Call"** / "Or see our case studies →" *(shown only if case studies flag on)*

---

## Appendix: Site-wide constants referenced across pages

- **Contact — Brands:** campaign@cre8r.ai · +91 8800 411 522
- **Contact — Creators:** collabs@cre8r.ai · +91 7754900652
- **Social:** LinkedIn (linkedin.com/company/cre8r-ai), Instagram (@cre8r.community), Medium (@cre8r.ai)
- **Booking:** Calendly link used across nearly every CTA ("Book a Demo", "Request a call back", "Book a Walkthrough", etc.)
- **Feature flags currently OFF on the live site** (relevant to which sections above are actually visible to visitors): `enableCaseStudies`, `enableFounderVideos`, `enableCalculators`, `enableResources` (note: `/resources` route itself still renders, but the "Resources Hub" nav-dropdown entry is hidden), `enableWhatsApp`. Sections/links marked "hidden" or "feature-flagged off" above are not currently visible to end users but exist in the source and are included for completeness.

---

## Pages/sections covered checklist

- [x] Home (Header, Brands, Transform, Features, Testimonials, Case Studies Preview, Blogs Preview, EmailCard, Footer)
- [x] Global Navbar
- [x] About (Hero, Founders, Team, ScrollingTextAnimationSection, FounderMessage, unused TightAboutUs draft)
- [x] Product (Hero, ProductModules, WhyUs, Find, Cta, Faq)
- [x] Product — Discovery
- [x] Product — Execution
- [x] Product — Lead Generation
- [x] Product — Affiliate & ROI
- [x] Influencer/For Creators (Hero, PlatformDemo, Positives, Features, CreatorFAQ)
- [x] Creator (simple landing page)
- [x] Barter Collabs
- [x] Case Studies
- [x] Demo
- [x] Hiring
- [x] Resources
- [x] Constants file (CONSTANTS.BLOGS, CONSTANTS.CASE_STUDIES, CONSTANTS.RESOURCES, CONSTANTS.NAV_CATEGORIES)
- [ ] Legal pages (brands_tc, creators_tc, privacy_policy) — intentionally excluded, see note at top
