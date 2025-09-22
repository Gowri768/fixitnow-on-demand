import { Button } from "@/components/ui/button";
import { Bell, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <div className="w-5 h-5 bg-primary-foreground rounded-sm"></div>
            </div>
            <h1 className="text-xl font-semibold text-foreground">FixItNow</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth text-sm">
              Services
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth text-sm">
              How It Works
            </a>
            <a href="#emergency" className="text-muted-foreground hover:text-foreground transition-smooth text-sm">
              Emergency
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-accent rounded-full"></span>
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="default" size="sm">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;