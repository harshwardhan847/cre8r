import ResourcesPage from "~/pages/ResourcesPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "Free influencer marketing tools and templates — an ROI calculator, discovery playbook, campaign brief template, creator vetting framework and launch checklist.";

export function meta() {
  return seo({
    title: "Free Influencer Marketing Resources",
    description: DESCRIPTION,
    path: "/resources",
    jsonLd: [
      webPageSchema({
        name: "Resources",
        description: DESCRIPTION,
        path: "/resources",
      }),
      breadcrumbSchema([{ name: "Resources", path: "/resources" }]),
    ],
  });
}

const Resources = () => {
  return <ResourcesPage />;
};

export default Resources;
