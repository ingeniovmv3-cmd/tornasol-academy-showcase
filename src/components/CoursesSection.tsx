import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Shield,
  Brain,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// --- FIX: Objeto de mapeo para los colores del curso ---
// Resuelve el problema de clases dinámicas de Tailwind
const courseColorMap = {
  primary: {
    gradient: "from-primary/20 to-primary-glow/20",
    bg: "bg-primary",
    text: "text-primary",
    textForeground: "text-primary-foreground",
    hoverBg: "hover:bg-primary/90",
  },
  accent: {
    gradient: "from-accent/20 to-cyan-400/20",
    bg: "bg-accent",
    text: "text-accent",
    textForeground: "text-accent-foreground",
    hoverBg: "hover:bg-accent/90",
  },
  secondary: {
    gradient: "from-secondary/20 to-purple-400/20",
    bg: "bg-secondary",
    text: "text-secondary",
    textForeground: "text-secondary-foreground",
    hoverBg: "hover:bg-secondary/90",
  },
};

const CoursesSection = () => {
  const { ref: coursesRef, isVisible: coursesVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const courses = [
    {
      icon: Cloud,
      title: "AWS Cloud Developer",
      duration: "6 meses",
      modality: "Virtual",
      certification: "Internacional",
      description:
        "Domina Amazon Web Services y conviértete en un desarrollador cloud certificado. Aprende a diseñar, desarrollar y desplegar aplicaciones escalables en la nube.",
      highlights: [
        "Arquitectura cloud moderna",
        "Servicios AWS core (EC2, S3, Lambda)",
        "DevOps y CI/CD",
        "Preparación certificación AWS",
      ],
      color: "primary", // Key para el colorMap
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      duration: "4 meses",
      modality: "Clases en vivo",
      certification: "Profesional",
      description:
        "Protege sistemas y redes con un enfoque 100% práctico. Aprende técnicas de pentesting, análisis de vulnerabilidades y defensa contra ciberataques.",
      highlights: [
        "Identificar vulnerabilidades",
        "Pentesting y simulación de ataques",
        "Proteger redes y sistemas",
        "Responder ante ciberataques",
      ],
      color: "accent",
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      duration: "5 meses",
      modality: "A tu ritmo",
      certification: "Avanzado",
      description:
        "Domina Machine Learning, Deep Learning y NLP. Construye modelos de IA que resuelvan problemas reales y transformen industrias.",
      highlights: [
        "Machine Learning algorithms",
        "Deep Learning y Neural Networks",
        "Procesamiento de lenguaje natural",
        "Computer Vision y más",
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header (ya está bien con fade-up) */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 mb-4">
            Nuestros Cursos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificaciones que{" "}
            <span className="gradient-text">impulsan carreras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programas diseñados para llevarte de cero a profesional en las áreas
            tech más demandadas
          </p>
        </div>

        {/* Courses Grid */}
        <div ref={coursesRef} className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => {
            const Icon = course.icon;
            // --- FIX: Usamos el mapa de colores ---
            const colors =
              courseColorMap[course.color] || courseColorMap.primary;

            return (
              <Card
                key={index}
                // --- CAMBIO AQUÍ: de 'animate-zoom-in' a 'animate-fade-up' ---
                className={`overflow-hidden hover-lift hover-glow bg-card border-border/50 ${
                  coursesVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Header with Gradient */}
                {/* --- FIX: Usamos 'colors.gradient' --- */}
                <div
                  className={`p-8 bg-gradient-to-br ${colors.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 animate-shimmer"></div>
                  {/* --- CAMBIO: Quitado 'animate-pulse-glow'. FIX: Usado 'colors.bg' --- */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 hover-bounce relative z-10`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>

                  {/* Course Meta (sin cambios) */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </Badge>
                    <Badge className="bg-foreground">{course.modality}</Badge>
                    <Badge className="bg-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      {course.certification}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {/* --- FIX: Usamos 'colors.text' --- */}
                        <CheckCircle2
                          className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    // --- CAMBIO: Añadido 'group' para el hover de la flecha ---
                    // --- CAMBIO: Quitado 'animate-pulse-glow' ---
                    // --- FIX: Usado 'colors.bg', 'colors.textForeground' y 'colors.hoverBg' ---
                    className={`w-full group ${colors.bg} ${colors.textForeground} ${colors.hoverBg} hover:shadow-glow hover-lift`}
                  >
                    Más Información
                    {/* --- CAMBIO: Quitado 'animate-pulse'. Añadido 'group-hover' para interacción --- */}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "100%", label: "Práctico" },
            { number: "24/7", label: "Soporte" },
            { number: "+500", label: "Graduados" },
          ].map((stat, index) => (
            <Card
              key={index}
              // --- CAMBIO AQUÍ: de 'animate-bounce-in' a 'animate-fade-up' ---
              className={`p-8 text-center bg-card hover-lift hover-glow ${
                statsVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-4xl font-bold gradient-text mb-2 hover-rotate">
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
