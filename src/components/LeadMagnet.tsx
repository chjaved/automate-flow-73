import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      toast.success("Success! Check your email for the free audit.");
      setEmail("");
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-accent text-white p-12 md:p-16 animate-fade-in">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Download size={20} />
              <span className="font-medium">Free Resource</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get Your Free 15-Point Automation Audit
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover exactly where automation can save you time and money. No cost, no obligation.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-foreground h-12 text-lg flex-1"
                />
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8 hover-scale"
                >
                  Get Free Audit
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 bg-white/20 rounded-lg p-4 max-w-xl mx-auto">
                <CheckCircle size={24} />
                <span className="font-medium">Thanks! Check your email for the audit.</span>
              </div>
            )}

            <p className="text-sm text-white/70 mt-4">
              🔒 Your privacy matters. We never share your information.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LeadMagnet;
