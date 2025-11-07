import { Clock, TrendingUp, Globe, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Save Time with Custom Automation",
    description: "Eliminate repetitive tasks and focus on what matters. Our automations handle the mundane so you can focus on growth.",
  },
  {
    icon: TrendingUp,
    title: "Increase Conversion with Smart AI",
    description: "Leverage AI-powered insights to optimize every touchpoint. Convert more visitors into customers automatically.",
  },
  {
    icon: Globe,
    title: "Seamless Web Solutions",
    description: "Beautiful, fast, and responsive web applications that work flawlessly across all devices and platforms.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing & Fast Delivery",
    description: "No hidden costs, no surprises. Clear pricing and rapid implementation to get you results faster.",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">NextGen Automations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="p-6 hover-lift bg-card/50 backdrop-blur-sm border-muted animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
