import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-light text-foreground leading-tight tracking-tight">
              Professional Services
              <span className="block font-medium text-accent">On-Demand</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect with verified professionals for all your home and office needs. 
              Simple, fast, reliable.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto">
            <div className="bg-card border border-border rounded-xl p-2 shadow-sm">
              <div className="flex items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="What service do you need?"
                    className="pl-11 h-12 border-0 text-base bg-transparent focus-visible:ring-0"
                  />
                </div>
                <Button variant="default" size="sm" className="shrink-0 h-10">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground text-sm">Instant Booking</h3>
              <p className="text-xs text-muted-foreground mt-1">Book in seconds</p>
            </div>
            <div className="text-center">
              <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground text-sm">Verified Pros</h3>
              <p className="text-xs text-muted-foreground mt-1">ID verified</p>
            </div>
            <div className="text-center">
              <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground text-sm">24/7 Support</h3>
              <p className="text-xs text-muted-foreground mt-1">Always available</p>
            </div>
          </div>

          {/* Emergency Section */}
          <div className="pt-12">
            <div className="bg-card border border-border rounded-xl p-6 max-w-sm mx-auto">
              <div className="text-center space-y-4">
                <div className="bg-destructive/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Emergency Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Urgent repairs? Get help within 30 minutes.
                  </p>
                </div>
                <Button variant="destructive" size="sm" className="w-full">
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