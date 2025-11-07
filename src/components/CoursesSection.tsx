import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Shield, Brain, CheckCircle2, Clock, Award, ArrowRight } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: Cloud,
      title: "AWS Cloud Developer",
      duration: "6 meses",
      modality: "Virtual",
      certification: "Internacional",
      description: "Domina Amazon Web Services y conviértete en un desarrollador cloud certificado. Aprende a diseñar, desarrollar y desplegar aplicaciones escalables en la nube.",
      highlights: [
        "Arquitectura cloud moderna",
        "Servicios AWS core (EC2, S3, Lambda)",
        "DevOps y CI/CD",
        "Preparación certificación AWS",
      ],
      color: "primary",
      gradient: "from-primary/20 to-primary-glow/20",
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      duration: "4 meses",
      modality: "Clases en vivo",
      certification: "Profesional",
      description: "Protege sistemas y redes con un enfoque 100% práctico. Aprende técnicas de pentesting, análisis de vulnerabilidades y defensa contra ciberataques.",
      highlights: [
        "Identificar vulnerabilidades",
        "Pentesting y simulación de ataques",
        "Proteger redes y sistemas",
        "Responder ante ciberataques",
      ],
      color: "accent",
      gradient: "from-accent/20 to-cyan-400/20",
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      duration: "5 meses",
      modality: "A tu ritmo",
      certification: "Avanzado",
      description: "Domina Machine Learning, Deep Learning y NLP. Construye modelos de IA que resuelvan problemas reales y transformen industrias.",
      highlights: [
        "Machine Learning algorithms",
        "Deep Learning y Neural Networks",
        "Procesamiento de lenguaje natural",
        "Computer Vision y más",
      ],
      color: "secondary",
      gradient: "from-secondary/20 to-purple-400/20",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 mb-4">
            Nuestros Cursos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificaciones que <span className="gradient-text">impulsan carreras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programas diseñados para llevarte de cero a profesional en las áreas tech más demandadas
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover-lift bg-card border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header with Gradient */}
                <div className={`p-8 bg-gradient-to-br ${course.gradient}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-${course.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  
                  {/* Course Meta */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="bg-background/50">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </Badge>
                    <Badge variant="secondary" className="bg-background/50">
                      {course.modality}
                    </Badge>
                    <Badge variant="secondary" className="bg-background/50">
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
                        <CheckCircle2 className={`w-5 h-5 text-${course.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className={`w-full bg-${course.color} text-${course.color}-foreground hover:shadow-glow`}
                  >
                    Más Información
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-8 text-center bg-card hover-lift animate-fade-up animate-delay-300">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <p className="text-muted-foreground">Práctico</p>
          </Card>
          <Card className="p-8 text-center bg-card hover-lift animate-fade-up animate-delay-400">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <p className="text-muted-foreground">Soporte</p>
          </Card>
          <Card className="p-8 text-center bg-card hover-lift animate-fade-up animate-delay-500">
            <div className="text-4xl font-bold gradient-text mb-2">+500</div>
            <p className="text-muted-foreground">Graduados</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
