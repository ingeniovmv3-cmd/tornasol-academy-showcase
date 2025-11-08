import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle2, Video } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const images = [
    "https://i.pinimg.com/736x/22/b6/ea/22b6eade5bd1318bc1685be2808ca217.jpg",
    "https://bravatraining.com.br/wp-content/uploads/2019/08/2019-09-09-estrategias-de-estudo-preparacao.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 max-lg:overflow-hidden"
    >
      <div className="absolute lg:inset-0 z-0 ">
        <div className="absolute top-0 -left-20 w-80 h-80 bg-purple-400/50 rounded-full filter blur-3xl opacity-90 animate-pulse-light"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-400/50 rounded-full filter blur-3xl opacity-90 animate-pulse-light animate-delay-100"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-400/50 rounded-full filter blur-3xl opacity-90 animate-pulse-light animate-delay-200"></div>
        {/* A (eliminé la 'A' que estaba suelta aquí) */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* ESTA SECCIÓN DE TEXTO NO SE TOCA */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 animate-fade-in-slow">
              Transforma tu perfil con
              <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-text-gradient">
                Certificaciones tech
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 animate-fade-in-slow animate-delay-200">
              Estudia a tu ritmo. Certificaciones internacionales en AWS,
              Ciberseguridad e IA. Impulsa tu talento con Ingenio 360.
            </p>

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

            <div className="flex justify-center lg:justify-start animate-fade-in-slow animate-delay-600">
              <Button
                size="lg"
                onClick={() => scrollToSection("courses")}
                className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-500 text-lg px-8 py-6 rounded-md shadow-lg flex items-center group"
              >
                Ver Cursos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Contenedor principal de la imagen: centrado y con altura fija */}
          <div className="relative flex justify-center lg:justify-end items-center h-[500px] animate-fade-in-scale-up">
            {/* Contenedor para el grupo de imágenes, para posicionarlas una sobre otra */}
            <div className="relative lg:w-[450px] lg:h-[400px]">
              {/* --- INICIO DE LA MODIFICACIÓN (Cross-fade) --- */}
              {/* Añadimos 'relative' al div contenedor para que las imágenes 
                  'absolute' se apilen dentro de él.
               */}
              <div className=" absolute top-0 -left-24  lg:left-0 w-[280px] lg:w-[380px] h-[280px] lg:h-[300px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out">
                {images.map((imgSrc, index) => (
                  <img
                    key={imgSrc} // Usamos la URL como key
                    src={imgSrc}
                    alt="Student learning"
                    className={`
                      absolute lg:inset-0 w-full h-full object-cover 
                      transition-opacity duration-1000 ease-in-out 
                      ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
                ))}
              </div>
              {/* --- FIN DE LA MODIFICACIÓN --- */}

              {/* Imagen 2 (ADELANTE): Esta no se toca */}
              <div className="absolute bottom-0 max-lg:-top-44 -right-16 lg:right-0 w-[250px] lg:w-[280px] h-[180px] lg:h-[240px] bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                <img
                  src="https://img.freepik.com/foto-gratis/mujer-trabajo-videollamada_23-2148902251.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Mobile course"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInSlow {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-slow {
          animation: fadeInSlow 1.5s ease-out forwards;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes textGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-text-gradient {
          animation: textGradient 3s ease infinite;
          background-size: 200% auto;
        }

        @keyframes fadeInScaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale-up {
          animation: fadeInScaleUp 1.8s ease-out forwards;
        }

        /* Animación 'floatBob' eliminada ya que la quitamos del div */
        /* .animate-float-bob { ... } */

        @keyframes pulseLight {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
        }

        .animate-pulse-light {
          animation: pulseLight 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
