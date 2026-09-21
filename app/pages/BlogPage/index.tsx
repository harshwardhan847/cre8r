import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";

const BlogPage = () => {
  const [featured, ...rest] = CONSTANTS.BLOGS;

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-7xl px-4 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Insights on influencer marketing
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Playbooks, trends, and hard numbers from the teams running creator
            campaigns in India — written by the Cre8r team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href={CONSTANTS.MEDIUM_URL} target="_blank" rel="noreferrer">
                Follow us on Medium
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={CONSTANTS.CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured post */}
      <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <a
          href={featured.blog_link}
          target="_blank"
          rel="noreferrer"
          className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border/40 bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl md:grid-cols-2"
        >
          <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 md:aspect-auto md:h-full">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 md:p-10 lg:p-14">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
              <span className="rounded-full bg-primary/5 px-2.5 py-1 text-primary/70">
                Latest
              </span>
              <span>{featured.date}</span>
            </div>
            <h2 className="text-2xl font-semibold leading-snug transition-colors group-hover:text-primary md:text-3xl lg:text-4xl">
              {featured.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {featured.description}
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
              Read Article <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </a>
      </section>

      {/* All posts */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-20">
        <h2 className="text-xl font-normal tracking-tight text-foreground/50 md:text-2xl">
          All articles
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {rest.map((blog) => (
            <a
              key={blog.id}
              href={blog.blog_link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 md:p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
                  <span>{blog.date}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{blog.author}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug transition-colors line-clamp-3 group-hover:text-primary md:text-xl">
                  {blog.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {blog.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                  Read Article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
