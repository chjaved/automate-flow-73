import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Automation",
    industry: "Retail",
    challenge: "Manual order processing taking 5+ hours daily",
    result: "Reduced processing time by 85%, saving 20 hours/week",
    metrics: "85% time saved",
  },
  {
    title: "AI Customer Support",
    industry: "SaaS",
    challenge: "High support ticket volume overwhelming team",
    result: "AI chatbot handling 70% of inquiries automatically",
    metrics: "70% automation rate",
  },
  {
    title: "Lead Generation System",
    industry: "Marketing Agency",
    challenge: "Inconsistent lead qualification process",
    result: "Automated lead scoring increased conversions by 45%",
    metrics: "45% conversion increase",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Work in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses automate and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card
              key={study.title}
              className="p-8 hover-lift bg-card border-muted group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {study.industry}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Challenge</div>
                  <p className="text-sm">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Solution</div>
                  <p className="text-sm">{study.result}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-muted">
                <div className="text-3xl font-bold gradient-text mb-1">{study.metrics}</div>
                <div className="text-sm text-muted-foreground">Key Result</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="hover-scale group">
            View All Case Studies
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
