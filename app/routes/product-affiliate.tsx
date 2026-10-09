import AffiliatePage from "~/pages/ProductPage/AffiliatePage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Affiliate & Lead Gen Module";
const DESCRIPTION =
  "Coming soon to Cre8r: creator promo codes, referral tracking, revenue attributed to individual creators and lead generation from influencer campaigns.";

export function meta() {
  return seo({
    title: "Influencer Affiliate & Lead Gen — Coming Soon",
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
        { name: "Affiliate & Lead Gen", path: "/product/affiliate-roi" },
      ]),
    ],
  });
}

const ProductAffiliateRoute = () => {
  return <AffiliatePage />;
};

export default ProductAffiliateRoute;
