import React from "react";
import { cn } from "~/lib/utils";

type Props = {};

const featuresList = [
  {
    title: "Feature One",
    image: "/feature1.png",
    description: "Description for feature one.",
  },
  {
    title: "Feature Two",
    image: "/feature2.png",
    description: "Description for feature two.",
  },
  {
    title: "Feature Three",
    image: "/feature3.png",
    description: "Description for feature three.",
  },
  {
    title: "Feature Four",
    image: "/feature4.png",
    description: "Description for feature four.",
  },
];

const Features = (props: Props) => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  // order[position] = featureIndex — tracks which feature is at each stack position
  const [order, setOrder] = React.useState(() => featuresList.map((_, i) => i));

  return (
    <div className="w-full my-24 flex flex-col items-center gap-4 justify-center">
      <h2 className="text-4xl font-normal text-center">
        All-in-one platform to level
        <br /> up your sales process
      </h2>
      <p className="text-center text-muted-foreground text-sm -m-2">
        Give your team the power to sell smarter and
        <br /> faster from day one.
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
                  className="p-6 py-2 bg-background border-border/10 border rounded-t-lg w-full flex items-center"
                  style={{
                    opacity: pos === 0 || isHovered ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <span className="rounded-sm items-center mr-2 border border-border/10 bg-pink-400 inline-flex rotate-45 w-4 h-4 aspect-square" />
                  {val.title}
                </h3>
                <img
                  src={val.image}
                  alt={val.title}
                  width={500}
                  height={500}
                  className="w-full h-auto bg-primary aspect-video object-cover rounded-b-lg"
                />
                {/* <p>{val.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto w-xl mt-24 text-foreground">
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

export default Features;
