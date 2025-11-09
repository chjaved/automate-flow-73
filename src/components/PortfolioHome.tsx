import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Mobile app marketing",
    description: "We turn bold ideas into powerful digital solutions that connect, engage...",
    image: "/placeholder.svg",
  },
  {
    title: "Dashboard management",
    description: "We help you execute your plan and deliver results.",
    image: "/placeholder.svg",
  },
  {
    title: "Fitness app promotion",
    description: "We help you create a marketing strategy that drives results.",
    image: "/placeholder.svg",
  },
];

const PortfolioHome = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our latest work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how we transform ideas into beautiful, high-performing websites that drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift overflow-hidden group border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                  View Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;
