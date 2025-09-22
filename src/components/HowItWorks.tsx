import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, CheckCircle, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Search & Select",
    description: "Browse services or describe your needs. Our AI will recommend the best professionals for your job.",
    color: "bg-primary",
  },
  {
    icon: Calendar,
    title: "2. Book & Schedule",
    description: "Choose your preferred time slot. Book instantly or schedule for later with flexible timing options.",
    color: "bg-accent",
  },
  {
    icon: MessageSquare,
    title: "3. Track Progress",
    description: "Get real-time updates as your service progresses. Chat with your professional anytime during the job.",
    color: "bg-secondary",
  },
  {
    icon: CheckCircle,
    title: "4. Rate & Review",
    description: "Share before/after photos and rate your experience. Earn reward points for future bookings.",
    color: "bg-primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How FixItNow Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting professional help has never been easier. Our streamlined process gets you connected with verified experts in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.title} className="relative bg-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Features Highlight */}
        <div className="mt-16 bg-gradient-primary p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Powered by AI Intelligence
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-primary-foreground">
            <div>
              <h4 className="font-semibold mb-2">Smart Cost Estimation</h4>
              <p className="text-sm opacity-90">Get accurate pricing before booking with our AI-powered cost calculator</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Intelligent Matching</h4>
              <p className="text-sm opacity-90">Our AI finds the perfect professional based on your specific needs and location</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">24/7 Chatbot Support</h4>
              <p className="text-sm opacity-90">Get instant answers and book services through our intelligent chat assistant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;