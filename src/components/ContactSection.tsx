import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para <span className="gradient-text">empezar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contáctanos hoy y da el primer paso hacia tu nueva carrera tech
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ingenio 360</h3>
              <p className="text-muted-foreground mb-8">
                Impulsa tu talento. Transforma tu carrera con certificaciones internacionales 
                en las tecnologías más demandadas del mercado.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a href="tel:+50364554356" className="text-muted-foreground hover:text-primary transition-colors">
                      +503 6455 4356
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@ingenio360.com" className="text-muted-foreground hover:text-accent transition-colors">
                      info@ingenio360.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Virtual - Estudia desde cualquier lugar
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Síguenos en redes sociales
              </p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "Instagram", "Facebook"].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => toast({ title: `Abriendo ${social}...` })}
                  >
                    {social[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border/50 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+503 0000 0000"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu interés en nuestros cursos..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:shadow-glow transition-all"
              >
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
