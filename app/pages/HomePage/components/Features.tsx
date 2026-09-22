import React from "react";
import { cn } from "~/lib/utils";
import { CONSTANTS } from "~/constants";
import { Supademo } from "~/components/Supademo";
import { STATS } from "~/constants";

type Props = {};

const featuresList = [
  {
    title: `Find & Track ${STATS.CREATORS} Creators`,
    image: "platform/discovery.png",
    embedUrl: CONSTANTS.SUPADEMO.DISCOVERY,
    description:
      "Filter by engagement metrics, niche, audience demographics & more.",
    accent: "bg-violet-400",
    num: "01",
  },
  {
    title: "Advanced Creator Briefing System",
    image: "platform/creator_insights.png",
    embedUrl: CONSTANTS.SUPADEMO.CAMPAIGN_REQUEST,
    description:
      "The intuitive briefing system helps you set clear goals and share detailed guidelines.",
    accent: "bg-emerald-400",
    num: "02",
  },
  {
    title: "Intelligent Matchmaking",
    image: "platform/creators.png",
    embedUrl: CONSTANTS.SUPADEMO.CRM,
    description:
      "Make data-driven decisions with every click, every view, every comment.",
    accent: "bg-amber-400",
    num: "03",
  },
  {
    title: "Live Performance Tracking",
    image: "platform/campaign_insights.png",
    embedUrl: CONSTANTS.SUPADEMO.CAMPAIGN_CREATION,
    description:
      "Monitor views, engagement and ROI in real-time across campaigns.",
    accent: "bg-rose-400",
    num: "04",
  },
];

const Features = (props: Props) => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  // order[position] = featureIndex — tracks which feature is at each stack position
  const [order, setOrder] = React.useState(() => featuresList.map((_, i) => i));

  return (
    <div className="w-full my-12 md:my-24 flex flex-col items-center gap-4 justify-center">
      <h2 className="h2 text-center">How it works?</h2>
      <p className="text-center text-muted-foreground text-sm -m-2 px-4">
        Find your ideal influencers in seconds —
        <br /> no matter the niche, reach or region.
      </p>

      {/* Mobile: plain vertical list of steps — no absolute 3D stack,
          no hover/scroll-driven motion, no simultaneously-mounted iframes. */}
      <div className="md:hidden w-full flex flex-col gap-4 px-4 mt-4">
        {featuresList.map((val) => (
          <div
            key={val.title}
            className="w-full bg-white rounded-lg shadow-sm border border-border/10 overflow-hidden flex flex-col"
          >
            <div className="w-full aspect-16/10 bg-muted overflow-hidden">
              <img
                src={`/${val.image}`}
                alt={val.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span
                    className={`rounded-sm border border-border/10 ${val.accent} inline-flex rotate-45 w-3 h-3 aspect-square shrink-0`}
                  />
                  {val.title}
                </span>
                <span className="text-xs font-medium text-muted-foreground/50 tabular-nums shrink-0">
                  {val.num}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{val.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/tablet: interactive stacked-card version */}
      <div className="hidden md:block h-screen pt-24 w-full">
        <div className="w-full grid grid-cols-1 relative container md:max-w-6xl mx-auto perspective-distant">
          {featuresList.map((val, featureIdx) => {
            const pos = order.indexOf(featureIdx);
            const isHovered = hovered === featureIdx;
            return (
              <div
                key={val.title}
                className="flex flex-col absolute shadow-lg cursor-pointer top-0 left-0 w-full bg-white rounded-lg items-start justify-start gap-0"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${-pos * 200}px) scale(${1 - pos * 0.002}) translateY(${-pos * 40 - (isHovered ? 24 : 0)}px)`,
                  zIndex: 10 - pos,
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={() => setHovered(featureIdx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  setOrder((prev) => [
                    featureIdx,
                    ...prev.filter((i) => i !== featureIdx),
                  ]);
                }}
              >
                <h3
                  className="p-6 py-2 bg-background border-border/10 border rounded-t-lg w-full flex items-center justify-between"
                  style={{
                    opacity: pos === 0 || isHovered ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`rounded-sm items-center border border-border/10 ${val.accent} inline-flex rotate-45 w-4 h-4 aspect-square`}
                    />
                    {val.title}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground/50 tabular-nums">
                    {val.num}
                  </span>
                </h3>
                <div className="w-full bg-transparent aspect-16/10 rounded-b-lg relative overflow-hidden">
                  <Supademo
                    src={val.embedUrl}
                    title={val.title}
                    className={cn(
                      "w-full h-full absolute top-0 left-0 border-0 p-0",
                      pos !== 0 && "pointer-events-none"
                    )}
                  />
                </div>
                {(pos === 0 || isHovered) && (
                  <p className="text-xs text-muted-foreground px-6 pb-4 pt-1">
                    {val.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
