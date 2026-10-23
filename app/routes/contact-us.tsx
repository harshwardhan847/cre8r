import ContactPage from "~/pages/ContactPage";
import { seo, webPageSchema, breadcrumbSchema } from "~/seo";

const DESCRIPTION =
  "Talk to Cre8r.ai. Brand campaigns: campaign@cre8r.ai. Creators: collabs@cre8r.ai. Office in Gurgaon, or book a demo online.";

export function meta() {
  return seo({
    title: "Contact Us",
    description: DESCRIPTION,
    path: "/contact-us",
    jsonLd: [
      webPageSchema({
        name: "Contact Cre8r.ai",
        description: DESCRIPTION,
        path: "/contact-us",
        type: "ContactPage",
      }),
      breadcrumbSchema([{ name: "Contact Us", path: "/contact-us" }]),
    ],
  });
}

export default function ContactUs() {
  return <ContactPage />;
}
