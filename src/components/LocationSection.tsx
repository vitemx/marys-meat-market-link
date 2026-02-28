import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MapPin className="w-7 h-7 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Ubicación
          </h2>
        </div>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
        <p className="text-center text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Avenida Felipe Ángeles, Tepeapulco, Hidalgo.<br />
          Interior del Mercado Municipal 18 de Marzo, Local 8.
        </p>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border">
          <iframe
            title="Ubicación Carnicería Mary - Mercado Municipal 18 de Marzo, Tepeapulco"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.8!2d-98.555!3d19.785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a5c0a0a0a0a0%3A0x0!2sMercado+Municipal+18+de+Marzo+Tepeapulco!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
