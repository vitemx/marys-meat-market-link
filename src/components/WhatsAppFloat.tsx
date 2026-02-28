import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/527751293338"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 animate-float"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFloat;
