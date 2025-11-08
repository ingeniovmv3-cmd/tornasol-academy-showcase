// --- NUEVO: Importa React y useRef ---
import React from "react";
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
  Database,
  AppWindow,
  Briefcase,
  Bot,
  Code,
  CloudCog,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// --- NUEVO: Importaciones del Carrusel ---
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Plugin para autoplay

// (El mapa de colores no se toca)
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
    // ... (Tu array de 9 cursos va aquí, no lo he modificado) ...
    // [AWS, Ciberseguridad, IA, SQL, M365, Odoo, Agentes IA, Python, Azure]
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
      color: "primary",
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
    {
      icon: Database,
      title: "SQL Architect",
      duration: "4 meses",
      modality: "Clases en vivo",
      certification: "Profesional",
      description:
        "Conviértete en un arquitecto de datos. Aprende a diseñar, administrar y optimizar bases de datos SQL para roles de Data Engineer, DBA o SQL Developer.",
      highlights: [
        "Docentes certificados",
        "Clases 100% prácticas",
        "Tutor académico personalizado",
        "Proyectos aplicados para portafolio",
      ],
      color: "primary",
    },
    {
      icon: AppWindow,
      title: "Administración en Microsoft 365",
      duration: "4 meses",
      modality: "100% Práctica",
      certification: "Preparación MS-102",
      description:
        "Domina la suite de M365. Aprende a administrar usuarios, buzones, SharePoint y configurar entornos híbridos con Entra ID (Azure AD).",
      highlights: [
        "Planifica e implementa M365",
        "Administra SharePoint y buzones",
        "Configura entornos híbridos con Entra ID",
        "Preparación examen MS-102",
      ],
      color: "accent",
    },
    {
      icon: Briefcase,
      title: "Capacitación en Odoo ERP",
      duration: "A tu ritmo",
      modality: "Virtual",
      certification: "Funcional",
      description:
        "Implementa y gestiona el ERP Odoo. Aprende a integrar ventas, compras, facturación y más para optimizar la operación de tu negocio.",
      highlights: [
        "Implementación y automatizaciones",
        "Asesoría personalizada",
        "Soporte técnico y desarrollo",
        "Integra ventas, compras y facturación",
      ],
      color: "secondary",
    },
    {
      icon: Bot,
      title: "Agentes de IA",
      duration: "3 meses",
      modality: "Virtual",
      certification: "Profesional",
      description:
        "Diseña la nueva forma de trabajar. Aprende a crear y utilizar agentes de IA autónomos para automatizar tareas y multiplicar tu productividad.",
      highlights: [
        "Automatizar Tareas Repetitivas",
        "Mejorar la Productividad",
        "Análisis Avanzado de Datos",
        "Creación de agentes autónomos",
      ],
      color: "primary",
    },
    {
      icon: Code,
      title: "Python y Java",
      duration: "6 meses",
      modality: "A tu ritmo",
      certification: "Fundamentos",
      description:
        "Impulsa tus ideas con la programación más actual. Aprende los fundamentos y aplicaciones avanzadas de Python y Java, dos de los lenguajes más demandados.",
      highlights: [
        "Fundamentos de Python",
        "Fundamentos de Java",
        "Desarrollo de aplicaciones",
        "Programación Orientada a Objetos",
      ],
      color: "accent",
    },
    {
      icon: CloudCog,
      title: "Azure Cloud",
      duration: "6 meses",
      modality: "Virtual",
      certification: "Internacional",
      description:
        "Lánzate al mundo del desarrollo y la nube con Microsoft Azure. Domina los servicios de Azure para competir con las plataformas más grandes del mundo.",
      highlights: [
        "Arquitectura en Azure",
        "Servicios de cómputo y BBDD",
        "Gestión de recursos",
        "Preparación certificación Azure",
      ],
      color: "secondary",
    },
  ];

  // --- NUEVO: Hook para controlar el plugin de Autoplay ---
  const plugin = React.useRef(
    Autoplay({
      delay: 4000, // 4 segundos por slide
      stopOnInteraction: true, // Para si el usuario interactúa
      stopOnMouseEnter: true, // Esto es el "pause on hover"
    })
  );

  return (
    <section id="courses" className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Header (sin cambios) */}
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

        {/* --- INICIO DE MODIFICACIÓN: Grid a Carrusel --- */}
        {/*
          1. Usamos el componente <Carousel> como contenedor principal.
          2. Le pasamos el plugin de Autoplay.
          3. Añadimos `onMouseEnter` y `onMouseLeave` para pausar y reanudar.
          4. Eliminamos la clase `lg:grid-cols-3`
        */}
        <Carousel
          ref={coursesRef} // Sigue usando tu hook de scroll
          plugins={[plugin.current]}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto" // Controlamos el ancho
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true, // Para que el carrusel sea infinito
          }}
        >
          <CarouselContent>
            {courses.map((course, index) => {
              const Icon = course.icon;
              const colors =
                courseColorMap[course.color] || courseColorMap.primary;

              return (
                // --- NUEVO: <CarouselItem> ---
                // Define cuántos items se ven por slide
                // - 1 en móvil (default)
                // - 2 en md
                // - 3 en lg
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    {" "}
                    {/* Padding para que no se peguen las cards */}
                    <Card
                      className={`h-full hover-lift hover-glow bg-card border-border/50 overflow-hidden flex flex-col ${
                        // --- NUEVO: flex flex-col y h-full
                        coursesVisible ? "animate-fade-up" : "opacity-0"
                      }`}
                      // --- MODIFICADO: Quitamos el delay individual para el carrusel ---
                      // style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Card Header with Gradient */}
                      <div
                        className={`p-8 bg-gradient-to-br ${colors.gradient} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 animate-shimmer"></div>
                        <div
                          className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 hover-bounce relative z-10`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {course.title}
                        </h3>

                        {/* Course Meta (sin cambios) */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          <Badge className="bg-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {course.duration}
                          </Badge>
                          <Badge className="bg-foreground">
                            {course.modality}
                          </Badge>
                          <Badge className="bg-foreground">
                            <Award className="w-3 h-3 mr-1" />
                            {course.certification}
                          </Badge>
                        </div>
                      </div>

                      {/* Card Content */}
                      {/* --- NUEVO: flex-1 para que el botón se alinee al fondo --- */}
                      <div className="p-8 flex flex-col flex-1">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {course.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3 mb-6">
                          {course.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2
                                className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`}
                              />
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* --- NUEVO: mt-auto para empujar el botón al final --- */}
                        <Button
                          onClick={() =>
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                          className={`w-full group ${colors.bg} ${colors.textForeground} ${colors.hoverBg} hover:shadow-glow hover-lift mt-auto`}
                        >
                          Más Información
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* --- NUEVO: Botones de navegación --- */}
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        {/* --- FIN DE MODIFICACIÓN --- */}

        {/* Additional Info (sin cambios) */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "100%", label: "Práctico" },
            { number: "24/7", label: "Soporte" },
            { number: "+500", label: "Graduados" },
          ].map((stat, index) => (
            <Card
              key={index}
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
