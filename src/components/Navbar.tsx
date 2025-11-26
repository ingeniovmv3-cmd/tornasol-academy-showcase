import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 md:top-4 left-0 right-0 z-[9999] lg:px-16">
      <div
        className="
        mx-auto px-4 
        bg-background/80 backdrop-blur-lg 
        rounded-none border-0 border-b border-border shadow-none 
        md:rounded-full md:border md:shadow-lg md:border-b-1
      "
      >
        <div className="flex items-center justify-between h-20 px-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-14 lg:w-22 h-10 rounded-xl flex items-center justify-center">
              <img
                src="/INGENIO360academiaPOSITIVOsinfondo.png"
                alt="Logo Ingenio 360"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("overview")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("pasos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Pasos
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
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Preguntas
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Comunidad
            </button>
            <button
              onClick={() => scrollToSection("teachers")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Docentes
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden xl:block">
            <Button
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 transition-all rounded-full"
            >
              <a
                href="https://www.academia-i360.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar Sesión
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="xl:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden py-4 animate-fade-in px-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("overview")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("pasos")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Pasos
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
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Preguntas
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Comunidad
              </button>
              <button
                onClick={() => scrollToSection("teachers")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Docentes
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>

              <Button
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 transition-all w-full rounded-full"
              >
                <a
                  href="https://www.academia-i360.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Iniciar Sesión
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
