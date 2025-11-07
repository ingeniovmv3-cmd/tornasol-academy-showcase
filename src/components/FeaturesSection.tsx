import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Award, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import onlineClassImage from "@/assets/online-class.jpg";

const FeaturesSection = () => {
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const features = [
    {
      icon: Users,
      title: "Aprendizaje Online",
      description:
        "Participa en sesiones interactivas en tiempo real dirigidas por expertos de la industria, garantizando comprensión profunda y retroalimentación instantánea.",
    },
    {
      icon: Award,
      title: "Proyectos Hands-on",
      description:
        "Aplica tus habilidades a escenarios del mundo real con asignaciones prácticas diseñadas para mejorar el aprendizaje y construir tu portafolio.",
    },
    {
      icon: BookOpen,
      title: "Mentoría Dedicada",
      description:
        "Recibe orientación personalizada y apoyo de mentores experimentados para ayudarte a navegar desafíos y alcanzar tus metas de aprendizaje.",
    },
  ];

  const benefits = [
    "Aprende principios desde la investigación hasta crear interfaces funcionales",
    "Construye proyectos del mundo real usando herramientas como AWS, Python y más",
    "Desarrolla habilidades para roles tech, incluyendo prototipado y testing",
    "Obtén retroalimentación experta para refinar tu trabajo",
  ];

  return (
    <section id="overview" className="relative py-20 overflow-hidden">
      {/* --- Los blobs de fondo están bien --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
        <div className="absolute bottom-0 -left-12 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
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
                  {/* --- CAMBIO AQUÍ --- */}
                  {/* De 'animate-bounce-in' a 'animate-fade-up' (o 'animate-fade-in' si la tienes definida). */}
                  {/* 'fade-up' le da una sensación de "check" más suave. */}
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 animate-fade-up" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4 animate-fade-up animate-delay-600">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all animate-pulse-glow"
              >
                Inscríbete Ahora
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Ver Cursos
              </button>
            </div>
          </div>

          <div className="relative animate-zoom-in animate-delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift hover-rotate">
              <img
                src={onlineClassImage}
                alt="Clase online en vivo"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                // --- CAMBIO AQUÍ ---
                // De 'animate-flip-in' a 'animate-fade-up'. Mucho más suave.
                className={`p-8 hover-lift hover-glow bg-card/80 backdrop-blur-sm border-border/50 ${
                  featuresVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* --- CAMBIO AQUÍ --- */}
                {/* Quitado 'animate-pulse-glow' para reducir ruido visual */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 hover-bounce">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                {/* --- CAMBIO AQUÍ --- */}
                {/* Quitado el texto 'New' */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
        <div ref={statsRef} className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "30+", label: "ejercicios" },
            { number: "150+", label: "lecciones" },
            { number: "600+", label: "horas" },
            { number: "Lifetime", label: "acceso" },
          ].map((stat, index) => (
            <div
              key={index}
              // --- CAMBIO AQUÍ ---
              // De 'animate-bounce-in' a 'animate-fade-up'.
              className={`text-center ${
                statsVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* --- CAMBIO AQUÍ --- */}
              {/* Quitado el texto 'T' */}
              <div className="text-5xl font-bold gradient-text mb-2 cursor-default">
                {/* --- CAMBIO AQUÍ --- */}
                {/* Quitado el texto 'Boolean' */}
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
