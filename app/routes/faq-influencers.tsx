import FaqPage from "~/pages/FaqPage";
import { CONSTANTS } from "~/constants";

export function meta() {
  return [
    { title: "FAQ - Influencers · Cre8r AI" },
    {
      name: "description",
      content:
        "Answers for creators on joining Cre8r, campaign response times, pricing, eligibility, and how payouts work.",
    },
  ];
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
      primaryCta={{ label: "Sign Up as a Creator", href: CONSTANTS.CREATOR_SIGNUP_URL }}
      secondaryCta={{ label: "For Influencers", to: "/influencer" }}
    />
  );
}
