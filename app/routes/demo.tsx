import DemoPage from "~/pages/DemoPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";
import { CTA } from "~/constants";

const DESCRIPTION =
  "See Cre8r.ai in action. Book a 30-minute walkthrough of creator discovery, campaign execution and ROI attribution with the team — no commitment required.";

export function meta() {
  return seo({
    title: "Book a Platform Demo",
    description: DESCRIPTION,
    path: "/demo",
    jsonLd: [
      webPageSchema({
        name: CTA.BRAND.label,
        description: DESCRIPTION,
        path: "/demo",
      }),
      breadcrumbSchema([{ name: CTA.BRAND.label, path: "/demo" }]),
    ],
  });
}

const Demo = () => {
  return <DemoPage />;
};

export default Demo;
