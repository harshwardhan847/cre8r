import { featureFlags } from "./featureFlags";

// Destination URLs are hoisted out of CONSTANTS so the CTA definitions below
// can reference them. They are still exposed on CONSTANTS unchanged.
const CALENDLY_URL = "https://calendly.com/gs_cre8r/30min";
// Creator onboarding lives on the Ylytic platform — every "sign up / apply as
// a creator" CTA and the legacy /influencer-sign-up URL point here.
const CREATOR_SIGNUP_URL = "https://ylytic.com/signUp/creator";
// Job application Google Form — every "Apply Now" CTA points here.
const HIRING_FORM_URL = "https://forms.gle/z2MqTsVaRnC8y6tA9";

/**
 * Every headline figure the site quotes about Cre8r.
 *
 * These are the numbers that used to drift — the same claim appeared as `4Mn+`
 * on one page and `4.1Mn+` on another. Change a value here and it updates
 * everywhere at once, in stat blocks and in prose. Copy that quotes a figure
 * interpolates it from here rather than spelling it out.
 */
export const STATS = {
  /** Discoverable creator profiles in the index. */
  CREATORS: "4Mn+",
  /** Views generated across delivered campaigns. */
  VIEWS: "500Mn+",
  /** Content pieces published. */
  CONTENT: "6,000+",
  /** Campaigns delivered end to end. */
  CAMPAIGNS: "200+",
  /** Brands served. */
  BRANDS: "100+",
  /** Filters available in Discovery. */
  FILTERS: "25+",
  /** Revenue attributed to campaigns. */
  REVENUE: "₹50Cr+",
} as const;

/**
 * The canonical wording for each figure. Pages differ in how they lay a stat
 * block out, but the label text and its casing come from here so the same
 * number is never described two different ways.
 */
export const STAT_LABELS = {
  CREATORS: "Discoverable profiles",
  VIEWS: "Views generated",
  CONTENT: "Content published",
  CAMPAIGNS: "Campaigns delivered",
  REVENUE: "Revenue attributed",
} as const;

/**
 * Creator eligibility and campaign policy. MIN_FOLLOWERS in particular is
 * quoted on the creator page, the barter page and in the terms — keeping it
 * here means a change to the threshold is a one-line edit.
 */
export const ELIGIBILITY = {
  /** Minimum followers to join, as shown in marketing copy. */
  MIN_FOLLOWERS: "5,000+",
  /** The accepted range, as shown in the creator FAQ. */
  FOLLOWER_RANGE: "5,000–100,000",
  /** Minimum age in years. */
  MIN_AGE: 13,
  /** Minimum engagement rate. */
  MIN_ENGAGEMENT: "2%",
  /** How long a creator has to accept a campaign. */
  RESPONSE_WINDOW: "48 hours",
  /** How long after a post goes live a creator is paid. */
  PAYOUT_WINDOW: "45 days",
  /** Content revision rounds included. */
  CONTENT_ITERATIONS: "two rounds",
  /** How long a campaign takes to go live. */
  CAMPAIGN_TIMELINE: "2–4 weeks",
} as const;

/**
 * The three journeys the site funnels people into. Every call to action uses
 * one of these, so labels stay identical across pages and a destination change
 * lands everywhere at once.
 */
export const CTA = {
  BRAND: { label: "Book a Demo", href: CALENDLY_URL },
  CREATOR: { label: "Join Cre8r", href: CREATOR_SIGNUP_URL },
  CAREERS: { label: "Apply Now", href: HIRING_FORM_URL },
} as const;

/** Claims about Cre8r that appear in more than one place. */
export const CLAIMS = {
  BRAND_TRUST: "Leading brands trust Cre8r",
} as const;

/** Campaign videos, shared by the homepage hero and the video carousel. */
export const CAMPAIGN_VIDEOS = [
  { url: "https://www.youtube.com/embed/PNFbo5tpO9c", brand: "Reebok" },
  { url: "https://www.youtube.com/embed/MjfTaozFBuE", brand: "Reebok" },
  { url: "https://www.youtube.com/embed/Kg3YlLT9Fys", brand: "Reebok" },
  { url: "https://www.youtube.com/embed/E-Ge8ehnIE8", brand: "IDFC" },
  { url: "https://www.youtube.com/embed/2Gq2mI7RySk", brand: "Bontress Pro" },
  { url: "https://www.youtube.com/embed/1-7BVYDIlRA", brand: "Reequil" },
  { url: "https://www.youtube.com/embed/zfS6wiQWjXc", brand: "Reequil" },
  { url: "https://www.youtube.com/embed/e3TPXyF-jP0", brand: "Reequil" },
  { url: "https://www.youtube.com/embed/4GQGr17Ace4", brand: "Fortune" },
  { url: "https://www.youtube.com/embed/8qNf9_hYSkA", brand: "Fortune" },
];

/** Client logos shown in the homepage marquee. */
export const BRAND_LOGOS = [
  { name: "Bontress Pro", src: "/brands/Bontress Pro.png" },
  { name: "Fortune", src: "/brands/Fortune.png" },
  { name: "IDFC Bank", src: "/brands/IDFC bank.png" },
  { name: "Reebok", src: "/brands/Reebok Logo.jpg" },
  { name: "Reequil", src: "/brands/Reequil.png" },
];

export const CONSTANTS = {
  CALENDLY_URL,
  CREATOR_SIGNUP_URL,
  HIRING_FORM_URL,
  STATS,
  STAT_LABELS,
  ELIGIBILITY,
  CTA,
  CLAIMS,
  CAMPAIGN_VIDEOS,
  BRAND_LOGOS,
  SUPADEMO: {
    DISCOVERY: "https://app.supademo.com/embed/cmhbmkvoz0jr1fatigxf20w6o?embed_v=2&utm_source=embed",
    CAMPAIGN_CREATION: "https://app.supademo.com/embed/cmhd8z96e2ke7fatisiomh2yr?embed_v=2&utm_source=embed",
    COLLECTION: "https://app.supademo.com/embed/cmhepmh4c45x0fati8nn5kvj3?embed_v=2&utm_source=embed",
    CREATOR_INSIGHTS: "https://app.supademo.com/embed/cmheg7jxl3ps2fatiwz9idfb0?embed_v=2&utm_source=embed",
    OUTREACH: "https://app.supademo.com/embed/cmhet3bm44cabfatizw9me1tb?embed_v=2&utm_source=embed",
    COMPETITION_SCANNER: "https://app.supademo.com/embed/cmhlz91pf16jnla10p5a82iln?embed_v=2&utm_source=embed",
    CAMPAIGN_REQUEST: "https://app.supademo.com/embed/cmhoi69kf00gt0x0ijchk8ujx?embed_v=2&utm_source=embed",
    CRM: "https://app.supademo.com/embed/cmiq61ttw04lgcj0e5jwe3juq?embed_v=2&utm_source=embed",
    CREATOR_OVERVIEW: "https://app.supademo.com/embed/cms0ag5ra6n3tqmble95beeot?embed_v=2&utm_source=embed",
  },
  LINKEDIN_URL: "https://www.linkedin.com/company/cre8r-ai/",
  INSTAGRAM_URL: "https://www.instagram.com/cre8r.community/",
  WHATSAPP_URL:
    "https://api.whatsapp.com/send?phone=919133213883&text=Hello%20Cre8r%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20influencer%20marketing%20platform.",
  MEDIUM_URL: "https://medium.com/@cre8r.ai",
  CONTACT_EMAIL_BRANDS: "campaign@cre8r.ai",
  CONTACT_EMAIL_CREATORS: "collabs@cre8r.ai",
  CONTACT_NUMBER_BRANDS: "+91 8800 411 522",
  CONTACT_NUMBER_CREATORS: "+91 7754900652",

  /**
   * Live roles shown on /hiring. This is the single place to edit when a role
   * opens or closes — add an entry to list it, delete the entry to take it
   * down. An empty array is a valid state: the page then shows the general
   * "we're always hiring" card instead of a job list.
   *
   * `experience` and `applyUrl` are optional; roles without an `applyUrl`
   * fall back to HIRING_FORM_URL.
   */
  JOB_OPENINGS: [
    { role: "Associate, Data Sourcing", location: "Gurugram" },
    { role: "Associate, Campaign Management & Ops Support", location: "Gurugram" },
    { role: "Product Operations Manager", location: "Gurugram" },
    { role: "Affiliate Lead", location: "Gurugram" },
  ] as Array<{
    role: string;
    location: string;
    experience?: string;
    applyUrl?: string;
  }>,

  OFFICES: [
    {
      city: "Gurgaon",
      label: "Corporate Office",
      address: "6th Floor, Good Earth Business Bay 1, Gurgaon — 122001",
    },
    {
      city: "Mumbai",
      label: "Regional Office",
      address: "Quest CoWorks, 5th Floor, Andheri East, Mumbai — 400093",
    },
  ],

  FAQS: {
    brands: [
      {
        question: "How long does it take for a campaign to go live?",
        answer:
          `If we have to capture the entire project from finalizing the influencer pool, it typically takes ${ELIGIBILITY.CAMPAIGN_TIMELINE} from influencer discovery, selection, payments, and product shipping to the campaign going live.`,
      },
      {
        question: "What industries does Cre8r focus on?",
        answer:
          "Cre8r primarily works in the beauty, fashion, food, beverage, health, fitness, travel and retail industries.",
      },
      {
        question: "How does Cre8r ensure a high-quality creator network?",
        answer:
          "Cre8r's vetting process thoroughly screens and onboards only creators who produce relevant, trustworthy and high-value content.",
      },
      {
        question:
          "How is Cre8r different from other influencer marketing platforms?",
        answer:
          "Cre8r is a data-driven, DIY platform that helps brands discover and collaborate with high-quality influencers. Unlike other subscription-based platforms, Cre8r enables direct brand-influencer interaction, content approval and scheduling — all in one place.",
      },
      {
        question: "What is Cre8r's revenue model?",
        answer:
          "For barter campaigns, Cre8r charges a fixed platform fee per influencer. For paid campaigns, the margins are bundled in the influencer pricing.",
      },
      {
        question: "How do brands communicate with influencers?",
        answer:
          "All communication happens through the Cre8r platform, eliminating the need for emails or DMs. Brands can provide briefs, and influencers share content for approval.",
      },
      {
        question: "How are products shipped to influencers?",
        answer:
          "Cre8r has API integrations with Shiprocket, and brands can track shipments from the platform. Brands bear the shipping cost and a nominal convenience fee.",
      },
      {
        question: "What happens if a brand doesn't like the influencer content?",
        answer:
          `Brands can reject content if it doesn't align with their requirements. They get ${ELIGIBILITY.CONTENT_ITERATIONS} of iterations with the influencer to provide feedback.`,
      },
      {
        question: "Why choose the Cre8r network over a database provider?",
        answer:
          "Cre8r offers a curated network of registered influencers who provide authorized data, unlike database providers that use scraped Instagram/YouTube IDs without the influencers' knowledge or consent.",
      },
    ],
    creators: [
      {
        question: "How much time do I have to respond to a campaign?",
        answer:
          `You have up to ${ELIGIBILITY.RESPONSE_WINDOW} to decide if you want to participate in a campaign on a first-come, first-served basis. This gives you enough time to review the brand, content requirements, and compensation.`,
      },
      {
        question: "Can I choose my own pricing?",
        answer:
          "No, Cre8r evaluates various data sets and performance insights to determine optimal pricing for you. This ensures fair compensation based on your audience reach, engagement, and content quality.",
      },
      {
        question: "Is there a registration charge?",
        answer:
          "No, your registration at Cre8r is completely free. We're here to provide a platform that helps you escalate your growth as an influencer and earn money for the content you create.",
      },
      {
        question: "What are the requirements to join Cre8r?",
        answer:
          `You must be at least ${ELIGIBILITY.MIN_AGE} years old, have an Instagram or YouTube account with ${ELIGIBILITY.FOLLOWER_RANGE} followers/subscribers, and be located in India.`,
      },
      {
        question: "Can I search for particular campaigns?",
        answer:
          "No, you can't search for particular campaigns. The platform is designed to surface the campaigns that fit your profile, so the right collaborations come to you.",
      },
      {
        question: "How do I get paid?",
        answer:
          "Creators receive payments as per the agreed terms. For barter campaigns, you receive products. For paid campaigns, you earn a fee directly into your account.",
      },
      {
        question: "How will I know about new campaign opportunities?",
        answer:
          "Cre8r notifies you about new campaign opportunities via phone call and email. You'll receive alerts for campaigns that match your profile and interests.",
      },
      {
        question: "Does Cre8r have a mobile app?",
        answer:
          "Cre8r's mobile app is currently in development. Until then, everything works from the web platform on both desktop and mobile.",
      },
    ],
  },

  CASE_STUDIES: [
    {
      id: 1,
      brand: "HealthCorp",
      industry: "D2C Health & Wellness",
      metric: "3x",
      metricLabel: "Increase in Qualified Leads",
      stat2: "₹2.4Cr",
      stat2Label: "Revenue Attributed",
      description:
        "HealthCorp needed to scale their customer acquisition beyond paid ads. Using our discovery module, they found 120+ niche health creators filtered by audience demographics. The affiliate module tracked every referral, attributing ₹2.4Cr in revenue directly to creator-driven traffic.",
      tags: ["Discovery", "Affiliate", "Lead Gen"],
      accent: "border-t-emerald-400",
      accentBg: "bg-emerald-50",
    },
    {
      id: 2,
      brand: "FashionNova India",
      industry: "Fashion E-commerce",
      metric: "4.5M",
      metricLabel: "Reach in 14 Days",
      stat2: "200+",
      stat2Label: "Creators Deployed",
      description:
        "FashionNova India's launch campaign required coordinated execution across 200+ micro-influencers. Our execution module enabled bulk outreach, content approval workflows, and real-time tracking — all from a single dashboard. The campaign hit 4.5M combined reach within two weeks.",
      tags: ["Execution", "Campaign Mgmt", "Reporting"],
      accent: "border-t-violet-400",
      accentBg: "bg-violet-50",
    },
    {
      id: 3,
      brand: "FreshBites",
      industry: "Food & Beverage",
      metric: "50%",
      metricLabel: "Lower CAC",
      stat2: "8 Cities",
      stat2Label: "Regional Expansion",
      description:
        "FreshBites needed to expand into 8 tier-2 cities with limited budget. Our city-level creator filtering helped them identify hyper-local food creators with strong engagement in target markets. The result was a 50% reduction in customer acquisition cost compared to their traditional advertising spend.",
      tags: ["Discovery", "Regional", "Analytics"],
      accent: "border-t-amber-400",
      accentBg: "bg-amber-50",
    },
  ],

  RESOURCES: [
    {
      iconName: "Calculator",
      title: "ROI Calculator",
      description: "Estimate your influencer campaign ROI before you spend a rupee. Factor in creator fees, reach, engagement, and conversion projections.",
      tag: "Tool",
      accent: "bg-violet-50 border-violet-200",
      iconBg: "bg-violet-100 text-violet-600",
      cta: "Use Calculator",
      available: true,
    },
    {
      iconName: "BookOpen",
      title: "Influencer Discovery Playbook",
      description: "A step-by-step guide to shortlisting the right creators for your brand — from defining your criteria to evaluating authenticity scores.",
      tag: "Guide",
      accent: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-600",
      cta: "Download Guide",
      available: false,
    },
    {
      iconName: "FileText",
      title: "Campaign Brief Template",
      description: "A structured brief template that ensures creators understand your brand voice, deliverables, timelines, and success metrics from day one.",
      tag: "Template",
      accent: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100 text-amber-600",
      cta: "Get Template",
      available: false,
    },
    {
      iconName: "TrendingUp",
      title: "Affiliate Growth Toolkit",
      description: "Everything you need to set up, track, and scale your influencer affiliate program — from attribution setup to performance reporting.",
      tag: "Toolkit",
      accent: "bg-sky-50 border-sky-200",
      iconBg: "bg-sky-100 text-sky-600",
      cta: "Get Toolkit",
      available: false,
    },
    {
      iconName: "Zap",
      title: "Campaign Launch Checklist",
      description: "A 40-point checklist to ensure every influencer campaign launch is airtight — no missed deliverables, no last-minute surprises.",
      tag: "Checklist",
      accent: "bg-rose-50 border-rose-200",
      iconBg: "bg-rose-100 text-rose-600",
      cta: "Get Checklist",
      available: false,
    },
    {
      iconName: "Users",
      title: "Creator Vetting Framework",
      description: "Know exactly what to look for beyond follower count. Our framework covers authenticity, audience overlap, content quality, and brand safety.",
      tag: "Framework",
      accent: "bg-orange-50 border-orange-200",
      iconBg: "bg-orange-100 text-orange-600",
      cta: "Get Framework",
      available: false,
    },
  ],

  NAV_CATEGORIES: {
    product: {
      label: "Product",
      tagline: "Explore our modular marketing platform",
      items: [
        {
          id: "discovery",
          label: "Discovery Module",
          description: "Find pre-vetted creators matching your demographics.",
          to: "/product/discovery",
          features: [`${STATS.FILTERS} deep filters`, `${STATS.CREATORS} creator database`, "Audience credibility scores", "Engagement auditing"]
        },
        {
          id: "execution",
          label: "Execution Module",
          description: "Streamline campaigns, reviews, and messaging.",
          to: "/product/execution",
          features: ["Application tracking", "Unified direct messages", "Content review workflows", "Secure contracts"]
        },
        {
          id: "affiliate",
          label: "Affiliate & ROI",
          description: "Track conversions, sales, and referral traffic.",
          to: "/product/affiliate-roi",
          features: ["Attributed revenue", "Referral link tracking", "Creator promo codes", "ROI performance dashboards"]
        },
        {
          id: "lead-gen",
          label: "Lead Generation",
          description: "Scale target outreach to capture high-intent leads.",
          to: "/product/lead-gen",
          features: ["Outreach pipeline", "Target list builder", "Campaign response rates", "Live feedback tracking"]
        }
      ]
    },
    resources: {
      label: "Resources",
      tagline: "Free tools and playbooks for scaling ROI",
      items: [
        ...(featureFlags.enableResources ? [
          {
            label: "Resources Hub",
            description: "Get all guides, checklist, and toolkits.",
            to: "/resources"
          }
        ] : []),
        ...(featureFlags.enableCalculators ? [
          {
            label: "ROI Calculator",
            description: "Estimate campaign sales and CAC before you spend.",
            to: "/resources",
            hash: "#roi-calculator"
          }
        ] : []),
        {
          label: "Blog",
          description: "Insights on influencer marketing, trends, and ROI.",
          to: "/blog"
        },
        {
          label: "Barter Collabs",
          description: "Access premium product-gifting partnerships.",
          to: "/barter-collabs"
        },
        {
          label: "Creator Community",
          description: `Network of ${STATS.CREATORS} creators monetizing influence.`,
          to: "/creator"
        },
        {
          label: "Creator FAQs",
          description: "How campaigns, payouts, and eligibility work.",
          to: "/faq-influencers"
        }
      ]
    },
    company: {
      label: "Company",
      tagline: "Our story, team, and success stories",
      items: [
        {
          label: "About Us",
          description: "Learn about our mission, values, and team.",
          to: "/about-us"
        },
        {
          label: "Contact Us",
          description: "Reach our brand and creator teams directly.",
          to: "/contact-us"
        },
        {
          label: "Brand FAQs",
          description: "Timelines, pricing, shipping, and content approvals.",
          to: "/faq-brands"
        },
        ...(featureFlags.enableCaseStudies ? [
          {
            label: "Case Studies",
            description: "See real customer results and campaign ROI.",
            to: "/case-studies"
          }
        ] : []),
        {
          label: "We are hiring",
          description: "Join our fast-growing creator tech startup.",
          to: "/hiring"
        }
      ]
    }
  },
  BLOGS: [
      {
          "id": "826b77d466e9",
          "title": "The Hidden Costs of Partnering with Influencers Who Have Fake Followers",
          "image": "/blogs/826b77d466e9.webp",
          "author": "Cre8r.ai",
          "date": "Mar 10, 2025",
          "description": "Influencer marketing has exploded into a multi-billion-dollar industry, with brands leveraging social media personalities to build authentic connections with consumers. However, a growing challenge threatens the effectiveness of these partnerships: fake followers.",
          "blog_link": "https://medium.com/p/826b77d466e9"
      },
      {
          "id": "feff6ecb2065",
          "title": "Lufthansa Harnesses Influencer Marketing to Redefine Travel Experiences in Milan",
          "image": "/blogs/feff6ecb2065.webp",
          "author": "Cre8r.ai",
          "date": "Oct 8, 2024",
          "description": "Traditional marketing strategies are giving way to more authentic and engaging approaches in the rapidly evolving world of travel. Recognizing this shift, Lufthansa has brilliantly utilized influencer marketing to showcase Milan in a fresh and captivating light, setting new standards for the industry.",
          "blog_link": "https://medium.com/p/feff6ecb2065"
      },
      {
          "id": "13c920667f6d",
          "title": "Paid Influencer Campaigns vs. Barter Campaigns: What's Best for Your Brand?",
          "image": "/blogs/13c920667f6d.webp",
          "author": "Cre8r.ai",
          "date": "Jul 31, 2024",
          "description": "While sending weekly emails, running paid ads, and then managing influencer campaigns. Adding another task might seem overwhelming. If your current strategies are effective, why consider influencer marketing?",
          "blog_link": "https://medium.com/p/13c920667f6d"
      },
      {
          "id": "90d89e4a9243",
          "title": "New Supreme Court Mandate: What Influencers and Brands Need to Know",
          "image": "/blogs/90d89e4a9243.webp",
          "author": "Cre8r.ai",
          "date": "Jun 26, 2024",
          "description": "Starting June 18th, all advertisements on TV, print or online must have a valid Self-Declaration Certificate (SDC). This applies to both print and digital media. To facilitate this, the MIB has updated its Broadcast Seva Portal for TV and Radio ads, and the PCI has done the same for print and digital ads. These portals are operational from June 4, 2024.",
          "blog_link": "https://medium.com/p/90d89e4a9243"
      },
      {
          "id": "f80ed1d31b20",
          "title": "Shocking Truth: Why Brands Are Obsessed with Regional Influencers!",
          "image": "/blogs/f80ed1d31b20.webp",
          "author": "Cre8r.ai",
          "date": "May 24, 2024",
          "description": "In the bustling world of marketing, there's a buzzworthy trend captivating brands far and wide — the meteoric rise of regional influencers.",
          "blog_link": "https://medium.com/p/f80ed1d31b20"
      },
      {
          "id": "b2367ea5ea85",
          "title": "How to Hire an Influencers to Promote Your Business — Step By Step",
          "image": "/blogs/b2367ea5ea85.webp",
          "author": "Cre8r.ai",
          "date": "Apr 21, 2024",
          "description": "At cre8r.ai, we get it — the world of influencer marketing can feel like a maze. With so many creators out there, how do you find the ones that genuinely align with your brand? And once you've identified potential partners, building authentic connections while protecting your interests is easier said than done.",
          "blog_link": "https://medium.com/p/b2367ea5ea85"
      },
      {
          "id": "2532beaf9997",
          "title": "KOLs vs. Influencers — What They Are & What Differentiates Them",
          "image": "/blogs/2532beaf9997.webp",
          "author": "Cre8r.ai",
          "date": "Apr 15, 2024",
          "description": "Forget the sponsored posts and perfectly curated feeds. The future of brand advocacy lies with the silent giants of the internet — the Key Opinion Leaders (KOLs). These aren't your average social media celebrities; they're the trusted experts, the industry gurus, the voices that hold weight in their respective corners of the web.",
          "blog_link": "https://medium.com/p/2532beaf9997"
      },
      {
          "id": "dd1017468e44",
          "title": "How Brands Can Legally Structure Influencer Contracts and Agreements?",
          "image": "/blogs/dd1017468e44.webp",
          "author": "Cre8r.ai",
          "date": "Mar 27, 2024",
          "description": "In this digital age, influencer marketing is no longer just an option; it's a necessity. But with great power comes great responsibility — and legality.",
          "blog_link": "https://medium.com/p/dd1017468e44"
      },
      {
          "id": "089d6192d425",
          "title": "Influencer Marketing is the Fashion Industry's new Fortune Cookie",
          "image": "/blogs/089d6192d425.webp",
          "author": "Cre8r.ai",
          "date": "Mar 11, 2024",
          "description": "\"According to Influencer Marketing Hub, the Indian influencer marketing industry is projected to grow at a staggering compound annual growth rate (CAGR) of 25% between 2020 and 2025, reaching a whopping $2.4 billion by 2025.\"",
          "blog_link": "https://medium.com/p/089d6192d425"
      },
      {
          "id": "545dd4ea15b4",
          "title": "How is Influencer marketing revolutionizing the global media landscape today?",
          "image": "/blogs/545dd4ea15b4.webp",
          "author": "Cre8r.ai",
          "date": "Jan 19, 2024",
          "description": "There are no two ways around the fact that all businesses need a constant brand push to get consumers to trust them. Advertisement remains to be a substantial part of marketing.",
          "blog_link": "https://medium.com/p/545dd4ea15b4"
      },
      {
          "id": "85ad647702b8",
          "title": "Why Engagement Rate is a Key Metric for Brands to Track Spending?",
          "image": "/blogs/85ad647702b8.webp",
          "author": "Cre8r.ai",
          "date": "Jan 10, 2024",
          "description": "You may have stumbled across the quote, 'All that shines is not gold', well it certainly holds when talking about a high follower count. While a sky-high following might add a star to an influencer's badge, it doesn't necessarily affect the way their content is consumed. Yep! You heard that right. It doesn't matter if you are an insanely popular public figure if your followers are not engaging with the content you are posting.",
          "blog_link": "https://medium.com/p/85ad647702b8"
      },
      {
          "id": "1201f930b1b1",
          "title": "From Sponsored Posts to Brand Partnerships — The Evolution of Influencer Marketing in a…",
          "image": "/blogs/1201f930b1b1.webp",
          "author": "Cre8r.ai",
          "date": "Dec 15, 2023",
          "description": "The world of influencer marketing has come a long way from its humble beginnings, where perfectly curated flat lays and #OOTD selfies reigned supreme. Today's influencer marketing landscape is a far cry from its humble beginnings, evolving into a strategic partnership ecosystem built on mutual respect, shared values, and long-term vision.",
          "blog_link": "https://medium.com/p/1201f930b1b1"
      },
      {
          "id": "d2226baabc86",
          "title": "Building Authentic Brand-Influencer Relationships — The cre8r.ai Approach",
          "image": "/blogs/d2226baabc86.webp",
          "author": "Cre8r.ai",
          "date": "Nov 29, 2023",
          "description": "In the dynamic landscape of influencer marketing, authenticity isn't just a buzzword; it's the backbone of every successful campaign. But how do brands and influencers cut through the clutter to create genuine connections in a world awash with options?",
          "blog_link": "https://medium.com/p/d2226baabc86"
      },
      {
          "id": "e73e4df1381f",
          "title": "How Long Should Your Medium Article Be?",
          "image": "/blogs/e73e4df1381f.webp",
          "author": "Cre8r.ai",
          "date": "Nov 15, 2023",
          "description": "Medium stands as a beacon for writers who seek to share their insights, stories, and expertise. As a platform that celebrates diverse voices and ideas, Medium has become a hub for thought leaders, content creators, and avid readers.",
          "blog_link": "https://medium.com/p/e73e4df1381f"
      },
      {
          "id": "fe5d95735492",
          "title": "One right hook can make you go viral",
          "image": "/blogs/fe5d95735492.webp",
          "author": "Cre8r.ai",
          "date": "Oct 9, 2023",
          "description": "Have you ever wondered what makes some content go viral while others barely get any attention? What is the secret to creating content that spreads like wildfire and reaches millions of people?",
          "blog_link": "https://medium.com/p/fe5d95735492"
      },
      {
          "id": "7b01e4945d5c",
          "title": "5-Step Strategy for Ensuring your Content is Reaching the Right Audience",
          "image": "/blogs/7b01e4945d5c.webp",
          "author": "Cre8r.ai",
          "date": "Sep 28, 2023",
          "description": "One of the most important aspects of growing your small business is reaching out to your ideal audience. You want to communicate your message to the people who are most likely to be interested in your brand, trust your solutions, and build long-term relationships with you.",
          "blog_link": "https://medium.com/p/7b01e4945d5c"
      }
  ]
};
