import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DocentesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const docentes = [
    {
      nombre: "Dr. Carlos Martínez",
      especialidad: "AWS Solutions Architect",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "https://www.linkedin.com/",
      experiencia: "+15 años en Cloud Computing",
    },
    {
      nombre: "Ing. María González",
      especialidad: "Cybersecurity Expert",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      linkedin: "https://www.linkedin.com/",
      experiencia: "+12 años en Seguridad Informática",
    },
    {
      nombre: "Ing. Roberto Silva",
      especialidad: "AI & Machine Learning",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "https://www.linkedin.com/",
      experiencia: "+10 años en Inteligencia Artificial",
    },
    {
      nombre: "Dra. Ana Patricia López",
      especialidad: "Data Science & Analytics",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      linkedin: "https://www.linkedin.com/",
      experiencia: "+8 años en Ciencia de Datos",
    },
  ];

  return (
    <section id="teachers" className="relative py-20">
      <div className="absolute lg:inset-0 z-0">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 mb-4">
            Nuestro Equipo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conoce a nuestros{" "}
            <span className="gradient-text">docentes expertos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionales certificados con amplia experiencia en la industria
            tech
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {docentes.map((docente, index) => (
            <Card
              key={index}
              className={`overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover-lift hover-glow group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={docente.foto}
                  alt={docente.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{docente.nombre}</h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {docente.especialidad}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {docente.experiencia}
                </p>

                {/* LinkedIn Button */}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full group/btn"
                >
                  <a
                    href={docente.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
                    Ver Perfil
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocentesSection;