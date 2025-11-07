import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Sparkles } from "lucide-react";
import studentsImage from "@/assets/students-collaboration.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CommunitySection = () => {
  const { ref: communityRef, isVisible: communityVisible } = useScrollReveal();
  return (
    <section ref={communityRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className={`relative ${communityVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full aspect-square rounded-2xl overflow-hidden hover-lift hover-rotate animate-scale-in">
                  <img
                    src={studentsImage}
                    alt="Estudiante 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl hover-bounce animate-scale-in animate-delay-100">
                  <span className="animate-float">👨‍💻</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center text-6xl hover-bounce animate-scale-in animate-delay-200">
                  <span className="animate-float" style={{ animationDelay: '0.5s' }}>👩‍💼</span>
                </div>
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-6xl hover-bounce animate-scale-in animate-delay-300">
                  <span className="animate-float" style={{ animationDelay: '1s' }}>👨‍🔬</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full animated-gradient opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-full bg-accent/20 opacity-20 blur-3xl"></div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 ${communityVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-block animate-bounce-in">
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold hover-glow">
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
              {[
                { icon: Users, title: "Red Global", description: "Conecta con estudiantes de todo el mundo", color: "primary" },
                { icon: MessageCircle, title: "Soporte 24/7", description: "Ayuda disponible cuando la necesites", color: "accent" },
                { icon: Trophy, title: "Eventos Exclusivos", description: "Hackathons, workshops y más", color: "secondary" },
                { icon: Sparkles, title: "Networking", description: "Construye conexiones profesionales", color: "primary" },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className={`p-6 bg-card border-border/50 hover-lift hover-glow ${
                      communityVisible ? 'animate-flip-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
                  >
                    <Icon className={`w-8 h-8 text-${feature.color} mb-3 hover-bounce animate-pulse-glow`} />
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
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`bg-primary text-primary-foreground hover:shadow-glow transition-all hover-lift animate-pulse-glow ${
                communityVisible ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '1s' }}
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
