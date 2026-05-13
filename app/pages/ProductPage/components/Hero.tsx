import { Button } from "~/components/ui/button";

type PayoutCard = {
  amount: string;
  bgClass: string;
  textClass: string;
  positionClass: string;
  avatarClass: string;
  hiddenOnMobile?: boolean;
};

const cards: PayoutCard[] = [
  {
    amount: "4Mn+",
    bgClass: "bg-[#ecc9e7]",
    textClass: "text-[#1f1f1f]",
    positionClass: "top-10 left-[6%] lg:left-[12%]",
    avatarClass: "bg-[linear-gradient(135deg,#cc7e63,#6e5333)]",
  },
  {
    amount: "500Mn+",
    bgClass: "bg-[#5a1d0e]",
    textClass: "text-[#f6f0eb]",
    positionClass: "top-[208px] left-[3%] lg:left-[10%]",
    avatarClass: "bg-[linear-gradient(135deg,#f4b8a3,#97685a)]",
    hiddenOnMobile: true,
  },
  {
    amount: "6000+",
    bgClass: "bg-[#f24908]",
    textClass: "text-[#fff4ee]",
    positionClass: "top-[316px] left-[23%] lg:left-[26%]",
    avatarClass: "bg-[linear-gradient(135deg,#303d45,#b57a57)]",
    hiddenOnMobile: true,
  },
  {
    amount: "200+",
    bgClass: "bg-[#5a1d0e]",
    textClass: "text-[#f6f0eb]",
    positionClass: "top-[370px] left-1/2 -translate-x-1/2",
    avatarClass: "bg-[linear-gradient(135deg,#46505c,#a77967)]",
  },
  {
    amount: "135K+",
    bgClass: "bg-[#cbc5f0]",
    textClass: "text-[#2a2a2a]",
    positionClass: "top-10 right-[6%] lg:right-[12%]",
    avatarClass: "bg-[linear-gradient(135deg,#de987e,#7a5a4d)]",
  },
  {
    amount: "3Mn+",
    bgClass: "bg-[#f24908]",
    textClass: "text-[#fff4ee]",
    positionClass: "top-[208px] right-[3%] lg:right-[10%]",
    avatarClass: "bg-[linear-gradient(135deg,#5d6c7c,#ba805f)]",
    hiddenOnMobile: true,
  },
  {
    amount: "4.1Mn+",
    bgClass: "bg-[#ecc9e7]",
    textClass: "text-[#1f1f1f]",
    positionClass: "top-[316px] right-[23%] lg:right-[26%]",
    avatarClass: "bg-[linear-gradient(135deg,#13161f,#8f6f4e)]",
    hiddenOnMobile: true,
  },
];

const Hero = () => {
  return (
    <section className="">
      <div className="relative mx-auto md:min-h-screen w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-162.5 flex-col items-center pt-28 md:pt-48 text-center">
          <p className="text-[13px] font-medium tracking-sm text-muted-foreground">
            INFLUENCER PLATFORM
          </p>
          <h1 className="mt-4 text-balance text-[42px] font-normal leading-[0.96] text-foreground sm:text-[54px] md:text-5xl">
            Let AI build your next influencer campaign
          </h1>
          <p className="mt-6 max-w-125 text-pretty text-lg leading-[1.35] text-muted-foreground">
            Discover 4.1mn+ creators. Execute campaigns. Track performance - all
            in one place.
          </p>
          <Button
            type="button"
            variant={"default"}
            size={"lg"}
            className="mt-10 h-12 px-6 text-lg font-light"
          >
            Request a call back
          </Button>
        </div>
        <div className=" relative top-0 left-0 bg-red-400 h-auto -translate-y-80 scale-110">
          {cards.map((card) => (
            <div
              key={card.amount}
              className={`absolute z-10 h-32 w-32 rounded-[18px] p-3 shadow-[0_1px_0_rgba(0,0,0,0.02)] ${card.bgClass} ${card.textClass} ${card.positionClass} ${card.hiddenOnMobile ? "hidden sm:block" : "block"}`}
            >
              <div className="flex h-full flex-col items-center justify-between pb-3 pt-2">
                <div className="rounded-full bg-[#d9d9d9] p-0.5">
                  <div
                    className={`h-8 w-8 rounded-full border border-white/50 ${card.avatarClass}`}
                  />
                </div>
                <p className="text-2xl font-light">{card.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Stats />
    </section>
  );
};

const Stats = () => {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-9xl font-normal font-mono text-foreground">
            200+
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Campaigns delivered
          </p>
        </div>

        <div className="mt-20 mx-auto max-w-2xl pt-12">
          <blockquote className="text-start border-b border-border pb-8 ">
            <p className="text-3xl font-normal leading-relaxed text-foreground">
              "We prioritize authentic influencer relationships that truly
              represent your brand and connect with your audience."
            </p>
          </blockquote>

          <div className="mt-4 flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-3 w-full">
              <div className="h-10 w-10 rounded-full bg-slate-300" />
              <div className="text-left">
                <p className="font-medium text-foreground">Cre8r Team</p>
                <p className="text-sm text-muted-foreground">
                  Influencer Marketing Platform
                </p>
              </div>
            </div>
            <div className="font-bold whitespace-nowrap text-foreground">
              CRE8R.AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
