import { cn } from "~/lib/utils";

const TINTS = [
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-sky-100 text-sky-700",
  "bg-rose-100 text-rose-700",
];

/**
 * Initials avatar for the mock creators in the product-page sandboxes. They
 * used to be stock photos that didn't match the Indian creator names beside
 * them, so until real creator images are available every sandbox shows
 * initials instead. The tint is derived from the name so it stays stable
 * across renders.
 */
const CreatorAvatar = ({ name, className }: { name: string; className?: string }) => {
  const initials = name
    .split(" ")
    .filter((part) => /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
  const tint = TINTS[[...name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % TINTS.length];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "rounded-full shrink-0 flex items-center justify-center font-semibold text-sm",
        tint,
        className,
      )}
    >
      {initials}
    </div>
  );
};

export default CreatorAvatar;
