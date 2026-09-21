import DiscoveryPage from "~/pages/ProductPage/DiscoveryPage";
import { seo, breadcrumbSchema, serviceSchema } from "~/seo";

const NAME = "Influencer Discovery Module";
const DESCRIPTION =
  "Search 4.1M+ Instagram and YouTube creators with 25+ filters. Check audience credibility, spot fake followers, and shortlist creators who match your demographics.";

export function meta() {
  return seo({
    title: "Influencer Discovery Tool — 4.1M+ Creators",
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
