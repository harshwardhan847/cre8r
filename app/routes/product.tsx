import ProductPage from "~/pages/ProductPage";
import { seo, breadcrumbSchema, softwareApplicationSchema } from "~/seo";
import { STATS } from "~/constants";

const DESCRIPTION =
  `AI-powered creator search across ${STATS.CREATORS} profiles, campaign workflows, AI content moderation, live campaign tracking and sentiment analysis, with a managed team when you need one.`;

export function meta() {
  return seo({
    title: "Influencer Marketing Platform: Discovery, Activation & Tracking",
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
