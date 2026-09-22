import FaqPage from "~/pages/FaqPage";
import { CONSTANTS, CTA } from "~/constants";
import { seo, faqPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "How long creators get to accept a campaign, whether you can set your own rate, who is eligible to join, how payouts work for barter and paid campaigns, and more.";

export function meta() {
  return seo({
    title: "Creator FAQs — Campaigns & Payouts",
    description: DESCRIPTION,
    path: "/faq-influencers",
    jsonLd: [
      faqPageSchema(CONSTANTS.FAQS.creators, "/faq-influencers"),
      breadcrumbSchema([
        { name: "Creator FAQs", path: "/faq-influencers" },
      ]),
    ],
  });
}

export default function FaqInfluencers() {
  return (
    <FaqPage
      eyebrow="For Influencers"
      title="Creator FAQs"
      description="How campaigns reach you, what you get paid, who can join, and everything else creators ask before signing up with Cre8r."
      faqs={CONSTANTS.FAQS.creators}
      contactEmail={CONSTANTS.CONTACT_EMAIL_CREATORS}
      contactNumber={CONSTANTS.CONTACT_NUMBER_CREATORS}
      primaryCta={{ label: CTA.CREATOR.label, href: CTA.CREATOR.href }}
      secondaryCta={{ label: "For Influencers", to: "/influencer" }}
    />
  );
}
