import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CTA, ELIGIBILITY, STATS } from "~/constants";
import VideoExample from "./VideoExample";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full mx-auto mt-24 flex flex-col items-center justify-start px-4 md:pt-12 relative md:min-h-[80vh]">
      <div className="w-full absolute -top-20 left-0 scale-100 hue-rotate-180 h-full z-0">
        <img
          src="/header_bg.png"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-contain 2xl:object-cover object-bottom-left opacity-100"
        />
      </div>
      <div className="flex flex-col gap-4 z-10 items-center justify-center">
        {/* header heading */}
        <p className="eyebrow">AI creator marketing platform</p>
        <h1 className="h1 text-center font-semibold leading-[1.15] max-w-4xl text-balance">
          Find, activate and measure creators on one platform
        </h1>
        <h2 className="body-lg max-w-2xl text-center text-pretty">
          Cre8r.ai searches {STATS.CREATORS} Instagram and YouTube creator profiles
          with AI, runs campaigns with one creator or five hundred, and tracks
          views, reach and comment sentiment in one dashboard. Our campaign team
          steps in when you want us to run it.
        </h2>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button className="h-12 px-6 font-normal" size={"lg"} asChild>
              <a href={CTA.BRAND.href} target="_blank" rel="noopener noreferrer">
                {CTA.BRAND.label}
              </a>
            </Button>
            <Button variant="outline" className="h-12 px-6 font-normal" size={"lg"} asChild>
              <Link to="/influencer">
                I'm a creator
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <p className="text-xs w-full mt-2 font-medium text-center text-muted-foreground">
            Campaigns live in {ELIGIBILITY.CAMPAIGN_TIMELINE} · No subscription
          </p>
        </div>
      </div>
      <VideoExample />
    </header>
  );
};

export default Header;
