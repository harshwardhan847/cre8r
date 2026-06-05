import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const caseStudies = [
    {
        title: "D2C Skincare Brand",
        outcome: "Growth narrative placeholder",
        summary:
            "How creator discovery + campaign execution improved consistency in weekly inbound demand.",
    },
    {
        title: "Consumer Electronics Launch",
        outcome: "Acquisition narrative placeholder",
        summary:
            "How niche creators and better briefing workflows accelerated launch visibility.",
    },
    {
        title: "Food & Beverage Expansion",
        outcome: "Regional scale placeholder",
        summary:
            "How city-level creator filtering and performance tracking unlocked sharper regional execution.",
    },
];

const CaseStudiesPage = () => {
    return (
        <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
            <section>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Case Studies
                </p>
                <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
                    Real outcomes, clear frameworks
                </h1>
                <p className="mt-4 max-w-3xl text-base text-muted-foreground">
                    Detailed case studies are being curated. For now, these placeholder
                    summaries show the structure and intent of the upcoming section.
                </p>
            </section>

            <section className="mt-10 grid gap-4 md:grid-cols-3">
                {caseStudies.map((item) => (
                    <article
                        key={item.title}
                        className="rounded-2xl border border-border/20 bg-card p-6"
                    >
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                            {item.outcome}
                        </p>
                        <h2 className="mt-3 text-xl font-normal">{item.title}</h2>
                        <p className="mt-3 text-sm text-muted-foreground">{item.summary}</p>
                        <Link
                            to="/demo"
                            className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 transition hover:text-foreground"
                        >
                            Request walkthrough
                            <ArrowRight className="size-4" />
                        </Link>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default CaseStudiesPage;
