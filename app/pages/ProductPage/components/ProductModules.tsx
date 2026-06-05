import React from "react";

const modules = [
  {
    title: "Discovery Module",
    description: "Find the right creators with 25+ filters, optimizing for engagement, credibility, and brand fit.",
    features: ["Category", "Location", "Followers", "Engagement"],
    videoPlaceholder: "[20-30s Discovery Module Video Placeholder]"
  },
  {
    title: "Execution Module",
    description: "End-to-end campaign management. Automated applications, built-in messaging, and tracking.",
    features: ["Quick review process", "Messaging", "Application tracking"],
    videoPlaceholder: "[20-30s Execution Module Video Placeholder]"
  },
  {
    title: "Affiliate & ROI",
    description: "Map influencer performance across the content-to-commerce journey.",
    features: ["Real-time tracking", "Performance metrics", "ROI analysis"],
    videoPlaceholder: "[20-30s Affiliate Module Video Placeholder]"
  },
  {
    title: "Lead Generation",
    description: "Scale multi-channel outreach and capture high-intent leads efficiently.",
    features: ["Custom lists", "Campaign tracking", "Status updates"],
    videoPlaceholder: "[20-30s Lead Gen Module Video Placeholder]"
  }
];

const ProductModules = () => {
  return (
    <div className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Our Key Offerings</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for a successful influencer marketing strategy, broken down into powerful modules.
          </p>
        </div>
        
        <div className="flex flex-col gap-24">
          {modules.map((mod, idx) => (
            <div key={mod.title} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-semibold">{mod.title}</h3>
                <p className="text-xl text-muted-foreground">{mod.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {mod.features.map(f => (
                    <li key={f} className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-muted rounded-2xl border border-border shadow-sm flex items-center justify-center overflow-hidden">
                  <div className="text-center text-muted-foreground animate-pulse p-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                      ▶
                    </div>
                    {mod.videoPlaceholder}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModules;
