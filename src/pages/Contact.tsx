import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to automate your business? Let's discuss how we can help you save time, 
              reduce costs, and scale effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange as any}
                    className="mt-2 w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Applications Development</option>
                    <option value="ai-automation">AI Automation & Workflow Integration</option>
                    <option value="api-integration">API & Third-Party Connectors</option>
                    <option value="analytics">Analytics & Performance Dashboards</option>
                    <option value="consultation">Consultation & Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your automation needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover-scale group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. We'll respond within 24 hours.
                </p>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? We're here to help. Reach out through any of these channels 
                  and our team will get back to you promptly.
                </p>
              </div>

              <Card className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-1">hello@nextgenautomations.com</p>
                    <p className="text-muted-foreground mb-1">support@nextgenautomations.com</p>
                    <p className="text-sm text-muted-foreground mt-2">We reply within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground mb-1">+1 (555) 765-4321</p>
                    <p className="text-sm text-muted-foreground mt-2">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-1">123 Automation Street</p>
                    <p className="text-muted-foreground mb-1">San Francisco, CA 94105</p>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-muted-foreground mb-1">Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white">
                <h3 className="font-semibold text-xl mb-4">Book a Free Strategy Call</h3>
                <p className="mb-6">
                  Schedule a free 30-minute consultation to discuss your automation goals and 
                  get expert recommendations.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full hover-scale"
                >
                  Schedule Your Call
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map Integration (Google Maps / Mapbox)</p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
