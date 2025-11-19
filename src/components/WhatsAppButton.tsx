import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "50364554356";
  const defaultMessage =
    "Hola, me interesa obtener más información sobre los cursos de Ingenio 360";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      // HE ELIMINADO 'animate-bounce-in' Y PUESTO 'animate-in zoom-in fade-in duration-500'
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover-lift animate-in zoom-in fade-in "
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />

      {/* Pulse effect (Este está bien, déjalo para que llame la atención) */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </button>
  );
};

export default WhatsAppButton;
