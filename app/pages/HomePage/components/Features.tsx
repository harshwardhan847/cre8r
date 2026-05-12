import React from "react";
import { cn } from "~/lib/utils";

type Props = {};

const featuresList = [
  {
    title: "Find & Track 4mn+ Creators",
    image: "/feature1.png",
    description:
      "Filter by engagement metrics, niche, audience demographics & more.",
    accent: "bg-violet-400",
    num: "01",
  },
  {
    title: "Advanced Creator Briefing System",
    image: "/feature2.png",
    description:
      "The intuitive briefing system helps you set clear goals and share detailed guidelines.",
    accent: "bg-emerald-400",
    num: "02",
  },
  {
    title: "Intelligent Matchmaking",
    image: "/feature3.png",
    description:
      "Make data-driven decisions with every click, every view, every comment.",
    accent: "bg-amber-400",
    num: "03",
  },
  {
    title: "Live Performance Tracking",
    image: "/feature4.png",
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
                <img
                  src={val.image}
                  alt={val.title}
                  width={500}
                  height={500}
                  className="w-full h-auto bg-primary aspect-video object-cover rounded-b-lg"
                />
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

      {/* <div className="mx-auto w-xl mt-24 text-foreground">
        <p className="text-4xl text-start font-normal tracking-tight font-sans border-b border-border/20 pb-6">
          "Cre8r's platform made it incredibly easy to find the right creators
          for our brand. Our campaign reach doubled within the first week."
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="aspect-square h-12 bg-primary rounded-xl"></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-foreground font-semibold">
                Rahul Mehta
              </p>
              <p className="text-sm text-muted-foreground">
                Growth Lead, Consumer Brand
              </p>
            </div>
          </div>
          <div className="font-bold text-xl">Cre8r.ai</div>
        </div>
      </div> */}
    </div>
  );
};

export default Features;
