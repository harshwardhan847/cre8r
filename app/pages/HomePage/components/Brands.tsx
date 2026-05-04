import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

type Props = {};

const Brands = (props: Props) => {
  return (
    <div className="mx-auto container flex flex-col items-center justify-start gap-8 py-12 px-4 my-16 text-center">
      <h2 className="text-3xl font-light tracking-tight">
        Trusted by thousands of Creators
      </h2>
      <div className="grid grid-cols-4 w-full border-neutral-200 border-collapse border-[.5px] items-center justify-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="p-4 flex flex-col items-center group justify-center border-[.5px] border-neutral-200 gap-4 hover:bg-white transition cursor-pointer aspect-19/10">
            <div className="text-2xl font-semibold">Harsh</div>
            <Button
              variant={"ghost"}
              className="text-sm font-light text-muted-foreground group-hover:hidden transition-all ease-in-out duration-300 shadow-none"
            >
              asd as f asdf{" "}
            </Button>
            <Button
              variant={"outline"}
              className="text-sm font-light bg-white text-muted-foreground hidden group-hover:block transition-all ease-in-out duration-300 shadow-none"
            >
              Hovered text <ArrowRight className="size-4 ml-0 inline" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mx-auto w-xl mt-24">
        <p className="text-4xl text-start font-normal tracking-tight font-sans border-b border-border/20 pb-6">
          "Amplemarket is like having a super assistant that doesn’t sleep. The
          AI is top-notch, helping me find the right leads quickly and easily."
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="aspect-square h-12 bg-primary rounded-xl"></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-foreground font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">CEO, Company</p>
            </div>
          </div>
          <div className="font-bold text-xl">Ceros</div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
