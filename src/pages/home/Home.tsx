import Hero from "@/components/Hero/index";
import Brands from "@/components/Brands/index";
import Feature from "@/components/Features/index";
import About from "@/components/About/index";
import FeaturesTab from "@/components/FeaturesTab/index";
import FunFact from "@/components/FunFact/index";
import Integration from "@/components/Integration/index";
import CTA from "@/components/CTA/index";
import FAQ from "@/components/FAQ/index";
import Pricing from "@/components/Pricing/index";
import Contact from "@/components/Contact/index";
import Blog from "@/components/Blog/index";
import Testimonial from "@/components/Testimonial/index";

function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </>
  );
}

export default Home;
