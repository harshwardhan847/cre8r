export const CONSTANTS = {
  CALENDLY_URL: "https://calendly.com/gs_cre8r/30min",
  CREATOR_FORM_URL: "https://forms.google.com/creator-form-placeholder",
  HIRING_FORM_URL: "https://forms.google.com/hiring-form-placeholder",
  LINKEDIN_URL: "https://www.linkedin.com/company/cre8r-ai/",
  INSTAGRAM_URL: "https://www.instagram.com/cre8r.community/",
  WHATSAPP_URL:
    "https://api.whatsapp.com/send?phone=919133213883&text=Hello%20Cre8r%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20influencer%20marketing%20platform.",
  MEDIUM_URL: "https://medium.com/@cre8r.ai",
  CONTACT_EMAIL_BRANDS: "campaign@cre8r.ai",
  CONTACT_EMAIL_CREATORS: "collabs@cre8r.ai",
  CONTACT_NUMBER_BRANDS: "+91 8800 411 522",
  CONTACT_NUMBER_CREATORS: "+91 7754900652",

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
          features: ["25+ deep filters", "4.1Mn+ creator database", "Audience credibility scores", "Engagement auditing"]
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
        {
          label: "Resources Hub",
          description: "Get all guides, checklist, and toolkits.",
          to: "/resources"
        },
        {
          label: "ROI Calculator",
          description: "Estimate campaign sales and CAC before you spend.",
          to: "/resources",
          hash: "#roi-calculator"
        },
        {
          label: "Barter Collabs",
          description: "Access premium product-gifting partnerships.",
          to: "/barter-collabs"
        },
        {
          label: "Creator Community",
          description: "Network of 4.1Mn+ creators monetizing influence.",
          to: "/creator"
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
          to: "/about"
        },
        {
          label: "Case Studies",
          description: "See real customer results and campaign ROI.",
          to: "/case-studies"
        },
        {
          label: "We are hiring",
          description: "Join our fast-growing creator tech startup.",
          to: "/hiring"
        }
      ]
    }
  }
};
