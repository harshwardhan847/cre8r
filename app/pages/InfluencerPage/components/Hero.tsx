import React from "react";
import EmailInput from "~/pages/HomePage/components/EmailInput";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid min-h-screen w-full max-w-312.5 grid-cols-1 items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-10 lg:py-16 xl:px-14">
        <div className="mx-auto flex w-full max-w-140 flex-col items-start justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.06em] text-foreground/80">
            AMPLEMARKET FOR REVOPS
          </p>

          <h1 className="mt-4 text-6xl font-medium leading-[1.02] tracking-[-0.02em] text-foreground">
            Ditch single-point solutions, reduce costs and boost productivity
          </h1>

          <p className="mt-6 max-w-150 text-[26px] font-light leading-tight text-muted-foreground md:text-lg">
            Consolidate and strengthen sales operations with the all-in-one
            solution that makes scaling for success easy.
          </p>

          <div className="mt-2 ">
            <EmailInput />
          </div>
        </div>

        <div className="mx-auto w-full">
          <div className="overflow-hidden rounded-[24px] border border-border/10 bg-card shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            <img
              src="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/65f8491bf1f296d2348ad62e_revops.avif"
              alt="Revenue operations team collaborating"
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
