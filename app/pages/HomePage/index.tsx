import Brands from "./components/Brands";
import EmailCard from "./components/EmailCard";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";
import BlurEffect from "react-progressive-blur";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="fixed z-50 bg-red-400 top-0 left-0 w-screen h-auto">
        <BlurEffect position="top" intensity={100} className="h-20" />
      </div>
      <header className="w-full h-full min-h-screen bg-background">
        <Navbar />
        <Header />
      </header>
      <Brands />
      <Transform />
      <Features />
      <Testimonials />
      <EmailCard />
      <Footer />
    </>
  );
};

export default Home;
