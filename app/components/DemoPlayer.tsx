import React from "react";
import { cn } from "~/lib/utils";
import { DEMO_VIDEOS, type TabId } from "~/lib/demoVideos";

interface DemoPlayerProps {
  demo: TabId;
  title?: string;
  className?: string;
}

export const DemoPlayer: React.FC<DemoPlayerProps> = ({
  demo,
  title,
  className,
}) => {
  const { videoSrc, embedUrl, title: defaultTitle } = DEMO_VIDEOS[demo];
  const classes = cn("w-full h-full absolute inset-0 border-0", className);

  if (videoSrc) {
    return (
      <video
        src={videoSrc}
        title={title || defaultTitle}
        className={cn(classes, "object-contain bg-black")}
        autoPlay
        loop
        muted
        controls
        playsInline
        preload="auto"
      />
    );
  }

  return (
    <iframe
      src={embedUrl}
      loading="lazy"
      title={title || defaultTitle}
      allow="clipboard-write"
      frameBorder="0"
      allowFullScreen
      className={classes}
    />
  );
};
