import { Button } from "~/components/ui/button";

const Cta = () => {
  return (
    <section className="bg-muted py-10 sm:py-14">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-amber-950 px-6 py-20 text-center sm:rounded-3xl sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-5xl font-extrabold uppercase leading-none tracking-[-0.06em] text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Scale influencer
            </h2>
            <p className="mt-2 text-5xl font-extrabold uppercase leading-none tracking-[-0.06em] text-fuchsia-100 drop-shadow-[0_0_1.25rem_rgba(244,214,255,0.5)] sm:text-6xl md:text-7xl lg:text-8xl">
              campaigns with cre8r
            </p>

            <Button
              type="button"
              size="lg"
              className="mt-10 h-12 rounded-xl bg-primary-foreground px-10 text-base font-medium text-foreground hover:bg-primary-foreground/90"
            >
              Request a call back
            </Button>
          </div>

          <svg
            viewBox="0 0 240 260"
            aria-hidden="true"
            className="pointer-events-none absolute right-1/6 top-1/3 hidden h-44 w-44 -translate-y-1/2 text-primary-foreground/90 lg:block"
            fill="none"
          >
            <path
              d="M83 211c22-24 15-58-3-72-19-14-36 4-36 28 0 20 12 45 42 41 32-5 52-39 37-84-14-42-6-72 19-72 19 0 27 20 27 42 0 26-16 42-35 42-15 0-27-11-27-30 0-15 9-29 20-35"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M168 134c14 20 37 31 58 22"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Cta;
