import { GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Cursos: ["AWS Cloud Developer", "Ciberseguridad", "Inteligencia Artificial", "Todos los Cursos"],
    Empresa: ["Sobre Nosotros", "Instructores", "Testimonios", "Blog"],
    Soporte: ["Centro de Ayuda", "Términos de Servicio", "Política de Privacidad", "Contacto"],
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Ingenio 360</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Impulsa tu talento con certificaciones internacionales en las tecnologías 
              más demandadas. Transforma tu carrera con Ingenio 360.
            </p>
            <div className="flex gap-4">
              {["L", "T", "I", "F"].map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
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
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ingenio 360. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacidad</button>
            <button className="hover:text-primary transition-colors">Términos</button>
            <button className="hover:text-primary transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
