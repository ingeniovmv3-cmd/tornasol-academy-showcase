import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">Ingenio 360</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Descripción
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:shadow-glow transition-all"
            >
              Inscríbete Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("overview")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Descripción
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground w-full"
              >
                Inscríbete Ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
