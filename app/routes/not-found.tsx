import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { featureFlags } from "~/featureFlags";
import { seo } from "~/seo";

export function meta() {
  return seo({
    title: "Page not found",
    description:
      "The page you were looking for could not be found on Cre8r.ai.",
    path: "/404",
    noindex: true,
  });
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
      <p className="eyebrow">
        404
      </p>
      <h1 className="h1 mt-4">
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
