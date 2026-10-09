import CampaignTrackingPage from "~/pages/ProductPage/CampaignTrackingPage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Campaign Tracking Module";
const DESCRIPTION =
  "Track every influencer campaign post as it goes live: views, likes, comments and engagement per creator and for the campaign as a whole, in one dashboard.";

export function meta() {
  return seo({
    title: "Influencer Campaign Tracking",
    description: DESCRIPTION,
    path: "/product/campaign-tracking",
    jsonLd: [
      serviceSchema({
        name: NAME,
        description: DESCRIPTION,
        path: "/product/campaign-tracking",
      }),
      breadcrumbSchema([
        { name: "Product", path: "/product" },
        { name: "Campaign Tracking", path: "/product/campaign-tracking" },
      ]),
    ],
  });
}

const ProductCampaignTrackingRoute = () => {
  return <CampaignTrackingPage />;
};

export default ProductCampaignTrackingRoute;
