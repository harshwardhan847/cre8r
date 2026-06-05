import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";
import { cn } from "~/lib/utils";

type Props = {};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Product", to: "/product" },
  { label: "Case Studies", to: "/case-studies" },
];

const resourceLinks = [
  { label: "Resources", to: "/resources" },
  { label: "Barter Collabs", to: "/barter-collabs" },
  { label: "Creator Form", to: CONSTANTS.CREATOR_FORM_URL, external: true },
];

const Navbar = (props: Props) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <nav
      className={cn(
        "flex items-center justify-between px-4 py-2 z-50 transition-all fixed top-4 w-full left-1/2 -translate-x-1/2 ease-in duration-200 md:px-8 md:max-w-350 md:mx-auto",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm py-1 md:px-2 z-50 top-4 -translate-x-1/2 w-min rounded-xl shadow"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-8",
          isScrolled && "gap-4",
        )}
      >
        <Link to="/" className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className={cn(
              "w-auto mix-blend-multiply saturate-0 contrast-500 transition-all duration-300 ease-in-out origin-left",
              isScrolled ? "h-8" : "h-16"
            )}
          />
        </Link>
        
        {/* Main Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.to}
              variant="ghost"
              size="lg"
              className={cn(
                "font-normal h-10 text-sm relative",
                isActive(link.to)
                  ? "text-foreground after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-foreground after:rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              )}
              asChild
            >
              <Link to={link.to}>{link.label}</Link>
            </Button>
          ))}

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "font-normal h-10 text-sm gap-1",
                resourceLinks.some(l => !l.external && isActive(l.to))
                  ? "text-foreground after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-foreground after:rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Resources
              <svg
                className={cn("w-3 h-3 transition-transform", resourcesOpen && "rotate-180")}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            
            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 rounded-xl border border-border/30 bg-background/98 backdrop-blur-sm shadow-lg p-1.5 z-50">
                {resourceLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.to}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-lg text-sm transition-colors",
                        isActive(link.to)
                          ? "text-foreground bg-muted/60 font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="lg"
          className={cn(
            "font-normal text-sm h-10",
            isActive("/influencer")
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          asChild
        >
          <Link to="/influencer">For Influencers</Link>
        </Button>
        <Button
          variant="default"
          size="lg"
          className="font-light text-sm h-10"
        >
          <Link
            to={CONSTANTS.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
