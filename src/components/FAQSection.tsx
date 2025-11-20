import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const faqs = [
    {
      pregunta: "¿Las clases son en vivo?",
      respuesta:
        "Sí, ofrecemos clases en vivo con nuestros instructores expertos. Además, todas las sesiones quedan grabadas para que puedas revisarlas cuando lo necesites.",
    },
    {
      pregunta: "¿Las clases quedan grabadas?",
      respuesta:
        "Absolutamente. Todas nuestras clases en vivo quedan grabadas y disponibles en la plataforma para que puedas acceder a ellas en cualquier momento y repasar el contenido a tu propio ritmo.",
    },
    {
      pregunta: "¿Qué métodos de pago tienen disponibles?",
      respuesta:
        "Aceptamos múltiples métodos de pago para tu comodidad: tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias, Wompi, y opciones de pago local según tu país.",
    },
    {
      pregunta: "¿Las certificaciones son internacionales?",
      respuesta:
        "Sí, todas nuestras certificaciones son reconocidas internacionalmente. Ofrecemos certificaciones oficiales de AWS, CompTIA, y otras entidades globales reconocidas en la industria tech. Estas certificaciones son válidas en todo el mundo y altamente valoradas por empleadores internacionales.",
    },
    {
      pregunta: "¿Necesito experiencia previa?",
      respuesta:
        "No necesariamente. Ofrecemos cursos para todos los niveles, desde principiantes hasta avanzados. Cada curso especifica sus requisitos previos para que puedas elegir el más adecuado para tu nivel actual.",
    },
    {
      pregunta: "¿Cuánto tiempo tengo acceso al contenido?",
      respuesta:
        "Una vez inscrito en un curso, tendrás acceso de por vida al contenido, incluyendo todas las actualizaciones futuras. Puedes aprender a tu propio ritmo sin presión de tiempo.",
    },
  ];

  return (
    <section id="faq" className="relative py-20">
      <div className="absolute lg:inset-0 z-0">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 mb-4">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Tienes <span className="gradient-text">dudas?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            cursos
          </p>
        </div>

        <Card
          ref={ref}
          className={`bg-card/80 backdrop-blur-sm border-border/50 p-6 md:p-8 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.pregunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;