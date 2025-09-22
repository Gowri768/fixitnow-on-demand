import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Paintbrush, 
  Zap, 
  Droplets, 
  Sparkles, 
  Hammer, 
  Car, 
  Leaf,
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
    isEco: true,
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, outlets, lighting, panel upgrades",
    price: "From $60",
    rating: 4.8,
    bookings: "8k+",
    isEco: false,
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior & exterior, touch-ups, color consultation",
    price: "From $120",
    rating: 4.9,
    bookings: "15k+",
    isEco: true,
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description: "Deep cleaning, regular maintenance, move-in/out",
    price: "From $80",
    rating: 4.7,
    bookings: "25k+",
    isEco: true,
  },
  {
    icon: Hammer,
    title: "Handyman",
    description: "Furniture assembly, mounting, small repairs",
    price: "From $35",
    rating: 4.6,
    bookings: "18k+",
    isEco: false,
  },
  {
    icon: Car,
    title: "Moving",
    description: "Local & long distance, packing services",
    price: "From $200",
    rating: 4.8,
    bookings: "5k+",
    isEco: false,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of professional services, all backed by our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      {service.isEco && (
                        <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                          <Leaf className="h-3 w-3 mr-1" />
                          Eco
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary">
                      {service.price}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {service.rating}
                      </div>
                      <span>•</span>
                      <span>{service.bookings} bookings</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg">
            View All Services
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;