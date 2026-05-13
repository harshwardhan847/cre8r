import type { Route } from "./+types/home";
import InfluencerPage from "~/pages/InfluencerPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cre8r AI" },
    { name: "description", content: "Your AI-powered creative assistant" },
  ];
}

export default function Influencer() {
  return <InfluencerPage />;
}
