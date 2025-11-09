import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="max-w-7xl mx-auto container-padding py-32">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Trusted by 100+ people</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Your Growth Starts With
            <br />
            <span className="text-primary">Our Websites.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Enhance your digital presence with mobile-optimized websites that work nonstop to grow your brand.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("contact")}
            >
              How can we help?
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
