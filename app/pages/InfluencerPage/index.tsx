import Hero from "../InfluencerPage/components/Hero";
import Positives from "../InfluencerPage/components/Positives";
import Features from "./components/Features";
import CreatorFAQ from "./components/CreatorFAQ";
import PlatformDemo from "./components/PlatformDemo";

type Props = {};

const Influencer = (props: Props) => {
  return (
    <>
      <Hero />
      <PlatformDemo />
      <Positives />
      <Features />
      <CreatorFAQ />
    </>
  );
};

export default Influencer;
