import { Card } from "@/components/ui/card";
import {
  DollarSign,
  TrendingUp,
  GraduationCap,
  Home,
  Users,
  Target,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// El mapa de colores está perfecto
const colorMap = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
  },
};

const BenefitsSection = () => {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const benefits = [
    // ... (sin cambios en el array)
    {
      icon: DollarSign,
      title: "Alta Remuneración",
      description:
        "Las carreras tech ofrecen salarios competitivos y excelentes beneficios que te permitirán alcanzar tus metas financieras.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Oportunidades de Crecimiento",
      description:
        "Comienza como junior y progresa rápidamente a roles Lead, Senior y más allá en la industria tecnológica.",
      color: "accent",
    },
    {
      icon: GraduationCap,
      title: "Sin Título Requerido",
      description:
        "No requiere título universitario, en su lugar recompensa a quienes trabajan duro y crecen en su oficio.",
      color: "secondary",
    },
    {
      icon: Home,
      title: "Trabajo Remoto",
      description:
        "El trabajo remoto está en auge, y los profesionales tech están liderando el cambio hacia la flexibilidad laboral.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Alta Demanda",
      description:
        "Estarás en alta demanda desde gigantes tech hasta startups, garantizando oportunidades laborales versátiles.",
      color: "accent",
    },
    {
      icon: Target,
      title: "Genera Impacto",
      description:
        "Una sensación de logro al impactar a las personas que usan los productos que diseñas y desarrollas.",
      color: "secondary",
    },
  ];

  return (
    // --- CAMBIO AQUÍ: Añadimos 'relative' y 'overflow-hidden' para los blobs ---
    <section id="benefits" className="relative py-20  ">
      {/* --- NUEVO: Blobs de fondo para el efecto glass --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-100"></div>
      </div>

      {/* --- CAMBIO AQUÍ: 'relative z-10' para que el contenido esté sobre los blobs --- */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header (sin cambios) */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por qué deberías <span className="gradient-text">elegirnos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre las ventajas de estudiar con Ingenio 360 y dar el salto a
            una carrera tech exitosa
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={benefitsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = colorMap[benefit.color] || colorMap.primary;
            return (
              <Card
                key={index}
                // --- CAMBIO AQUÍ: Añadimos 'bg-card/80' (transparencia) y 'backdrop-blur-sm' ---
                className={`p-8 hover-lift hover-glow bg-card/80 backdrop-blur-sm border-border/50 ${
                  benefitsVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 hover-bounce`}
                >
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`mt-20 text-center ${ctaVisible ? "" : "opacity-0"}`}
        >
          {/* --- CAMBIO AQUÍ: Añadimos 'backdrop-blur-md' --- */}
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-border hover-lift hover-glow backdrop-blur-md">
            <h3
              className={`text-3xl font-bold mb-4 ${
                ctaVisible ? "animate-fade-up" : ""
              }`}
            >
              ¿Listo para transformar tu carrera?
            </h3>
            <p
              className={`text-muted-foreground mb-6 max-w-2xl ${
                ctaVisible ? "animate-fade-up animate-delay-100" : ""
              }`}
            >
              Únete a cientos de estudiantes que ya están construyendo su futuro
              en tecnología con Ingenio 360
            </p>
            {/* NOTA: He quitado el 'hover-lift' del botón que estaba en tu código anterior
              y he re-añadido las animaciones de entrada que faltaban.
            */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all text-lg `}
            >
              Comienza Tu Viaje Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
