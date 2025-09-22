import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, CheckCircle, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Select",
    description: "Browse services or describe your needs. Our AI recommends the best professionals.",
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Choose your preferred time slot. Instant booking or flexible scheduling options.",
  },
  {
    icon: MessageSquare,
    title: "Track Progress",
    description: "Get real-time updates and chat with your professional during the service.",
  },
  {
    icon: CheckCircle,
    title: "Rate & Review",
    description: "Share photos and rate your experience. Earn points for future bookings.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting professional help has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.title} className="relative bg-card border border-border hover:shadow-sm transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <div className="bg-muted w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border"></div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Features */}
        <div className="bg-muted/50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-light text-foreground mb-6">
            Powered by AI Intelligence
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-medium text-foreground mb-2">Smart Cost Estimation</h4>
              <p className="text-sm text-muted-foreground">Get accurate pricing before booking</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Intelligent Matching</h4>
              <p className="text-sm text-muted-foreground">Perfect professional for your needs</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">24/7 Chatbot Support</h4>
              <p className="text-sm text-muted-foreground">Instant answers and bookings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;