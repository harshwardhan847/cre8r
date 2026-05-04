import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

type Props = {};

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4 mt-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Why us</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <NavigationMenuLink
              href="https://example.com"
              className="flex flex-col gap-2 bg-background border-border/10 min-w-sm items-start justify-start rounded-lg! border-2 p-4 outline-none focus-within:ring-2 data-[state=open]:bg-background"
            >
              <h6 className="font-semibold text-base">Blogs</h6>
              <p>Read our latest articles and updates.</p>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant={"ghost"} size={"lg"} className="font-normal h-12">
            Customers
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant={"ghost"} size={"lg"} className="font-normal h-12">
            Pricing
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 pt-2 md:px-8 md:max-w-370 md:mx-auto">
      <div className="flex items-center justify-start gap-12">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-16 w-auto mix-blend-multiply saturate-0 contrast-500"
        />
        <NavigationMenuComponent />
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant={"outline"}
          size={"lg"}
          className="font-normal text-base h-12"
        >
          Open app
        </Button>
        <Button
          variant={"default"}
          size={"lg"}
          className="font-light text-base h-12"
        >
          Get free trial
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
