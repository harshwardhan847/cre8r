import React from "react";
import { Button } from "~/components/ui/button";

type Props = {
  dark?: boolean;
};

const EmailInput = ({ dark }: Props) => {
  if (dark) {
    return (
      <div className="relative">
        <div className="md:w-md border-white/10 z-10 relative hover:border-white/30 bg-white/10 focus:border-white/10 border rounded-xl group p-1 px-0.5  flex items-center justify-center gap-0 mt-8">
          <input
            className="w-full h-10 focus:outline-none transition-all ease-in-out duration-300 font-light text-white text-base rounded-md px-4 py-2"
            placeholder="Enter your company email"
          />
          <Button
            className="h-10 bg-white text-foreground border-border/10 hover:bg-background "
            size={"lg"}
          >
            Get Free Trial
          </Button>
        </div>
        <div className="absolute right-0 top-full text-white/70 text-xs mt-2 z-0 -translate-y-1/2 w-full flex items-start justify-center h-16 pt-8 px-4 pb-2 bg-slate-500/10 rounded-b-2xl ">
          Generative AI Cool Vendor by <b className="ml-1">Gartner</b>
        </div>
      </div>
    );
  }
  return (
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
  );
};

export default EmailInput;
