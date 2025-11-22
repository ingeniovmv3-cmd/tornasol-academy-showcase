import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Shield,
  Brain,
  Database,
  AppWindow,
  Briefcase,
  Bot,
  Code,
  CloudCog,
  Clock,
  Award,
  CheckCircle2,
  ArrowLeft,
  User,
  BookOpen,
  Play,
  Download,
  Video,
  Monitor,
  Menu as MenuIcon,
} from "lucide-react";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Course data (same as CoursesSection)
const courseColorMap = {
  primary: {
    gradient: "from-primary/20 to-primary-glow/20",
    bg: "bg-primary",
    text: "text-primary",
    textForeground: "text-primary-foreground",
    hoverBg: "hover:bg-primary/90",
  },
  accent: {
    gradient: "from-accent/20 to-cyan-400/20",
    bg: "bg-accent",
    text: "text-accent",
    textForeground: "text-accent-foreground",
    hoverBg: "hover:bg-accent/90",
  },
  secondary: {
    gradient: "from-secondary/20 to-purple-400/20",
    bg: "bg-secondary",
    text: "text-secondary",
    textForeground: "text-secondary-foreground",
    hoverBg: "hover:bg-secondary/90",
  },
};

const courses = [
  {
    id: "aws-cloud-developer",
    icon: Cloud,
    title: "AWS Cloud Developer",
    duration: "6 meses",
    modality: "Virtual",
    certification: "Internacional",
    description:
      "Domina Amazon Web Services y conviértete en un desarrollador cloud certificado. Aprende a diseñar, desarrollar y desplegar aplicaciones escalables en la nube.",
    highlights: [
      "Arquitectura cloud moderna",
      "Servicios AWS core (EC2, S3, Lambda)",
      "DevOps y CI/CD",
      "Preparación certificación AWS",
    ],
    syllabus: [
      "Fundamentos de Cloud Computing",
      "Servicios principales de AWS",
      "Arquitectura de aplicaciones escalables",
      "Seguridad y cumplimiento en la nube",
      "Automatización y DevOps",
      "Preparación para certificación",
    ],
    instructor: {
      name: "Instructor Certificado AWS",
      specialty: "Cloud Architecture",
      experience: "10+ años",
    },
    color: "primary",
  },
  {
    id: "ciberseguridad",
    icon: Shield,
    title: "Ciberseguridad",
    duration: "4 meses",
    modality: "Clases en vivo",
    certification: "Profesional",
    description:
      "Protege sistemas y redes con un enfoque 100% práctico. Aprende técnicas de pentesting, análisis de vulnerabilidades y defensa contra ciberataques.",
    highlights: [
      "Identificar vulnerabilidades",
      "Pentesting y simulación de ataques",
      "Proteger redes y sistemas",
      "Responder ante ciberataques",
    ],
    syllabus: [
      "Fundamentos de seguridad informática",
      "Análisis de vulnerabilidades",
      "Pentesting ético",
      "Seguridad en redes",
      "Respuesta ante incidentes",
      "Forense digital",
    ],
    instructor: {
      name: "Experto en Ciberseguridad",
      specialty: "Pentesting & Security",
      experience: "12+ años",
    },
    color: "accent",
  },
  {
    id: "inteligencia-artificial",
    icon: Brain,
    title: "Inteligencia Artificial",
    duration: "5 meses",
    modality: "A tu ritmo",
    certification: "Avanzado",
    description:
      "Domina Machine Learning, Deep Learning y NLP. Construye modelos de IA que resuelvan problemas reales y transformen industrias.",
    highlights: [
      "Machine Learning algorithms",
      "Deep Learning y Neural Networks",
      "Procesamiento de lenguaje natural",
      "Computer Vision y más",
    ],
    syllabus: [
      "Fundamentos de Machine Learning",
      "Algoritmos supervisados y no supervisados",
      "Deep Learning y redes neuronales",
      "Procesamiento de lenguaje natural (NLP)",
      "Computer Vision",
      "Proyectos prácticos con IA",
    ],
    instructor: {
      name: "Data Scientist Senior",
      specialty: "Machine Learning & AI",
      experience: "8+ años",
    },
    color: "secondary",
  },
  {
    id: "sql-architect",
    icon: Database,
    title: "SQL Architect",
    duration: "4 meses",
    modality: "Clases en vivo",
    certification: "Profesional",
    description:
      "Conviértete en un arquitecto de datos. Aprende a diseñar, administrar y optimizar bases de datos SQL para roles de Data Engineer, DBA o SQL Developer.",
    highlights: [
      "Docentes certificados",
      "Clases 100% prácticas",
      "Laboratorios reales",
      "SQL Server, MySQL, PostgreSQL",
    ],
    syllabus: [
      "Fundamentos de bases de datos",
      "Diseño y modelado de datos",
      "Consultas avanzadas SQL",
      "Optimización de rendimiento",
      "Administración de bases de datos",
      "Backup y recuperación",
    ],
    instructor: {
      name: "Database Administrator Senior",
      specialty: "Database Architecture",
      experience: "15+ años",
    },
    color: "primary",
  },
  {
    id: "microsoft-365-specialist",
    icon: AppWindow,
    title: "Microsoft 365 Specialist",
    duration: "3 meses",
    modality: "Flexible",
    certification: "Microsoft Official",
    description:
      "Conviértete en experto de M365. Aprende administración, seguridad y migración cloud en el ecosistema Microsoft más demandado del mercado.",
    highlights: [
      "Administración M365",
      "Exchange, SharePoint, Teams",
      "Power Platform",
      "Certificación Microsoft",
    ],
    syllabus: [
      "Introducción a Microsoft 365",
      "Administración de usuarios y licencias",
      "Exchange Online y correo",
      "SharePoint y OneDrive",
      "Microsoft Teams",
      "Power Platform básico",
    ],
    instructor: {
      name: "Microsoft Certified Trainer",
      specialty: "M365 Administration",
      experience: "10+ años",
    },
    color: "accent",
  },
  {
    id: "odoo-developer",
    icon: Briefcase,
    title: "Odoo Developer",
    duration: "4 meses",
    modality: "Práctico",
    certification: "Partner oficial",
    description:
      "Domina el ERP open source líder. Aprende desarrollo y customización de módulos Odoo para transformar procesos empresariales.",
    highlights: [
      "Desarrollo Python + Odoo",
      "Customización de módulos",
      "Integración empresarial",
      "Casos reales de negocio",
    ],
    syllabus: [
      "Introducción a Odoo ERP",
      "Desarrollo con Python",
      "Creación de módulos personalizados",
      "Vistas y formularios",
      "Integración de sistemas",
      "Despliegue y mantenimiento",
    ],
    instructor: {
      name: "Odoo Partner Developer",
      specialty: "ERP Development",
      experience: "7+ años",
    },
    color: "secondary",
  },
  {
    id: "agentes-ia",
    icon: Bot,
    title: "Agentes IA Developer 2026",
    duration: "3 meses",
    modality: "En línea",
    certification: "Especializado",
    description:
      "Crea agentes inteligentes con la última tecnología. Aprende LangChain, RAG, y desarrollo de chatbots empresariales con LLMs.",
    highlights: [
      "Dominio de n8n para automatización empresarial y flujos complejos.",
      "Desarrollo de agentes conversacionales 24/7 (texto, voz, imagen).",
      "Integración de APIs, bases de datos y sistemas avanzados.",
      "Capacitación para crear tu propia agencia de automatización rentable.",
      "Aumento de productividad en ventas, marketing y soporte.",
      "Desarrollo de proyectos reales para portafolio.",
      "Acompañamiento académico y tutoría personalizada.",
      "Alta rentabilidad del sector (87%).",
    ],
    graduateProfile: [
      "Automatización Empresarial Avanzada con n8n.",
      "Desarrollo de Agentes Conversacionales Multicanal.",
      "Integración de APIs y Bases de Datos (Google Cloud, Supabase, Redis).",
      "Implementación de Memoria Avanzada y RAG.",
      "Gestión Automática de Leads y Soporte.",
      "Creación y Gestión de Agencias de Automatización.",
    ],
    syllabus: [
      "Fundamentos de LLMs",
      "Desarrollo con LangChain",
      "Creación de chatbots",
      "RAG y búsqueda semántica",
      "Fine-tuning de modelos",
      "Despliegue en producción",
    ],
    instructor: {
      name: "AI Solutions Architect",
      specialty: "LLM & Chatbots",
      experience: "5+ años",
    },
    color: "primary",
  },
  {
    id: "python-data-science",
    icon: Code,
    title: "Python Data Science",
    duration: "5 meses",
    modality: "A tu ritmo",
    certification: "Data Science",
    description:
      "Conviértete en Data Scientist. Aprende Python, análisis de datos, visualización y machine learning para tomar decisiones basadas en datos.",
    highlights: [
      "Python desde cero",
      "Pandas, NumPy, Matplotlib",
      "Análisis estadístico",
      "Visualización de datos",
    ],
    syllabus: [
      "Introducción a Python",
      "Estructuras de datos",
      "Análisis con Pandas",
      "Visualización de datos",
      "Estadística aplicada",
      "Introducción a Machine Learning",
    ],
    instructor: {
      name: "Data Scientist & Python Expert",
      specialty: "Data Analysis",
      experience: "9+ años",
    },
    color: "accent",
  },
  {
    id: "azure-cloud-engineer",
    icon: CloudCog,
    title: "Azure Cloud Engineer",
    duration: "6 meses",
    modality: "Híbrido",
    certification: "Microsoft Azure",
    description:
      "Domina Microsoft Azure y conviértete en ingeniero cloud certificado. Aprende infraestructura, redes, seguridad y DevOps en Azure.",
    highlights: [
      "Infraestructura Azure",
      "Redes y seguridad cloud",
      "Azure DevOps",
      "Certificación AZ-104",
    ],
    syllabus: [
      "Fundamentos de Azure",
      "Gestión de recursos y suscripciones",
      "Redes virtuales y conectividad",
      "Almacenamiento en Azure",
      "Máquinas virtuales y contenedores",
      "Preparación para certificación",
    ],
    instructor: {
      name: "Azure Solutions Architect",
      specialty: "Cloud Engineering",
      experience: "11+ años",
    },
    color: "secondary",
  },
];

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll reveal hooks for each section
  const heroReveal = useScrollReveal(0.1);
  const syllabusReveal = useScrollReveal(0.1);
  const graduateReveal = useScrollReveal(0.1);
  const liveClassReveal = useScrollReveal(0.1);
  const platformReveal = useScrollReveal(0.1);
  const instructorReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Curso no encontrado</h1>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = course.icon;
  const colorScheme =
    courseColorMap[course.color as keyof typeof courseColorMap];

  const handleEnroll = () => {
    const whatsappNumber = "50364554356";
    const message = `Hola! Estoy interesado en el curso *${course.title}*. Me gustaría recibir más información sobre inscripción y costos.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} opacity-50`}
        ></div>

        <div 
          ref={heroReveal.ref}
          className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
            heroReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Volver a cursos
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`inline-flex items-center justify-center w-20 h-20 ${colorScheme.bg} rounded-2xl mb-6`}
              >
                <Icon className={`w-10 h-10 ${colorScheme.textForeground}`} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </Badge>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <BookOpen className="w-4 h-4" />
                  {course.modality}
                </Badge>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <Award className="w-4 h-4" />
                  {course.certification}
                </Badge>
              </div>

              <Button
                size="lg"
                onClick={handleEnroll}
                className={`${colorScheme.bg} ${colorScheme.textForeground} ${colorScheme.hoverBg} px-8`}
              >
                Inscríbete Ahora
              </Button>
            </div>

            {course.id === "agentes-ia" ? (
              <Card className="p-8 bg-card/80 backdrop-blur-sm">
                <iframe
                  className="w-full aspect-video rounded-xl mb-6"
                  src="https://www.youtube.com/embed/IjB76QCEDCE"
                  title="Video Introductorio Ingenio 360"
                  allowFullScreen
                />
                <h3 className="text-xl font-bold mb-4">Lo que aprenderás</h3>
                <ul className="space-y-3">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 ${colorScheme.text} flex-shrink-0 mt-0.5`}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : (
              <Card className="p-8 bg-card/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Lo que aprenderás</h3>
                <ul className="space-y-3">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 ${colorScheme.text} flex-shrink-0 mt-0.5`}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={syllabusReveal.ref}
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-150 ${
              syllabusReveal.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Contenido del Curso
            </h2>

            <Card className="p-8 bg-card/80 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {course.syllabus.map((module, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg ${colorScheme.bg} ${colorScheme.textForeground} flex items-center justify-center flex-shrink-0 font-bold`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{module}</p>
                    </div>
                  </div>
                ))}
              </div>

              {course.id === "agentes-ia" && (
                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    onClick={() => {
                      window.open("/TEMARIO AGENTES IA - 2026.pdf", "_blank");
                    }}
                  >
                    <Download className="w-5 h-5" />
                    Descargar Temario 2026
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Graduate Profile Section - Only for Agentes IA */}
      {course.id === "agentes-ia" && course.graduateProfile && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div 
              ref={graduateReveal.ref}
              className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                graduateReveal.isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                Perfil de Egreso
              </h2>
              <Card className="p-8 bg-card/80 backdrop-blur-sm">
                <ul className="space-y-4">
                  {course.graduateProfile.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 ${colorScheme.text} flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Live Class Sample Section - Only for Agentes IA */}
      {course.id === "agentes-ia" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div 
              ref={liveClassReveal.ref}
              className={`max-w-4xl mx-auto transition-all duration-1000 ${
                liveClassReveal.isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-center">
                Vive la experiencia
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Mira cómo son nuestras clases en vivo
              </p>
              <Card className="p-8 bg-card/80 backdrop-blur-sm">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/qr2lTdKy3Hk"
                  title="Clase en Vivo: Agentes IA"
                  allowFullScreen
                />
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Platform Preview Section - Only for Agentes IA */}
      {course.id === "agentes-ia" && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div 
              ref={platformReveal.ref}
              className={`max-w-4xl mx-auto transition-all duration-1000 delay-100 ${
                platformReveal.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-center">
                Tu Plataforma de Aprendizaje
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Accede a tutoriales y recursos desde cualquier dispositivo
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card 
                  className={`p-6 bg-card/80 backdrop-blur-sm transition-all duration-700 delay-200 ${
                    platformReveal.isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <iframe
                    className="w-full aspect-video rounded-xl mb-4"
                    src="https://www.youtube.com/embed/ivLTrqm7ulE"
                    title="Clases Grabadas - Tutoriales"
                    allowFullScreen
                  />
                  <h3 className="font-bold text-center">
                    Videos y Materiales
                  </h3>
                </Card>
                <Card 
                  className={`p-6 bg-card/80 backdrop-blur-sm transition-all duration-700 delay-300 ${
                    platformReveal.isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                  }`}
                >
                  <iframe
                    className="w-full aspect-video rounded-xl mb-4"
                    src="https://www.youtube.com/embed/DoTXjl2I0CI"
                    title="Navegación de Plataforma"
                    allowFullScreen
                  />
                  <h3 className="font-bold text-center">
                    Navegación Intuitiva
                  </h3>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Instructor Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={instructorReveal.ref}
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              instructorReveal.isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Tu Instructor
            </h2>

            <Card className="p-8 bg-card/80 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div
                  className={`w-32 h-32 rounded-full ${colorScheme.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <User className={`w-16 h-16 ${colorScheme.textForeground}`} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    {course.instructor.name}
                  </h3>
                  <p className={`${colorScheme.text} font-medium mb-2`}>
                    {course.instructor.specialty}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {course.instructor.experience} de experiencia en la
                    industria
                  </p>
                  <Badge variant="outline">Certificado Profesional</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={ctaReveal.ref}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              ctaReveal.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para transformar tu carrera?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a cientos de estudiantes que ya están construyendo su futuro
              tech
            </p>
            <Button
              size="lg"
              onClick={handleEnroll}
              className={`${colorScheme.bg} ${colorScheme.textForeground} ${colorScheme.hoverBg} px-8`}
            >
              Inscríbete Ahora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
