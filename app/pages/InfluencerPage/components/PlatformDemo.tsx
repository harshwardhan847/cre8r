import React from "react";
import { CONSTANTS } from "~/constants";
import { Supademo } from "~/components/Supademo";

type Props = {};

const PlatformDemo = (props: Props) => {
  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Interactive Demo
          </p>
          <h2 className="mt-2 text-3xl font-light tracking-tight text-foreground md:text-4xl">
            See how Cre8r works
          </h2>
          <p className="mt-2 text-muted-foreground">
            Take a quick walkthrough of the platform, from discovering
            campaigns to getting paid.
          </p>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-border/10 bg-card shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <div className="relative aspect-video w-full">
            <Supademo
              src={CONSTANTS.SUPADEMO.CREATOR_OVERVIEW}
              title="Cre8r Platform Walkthrough"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDemo;
