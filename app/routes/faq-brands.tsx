import FaqPage from "~/pages/FaqPage";
import { CONSTANTS, CTA } from "~/constants";
import { seo, faqPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "How long campaigns take to go live, what Cre8r charges, how creators are vetted, how products ship to influencers and how content approvals work — answered.";

export function meta() {
  return seo({
    title: "Influencer Marketing FAQs for Brands",
    description: DESCRIPTION,
    path: "/faq-brands",
    jsonLd: [
      faqPageSchema(CONSTANTS.FAQS.brands, "/faq-brands"),
      breadcrumbSchema([{ name: "Brand FAQs", path: "/faq-brands" }]),
    ],
  });
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
      primaryCta={{ label: CTA.BRAND.label, href: CTA.BRAND.href }}
      secondaryCta={{ label: "Explore the Platform", to: "/product" }}
    />
  );
}
