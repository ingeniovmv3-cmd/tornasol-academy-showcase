import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal"; // --- NUEVO: Importar hook ---

// --- NUEVO: Iconos SVG en línea para Redes Sociales ---
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

// --- NUEVO: Array de Redes Sociales ---
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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // --- NUEVO: Hook para la animación del footer ---
  const { ref: footerRef, isVisible: footerVisible } = useScrollReveal();

  const footerLinks = {
    Cursos: [
      "AWS Cloud Developer",
      "Ciberseguridad",
      "Inteligencia Artificial",
      "Todos los Cursos",
    ],
    Empresa: ["Sobre Nosotros", "Instructores", "Testimonios", "Blog"],
    Soporte: [
      "Centro de Ayuda",
      "Términos de Servicio",
      "Política de Privacidad",
      "Contacto",
    ],
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* --- CAMBIO: 'ref' y lógica de 'opacity' --- */}
        <div
          ref={footerRef}
          className={`grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 ${
            footerVisible ? "" : "opacity-0"
          }`}
        >
          {/* Brand */}
          {/* --- CAMBIO: Animación 'fade-up' --- */}
          <div
            className={`lg:col-span-2 ${
              footerVisible ? "animate-fade-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-52 h-10 rounded-xl  flex items-center justify-center">
                <img src="/logo1.png" alt="" />
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Impulsa tu talento con certificaciones internacionales en las
              tecnologías más demandadas. Transforma tu carrera con Ingenio 360.
            </p>
            {/* --- CAMBIO: Iconos de redes sociales reales --- */}
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
                    className={`w-10 h-10 rounded-lg bg-muted text-muted-foreground ${social.hover} transition-all flex items-center justify-center p-2.5 `}
                  >
                    <Icon className="w-full h-full" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            // --- CAMBIO: Animación 'fade-up' escalonada ---
            <div
              key={category}
              className={`${footerVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }} // 0.2s, 0.3s, 0.4s
            >
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        {/* --- CAMBIO: Animación 'fade-up' para la barra inferior --- */}
        <div
          className={`pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 ${
            footerVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ingenio 360. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">
              Privacidad
            </button>
            <button className="hover:text-primary transition-colors">
              Términos
            </button>
            <button className="hover:text-primary transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
