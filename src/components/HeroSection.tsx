import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Zap, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Professional home services" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Professional Services
                <span className="block text-accent">On-Demand</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Get instant access to verified professionals for all your home and office needs. 
                From plumbing to painting, we've got you covered 24/7.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-card/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="What service do you need?"
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button variant="hero" size="lg" className="h-12 px-8">
                  Find Services
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center text-primary-foreground">
                <div className="bg-primary-foreground/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">Instant Booking</h3>
                <p className="text-sm opacity-90">Book in seconds</p>
              </div>
              <div className="text-center text-primary-foreground">
                <div className="bg-primary-foreground/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">Verified Pros</h3>
                <p className="text-sm opacity-90">ID verified</p>
              </div>
              <div className="text-center text-primary-foreground">
                <div className="bg-primary-foreground/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm opacity-90">Always available</p>
              </div>
            </div>
          </div>

          {/* Emergency Booking Card */}
          <div className="lg:justify-self-end">
            <div className="bg-card p-8 rounded-2xl shadow-xl max-w-md animate-fade-in">
              <div className="text-center space-y-6">
                <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Emergency Service</h3>
                  <p className="text-muted-foreground">
                    Urgent repairs? Get help within 30 minutes with our emergency service network.
                  </p>
                </div>
                <Button variant="emergency" size="lg" className="w-full">
                  Emergency Booking
                </Button>
                <p className="text-xs text-muted-foreground">
                  Available 24/7 • Average response: 25 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;