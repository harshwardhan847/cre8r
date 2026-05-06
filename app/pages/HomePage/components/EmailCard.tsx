import { Check } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import EmailInput from "./EmailInput";

type Props = {};

const perks = [
  "Access 4Mn+ verified creator profiles instantly",
  "Launch campaigns in minutes, not weeks",
  "Real-time ROI and performance analytics",
];

const EmailCard = (props: Props) => {
  return (
    <div className="my-12 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-linear-to-br from-indigo-950 via-violet-950/80 to-slate-900 border border-white/10 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-16 flex flex-col justify-center gap-6">
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium">
              Get started free
            </p>
            <h2 className="text-5xl font-black tracking-tight text-white leading-tight">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-300 to-blue-400">
                sustainable
              </span>{" "}
              audience relationships
            </h2>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Cultivate a community of brand advocates who will amplify your
              message for years to come.
            </p>
            <ul className="flex flex-col gap-3">
              {perks.map((perk, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-400/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-violet-300" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-10 md:p-16 bg-white/5 border-l border-white/5">
            <div className="w-full max-w-sm flex flex-col gap-4">
              <p className="text-white/50 text-sm text-center leading-relaxed">
                Join thousands of brands already on Cre8r
              </p>
              <EmailInput dark />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailCard;
