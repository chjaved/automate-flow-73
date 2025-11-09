import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
          Reach out to us
        </h2>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          Let's create a website and digital presense that moves your business forward.
        </p>
        <Button 
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6"
          onClick={() => scrollToSection("contact")}
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
