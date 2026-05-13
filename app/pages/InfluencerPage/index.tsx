import Hero from "../InfluencerPage/components/Hero";
import Positives from "../InfluencerPage/components/Positives";
import Features from "./components/Features";

type Props = {};

const Influencer = (props: Props) => {
  return (
    <>
      <Hero />
      <Positives />
      <Features />
    </>
  );
};

export default Influencer;
