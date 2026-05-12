import FounderMessage from "./components/FounderMessage";
import Founders from "./components/Founders";
import Hero from "./components/Hero";
import ScrollingTextAnimationSection from "./components/ScrollingTextAnimationSection";
import Team from "./components/Team";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Hero />
      <Founders />
      <Team />
      <ScrollingTextAnimationSection />
      <FounderMessage />
    </>
  );
};

export default About;
