import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PasosSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const pasos = [
    {
      numero: "Paso 1",
      titulo: "Registro en la Plataforma",
      descripcion: "Crea tu cuenta y completa tu perfil",
    },
    {
      numero: "Paso 2",
      titulo: "Acceso al Dashboard",
      descripcion: "Explora tu panel de control personal",
    },
    {
      numero: "Paso 3",
      titulo: "Selección de Curso",
      descripcion: "Elige el curso que deseas comenzar",
    },
    {
      numero: "Paso 4",
      titulo: "Inicio de Clases",
      descripcion: "Comienza tu aprendizaje inmediatamente",
    },
  ];

  return (
    <section id="pasos" className="relative py-20">
      <div className="absolute lg:inset-0 z-0">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 mb-4">
            Guía de Acceso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pasos a seguir para{" "}
            <span className="gradient-text">ingresar a la plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sigue estos sencillos pasos para comenzar tu experiencia de
            aprendizaje
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {pasos.map((paso, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover-lift hover-glow group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-muted/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <PlayCircle className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                  {paso.numero}
                </div>
                <h3 className="text-xl font-bold mb-2">{paso.titulo}</h3>
                <p className="text-muted-foreground text-sm">
                  {paso.descripcion}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PasosSection;