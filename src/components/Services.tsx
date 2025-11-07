import { Code, Brain, Zap, BarChart, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Web Applications Development",
    features: [
      "Custom web app development",
      "Progressive web apps (PWA)",
      "E-commerce platforms",
      "Responsive design & UX",
    ],
  },
  {
    icon: Brain,
    title: "AI Automation & Workflow Integration",
    features: [
      "AI-powered chatbots",
      "Document processing automation",
      "Intelligent data extraction",
      "Predictive analytics",
    ],
  },
  {
    icon: Zap,
    title: "API & Third-Party Connectors",
    features: [
      "CRM integrations",
      "Payment gateway setup",
      "Marketing automation",
      "Custom API development",
    ],
  },
  {
    icon: BarChart,
    title: "Analytics & Performance",
    features: [
      "Real-time dashboards",
      "Conversion tracking",
      "Performance optimization",
      "A/B testing setup",
    ],
  },
  {
    icon: MessageSquare,
    title: "Consultation & Strategy",
    features: [
      "Automation audit",
      "Technology roadmap",
      "Process optimization",
      "Training & support",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions to transform your business with web and AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 hover-lift bg-card border-muted group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
