import { CircleDashed, MoveUpRight, UsersRound } from "lucide-react";

type ReasonCard = {
  title: string;
  description: string;
  Icon: typeof CircleDashed;
};

const reasonCards: ReasonCard[] = [
  {
    title: "Fast-growing sales platform",
    description:
      "Earn up to 20% revenue share with uncapped commissions, and join a network that's already earned over $1M.",
    Icon: MoveUpRight,
  },
  {
    title: "Breakthrough AI Copilot",
    description:
      "Equip your network with AI agents that spot buying signals, research prospects, and automate outreach to increase conversions.",
    Icon: CircleDashed,
  },
  {
    title: "Full partner support",
    description:
      "Work with our partner manager and access co-marketing resources to grow alongside our expanding partner community.",
    Icon: UsersRound,
  },
];

const brandNames = [
  "HiJiffy",
  "wasabi",
  "Brite*",
  "Raconteur",
  "RemotePass",
  "JEEVES",
  "CLARA",
  "Mistra",
];

const WhyUs = () => {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 sm:px-10">
        <h2 className="max-w-sm text-center text-3xl font-medium leading-tight sm:text-5xl">
          Why partner
          <br />
          with Amplemarket
        </h2>

        <div className="mt-10 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasonCards.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/10 p-4"
            >
              <div className="mb-6 flex aspect-video w-full items-center justify-center rounded-lg bg-primary-foreground/5">
                <Icon
                  className="h-9 w-9 text-primary-foreground"
                  strokeWidth={1.4}
                />
              </div>
              <h3 className="text-xl font-normal text-primary-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 w-full max-w-3xl">
          <blockquote className="text-3xl font-light leading-tight sm:text-4xl">
            "We love working with partners who share our belief that sales can
            be smarter, faster, and more human. Our partner program is designed
            to create real value, not just for us but for every business and
            community our partners reach."
          </blockquote>

          <div className="mt-4 h-px w-full bg-primary-foreground/15" />

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20 text-xs font-semibold text-primary-foreground">
              BS
            </div>
            <div>
              <p className="text-sm font-medium text-primary-foreground">
                Bruno Santos
              </p>
              <p className="text-xs text-primary-foreground/70">
                Partnerships Manager at Amplemarket
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full">
          <p className="text-center text-lg mb-12 mt-24 text-primary-foreground/70">
            Brands scaling with our partner network
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-4 text-center text-lg font-semibold text-primary-foreground/80 sm:grid-cols-4 lg:grid-cols-8">
            {brandNames.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
