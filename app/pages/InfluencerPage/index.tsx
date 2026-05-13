import Hero from "../InfluencerPage/components/Hero";
import Positives from "../InfluencerPage/components/Positives";
import Features from "./components/Features";
import CreatorFAQ from "./components/CreatorFAQ";

type Props = {};

const Influencer = (props: Props) => {
  return (
    <>
      <Hero />
      <Positives />
      <Features />
      <CreatorFAQ />
    </>
  );
};

export default Influencer;
