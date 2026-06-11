import AboutPage from "~/pages/AboutPage";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cre8r AI" },
    { name: "description", content: "Your AI-powered creative assistant" },
  ];
}

export default function About() {
  return <AboutPage />;
}
