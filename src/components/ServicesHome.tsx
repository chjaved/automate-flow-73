import { Globe, Palette, Zap, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "We design and build stunning, conversion-focused websites that load fast, look great on every device, and reflect your brand's true personality.",
  },
  {
    icon: Palette,
    title: "Brand Identity & Digital Presence",
    description: "We craft digital identities that make your business unforgettable from visuals and messaging to online positioning.",
  },
  {
    icon: Zap,
    title: "SEO & Performance Optimization",
    description: "We make sure your website doesn't just exist, but performs, ranking higher, loading faster, and attracting the right audience.",
  },
  {
    icon: Share2,
    title: "Social Media Automation & Marketing",
    description: "We power your social media with smart automation that learns, posts, and adapts so you stay ahead without lifting a finger",
  },
];

const ServicesHome = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How can we help?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your business deserves more than just a website it deserves a digital identity that speaks, sells, and scales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
