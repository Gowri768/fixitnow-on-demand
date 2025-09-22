import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <div className="w-5 h-5 bg-primary-foreground rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">FixItNow</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional on-demand services for your home and office. 
              Trusted by thousands nationwide.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-smooth">Plumbing</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Electrical</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Painting</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Cleaning</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Handyman</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Emergency</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">How It Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Become a Pro</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Help</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-FIX-NOW</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@fixitnow.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2 text-sm">Stay Updated</h5>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1 h-9 text-sm" />
                <Button variant="default" size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 FixItNow. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
            <a href="#" className="hover:text-foreground transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;