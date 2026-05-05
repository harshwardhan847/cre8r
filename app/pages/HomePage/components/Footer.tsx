import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import EmailInput from "./EmailInput";

const articles = [
  {
    id: 1,
    title: "How to Boost Your Sales with AI-Powered Tools",
    summary:
      "Discover the top AI tools that can help you increase your sales and grow your business.",
    Image: "https://example.com/article1.jpg",
  },
  {
    id: 2,
    title: "The Future of Sales: AI Trends to Watch in 2024",
    summary:
      "Stay ahead of the curve with these emerging AI trends that are shaping the future of sales.",
    Image: "https://example.com/article2.jpg",
  },
  {
    id: 3,
    title: "Case Study: How Company X Increased Sales by 50% with AI",
    summary:
      "Learn how Company X leveraged AI technology to achieve a significant boost in their sales performance.",
    Image: "https://example.com/article3.jpg",
  },
  {
    id: 4,
    title: "Case Study: How Company Y Increased Sales by 60% with AI",
    summary:
      "Learn how Company Y leveraged AI technology to achieve a significant boost in their sales performance.",
    Image: "https://example.com/article4.jpg",
  },
];
const Footer = () => {
  return (
    <>
      <div className=" bg-primary text-primary-foreground ">
        <div className=" flex flex-col items-center justify-center container mx-auto px-8 py-16">
          <div className="w-full items-center justify-between flex">
            <h2 className="text-lg font-light text-primary-foreground/70">
              Level up your sales game
            </h2>
            <Button variant={"outline"} size={"lg"} className="text-foreground">
              View all articles
            </Button>
          </div>
          <div className="grid grid-cols-4 items-start justify-center gap-4 mt-4">
            {articles?.map((article) => (
              <div key={article.id}>
                <div className="aspect-video mb-2 w-full text-center flex items-center justify-center text-muted-foreground rounded-md shadow bg-neutral-900" />
                <h3 className="text-sm font-light tracking-wide text-primary-foreground/50">
                  {article.title}
                </h3>
                {/* <p>{article.summary}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-40 pt-20 flex flex-col bg-primary items-center justify-center gap-4">
        <h2 className="text-5xl uppercase text-center text-primary-foreground font-bold">
          Unlock your AI
          <br /> sales{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-br from-pink-500 via-background to-blue-500">
            superpowers
          </span>
        </h2>
        <EmailInput dark />
      </div>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
          <a href="#">
            <div className="flex items-center gap-3">
              <img
                src="./logo.png"
                alt="Cre8r.ai Logo"
                className="h-12 w-auto mix-blend-"
              />
            </div>
          </a>

          <div className="flex items-center gap-5 whitespace-nowrap">
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              About
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Features
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Works
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Career
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#">
              <div>F</div>
            </a>
            <a href="#">
              <div className="size-5">L</div>
            </a>
            <a href="#">
              <div className="size-5">T</div>
            </a>
            <a href="#">
              <div className="size-5">Y</div>
            </a>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10" />

        <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6 items-center text-muted-foreground">
          <p className="text-center font-medium text-balance">
            {`©${new Date().getFullYear()}`}{" "}
            <a href="#" className="hover:underline">
              Cre8r.ai
            </a>
            , Made with ❤️ for Creators.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
