import BarterCollabsPage from "~/pages/BarterCollabsPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "A barter collaboration means you get a brand's product instead of a cash fee, in exchange for content. See who qualifies, how to get one and which brands are looking.";

export function meta() {
  return seo({
    title: "Barter Collaboration: Meaning, How It Works & Brands in India",
    description: DESCRIPTION,
    path: "/barter-collabs",
    jsonLd: [
      webPageSchema({
        name: "Barter Collaborations",
        description: DESCRIPTION,
        path: "/barter-collabs",
      }),
      breadcrumbSchema([{ name: "Barter Collabs", path: "/barter-collabs" }]),
    ],
  });
}

const BarterCollabs = () => {
  return <BarterCollabsPage />;
};

export default BarterCollabs;
