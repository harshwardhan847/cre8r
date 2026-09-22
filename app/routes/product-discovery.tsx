import DiscoveryPage from "~/pages/ProductPage/DiscoveryPage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";
import { STATS } from "~/constants";

const NAME = "Influencer Discovery Module";
const DESCRIPTION =
  `Search ${STATS.CREATORS} Instagram and YouTube creators with ${STATS.FILTERS} filters. Check audience credibility, spot fake followers, and shortlist creators who match your demographics.`;

export function meta() {
  return seo({
    title: `Influencer Discovery Tool — ${STATS.CREATORS} Creators`,
    description: DESCRIPTION,
    path: "/product/discovery",
    jsonLd: [
      serviceSchema({
        name: NAME,
        description: DESCRIPTION,
        path: "/product/discovery",
      }),
      breadcrumbSchema([
        { name: "Product", path: "/product" },
        { name: "Discovery", path: "/product/discovery" },
      ]),
    ],
  });
}

const ProductDiscoveryRoute = () => {
  return <DiscoveryPage />;
};

export default ProductDiscoveryRoute;
