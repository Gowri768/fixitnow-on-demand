import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Paintbrush, 
  Zap, 
  Sparkles, 
  Hammer, 
  Car,
  ArrowRight,
  Star
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Leak repairs, pipe installation, drain cleaning",
    price: "From $45",
    rating: 4.9,
    bookings: "12k+",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, outlets, lighting, panel upgrades",
    price: "From $60",
    rating: 4.8,
    bookings: "8k+",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior & exterior, touch-ups, color consultation",
    price: "From $120",
    rating: 4.9,
    bookings: "15k+",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description: "Deep cleaning, regular maintenance, move-in/out",
    price: "From $80",
    rating: 4.7,
    bookings: "25k+",
  },
  {
    icon: Hammer,
    title: "Handyman",
    description: "Furniture assembly, mounting, small repairs",
    price: "From $35",
    rating: 4.6,
    bookings: "18k+",
  },
  {
    icon: Car,
    title: "Moving",
    description: "Local & long distance, packing services",
    price: "From $200",
    rating: 4.8,
    bookings: "5k+",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Popular Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of professional services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-sm transition-all duration-200 bg-card border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-muted p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-foreground">
                      {service.price}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {service.rating}
                      </div>
                      <span>•</span>
                      <span>{service.bookings}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Book Now
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="default">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;