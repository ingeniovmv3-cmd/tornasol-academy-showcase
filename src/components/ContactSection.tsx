import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// --- NUEVO: Iconos SVG en línea para Redes Sociales ---
// (Esto es necesario porque Lucide no incluye íconos de marcas)

const IconLinkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconTwitterX = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h1.936L7.091 3.207H5.025Z" />
  </svg>
);

const IconInstagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconFacebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// --- NUEVO: Array de Redes Sociales con componentes y URLs ---
const socialLinks = [
  {
    name: "LinkedIn",
    icon: IconLinkedin,
    href: "#", // Reemplaza con tu URL
    hover: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "X (Twitter)",
    icon: IconTwitterX,
    href: "#", // Reemplaza con tu URL
    hover: "hover:bg-black hover:text-white",
  },
  {
    name: "Instagram",
    icon: IconInstagram,
    href: "#", // Reemplaza con tu URL
    hover: "hover:bg-pink-600 hover:text-white",
  },
  {
    name: "Facebook",
    icon: IconFacebook,
    href: "#", // Reemplaza con tu URL
    hover: "hover:bg-blue-700 hover:text-white",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  // --- CAMBIO: Refs separados para las dos columnas ---
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // --- CAMBIO: Añadido 'relative overflow-hidden' para blobs ---
    <section id="contact" className="relative py-20 ">
      {/* --- NUEVO: Blobs de fondo --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-16 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light"></div>
        <div className="absolute -bottom-16 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-light animate-delay-200"></div>
      </div>

      {/* --- CAMBIO: 'relative z-10' para el contenido --- */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header (ya está bien con fade-up) */}
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
          {/* --- CAMBIO: Usamos 'leftRef' y 'leftVisible' como trigger --- */}
          <div
            ref={leftRef}
            className={`space-y-8 ${leftVisible ? "" : "opacity-0"}`}
          >
            {/* --- CAMBIO: Animaciones 'fade-up' escalonadas --- */}
            <div className={`${leftVisible ? "animate-fade-up" : ""}`}>
              <h3 className="text-2xl font-bold mb-4">Ingenio 360</h3>
              <p className="text-muted-foreground mb-8">
                Impulsa tu talento. Transforma tu carrera con certificaciones
                internacionales en las tecnologías más demandadas del mercado.
              </p>
            </div>

            <div className="space-y-6">
              {/* --- CAMBIO: de 'animate-slide-in-left' a 'animate-fade-up' y 'glassmorphism' --- */}
              <Card
                className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 hover-lift hover-glow ${
                  leftVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-start gap-4">
                  {/* --- CAMBIO: Quitado 'animate-pulse-glow' --- */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover-bounce">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a
                      href="tel:+50364554356"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +503 6455 4356
                    </a>
                  </div>
                </div>
              </Card>

              {/* --- CAMBIO: de 'animate-slide-in-left' a 'animate-fade-up' y 'glassmorphism' --- */}
              <Card
                className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 hover-lift hover-glow ${
                  leftVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-start gap-4">
                  {/* --- CAMBIO: Quitado 'animate-pulse-glow' --- */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 hover-bounce">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:info@ingenio360.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@ingenio360.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* --- CAMBIO: de 'animate-slide-in-left' a 'animate-fade-up' y 'glassmorphism' --- */}
              <Card
                className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 hover-lift hover-glow ${
                  leftVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-start gap-4">
                  {/* --- CAMBIO: Quitado 'animate-pulse-glow' --- */}
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 hover-bounce">
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

            {/* --- CAMBIO: Redes Sociales con Iconos --- */}
            <div
              className={`pt-6 ${leftVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Síguenos en redes sociales
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-10 h-10 rounded-lg bg-muted text-muted-foreground ${social.hover} transition-all flex items-center justify-center p-2.5`}
                    >
                      <Icon className="w-full h-full" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* --- CAMBIO: de 'animate-zoom-in' a 'animate-fade-up' y 'glassmorphism' --- */}
          <Card
            ref={rightRef}
            className={`p-8 bg-card/80 backdrop-blur-sm border-border/50 hover-glow ${
              rightVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ... (Inputs del formulario no cambiados, están bien) ... */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
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

              {/* --- CAMBIO: Botón con 'group' para hover de icono --- */}
              <Button
                type="submit"
                size="lg"
                // --- CAMBIO: Añadido 'group', quitado 'animate-pulse-glow' ---
                className="w-full group bg-primary text-primary-foreground hover:shadow-glow transition-all hover-lift"
              >
                Enviar Mensaje
                {/* --- CAMBIO: Interacción con 'group-hover', quitado 'animate-pulse' --- */}
                <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
