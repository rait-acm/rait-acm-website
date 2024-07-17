import Hero from "@/components/Hero/index";
// import Brands from "@/components/Brands/index";
import Feature from "@/components/Features/index";
import About from "@/components/About/index";
import FunFact from "@/components/FunFact/index";
import CTA from "@/components/CTA/index";
import FAQ from "@/components/FAQ/index";
import Contact from "@/components/Contact/index";
import Blog from "@/components/Blog/index";
import Testimonial from "@/components/Testimonial/index";
import HomeEvents from "@/components/EventsParallax/HomeEvents";

function Home() {
  return (
    <>
      <Hero />
      {/* <Brands /> */}
      <About />
      <Feature />
      <HomeEvents />
      {/* <FeaturesTab /> */}
      <FunFact />
      {/* <Integration /> */}
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </>
  );
}

export default Home;
