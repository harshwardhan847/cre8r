import Comparison from "./components/Comparison";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Find from "./components/Find";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";

import ProductModules from "./components/ProductModules";

const ProductPage = () => {
  return (
    <main>
      <Hero />
      <ProductModules />
      <Comparison />
      <WhyUs />
      <Find />
      <Cta />
      <Pricing />
      <Faq />
    </main>
  );
};

export default ProductPage;
