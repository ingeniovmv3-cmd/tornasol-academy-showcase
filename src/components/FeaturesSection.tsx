import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Award, BookOpen } from "lucide-react";
import onlineClassImage from "@/assets/online-class.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FeaturesSection = () => {
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const features = [
    {
      icon: Users,
      title: "Aprendizaje Online",
      description: "Participa en sesiones interactivas en tiempo real dirigidas por expertos de la industria, garantizando comprensión profunda y retroalimentación instantánea.",
    },
    {
      icon: Award,
      title: "Proyectos Hands-on",
      description: "Aplica tus habilidades a escenarios del mundo real con asignaciones prácticas diseñadas para mejorar el aprendizaje y construir tu portafolio.",
    },
    {
      icon: BookOpen,
      title: "Mentoría Dedicada",
      description: "Recibe orientación personalizada y apoyo de mentores experimentados para ayudarte a navegar desafíos y alcanzar tus metas de aprendizaje.",
    },
  ];

  const benefits = [
    "Aprende principios desde la investigación hasta crear interfaces funcionales",
    "Construye proyectos del mundo real usando herramientas como AWS, Python y más",
    "Desarrolla habilidades para roles tech, incluyendo prototipado y testing",
    "Obtén retroalimentación experta para refinar tu trabajo",
  ];

  return (
    <section id="overview" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Feature Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              El único programa tech que necesitas para estar entre el{" "}
              <span className="gradient-text">top 1%</span>
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-3 items-start animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 animate-bounce-in" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4 animate-fade-up animate-delay-600">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all hover-lift animate-pulse-glow"
              >
                Inscríbete Ahora
              </button>
              <button
                onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors hover-lift"
              >
                Ver Cursos
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-zoom-in animate-delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift hover-rotate">
              <img
                src={onlineClassImage}
                alt="Clase online en vivo"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 rounded-full animated-gradient opacity-20 blur-3xl animate-float"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full bg-accent/20 opacity-20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover-lift hover-glow bg-card border-border/50 ${
                  featuresVisible ? 'animate-flip-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 hover-bounce animate-pulse-glow">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "30+", label: "ejercicios" },
            { number: "150+", label: "lecciones" },
            { number: "600+", label: "horas" },
            { number: "Lifetime", label: "acceso" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center ${statsVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-bold gradient-text mb-2 hover-lift cursor-default">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
