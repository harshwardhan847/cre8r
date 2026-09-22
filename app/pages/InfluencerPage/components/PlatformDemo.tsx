import React, { useState } from "react";
import { Play } from "lucide-react";
import { CONSTANTS } from "~/constants";
import { Supademo } from "~/components/Supademo";
import { useIsMobile } from "~/lib/use-is-mobile";

type Props = {};

const PlatformDemo = (props: Props) => {
  const isMobile = useIsMobile();
  // On mobile, don't mount the (JS-heavy) Supademo iframe until the user
  // opts in by tapping — avoids loading a third-party embed nobody asked
  // for on small screens/slower connections. Desktop keeps loading it
  // immediately, same as before.
  const [demoStarted, setDemoStarted] = useState(false);
  const showEmbed = !isMobile || demoStarted;

  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mb-10 text-center">
          <p className="eyebrow">
            Interactive Demo
          </p>
          <h2 className="h2 mt-2">
            See how Cre8r works
          </h2>
          <p className="mt-2 text-muted-foreground">
            Take a quick walkthrough of the platform, from discovering
            campaigns to getting paid.
          </p>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-border/10 bg-card shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <div className="relative aspect-video w-full">
            {showEmbed ? (
              <Supademo
                src={CONSTANTS.SUPADEMO.CREATOR_OVERVIEW}
                title="Cre8r Platform Walkthrough"
              />
            ) : (
              <button
                type="button"
                onClick={() => setDemoStarted(true)}
                className="absolute inset-0 flex h-full w-full items-center justify-center bg-card"
                aria-label="Load interactive demo"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Play className="size-6 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDemo;
