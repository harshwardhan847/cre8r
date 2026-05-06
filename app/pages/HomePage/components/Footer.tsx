import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import EmailInput from "./EmailInput";

const articles = [
  {
    id: 1,
    title: "How to find the right micro-influencer for your brand",
    summary:
      "Discover the key metrics and strategies to identify micro-influencers who align with your brand values.",
    Image: "https://example.com/article1.jpg",
  },
  {
    id: 2,
    title: "Measuring ROI in influencer campaigns",
    summary:
      "Learn how to track and measure the return on investment from your influencer marketing campaigns.",
    Image: "https://example.com/article2.jpg",
  },
  {
    id: 3,
    title: "The rise of nano-influencers in India",
    summary:
      "Explore why nano-influencers are becoming the most cost-effective channel for D2C brands in India.",
    Image: "https://example.com/article3.jpg",
  },
  {
    id: 4,
    title: "Building long-term creator partnerships",
    summary:
      "Strategies for fostering authentic, lasting relationships with content creators for sustainable growth.",
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
              Insights &amp; Resources
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
          Intelligent influencer
          <br /> matchmaking{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-br from-pink-500 via-background to-blue-500">
            powered by AI
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
              Home
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              About Us
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Product
            </a>
            <a
              href="#"
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              Contact Us
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
            @2025_Cre8r.ai, All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
