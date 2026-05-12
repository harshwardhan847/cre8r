import Brands from "./components/Brands";
import EmailCard from "./components/EmailCard";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <header className="w-full h-full min-h-screen bg-background">
        <Header />
      </header>
      <Brands />
      <Transform />
      <Features />
      <Testimonials />
      <EmailCard />
    </>
  );
};

export default Home;
