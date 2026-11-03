import AboutPage from "~/pages/AboutPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";
import { STATS } from "~/constants";

const DESCRIPTION =
  `Cre8r.ai is a creator discovery, activation and tracking platform with offices in Gurugram and Mumbai. ${STATS.CAMPAIGNS} campaigns for ${STATS.BRANDS} brands, and ${STATS.AWARDS} awards.`;

export function meta() {
  return seo({
    rawTitle: "About Cre8r.ai: Influencer Marketing Team in Mumbai & Gurgaon",
    title: "About Cre8r.ai: Influencer Marketing Team in Mumbai & Gurgaon",
    description: DESCRIPTION,
    path: "/about-us",
    jsonLd: [
      webPageSchema({
        name: "About Cre8r.ai",
        description: DESCRIPTION,
        path: "/about-us",
        type: "AboutPage",
      }),
      breadcrumbSchema([{ name: "About Us", path: "/about-us" }]),
    ],
  });
}

export default function AboutUs() {
  return <AboutPage />;
}
