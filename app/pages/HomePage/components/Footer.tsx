import { Link } from "react-router";
import { CONSTANTS } from "~/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Banner */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
              Intelligent influencer
              <br />
              matchmaking{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-br from-sky-400 via-blue-300 to-sky-400">
                powered by AI
              </span>
            </h2>
            <p className="mt-4 text-primary-foreground/60 text-base leading-relaxed max-w-md">
              From first brief to final conversion — discover, execute, and track campaigns with precision.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end shrink-0">
            <Link
              to={CONSTANTS.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors"
            >
              Book a Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to={CONSTANTS.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
            >
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-5">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Cre8r.ai Logo"
                className="h-14 w-auto invert"
              />
            </Link>
            <p className="text-primary-foreground/55 text-sm leading-relaxed max-w-xs">
              End-to-end influencer marketing platform for brands that want to discover, execute, and scale campaigns with real ROI.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href={CONSTANTS.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center">
                <img src="/icons/instagram.png" alt="Instagram" className="w-4 h-4" />
              </a>
              <a href={CONSTANTS.LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a href={CONSTANTS.MEDIUM_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center">
                <img src="/icons/medium.png" alt="Medium" className="w-4 h-4" />
              </a>
              <a href={CONSTANTS.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center">
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">Platform</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Product", to: "/product" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "Resources", to: "/resources" },
                { label: "Book a Demo", to: CONSTANTS.CALENDLY_URL, ext: true },
              ].map((link) => (
                link.ext ? (
                  <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.to} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">Company</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Barter Collabs", to: "/barter-collabs" },
                { label: "We're Hiring!", to: "/hiring" },
              ].map((link) => (
                <Link key={link.label} to={link.to} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {link.label === "We're Hiring!" ? (
                    <span className="flex items-center gap-2">
                      {link.label}
                      <span className="px-1.5 py-0.5 bg-sky-400/20 text-sky-300 text-[10px] rounded-full font-medium">Open</span>
                    </span>
                  ) : link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${CONSTANTS.CONTACT_EMAIL_BRANDS}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {CONSTANTS.CONTACT_EMAIL_BRANDS}
              </a>
              <a href={`tel:${CONSTANTS.CONTACT_NUMBER_BRANDS.replace(/\s/g, "")}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {CONSTANTS.CONTACT_NUMBER_BRANDS}
              </a>
              <p className="text-sm text-primary-foreground/40 mt-1">For Creators:</p>
              <a href={`mailto:${CONSTANTS.CONTACT_EMAIL_CREATORS}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {CONSTANTS.CONTACT_EMAIL_CREATORS}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {year} Cre8r.ai · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy_policy" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/brands_tc" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Terms (Brands)
            </Link>
            <Link to="/creators_tc" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Terms (Creators)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
