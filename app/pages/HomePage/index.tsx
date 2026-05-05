import Brands from "./components/Brands";
import Features from "./components/Features";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Transform from "./components/Transform";

type Props = {};

const Home = (props: Props) => {
  return (
    <header className="w-full h-full min-h-screen bg-background">
      <Navbar />
      <Header />
      <Brands />
      <Transform />
      <Features />
    </header>
  );
};

export default Home;
