import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

type Props = {};

const Brands = (props: Props) => {
  return (
    <div className="mx-auto container flex flex-col items-center justify-start gap-8 py-12 px-4 my-16 text-center">
      <h2 className="text-3xl font-light tracking-tight">
        Automate Influencer Marketing to Drive ROI
      </h2>
      <div className="grid grid-cols-4 w-full border-neutral-200 border-collapse border-[.5px] items-center justify-center">
        {[
          { stat: "4Mn+", label: "Discoverable profiles" },
          { stat: "500Mn+", label: "Views generated" },
          { stat: "6000+", label: "Content published" },
          { stat: "200+", label: "Campaigns delivered" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 flex flex-col items-center group justify-center border-[.5px] border-neutral-200 gap-4 hover:bg-white transition cursor-pointer aspect-19/10"
          >
            <div className="text-2xl font-semibold">{item.stat}</div>
            <Button
              variant={"ghost"}
              className="text-sm font-light text-muted-foreground group-hover:hidden transition-all ease-in-out duration-300 shadow-none"
            >
              {item.label}
            </Button>
            <Button
              variant={"outline"}
              className="text-sm font-light bg-white text-muted-foreground hidden group-hover:block transition-all ease-in-out duration-300 shadow-none"
            >
              Learn more <ArrowRight className="size-4 ml-0 inline" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mx-auto w-xl mt-24">
        <p className="text-4xl text-start font-normal tracking-tight font-sans border-b border-border/20 pb-6">
          "Cre8r helped us discover the perfect micro-influencers for our
          campaign. The results were beyond our expectations — 3x ROI in just 30
          days."
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="aspect-square h-12 bg-primary rounded-xl"></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-foreground font-semibold">
                Priya Sharma
              </p>
              <p className="text-sm text-muted-foreground">
                Head of Marketing, D2C Brand
              </p>
            </div>
          </div>
          <div className="font-bold text-xl">Cre8r.ai</div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
