import ExecutionPage from "~/pages/ProductPage/ExecutionPage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Campaign Execution Module";
const DESCRIPTION =
  "Run influencer campaigns in one place: distribute briefs, track applications, message creators directly, review content in two approval rounds, and sign contracts.";

export function meta() {
  return seo({
    title: "Influencer Campaign Management Software",
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
