import InfluencerPage from "~/pages/InfluencerPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";
import { ELIGIBILITY } from "~/constants";

const DESCRIPTION =
  `Brand deals for creators with ${ELIGIBILITY.MIN_FOLLOWERS}+ followers. See the brand, the brief and the pay before you say yes. Always free for creators.`;

export function meta() {
  return seo({
    title: "Get Brand Deals on Instagram & YouTube in India",
    description: DESCRIPTION,
    path: "/influencer",
    jsonLd: [
      webPageSchema({
        name: "Get Brand Deals on Instagram & YouTube in India",
        description: DESCRIPTION,
        path: "/influencer",
      }),
      breadcrumbSchema([{ name: "For Influencers", path: "/influencer" }]),
    ],
  });
}

export default function Influencer() {
  return <InfluencerPage />;
}
