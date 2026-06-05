import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const DemoPage = () => {
    return (
        <main className="mx-auto max-w-5xl px-6 pb-24 pt-36">
            <section className="rounded-3xl border border-border/20 bg-card p-8 md:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Product Demo
                </p>
                <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
                    See Cre8r in action
                </h1>
                <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                    We are preparing a structured demo library with focused walkthroughs
                    for discovery, campaign execution, affiliate growth, and lead
                    generation workflows.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                        <a
                            href={CONSTANTS.CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book a live demo
                        </a>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link to="/resources">Explore resources</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default DemoPage;
