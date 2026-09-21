import ContactPage from "~/pages/ContactPage";

export function meta() {
  return [
    { title: "Contact Us · Cre8r AI" },
    {
      name: "description",
      content:
        "Talk to the Cre8r team — brand campaigns, creator collaborations, and office locations.",
    },
  ];
}

export default function ContactUs() {
  return <ContactPage />;
}
