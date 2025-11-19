import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TestimonialsSection = () => {
  const { ref: testimonialsRef, isVisible: testimonialsVisible } =
    useScrollReveal();
  const { ref: companiesRef, isVisible: companiesVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  // --- INICIO DE LA MODIFICACIÓN DE TEXTO ---
  const testimonials = [
    {
      name: "María Rodríguez",
      role: "Cloud Engineer en Empresa Líder", // CAMBIADO
      image: "👩‍💻",
      rating: 5,
      text: "Los proyectos hands-on y ejemplos del mundo real me dieron la confianza para enfrentar desafíos de diseño complejos. Ingenio 360 marcó toda la diferencia en mi carrera.",
    },
    {
      name: "Carlos Mendoza",
      role: "Security Analyst en Gigante Tech", // CAMBIADO
      image: "👨‍💼",
      rating: 5,
      text: "El curso desglosó conceptos complejos en lecciones accionables. Conseguí un trabajo freelance dentro de semanas de completarlo. ¡Gracias, Ingenio 360!",
    },
    {
      name: "Ana Silva",
      role: "ML Engineer en Multinacional de IA", // CAMBIADO
      image: "👩‍🔬",
      rating: 5,
      text: "Lo que distingue a Ingenio 360 es su enfoque en resultados. Construí un portafolio profesional y conseguí trabajo dentro de tres meses. ¡La mejor inversión que he hecho!",
    },
  ];

  const companies = [
    "Gigantes Tech",
    "Líderes en Cloud",
    "Innovación en IA",
    "Fintech Global",
    "Consultoría Top",
    "Startups",
  ];
  // --- FIN DE LA MODIFICACIÓN DE TEXTO ---

  return (
    <section id="testimonials" className="relative py-20 ">
      <div className="absolute lg:inset-0 z-0">
        <div className="absolute top-0 -right-32 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 mb-4">
            Testimonios
          </Badge>

          {/* --- INICIO DE LA MODIFICACIÓN DE TEXTO --- */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Alumnos trabajan en empresas <br />
            <span className="gradient-text">líderes del sector tech</span>
          </h2>
          {/* --- FIN DE LA MODIFICACIÓN DE TEXTO --- */}

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestros estudiantes lo significan todo para nosotros y estamos
            agradecidos de haber colocado profesionales en equipos increíbles
            alrededor del mundo
          </p>
        </div>

        {/* Company Logos */}
        <div ref={companiesRef} className="mb-16 overflow-hidden">
          <div className="flex gap-12 justify-center items-center flex-wrap">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`text-2xl font-bold text-foreground/60 hover:text-foreground transition-all cursor-pointer ${
                  companiesVisible ? "animate-fade-up" : "opacity-0"
                } hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-8 hover-lift hover-glow bg-card/80 backdrop-blur-sm border-border/50 ${
                testimonialsVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* --- SECCIÓN CORREGIDA (CTA) --- */}
        <div
          ref={ctaRef}
          className={`text-center ${ctaVisible ? "" : "opacity-0"}`}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all hover-lift ${
              ctaVisible ? "animate-fade-up" : ""
            }`}
          >
            Únete a Nuestros Exitosos Alumni
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
