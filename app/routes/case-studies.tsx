import CaseStudiesPage from "~/pages/CaseStudiesPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "Real influencer campaign results from brands running on Cre8r — qualified lead growth, attributed revenue, creator reach and customer acquisition cost.";

export function meta() {
  return seo({
    title: "Influencer Campaign Case Studies",
    description: DESCRIPTION,
    path: "/case-studies",
    jsonLd: [
      webPageSchema({
        name: "Case Studies",
        description: DESCRIPTION,
        path: "/case-studies",
      }),
      breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }]),
    ],
  });
}

const CaseStudies = () => {
  return <CaseStudiesPage />;
};

export default CaseStudies;
