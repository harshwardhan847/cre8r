import HomePage from "~/pages/HomePage/index";
import {
  seo,
  webPageSchema,
  softwareApplicationSchema,
  SITE,
} from "~/seo";

const DESCRIPTION =
  "Run influencer marketing end to end. Discover from 4.1M+ vetted Instagram and YouTube creators, manage campaigns and content approvals, and attribute real revenue.";

export function meta() {
  return seo({
    rawTitle: "Influencer Marketing Platform in India | Cre8r.ai",
    title: "Influencer Marketing Platform in India",
    description: DESCRIPTION,
    path: "/",
    jsonLd: [
      webPageSchema({
        name: "Cre8r.ai — Influencer Marketing Platform",
        description: SITE.description,
        path: "/",
      }),
      softwareApplicationSchema(),
    ],
  });
}

export default function Home() {
  return <HomePage />;
}
