import LeadGenPage from "~/pages/ProductPage/LeadGenPage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Lead Generation Module";
const DESCRIPTION =
  "Build targeted creator lists, run outreach at scale and track response rates, so influencer campaigns feed a measurable pipeline of high-intent leads.";

export function meta() {
  return seo({
    title: "Influencer Lead Generation Software",
    description: DESCRIPTION,
    path: "/product/lead-gen",
    jsonLd: [
      serviceSchema({
        name: NAME,
        description: DESCRIPTION,
        path: "/product/lead-gen",
      }),
      breadcrumbSchema([
        { name: "Product", path: "/product" },
        { name: "Lead Generation", path: "/product/lead-gen" },
      ]),
    ],
  });
}

const ProductLeadGenRoute = () => {
  return <LeadGenPage />;
};

export default ProductLeadGenRoute;
