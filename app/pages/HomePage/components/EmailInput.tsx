import React from "react";
import { Button } from "~/components/ui/button";

type Props = {
  dark?: boolean;
};

const EmailInput = ({ dark }: Props) => {
  if (dark) {
    return (
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="md:w-md border-white/10 z-10 relative hover:border-white/30 bg-white/10 focus:border-white/10 border rounded-xl group p-1 px-0.5 flex items-center justify-center gap-0 mt-8">
          <input
            className="w-full h-10 focus:outline-none transition-all ease-in-out duration-300 font-light text-white text-base rounded-md px-4 py-2 bg-transparent"
            placeholder="Enter your work email"
          />
          <Button
            className="h-10 bg-white text-foreground border-border/10 hover:bg-background font-light shrink-0"
            size={"lg"}
          >
            Request a call back
          </Button>
        </div>
        <p className="text-white/60 text-xs mt-2 font-medium text-center">
          Trusted by 200+ brands across India
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="md:w-md border-border/10 z-10 relative hover:border-border bg-white focus:border-border border rounded-xl group p-1 px-0.5 flex items-center justify-center gap-0 mt-8">
        <input
          className="w-full h-10 focus:outline-none transition-all ease-in-out duration-300 font-light text-foreground text-base rounded-md px-4 py-2 bg-transparent"
          placeholder="Enter your work email"
        />
        <Button className="h-10 font-normal shrink-0" size={"lg"}>
          Request a call back
        </Button>
      </div>
      <p className="text-muted-foreground text-xs mt-2 font-medium text-center">
        Trusted by 200+ brands across India
      </p>
    </div>
  );
};

export default EmailInput;
