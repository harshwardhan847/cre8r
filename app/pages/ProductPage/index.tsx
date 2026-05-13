import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Find from "./components/Find";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

const ProductPage = () => {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Find />
      <Cta />
      <Faq />
    </main>
  );
};

export default ProductPage;
