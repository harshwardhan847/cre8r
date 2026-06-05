import type { Route } from "./+types/home";
import InfluencerPage from "~/pages/InfluencerPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Influencers | Cre8r AI" },
    { name: "description", content: "Join India's creator-first influencer marketing network. Monetize your influence, collaborate with top brands, and grow your income." },
  ];
}

export default function Creator() {
  return <InfluencerPage />;
}
