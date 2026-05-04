import Brands from "./components/Brands";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

type Props = {};

const Home = (props: Props) => {
  return (
    <header className="w-full h-full min-h-screen bg-background">
      <Navbar />
      <Header />
      <Brands />
    </header>
  );
};

export default Home;
