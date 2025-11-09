import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-bold text-xl">Spectrum</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Enhance your digital presence with mobile-optimized websites that work nonstop to grow your brand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/" className="hover:text-background transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-background transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-background transition-colors">Our Work</Link></li>
              <li><button onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }} className="hover:text-background transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-background/70 text-sm mb-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            Copyright {currentYear} © Spectrum - All Right Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
