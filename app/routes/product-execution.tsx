import ExecutionPage from "~/pages/ProductPage/ExecutionPage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Campaign Execution Module";
const DESCRIPTION =
  "Turn a creator shortlist into confirmed collaborations with Cre8r's Outreach module: reach out to shortlisted creators and track who has responded, in one place.";

export function meta() {
  return seo({
    title: "Influencer Outreach & Campaign Execution",
    description: DESCRIPTION,
    path: "/product/execution",
    jsonLd: [
      serviceSchema({
        name: NAME,
        description: DESCRIPTION,
        path: "/product/execution",
      }),
      breadcrumbSchema([
        { name: "Product", path: "/product" },
        { name: "Execution", path: "/product/execution" },
      ]),
    ],
  });
}

const ProductExecutionRoute = () => {
  return <ExecutionPage />;
};

export default ProductExecutionRoute;
