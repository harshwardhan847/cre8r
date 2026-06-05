import { Link } from "react-router";

const resources = [
    {
        title: "ROI Calculator",
        description: "Interactive estimator placeholder for campaign planning.",
    },
    {
        title: "Influencer Discovery Playbook",
        description: "Strategy checklist placeholder for creator shortlisting.",
    },
    {
        title: "Campaign Brief Template",
        description: "Reusable brief format placeholder for faster execution.",
    },
    {
        title: "Affiliate Growth Toolkit",
        description: "Planning asset placeholder for affiliate expansion.",
    },
];

const ResourcesPage = () => {
    return (
        <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
            <section>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Resources
                </p>
                <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
                    Tools and guides for smarter acquisition
                </h1>
                <p className="mt-4 max-w-3xl text-base text-muted-foreground">
                    This section will host practical assets for discovery, execution,
                    affiliate growth, and lead generation. Placeholders are live so the
                    structure can be reviewed now and content can be dropped in later.
                </p>
            </section>

            <section className="mt-10 grid gap-4 md:grid-cols-2">
                {resources.map((item) => (
                    <article
                        key={item.title}
                        className="rounded-2xl border border-border/20 bg-card p-6"
                    >
                        <h2 className="text-xl font-normal">{item.title}</h2>
                        <p className="mt-3 text-sm text-muted-foreground">
                            {item.description}
                        </p>
                        <span className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                            Coming soon
                        </span>
                    </article>
                ))}
            </section>

            <div className="mt-10">
                <Link
                    to="/case-studies"
                    className="text-sm text-foreground/80 transition hover:text-foreground"
                >
                    View case studies
                </Link>
            </div>
        </main>
    );
};

export default ResourcesPage;
