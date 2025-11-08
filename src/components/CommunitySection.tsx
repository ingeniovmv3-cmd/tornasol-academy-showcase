import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Sparkles } from "lucide-react";
import studentsImage from "@/assets/students-collaboration.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// El mapa de colores está bien
const colorMap = {
  primary: { text: "text-primary" },
  accent: { text: "text-accent" },
  secondary: { text: "text-secondary" },
};

const CommunitySection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section id="community" className="relative py-20">
      {/* Blobs de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div
            ref={leftRef}
            className={`relative ${leftVisible ? "" : "opacity-0"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* --- CAMBIO AQUÍ: 'animationDelay' eliminado --- */}
                <div
                  className={`w-full aspect-square rounded-2xl overflow-hidden hover-lift hover-rotate ${
                    leftVisible ? "animate-fade-up" : ""
                  }`}
                >
                  <img
                    src={studentsImage}
                    alt="Estudiante 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* --- CAMBIO AQUÍ: 'animationDelay' eliminado --- */}
                <div
                  className={`w-full aspect-square rounded-2xl overflow-hidden hover-lift hover-rotate ${
                    leftVisible ? "animate-fade-up" : ""
                  }`}
                >
                  <img
                    src={
                      "https://plus.unsplash.com/premium_photo-1683887034491-f58b4c4fca72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWx1bW5vc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
                    }
                    alt="Estudiante 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                {/* --- CAMBIO AQUÍ: 'animationDelay' eliminado --- */}
                <div
                  className={`w-full aspect-square rounded-2xl overflow-hidden hover-lift hover-rotate ${
                    leftVisible ? "animate-fade-up" : ""
                  }`}
                >
                  <img
                    src={
                      "https://media.istockphoto.com/id/1581045672/photo/education-laptop-student-computer-teenager-studying-boy-learning-homework-study-young-school.jpg?s=612x612&w=0&k=20&c=ytSpytOADNigrtZTFZkZwYmjBeEculuHc_2MLEvpKNk="
                    }
                    alt="Estudiante 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* --- CAMBIO AQUÍ: 'animationDelay' eliminado --- */}
                <div
                  className={`w-full aspect-square rounded-2xl overflow-hidden hover-lift hover-rotate ${
                    leftVisible ? "animate-fade-up" : ""
                  }`}
                >
                  <img
                    src={
                      "https://t4.ftcdn.net/jpg/05/81/05/05/360_F_581050506_bln7T6ban50i4WU9fZHfvmNxWfPlZCGW.jpg"
                    }
                    alt="Estudiante 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full animated-gradient opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-full bg-accent/20 opacity-20 blur-3xl"></div>
          </div>

          {/* Right - Content (Este lado mantiene sus delays escalonados) */}
          <div
            ref={rightRef}
            className={`space-y-8 ${rightVisible ? "" : "opacity-0"}`}
          >
            <div
              className={`inline-block ${
                rightVisible ? "animate-fade-up" : ""
              }`}
            >
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold hover-glow">
                Comunidad
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight ${
                rightVisible ? "animate-fade-up" : ""
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Conecta con profesionales de{" "}
              <span className="gradient-text">150+ países</span>
            </h2>

            <p
              className={`text-xl text-muted-foreground ${
                rightVisible ? "animate-fade-up" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Es tu puerta de entrada a una carrera tech. Con Ingenio 360,
              obtendrás las habilidades, confianza y portafolio para destacar en
              el mundo competitivo del desarrollo tecnológico.
            </p>

            {/* Community Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  title: "Red Global",
                  description: "Conecta con estudiantes de todo el mundo",
                  color: "primary",
                },
                {
                  icon: MessageCircle,
                  title: "Soporte 24/7",
                  description: "Ayuda disponible cuando la necesites",
                  color: "accent",
                },
                {
                  icon: Trophy,
                  title: "Eventos Exclusivos",
                  description: "Hackathons, workshops y más",
                  color: "secondary",
                },
                {
                  icon: Sparkles,
                  title: "Networking",
                  description: "Construye conexiones profesionales",
                  color: "primary",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                const colors = colorMap[feature.color] || colorMap.primary;
                return (
                  <Card
                    key={index}
                    className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 hover-lift hover-glow ${
                      rightVisible ? "animate-fade-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <Icon className={`w-8 h-8 ${colors.text} mb-3`} />
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`bg-primary text-primary-foreground hover:shadow-glow transition-all hover-lift ${
                rightVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              Únete a la Comunidad
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
