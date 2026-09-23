import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CTA, ELIGIBILITY } from "~/constants";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid min-h-screen w-full max-w-312.5 grid-cols-1 items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-10 lg:py-16 xl:px-14">
        <div className="mx-auto flex w-full max-w-140 flex-col items-center text-center lg:items-start lg:text-left justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.06em] text-foreground/80">
            CRE8R FOR CREATORS
          </p>

          <h1 className="h1 mt-4">
            Discover campaigns.
            <br /> Create content.
            <br /> Get paid.
          </h1>

          <p className="mt-6 max-w-150 text-base sm:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground">
            Focus on creating content, we&apos;ll handle the rest. Connect with
            vetted brands, unlock your earning potential, and grow your
            influence.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 lg:items-start">
            <Button size="lg" className="h-12 px-6 font-normal" asChild>
              <a href={CTA.CREATOR.href} target="_blank" rel="noopener noreferrer">
                {CTA.CREATOR.label}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <p className="text-xs font-medium text-muted-foreground">
              Free to join · {ELIGIBILITY.MIN_FOLLOWERS} Instagram or YouTube followers
            </p>
          </div>
        </div>

        <div className="mx-auto w-full">
          <div className="overflow-hidden rounded-[24px] bg-card shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <img
              src="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/65f8491bf1f296d2348ad62e_revops.avif"
              alt="Creators collaborating with brands"
              className="h-80 md:aspect-12/10 w-full object-cover sm:h-105 lg:h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
