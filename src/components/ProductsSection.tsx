import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import molidaRes from "@/assets/products/molida-res.png";
import bistecRes from "@/assets/products/bistec-res.png";
import arrachera from "@/assets/products/arrachera.png";
import chambarete from "@/assets/products/chambarete.png";
import { Button } from "./ui/button";

const products = [
  {
    product: "Molida de res",
    description: "Carne de excelente calidad para tu hogar",
    imagen: molidaRes,
  },
  {
    product: "Bistec de res",
    description: "Cortes frescos y suaves para tu familia",
    imagen: bistecRes,
  },
  {
    product: "Arrachera",
    description: "Perfecta para asar, jugosa y tierna",
    imagen: arrachera,
  },
  {
    product: "Chambarete",
    description: "Ideal para caldos y guisados tradicionales",
    imagen: chambarete,
  },
  {
    product: "Molida de res",
    description: "Carne de excelente calidad 80/20",
    imagen: molidaRes,
  },
  {
    product: "Bistec de res",
    description: "Cortes frescos y suaves para tu familia",
    imagen: bistecRes,
  },
  {
    product: "Arrachera",
    description: "Perfecta para asar, jugosa y tierna",
    imagen: arrachera,
  },
  {
    product: "Chambarete",
    description: "Ideal para caldos y guisados tradicionales",
    imagen: chambarete,
  },
];

const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="productos" className="py-20 bg-muted">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Te Ofrecemos
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(25%-18px)] min-w-[250px] h-[350px] rounded-xl overflow-hidden snap-start relative group"
                style={{
                  backgroundImage: `url(${product.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                    {product.product}
                  </h3>
                  <p className="text-sm text-primary-foreground/90">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary-foreground hover:bg-primary-foreground/90 p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary-foreground hover:bg-primary-foreground/90 p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
        <div className="text-center mt-8">
          <Button
            size="lg"
            onClick={() => window.location.href = "/products"}
          >
            Más productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
