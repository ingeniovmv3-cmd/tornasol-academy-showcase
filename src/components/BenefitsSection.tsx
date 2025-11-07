import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, GraduationCap, Home, Users, Target } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Alta Remuneración",
      description: "Las carreras tech ofrecen salarios competitivos y excelentes beneficios que te permitirán alcanzar tus metas financieras.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Oportunidades de Crecimiento",
      description: "Comienza como junior y progresa rápidamente a roles Lead, Senior y más allá en la industria tecnológica.",
      color: "accent",
    },
    {
      icon: GraduationCap,
      title: "Sin Título Requerido",
      description: "No requiere título universitario, en su lugar recompensa a quienes trabajan duro y crecen en su oficio.",
      color: "secondary",
    },
    {
      icon: Home,
      title: "Trabajo Remoto",
      description: "El trabajo remoto está en auge, y los profesionales tech están liderando el cambio hacia la flexibilidad laboral.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Alta Demanda",
      description: "Estarás en alta demanda desde gigantes tech hasta startups, garantizando oportunidades laborales versátiles.",
      color: "accent",
    },
    {
      icon: Target,
      title: "Genera Impacto",
      description: "Una sensación de logro al impactar a las personas que usan los productos que diseñas y desarrollas.",
      color: "secondary",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por qué deberías <span className="gradient-text">elegirnos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre las ventajas de estudiar con Ingenio 360 y dar el salto a una carrera tech exitosa
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift bg-card border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-${benefit.color}/10 flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 text-${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-up animate-delay-600">
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-border">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para transformar tu carrera?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Únete a cientos de estudiantes que ya están construyendo su futuro en tecnología con Ingenio 360
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all text-lg"
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
