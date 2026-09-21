import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { featureFlags } from "~/featureFlags";

export function meta() {
  return [
    { title: "Page not found · Cre8r AI" },
    { name: "robots", content: "noindex" },
  ];
}

/**
 * The site is deployed as an SPA, so the host answers every path with
 * index.html and unknown URLs never reach a server 404. This catch-all gives
 * those visitors a real page with somewhere to go next.
 */
export default function NotFound() {
  const links = [
    { label: "Home", to: "/" },
    { label: "Product", to: "/product" },
    { label: "Blog", to: "/blog" },
    { label: "About Us", to: "/about-us" },
    { label: "Contact Us", to: "/contact-us" },
    { label: "For Influencers", to: "/influencer" },
    ...(featureFlags.enableCaseStudies
      ? [{ label: "Case Studies", to: "/case-studies" }]
      : []),
  ];

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
        We couldn't find that page
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        The link may be out of date or mistyped. Here's where most people were
        heading.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {links.map((link) => (
          <Button key={link.to} variant="outline" asChild>
            <Link to={link.to}>{link.label}</Link>
          </Button>
        ))}
      </div>
    </main>
  );
}
