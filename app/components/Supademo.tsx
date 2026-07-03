import React from "react";
import { cn } from "~/lib/utils";

interface SupademoProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
}

export const Supademo: React.FC<SupademoProps> = ({
  src,
  title,
  className,
  ...props
}) => {
  return (
    <iframe
      src={src}
      loading="lazy"
      title={title || "Supademo Interactive Demo"}
      allow="clipboard-write"
      frameBorder="0"
      allowFullScreen
      className={cn("w-full h-full absolute inset-0 border-0", className)}
      {...props}
    />
  );
};
