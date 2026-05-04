import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import VideoExample from "./VideoExample";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full mx-auto mt-12 flex flex-col items-center justify-start md:pt-12 relative md:min-h-[80vh]">
      <div className="w-full absolute -top-20 left-0 scale-100 hue-rotate-180 h-full z-0">
        <img
          src="./header_bg.png"
          alt="Header Background"
          className="w-full h-full object-contain opacity-100"
        />
      </div>
      <div className="flex flex-col gap-4 z-10 items-center justify-center">
        {/* header heading */}
        <button className="bg-white/80 scale-85 cursor-pointer hover:scale-88 duration-500 transition rounded-xl shadow-sm px-2 py-2 flex items-center justify-center gap-1 w-min mb-4">
          <p className="bg-primary text-primary-foreground rounded-sm px-2 flex w-min h-6 text-xs font-medium items-center mr-1 justify-center">
            New
          </p>
          <h4 className="text-sm font-light whitespace-nowrap">
            Automate your content creation with AI
          </h4>
          <ArrowRight className="size-4 text-muted-foreground" />
        </button>
        <h1 className="text-6xl font-medium text-center tracking-tighter leading-16">
          Step into the future of <br />
          content creation: Human + AI
        </h1>
        <h2 className="text-muted-foreground text-2xl max-w-lg font-light text-center">
          Empower reps, uncover opportunities, and
          <br /> grow revenue with an all-in-one AI platform.
        </h2>
        <div className="relative">
          <div className="md:w-md border-border/10 z-10 relative hover:border-border bg-white focus:border-border border rounded-xl group p-1 px-0.5  flex items-center justify-center gap-0 mt-8">
            <input
              className="w-full h-10 focus:outline-none transition-all ease-in-out duration-300 font-light text-foreground text-base rounded-md px-4 py-2"
              placeholder="Enter your company email"
            />
            <Button className="h-10" size={"lg"}>
              Get Free Trial
            </Button>
          </div>
          <div className="absolute right-0 top-full z-0 -translate-y-1/2 w-full flex items-start justify-center h-16 pt-8 px-4 pb-2 bg-slate-500/10 rounded-b-2xl ">
            Generative AI Cool Vendor by <b className="ml-1">Gartner</b>
          </div>
        </div>
      </div>
      <VideoExample />
    </header>
  );
};

export default Header;
