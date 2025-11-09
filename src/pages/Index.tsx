import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesHome from "@/components/ServicesHome";
import PortfolioHome from "@/components/PortfolioHome";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesHome />
      <PortfolioHome />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
