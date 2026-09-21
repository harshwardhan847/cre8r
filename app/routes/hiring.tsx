import HiringPage from "~/pages/HiringPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "We're hiring across engineering, growth and creator operations at Cre8r.ai. Join a fast-growing creator-tech team building India's influencer marketing platform.";

export function meta() {
  return seo({
    title: "Careers — We're Hiring",
    description: DESCRIPTION,
    path: "/hiring",
    jsonLd: [
      webPageSchema({
        name: "Careers at Cre8r.ai",
        description: DESCRIPTION,
        path: "/hiring",
      }),
      breadcrumbSchema([{ name: "Careers", path: "/hiring" }]),
    ],
  });
}

export default function Hiring() {
  return <HiringPage />;
}
