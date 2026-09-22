import InfluencerPage from "~/pages/InfluencerPage";
import { seo } from "~/seo";
import { STATS } from "~/constants";

/**
 * This route renders the same component as /influencer, so it canonicalises
 * there rather than competing with it for the same queries.
 */
export function meta() {
  return seo({
    title: "Creator Community",
    description:
      `Join a network of ${STATS.CREATORS} creators monetising their influence through paid and barter brand collaborations with vetted Indian brands on Cre8r.ai.`,
    path: "/creator",
    canonicalPath: "/influencer",
  });
}

export default function Creator() {
  return <InfluencerPage />;
}
