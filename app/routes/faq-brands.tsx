import FaqPage from "~/pages/FaqPage";
import { CONSTANTS } from "~/constants";

export function meta() {
  return [
    { title: "FAQ - Brands · Cre8r AI" },
    {
      name: "description",
      content:
        "Answers for brands on campaign timelines, pricing, creator vetting, product shipping, and content approvals.",
    },
  ];
}

export default function FaqBrands() {
  return (
    <FaqPage
      eyebrow="For Brands"
      title="Brand FAQs"
      description="Everything marketing teams ask before running their first campaign on Cre8r — timelines, pricing, creator quality, shipping, and content approvals."
      faqs={CONSTANTS.FAQS.brands}
      contactEmail={CONSTANTS.CONTACT_EMAIL_BRANDS}
      contactNumber={CONSTANTS.CONTACT_NUMBER_BRANDS}
      primaryCta={{ label: "Book a Demo", href: CONSTANTS.CALENDLY_URL }}
      secondaryCta={{ label: "Explore the Platform", to: "/product" }}
    />
  );
}
