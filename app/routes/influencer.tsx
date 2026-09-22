import InfluencerPage from "~/pages/InfluencerPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";
import { ELIGIBILITY } from "~/constants";

const DESCRIPTION =
  `Get paid brand collaborations without chasing agencies. Join free with ${ELIGIBILITY.MIN_FOLLOWERS} Instagram or YouTube followers in India and get campaigns matched to your profile.`;

export function meta() {
  return seo({
    title: "Brand Collaborations for Creators",
    description: DESCRIPTION,
    path: "/influencer",
    jsonLd: [
      webPageSchema({
        name: "Brand Collaborations for Creators",
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
