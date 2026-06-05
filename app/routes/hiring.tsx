import type { Route } from "./+types/home";
import HiringPage from "~/pages/HiringPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hiring | Cre8r AI" },
    { name: "description", content: "Join our team" },
  ];
}

export default function Hiring() {
  return <HiringPage />;
}
