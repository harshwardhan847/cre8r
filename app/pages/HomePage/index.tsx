import Brands from "./components/Brands";
import EmailCard from "./components/EmailCard";
import Features from "./components/Features";
import Header from "./components/Header";
import CaseStudiesPreview from "./components/CaseStudiesPreview";
import Transform from "./components/Transform";
import VideoCarousel from "./components/VideoCarousel";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <header className="w-full h-full min-h-screen bg-background">
        <Header />
      </header>
      <Brands />
      <Transform />
      <VideoCarousel />
      <Features />
      <CaseStudiesPreview />
      <EmailCard />
    </>
  );
};

export default Home;
