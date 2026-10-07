import HiringPage from "~/pages/HiringPage";
import { getJobOpenings } from "~/lib/jobs";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";
import type { Route } from "./+types/hiring";

const DESCRIPTION =
  "We're hiring across engineering, growth and creator operations at Cre8r.ai. Join a fast-growing creator-tech team building India's influencer marketing platform.";

// Build time only — openings are edited in Sanity Studio and baked into the
// prerendered page. The Sanity publish webhook redeploys the site, so a role
// added or removed in Studio goes live within a minute or two.
export async function loader() {
  return { openings: await getJobOpenings() };
}

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

export default function Hiring({ loaderData }: Route.ComponentProps) {
  return <HiringPage openings={loaderData.openings} />;
}
