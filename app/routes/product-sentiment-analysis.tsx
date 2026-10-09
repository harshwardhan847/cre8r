import SentimentAnalysisPage from "~/pages/ProductPage/SentimentAnalysisPage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Sentiment Analysis Module";
const DESCRIPTION =
  "See how audiences really reacted to your influencer campaign with a positive, neutral and negative comment split, and scan what competing brands are running.";

export function meta() {
  return seo({
    title: "Influencer Campaign Sentiment Analysis",
    description: DESCRIPTION,
    path: "/product/sentiment-analysis",
    jsonLd: [
      serviceSchema({
        name: NAME,
        description: DESCRIPTION,
        path: "/product/sentiment-analysis",
      }),
      breadcrumbSchema([
        { name: "Product", path: "/product" },
        { name: "Sentiment Analysis", path: "/product/sentiment-analysis" },
      ]),
    ],
  });
}

const ProductSentimentAnalysisRoute = () => {
  return <SentimentAnalysisPage />;
};

export default ProductSentimentAnalysisRoute;
