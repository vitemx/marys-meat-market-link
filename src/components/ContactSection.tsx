import { Phone, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-foreground text-primary-foreground">
      <div className="container px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Contáctanos
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          <div className="flex flex-col items-center gap-3">
            <Phone className="w-8 h-8 text-primary" />
            <p className="text-lg font-semibold">Teléfono / WhatsApp</p>
            <a href="tel:7751293338" className="text-primary-foreground/80 hover:text-primary transition-colors text-lg">
              775 129 3338
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            <p className="text-lg font-semibold">Dirección</p>
            <p className="text-primary-foreground/80 text-center leading-relaxed">
              Mercado Municipal 18 de Marzo,<br />Local 8, Tepeapulco, Hgo.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/527751293338"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-7 h-7" />
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
