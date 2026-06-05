import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const BarterCollabsPage = () => {
    return (
        <main className="mx-auto max-w-5xl px-6 pb-24 pt-36">
            <section className="rounded-3xl border border-border/20 bg-card p-8 md:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Barter Collabs
                </p>
                <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
                    Product-first collaborations, structured for scale
                </h1>
                <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                    This page will be expanded with collaboration types, brand fit
                    criteria, and reporting structure. Placeholder content is live to keep
                    navigation and information architecture complete.
                </p>
                <div className="mt-8">
                    <Button asChild>
                        <a
                            href={CONSTANTS.CREATOR_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply as creator
                        </a>
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default BarterCollabsPage;
