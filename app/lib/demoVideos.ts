const DEMO_VIDEO_BASE = "https://ylytic.s3.ap-south-1.amazonaws.com/demo_videos";

export type DemoVideo = {
  title: string;
  /** Walkthrough MP4 hosted on S3 (preferred). */
  videoSrc?: string;
  /** Legacy Supademo embed, used only while no MP4 exists for the tab. */
  embedUrl?: string;
};

const DEMO_VIDEO_MAP = {
  // Discovery / Dashboard overview
  discovery: {
    videoSrc: `${DEMO_VIDEO_BASE}/discovery.mp4`,
    title: "Discovery Demo",
  },

  // Campaign creation and insights
  campaignCreation: {
    videoSrc: `${DEMO_VIDEO_BASE}/campaigns.mp4`,
    title: "Campaign creation and insights",
  },
  campaignRequest: {
    embedUrl:
      "https://app.supademo.com/embed/cmhoi69kf00gt0x0ijchk8ujx?embed_v=2&utm_source=embed",
    title: "Campaign Request Demo",
  },

  // Collections walkthrough
  collection: {
    embedUrl:
      "https://app.supademo.com/embed/cmhepmh4c45x0fati8nn5kvj3?embed_v=2&utm_source=embed",
    title: "Collection Demo",
  },

  // Creator profile / creator related flows
  creator: {
    videoSrc: `${DEMO_VIDEO_BASE}/creators.mp4`,
    title: "Creator Demo",
  },

  // Outreach flows
  outreach: {
    videoSrc: `${DEMO_VIDEO_BASE}/outreach.mp4`,
    title: "Outreach Demo",
  },
  compscan: {
    videoSrc: `${DEMO_VIDEO_BASE}/competition.mp4`,
    title: "Competition Analysis Demo",
  },
  crm: {
    videoSrc: `${DEMO_VIDEO_BASE}/crm.mp4`,
    title: "CRM Demo",
  },
  home: {
    videoSrc: `${DEMO_VIDEO_BASE}/home.mp4`,
    title: "Home Demo",
  },
  spot: {
    videoSrc: `${DEMO_VIDEO_BASE}/spot.mp4`,
    title: "Spot AI Agent Demo",
  },
  affiliate: {
    videoSrc: `${DEMO_VIDEO_BASE}/affiliate.mp4`,
    title: "Affiliate Campaigns Demo",
  },
  videoAnalyzer: {
    videoSrc: `${DEMO_VIDEO_BASE}/video-analyzer.mp4`,
    title: "Video Analyzer Demo",
  },
  linkTracking: {
    videoSrc: `${DEMO_VIDEO_BASE}/link-tracking.mp4`,
    title: "Link Tracking Demo",
  },
} satisfies Record<string, DemoVideo>;

export type TabId = keyof typeof DEMO_VIDEO_MAP;

export const DEMO_VIDEOS: Record<TabId, DemoVideo> = DEMO_VIDEO_MAP;
