import React from "react";
import { cn } from "~/lib/utils";
import { CONSTANTS } from "~/constants";

type Props = {};

const featuresList = [
  {
    title: "Find & Track 4mn+ Creators",
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
    <div className="w-full my-24 flex flex-col items-center gap-4 justify-center">
      <h2 className="text-4xl font-normal text-center">How it works?</h2>
      <p className="text-center text-muted-foreground text-sm -m-2">
        Find your ideal influencers in seconds —
        <br /> no matter the niche, reach or region.
      </p>
      <div className="h-screen pt-24 w-full">
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
                <div className="w-full bg-primary aspect-video rounded-b-lg relative overflow-hidden">
                  <iframe
                    src={val.embedUrl}
                    loading="lazy"
                    title={val.title}
                    allow="clipboard-write"
                    frameBorder="0"
                    allowFullScreen
                    className={cn(
                      "w-full h-full absolute top-0 left-0 border-0",
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
