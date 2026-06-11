import { useScroll, motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";
import { cn } from "~/lib/utils";

type Props = {};

const Navbar = (props: Props) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState("discovery");
  const location = useLocation();
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  const handleMouseEnter = (menu: string) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

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
        
        {/* Main Nav Links with Popovers */}
        <div className="hidden md:flex items-center gap-1">
          {/* Home Link */}
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "font-normal h-10 text-sm relative",
              isActive("/")
                ? "text-foreground after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-foreground after:rounded-full"
                : "text-muted-foreground hover:text-foreground"
            )}
            asChild
          >
            <Link to="/">Home</Link>
          </Button>

          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "font-normal h-10 text-sm gap-1 relative",
                isActive("/product")
                  ? "text-foreground after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-foreground after:rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Product
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", activeMenu === "product" && "rotate-180")} />
            </Button>
            
            <AnimatePresence>
              {activeMenu === "product" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white border border-border/15 rounded-3xl shadow-xl p-5 z-55 flex gap-4 text-foreground text-left"
                >
                  {/* Left Column: Modules list */}
                  <div className="w-[240px] flex flex-col gap-1.5 border-r border-neutral-100 pr-3">
                    {CONSTANTS.NAV_CATEGORIES.product.items.map((item) => (
                      <div
                        key={item.id}
                        onMouseEnter={() => setHoveredProduct(item.id)}
                        onClick={() => setActiveMenu(null)}
                        className={cn(
                          "p-2.5 rounded-xl transition-all cursor-pointer text-left flex items-center justify-between group/item",
                          hoveredProduct === item.id ? "bg-neutral-50" : "hover:bg-neutral-50/50"
                        )}
                      >
                        <Link to={item.to} className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-foreground">{item.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{item.description}</p>
                        </Link>
                        <ChevronRight className={cn("w-3.5 h-3.5 text-muted-foreground/60 transition-transform", hoveredProduct === item.id && "translate-x-0.5 text-primary")} />
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Selected Module Details */}
                  <div className="flex-1 pl-1 flex flex-col justify-between">
                    {(() => {
                      const activeItem = CONSTANTS.NAV_CATEGORIES.product.items.find(i => i.id === hoveredProduct) || CONSTANTS.NAV_CATEGORIES.product.items[0];
                      return (
                        <>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                              {activeItem.label}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                              {activeItem.description}
                            </p>
                            <div className="mt-4">
                              <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/85">Key Capabilities</p>
                              <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
                                {activeItem.features.map(f => (
                                  <li key={f} className="text-[11px] text-foreground/80 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <Button size="sm" className="w-fit mt-4 text-[11px] h-8 font-light" asChild>
                            <Link to={activeItem.to} onClick={() => setActiveMenu(null)}>
                              Explore Module
                              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                            </Link>
                          </Button>
                        </>
                      );
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "font-normal h-10 text-sm gap-1 relative",
                isActive("/resources") || isActive("/barter-collabs") || isActive("/creator")
                  ? "text-foreground after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-foreground after:rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Resources
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", activeMenu === "resources" && "rotate-180")} />
            </Button>
            
            <AnimatePresence>
              {activeMenu === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white border border-border/15 rounded-3xl shadow-xl p-5 z-55 grid grid-cols-2 gap-4 text-foreground text-left"
                >
                  {/* Column 1: Growth Tools */}
                  <div className="flex flex-col gap-3">
                    <div className="px-2">
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Growth Tools</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      {CONSTANTS.NAV_CATEGORIES.resources.items.slice(0, 2).map((item) => (
                        <Link
                          key={item.label}
                          to={item.to + (item.hash || "")}
                          onClick={() => setActiveMenu(null)}
                          className="p-2.5 rounded-xl hover:bg-neutral-50/70 transition-colors block group"
                        >
                          <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 leading-normal">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Collabs & Creators */}
                  <div className="flex flex-col gap-3 border-l border-neutral-100 pl-3">
                    <div className="px-2">
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Collabs & Creators</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      {CONSTANTS.NAV_CATEGORIES.resources.items.slice(2).map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setActiveMenu(null)}
                          className="p-2.5 rounded-xl hover:bg-neutral-50/70 transition-colors block group"
                        >
                          <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 leading-normal">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "font-normal h-10 text-sm gap-1 relative",
                isActive("/about") || isActive("/case-studies") || isActive("/hiring")
                  ? "text-foreground after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-foreground after:rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Company
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", activeMenu === "company" && "rotate-180")} />
            </Button>
            
            <AnimatePresence>
              {activeMenu === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white border border-border/15 rounded-3xl shadow-xl p-5 z-55 grid grid-cols-2 gap-4 text-foreground text-left"
                >
                  {/* Column 1: About */}
                  <div className="flex flex-col gap-3">
                    <div className="px-2">
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">About Cre8r</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      {CONSTANTS.NAV_CATEGORIES.company.items.slice(0, 2).map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setActiveMenu(null)}
                          className="p-2.5 rounded-xl hover:bg-neutral-50/70 transition-colors block group"
                        >
                          <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 leading-normal">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Join Us */}
                  <div className="flex flex-col gap-3 border-l border-neutral-100 pl-3">
                    <div className="px-2">
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Join Us</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      {CONSTANTS.NAV_CATEGORIES.company.items.slice(2).map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setActiveMenu(null)}
                          className="p-2.5 rounded-xl hover:bg-neutral-50/70 transition-colors block group"
                        >
                          <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 leading-normal">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
