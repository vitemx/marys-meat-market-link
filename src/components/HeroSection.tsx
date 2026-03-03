import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import heroMeat1 from "@/assets/hero-meat-1.png";
import heroMeat2 from "@/assets/hero-meat-2.png";
import heroMeat3 from "@/assets/hero-meat-3.png";

const images = [heroMeat1, heroMeat2, heroMeat3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Cortes de carne fresca de res sobre tabla de madera"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
        />
      ))}
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 container text-center px-4">
        <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm font-body mb-4">
          Mercado Municipal 18 de Marzo · Tepeapulco, Hgo.
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-primary-foreground text-shadow-hero mb-6">
          Carnicería Mary
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-body max-w-2xl mx-auto mb-10">
          Carne fresca y de calidad todos los días
        </p>
        <a
          href="https://wa.me/527751293338"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          Hacer pedido por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
