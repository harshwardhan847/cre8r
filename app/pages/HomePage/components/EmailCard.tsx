import React from "react";
import EmailInput from "./EmailInput";

type Props = {};

const EmailCard = (props: Props) => {
  return (
    <div className="p-12 py-24 rounded-4xl my-12 flex flex-col items-center justify-center gap-8 bg-linear-to-r from-indigo-950 to-indigo-950 border border-border/20 container mx-auto">
      <h2 className="text-8xl uppercase text-center text-primary-foreground leading-20 font-black tracking-tight">
        Start your
        <br />{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-300 to-blue-400">
          super sales
        </span>
        <br /> journey
      </h2>
      <EmailInput dark />
    </div>
  );
};

export default EmailCard;
