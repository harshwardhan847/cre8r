import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

type Props = {};

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4 mt-0">
        <NavigationMenuItem>
          <Button
            variant={"ghost"}
            size={"lg"}
            className="font-normal h-11"
            asChild
          >
            <Link to="/">Home</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            variant={"ghost"}
            size={"lg"}
            className="font-normal h-11"
            asChild
          >
            <Link to="/about">About Us</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant={"ghost"} size={"lg"} className="font-normal h-11">
            Product
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant={"ghost"} size={"lg"} className="font-normal h-11">
            Blogs
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Navbar = (props: Props) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [scrollY]);

  return (
    <nav
      className={cn(
        "flex items-center justify-between px-4 py-2 pt-2 z-50 transition-all fixed top-4 w-full left-1/2 -translate-x-1/2 ease-in duration-200 md:px-8 md:max-w-350 md:mx-auto",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm py-1 md:px-2 z-50 top-4 -translate-x-1/2 w-min rounded-xl shadow"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-12",
          isScrolled && "gap-4",
        )}
      >
        {isScrolled ? (
          <div className="text-lg font-semibold text-foreground mx-2">Cr</div>
        ) : (
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto mix-blend-multiply saturate-0 contrast-500"
          />
        )}
        <NavigationMenuComponent />
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant={"ghost"}
          size={"lg"}
          className="font-normal text-sm h-10 text-muted-foreground"
        >
          For Influencers
        </Button>
        <Button
          variant={"default"}
          size={"lg"}
          className="font-light text-sm h-10"
        >
          Schedule a Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
