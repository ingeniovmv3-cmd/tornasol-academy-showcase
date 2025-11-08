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
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4 bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg">
        <div className="flex items-center justify-between h-20 px-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-44 h-10 rounded-xl  flex items-center justify-center">
              <img src="/Logo3.png" alt="" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("overview")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("courses")}
              className="bg-foreground text-background hover:bg-foreground/90 transition-all rounded-full"
            >
              Ver cursos
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in px-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("overview")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              M{" "}
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Benefits J{" "}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("courses")}
                className="bg-foreground text-background hover:bg-foreground/90 transition-all w-full rounded-full"
              >
                Explorar cursos
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
