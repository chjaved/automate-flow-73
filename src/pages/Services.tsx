import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Brain, Zap, BarChart, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Applications Development",
    description: "Build powerful, scalable web applications tailored to your business needs. From concept to deployment, we create solutions that work.",
    features: [
      "Custom web app development",
      "Progressive web apps (PWA)",
      "E-commerce platforms",
      "Responsive design & UX",
      "Cross-browser compatibility",
      "Performance optimization",
    ],
    benefits: [
      "Fast loading times",
      "Mobile-first approach",
      "SEO optimized",
      "Secure & reliable",
    ],
  },
  {
    icon: Brain,
    title: "AI Automation & Workflow Integration",
    description: "Harness the power of AI to automate repetitive tasks and optimize your workflows. Let intelligent systems handle the mundane while you focus on growth.",
    features: [
      "AI-powered chatbots",
      "Document processing automation",
      "Intelligent data extraction",
      "Predictive analytics",
      "Natural language processing",
      "Machine learning models",
    ],
    benefits: [
      "70% reduction in manual tasks",
      "24/7 automated operations",
      "Improved accuracy",
      "Cost savings",
    ],
  },
  {
    icon: Zap,
    title: "API & Third-Party Connectors",
    description: "Seamlessly integrate your existing tools and platforms. We connect your systems to work together in perfect harmony.",
    features: [
      "CRM integrations (Salesforce, HubSpot)",
      "Payment gateway setup (Stripe, PayPal)",
      "Marketing automation (Mailchimp, ActiveCampaign)",
      "Custom API development",
      "Webhook implementations",
      "Data synchronization",
    ],
    benefits: [
      "Unified data flow",
      "Reduced manual entry",
      "Real-time sync",
      "Enhanced productivity",
    ],
  },
  {
    icon: BarChart,
    title: "Analytics & Performance Dashboards",
    description: "Make data-driven decisions with custom dashboards that provide actionable insights at a glance.",
    features: [
      "Real-time dashboards",
      "Conversion tracking",
      "Performance optimization",
      "A/B testing setup",
      "Custom reporting",
      "Data visualization",
    ],
    benefits: [
      "Clear visibility",
      "Informed decisions",
      "ROI tracking",
      "Performance insights",
    ],
  },
  {
    icon: MessageSquare,
    title: "Consultation & Strategy Workshops",
    description: "Get expert guidance on your automation journey. We help you identify opportunities and create a roadmap for success.",
    features: [
      "Free automation audit",
      "Technology roadmap",
      "Process optimization",
      "Training & support",
      "Best practices guidance",
      "Implementation planning",
    ],
    benefits: [
      "Clear action plan",
      "Expert guidance",
      "Risk mitigation",
      "Faster implementation",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              End-to-end solutions to transform your business with web and AI automation. 
              We handle the technical complexity so you can focus on what matters most.
            </p>
            <Button size="lg" className="hover-scale">
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-20">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-8 md:p-12 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-3">Key Benefits:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="text-primary flex-shrink-0" size={20} />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button size="lg" className="hover-scale">
                      Learn More
                      <ArrowRight className="ml-2" />
                    </Button>
                  </div>

                  {/* Right Column - Features */}
                  <div>
                    <h3 className="font-semibold text-xl mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="text-primary" size={16} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule a free consultation to discuss your automation needs and get a custom solution proposal.
          </p>
          <Button size="lg" variant="secondary" className="hover-scale">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
