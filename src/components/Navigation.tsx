import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">CropGuard AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('analyzer')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Analyze
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </button>
            <Button size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('analyzer')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Analyze
              </button>
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Dashboard
              </button>
              <Button size="sm" className="w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;