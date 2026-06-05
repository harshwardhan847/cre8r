import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const CreatorPage = () => {
    return (
        <main className="mx-auto max-w-5xl px-6 pb-24 pt-36 min-h-[80vh]">
            <section className="rounded-3xl border border-border/20 bg-card p-8 md:p-12 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    For Creators
                </p>
                <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
                    Monetize Your Influence
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
                    Join a network of 4.1M+ creators. Get discovered by top brands, manage your campaigns easily, and unlock exclusive barter and paid collaborations. Fill out our YouTube creator's form to get started.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <a
                            href={CONSTANTS.CREATOR_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply as a Creator
                        </a>
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default CreatorPage;
