import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Find from "./components/Find";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

import ProductModules from "./components/ProductModules";

const ProductPage = () => {
  return (
    <main>
      <Hero />
      <ProductModules />
      <WhyUs />
      <Find />
      <Cta />
      <Faq />
    </main>
  );
};

export default ProductPage;
