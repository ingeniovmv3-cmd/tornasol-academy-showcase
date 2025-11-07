import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Sparkles } from "lucide-react";
import studentsImage from "@/assets/students-collaboration.jpg";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="relative animate-slide-in-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={studentsImage}
                    alt="Estudiante 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center text-6xl">
                  👩‍💼
                </div>
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-6xl">
                  👨‍🔬
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full animated-gradient opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-full bg-accent/20 opacity-20 blur-3xl"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="inline-block">
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                Comunidad
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Conecta con profesionales de{" "}
              <span className="gradient-text">150+ países</span>
            </h2>

            <p className="text-xl text-muted-foreground">
              Es tu puerta de entrada a una carrera tech. Con Ingenio 360, obtendrás las habilidades, 
              confianza y portafolio para destacar en el mundo competitivo del desarrollo tecnológico.
            </p>

            {/* Community Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border/50">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Red Global</h3>
                <p className="text-sm text-muted-foreground">
                  Conecta con estudiantes de todo el mundo
                </p>
              </Card>
              <Card className="p-6 bg-card border-border/50">
                <MessageCircle className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold mb-2">Soporte 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Ayuda disponible cuando la necesites
                </p>
              </Card>
              <Card className="p-6 bg-card border-border/50">
                <Trophy className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold mb-2">Eventos Exclusivos</h3>
                <p className="text-sm text-muted-foreground">
                  Hackathons, workshops y más
                </p>
              </Card>
              <Card className="p-6 bg-card border-border/50">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Networking</h3>
                <p className="text-sm text-muted-foreground">
                  Construye conexiones profesionales
                </p>
              </Card>
            </div>

            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground hover:shadow-glow transition-all"
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
