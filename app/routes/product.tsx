import ProductPage from "~/pages/ProductPage";
import { seo, breadcrumbSchema, softwareApplicationSchema } from "~/seo";

const DESCRIPTION =
  "One platform for creator discovery, campaign execution, affiliate attribution and lead generation, so brands run influencer marketing without spreadsheets.";

export function meta() {
  return seo({
    title: "Influencer Marketing Software",
    description: DESCRIPTION,
    path: "/product",
    jsonLd: [
      softwareApplicationSchema(),
      breadcrumbSchema([{ name: "Product", path: "/product" }]),
    ],
  });
}

const product = () => {
  return <ProductPage />;
};

export default product;
