import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { CONSTANTS } from "~/constants";
import { Supademo } from "~/components/Supademo";

const modules = [
  {
    title: "Discovery Module",
    description: "Find the right creators with 25+ filters, optimizing for engagement, credibility, and brand fit.",
    features: ["Category", "Location", "Followers", "Engagement"],
    embedUrl: CONSTANTS.SUPADEMO.DISCOVERY,
  },
  {
    title: "Execution Module",
    description: "Turn your shortlist into confirmed creators with the Outreach module.",
    features: ["Creator outreach", "Response tracking", "Outreach pipeline"],
    embedUrl: CONSTANTS.SUPADEMO.OUTREACH,
  },
  {
    title: "Campaign Tracking Module",
    description: "Track every post as it goes live — views, likes, comments and engagement per creator.",
    features: ["Live post performance", "Campaign insights", "Creator breakdown"],
    embedUrl: CONSTANTS.SUPADEMO.CAMPAIGN_CREATION,
  },
  {
    title: "Sentiment Analysis Module",
    description: "Understand how audiences reacted to your campaign and see what competitors are running.",
    features: ["Comment sentiment", "Audience feedback", "Competition scanner"],
    embedUrl: CONSTANTS.SUPADEMO.COMPETITION_SCANNER,
  },
];

const ProductModules = () => {
  return (
    <div className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="h2">Our Key Offerings</h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Everything you need for a successful influencer marketing strategy, broken down into powerful modules.
          </p>
        </div>

        <div className="flex flex-col gap-14 md:gap-24">
          {modules.map((mod, idx) => (
            <div key={mod.title} className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <h3 className="h3">{mod.title}</h3>
                <p className="text-base md:text-xl text-muted-foreground">{mod.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {mod.features.map(f => (
                    <li key={f} className="px-4 py-2 bg-primary/5 text-primary tracking-tight rounded-full text-sm  font-normal border border-primary/10">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-transparent relative overflow-hidden">
                  <Supademo
                    src={mod.embedUrl}
                    title={mod.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Announced, not live — kept out of the module list above on purpose. */}
        <div className="mt-14 md:mt-24 rounded-3xl border border-dashed border-amber-300/70 bg-amber-50/40 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              Coming Soon
            </span>
            <h3 className="h3">Affiliate & Lead Gen*</h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Creator promo codes, referral tracking, attributed revenue and lead generation from influencer campaigns.
            </p>
          </div>
          <Link
            to="/product/affiliate-roi"
            className="inline-flex items-center text-sm font-medium text-foreground shrink-0 hover:underline underline-offset-4"
          >
            Learn more
            <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">* Not yet available on the platform.</p>
      </div>
    </div>
  );
};

export default ProductModules;

