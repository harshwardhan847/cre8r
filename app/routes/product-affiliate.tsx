import AffiliatePage from "~/pages/ProductPage/AffiliatePage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Affiliate & ROI Module";
const DESCRIPTION =
  "Attribute revenue to individual creators with tracked referral links and promo codes, then measure sales, conversions and ROI per campaign in a live dashboard.";

export function meta() {
  return seo({
    title: "Influencer Affiliate Tracking & ROI",
    description: DESCRIPTION,
    path: "/product/affiliate-roi",
    jsonLd: [
      serviceSchema({
        name: NAME,
        description: DESCRIPTION,
        path: "/product/affiliate-roi",
      }),
      breadcrumbSchema([
        { name: "Product", path: "/product" },
        { name: "Affiliate & ROI", path: "/product/affiliate-roi" },
      ]),
    ],
  });
}

const ProductAffiliateRoute = () => {
  return <AffiliatePage />;
};

export default ProductAffiliateRoute;
