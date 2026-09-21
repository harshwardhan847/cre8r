import AboutPage from "~/pages/AboutPage";
import type { Route } from "./+types/about-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us · Cre8r AI" },
    {
      name: "description",
      content:
        "The team, mission, and story behind Cre8r — India's end-to-end influencer marketing platform.",
    },
  ];
}

export default function AboutUs() {
  return <AboutPage />;
}
