import BarterCollabsPage from "~/pages/BarterCollabsPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "Product-gifting collaborations between brands and creators. See how barter campaigns work on Cre8r, who qualifies, and what creators receive in place of a fee.";

export function meta() {
  return seo({
    title: "Barter Collaborations for Creators",
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
