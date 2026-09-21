import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";
import { featureFlags } from "~/featureFlags";

const ContactPage = () => {
  const desks = [
    {
      label: "For brands",
      description:
        "Campaign planning, pricing, and platform access for marketing teams and agencies.",
      email: CONSTANTS.CONTACT_EMAIL_BRANDS,
      phone: CONSTANTS.CONTACT_NUMBER_BRANDS,
    },
    {
      label: "For creators",
      description:
        "Collaborations, barter campaigns, payouts, and anything about your creator profile.",
      email: CONSTANTS.CONTACT_EMAIL_CREATORS,
      phone: CONSTANTS.CONTACT_NUMBER_CREATORS,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-6xl px-6 pt-32 pb-12 md:px-8 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Build your next campaign with access to 4.1Mn+ influencers and their
            real-time data. Pick the fastest route below, or book a slot with the
            team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a
                href={CONSTANTS.CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {featureFlags.enableWhatsApp ? (
              <Button variant="outline" size="lg" asChild>
                <a
                  href={CONSTANTS.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            ) : (
              <Button variant="outline" size="lg" asChild>
                <a
                  href={CONSTANTS.CREATOR_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creator Sign Up
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Desks */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-4 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {desks.map((desk) => (
            <div
              key={desk.label}
              className="flex flex-col gap-4 rounded-3xl border border-border/20 bg-card p-7 md:p-9"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {desk.label}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {desk.description}
              </p>
              <div className="mt-1 flex flex-col gap-3">
                <a
                  href={`mailto:${desk.email}`}
                  className="flex items-center gap-3 text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {desk.email}
                </a>
                <a
                  href={`tel:${desk.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {desk.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <h2 className="text-xl font-normal tracking-tight text-foreground/50 md:text-2xl">
          Our offices
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {CONSTANTS.OFFICES.map((office) => (
            <div
              key={office.city}
              className="flex gap-4 rounded-3xl border border-border/20 bg-card p-7"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <div>
                <p className="text-base font-medium text-foreground">
                  {office.city}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {office.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {office.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>More answers:</span>
          <Link to="/faq-brands" className="transition-colors hover:text-foreground">
            Brand FAQs
          </Link>
          <Link
            to="/faq-influencers"
            className="transition-colors hover:text-foreground"
          >
            Creator FAQs
          </Link>
          <Link to="/blog" className="transition-colors hover:text-foreground">
            Blog
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
