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
};

