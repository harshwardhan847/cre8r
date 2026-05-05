import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import VideoExample from "./VideoExample";
import EmailInput from "./EmailInput";

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
        <EmailInput />
      </div>
      <VideoExample />
    </header>
  );
};

export default Header;
