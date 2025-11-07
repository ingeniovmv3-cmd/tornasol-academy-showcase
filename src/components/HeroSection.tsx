import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Video, CheckCircle2, Award } from "lucide-react";
import heroImage from "@/assets/hero-student.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const { ref: trustRef, isVisible: trustVisible } = useScrollReveal();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-bounce-in">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 px-4 py-2 hover-glow">
                <span className="mr-2 animate-pulse">✨</span>
                ¡Las inscripciones están abiertas!
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
              Transforma tu perfil con{" "}
              <span className="gradient-text animate-shimmer">certificaciones tech</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Estudia a tu ritmo. Certificaciones internacionales en AWS, Ciberseguridad e IA. 
              Impulsa tu talento con Ingenio 360.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-200">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:shadow-glow transition-all text-lg px-8 py-6 hover-lift animate-pulse-glow"
              >
                Inscríbete Ahora
                <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToCourses}
                className="text-lg px-8 py-6 border-2 hover-lift"
              >
                Ver Cursos
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 animate-slide-in-left animate-delay-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover-bounce">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">ONLINE</p>
                  <p className="text-sm text-muted-foreground">Virtual</p>
                </div>
              </div>
              <div className="flex items-center gap-2 animate-slide-in-left animate-delay-400">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover-bounce">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">PRÁCTICO</p>
                  <p className="text-sm text-muted-foreground">Hands-on</p>
                </div>
              </div>
              <div className="flex items-center gap-2 animate-slide-in-left animate-delay-500">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center hover-bounce">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">CERTIFICADO</p>
                  <p className="text-sm text-muted-foreground">Internacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-zoom-in animate-delay-400">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift hover-rotate">
              <img
                src={heroImage}
                alt="Estudiante aprendiendo tecnología"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full animated-gradient opacity-60 blur-2xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/30 opacity-60 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div 
          ref={trustRef}
          className={`mt-20 pt-20 border-t border-border ${trustVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider animate-blur-in">
            Nuestros estudiantes trabajan en
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["Amazon", "Microsoft", "Google", "IBM", "Oracle"].map((company, index) => (
              <div
                key={company}
                className={`text-2xl font-bold opacity-60 hover:opacity-100 transition-all cursor-pointer ${
                  trustVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
