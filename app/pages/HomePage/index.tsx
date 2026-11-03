import { featureFlags } from "../../featureFlags";
import type { BlogCard } from "~/lib/blog";
import Brands from "./components/Brands";
import EmailCard from "./components/EmailCard";
import Features from "./components/Features";
import Header from "./components/Header";
import Scale from "./components/Scale";
import CaseStudiesPreview from "./components/CaseStudiesPreview";
import BlogsPreview from "./components/BlogsPreview";
import Transform from "./components/Transform";
import VideoCarousel from "./components/VideoCarousel";

type Props = {
  latestPosts: BlogCard[];
};

const Home = ({ latestPosts }: Props) => {
  return (
    <>
      <header className="w-full h-full min-h-screen bg-background">
        <Header />
      </header>
      <Brands />
      <Transform />
      {/* <VideoCarousel /> */}
      <Features />
      {featureFlags.enableCaseStudies && <CaseStudiesPreview />}
      <Scale />
      <BlogsPreview posts={latestPosts} />
      {/* <EmailCard /> */}
    </>
  );
};

export default Home;
