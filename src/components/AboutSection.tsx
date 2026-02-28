import { Beef, ShieldCheck, Heart } from "lucide-react";

const features = [
  { icon: Beef, title: "Carne Fresca", desc: "Productos frescos seleccionados diariamente" },
  { icon: ShieldCheck, title: "Calidad Garantizada", desc: "Los mejores cortes para tu hogar" },
  { icon: Heart, title: "Atención Amable", desc: "Servicio cercano y de confianza" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Sobre Nosotros
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
        <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          En Carnicería Mary ofrecemos carne fresca y de excelente calidad todos los días. 
          Nos encontramos dentro del Mercado Municipal 18 de Marzo en Tepeapulco, Hidalgo, 
          brindando atención amable y productos confiables para tu hogar.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
