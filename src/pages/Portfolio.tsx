import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Automation Suite",
    client: "RetailCo",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    challenge: "Manual order processing taking 5+ hours daily, leading to delays and customer complaints. High error rates in inventory management.",
    solution: "Implemented automated order processing system with real-time inventory sync, automated customer notifications, and intelligent routing.",
    results: [
      { metric: "85%", label: "Time Saved" },
      { metric: "20hrs/week", label: "Manual Work Eliminated" },
      { metric: "99.9%", label: "Accuracy Rate" },
      { metric: "$50K", label: "Annual Savings" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "SendGrid"],
    testimonial: "The automation has transformed our operations. We're processing 10x more orders with the same team.",
  },
  {
    title: "AI Customer Support System",
    client: "TechStart SaaS",
    industry: "SaaS",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    challenge: "High support ticket volume overwhelming team. 24-hour response times leading to customer churn. Support costs escalating.",
    solution: "Deployed AI-powered chatbot with natural language processing, automated ticket classification, and intelligent routing to human agents.",
    results: [
      { metric: "70%", label: "Tickets Automated" },
      { metric: "<2min", label: "Response Time" },
      { metric: "92%", label: "Customer Satisfaction" },
      { metric: "45%", label: "Support Cost Reduction" },
    ],
    technologies: ["OpenAI GPT", "Python", "React", "WebSocket", "PostgreSQL"],
    testimonial: "Our customers love the instant responses, and our team can focus on complex issues that need human touch.",
  },
  {
    title: "Marketing Automation Platform",
    client: "MarketPro Agency",
    industry: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    challenge: "Inconsistent lead qualification process. Manual follow-ups leading to missed opportunities. No clear ROI tracking.",
    solution: "Built comprehensive marketing automation platform with lead scoring, automated email sequences, and performance analytics dashboard.",
    results: [
      { metric: "45%", label: "Conversion Increase" },
      { metric: "3x", label: "Lead Quality" },
      { metric: "60%", label: "Time Saved" },
      { metric: "250%", label: "ROI Improvement" },
    ],
    technologies: ["React", "Node.js", "HubSpot API", "Mailchimp", "Redis"],
    testimonial: "Lead generation is now on autopilot. We're closing more deals with less manual effort.",
  },
  {
    title: "Supply Chain Analytics Dashboard",
    client: "LogisticFlow",
    industry: "Logistics",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    challenge: "No real-time visibility into supply chain operations. Data scattered across multiple systems. Delayed decision-making.",
    solution: "Created unified analytics dashboard aggregating data from multiple sources with real-time updates and predictive insights.",
    results: [
      { metric: "Real-time", label: "Data Visibility" },
      { metric: "35%", label: "Faster Decisions" },
      { metric: "28%", label: "Cost Reduction" },
      { metric: "98%", label: "Accuracy" },
    ],
    technologies: ["React", "D3.js", "Python", "Apache Kafka", "Tableau"],
    testimonial: "Finally, we have complete visibility into our operations. Decision-making is faster and more confident.",
  },
  {
    title: "HR Recruitment Automation",
    client: "TalentHire",
    industry: "Human Resources",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    challenge: "Screening 500+ resumes per week manually. Inconsistent candidate evaluation. Long hiring cycles.",
    solution: "Implemented AI-powered resume screening, automated candidate scoring, and intelligent interview scheduling system.",
    results: [
      { metric: "90%", label: "Screening Time Saved" },
      { metric: "50%", label: "Faster Hiring" },
      { metric: "85%", label: "Better Matches" },
      { metric: "200+", label: "Hours Saved/Month" },
    ],
    technologies: ["Python", "NLP", "React", "Node.js", "MongoDB"],
    testimonial: "We're hiring faster and finding better candidates. The AI does the heavy lifting so we can focus on culture fit.",
  },
  {
    title: "Financial Reporting Automation",
    client: "FinanceWise",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    challenge: "Monthly reports taking 40+ hours to compile. Multiple data sources requiring manual reconciliation. Error-prone processes.",
    solution: "Automated data collection from multiple sources, built custom reporting engine, and created interactive dashboards.",
    results: [
      { metric: "95%", label: "Time Saved" },
      { metric: "2hrs", label: "Report Generation" },
      { metric: "100%", label: "Accuracy" },
      { metric: "$75K", label: "Annual Savings" },
    ],
    technologies: ["Python", "React", "PostgreSQL", "Excel API", "AWS Lambda"],
    testimonial: "What used to take us 2 days now takes 2 hours. The accuracy is perfect, and we have real-time insights.",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real results from real clients. See how we've helped businesses automate, optimize, and scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">All Industries</Badge>
              <Badge variant="outline" className="px-4 py-2">Retail</Badge>
              <Badge variant="outline" className="px-4 py-2">SaaS</Badge>
              <Badge variant="outline" className="px-4 py-2">Marketing</Badge>
              <Badge variant="outline" className="px-4 py-2">Logistics</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card
                key={study.title}
                className="overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary">{study.industry}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Users size={16} />
                      <span>{study.client}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Clock size={18} className="text-primary" />
                          Challenge
                        </h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp size={18} className="text-primary" />
                          Solution
                        </h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
                      "{study.testimonial}"
                    </blockquote>

                    <Button className="hover-scale group">
                      View Full Case Study
                      <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
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
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button size="lg" variant="secondary" className="hover-scale">
            Get Your Free Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
