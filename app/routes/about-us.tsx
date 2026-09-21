import AboutPage from "~/pages/AboutPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "Cre8r.ai is building India's end-to-end influencer marketing platform. Meet the founders and team behind the creator network powering campaigns for 100+ brands.";

export function meta() {
  return seo({
    title: "About Us — Our Mission & Team",
    description: DESCRIPTION,
    path: "/about-us",
    jsonLd: [
      webPageSchema({
        name: "About Cre8r.ai",
        description: DESCRIPTION,
        path: "/about-us",
        type: "AboutPage",
      }),
      breadcrumbSchema([{ name: "About Us", path: "/about-us" }]),
    ],
  });
}

export default function AboutUs() {
  return <AboutPage />;
}
