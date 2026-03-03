import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import cowImg from "@/assets/cow.png";
import pigImg from "@/assets/pig.png";
import chickenImg from "@/assets/chicken.png";
import molidaRes from "@/assets/products/molida-res.png";
import bistecRes from "@/assets/products/bistec-res.png";
import arrachera from "@/assets/products/arrachera.png";
import chambarete from "@/assets/products/chambarete.png";

const categories = [
    {
        id: 1,
        icon: cowImg,
        name: "Carne de Res",
        description: "Res, cerdo y cordero frescos",
        products: [
          { name: "Molida de res", price: "$120/kg", image: molidaRes, description: "Carne molida de la mas alta calidad, disfruta unas ricas hamburguesas, picadillo, rellena tus chiles en nogada o mejor aun inventa el nuevo platillo favorito de tu familia." },
          { name: "Bistec de res", price: "$150/kg", image: bistecRes, description: "Cortes frescos perfectos para preparar a la plancha o en guisados tradicionales." },
          { name: "Arrachera", price: "$180/kg", image: arrachera, description: "Perfecta para asar, jugosa y tierna. Ideal para tacos y parrilladas." },
          { name: "Chambarete", price: "$140/kg", image: chambarete, description: "Excelente para caldos, cocidos y guisados de larga cocción." },
        ],
    },
    {
        id: 2,
        name: "Carne de Cerdo",
        icon: pigImg,
        description: "Res, cerdo y cordero frescos",
        products: [
          { name: "Chuleta de cerdo", price: "$110/kg", image: undefined, description: "Jugosas chuletas perfectas para asar o freír." },
          { name: "Costilla de cerdo", price: "$130/kg", image: undefined, description: "Ideales para barbacoa y guisados con salsa." },
          { name: "Lomo de cerdo", price: "$140/kg", image: undefined, description: "Corte magro y suave, perfecto para hornear." },
        ]
    },
    {
        id: 3,
        name: "Pollo",
        icon: chickenImg,
        description: "Res, cerdo y cordero frescos",
        products: [
          { name: "Pechuga de pollo", price: "$90/kg", image: undefined, description: "Pechuga fresca sin hueso, ideal para dietas saludables." },
          { name: "Pierna de pollo", price: "$70/kg", image: undefined, description: "Piernas jugosas perfectas para hornear o guisar." },
          { name: "Muslo de pollo", price: "$75/kg", image: undefined, description: "Muslos tiernos con mucho sabor." },
        ]
    }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-10">
        <section className="py-20 bg-background">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-4">
              Nuestros Productos
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Aquí encontrarás todos nuestros productos de carne fresca y de calidad.
            </p>
            
            {/* Categories Navbar */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex flex-col items-center gap-2 p-6 rounded-xl transition-all ${
                    selectedCategory.id === category.id
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card border border-border hover:shadow-md"
                  }`}
                >
                  <img src={category.icon} alt={category.name} className="w-16 h-16 object-contain" />
                  <span className="font-display font-bold text-lg">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Products Display */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Left: Category or Product Image */}
              <div className="rounded-xl overflow-hidden h-[400px] bg-muted flex items-center justify-center p-8">
                <img 
                  src={selectedProduct !== null && selectedCategory.products[selectedProduct]?.image 
                    ? selectedCategory.products[selectedProduct].image 
                    : selectedCategory.icon} 
                  alt={selectedProduct !== null ? selectedCategory.products[selectedProduct]?.name : selectedCategory.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              {/* Right: Products List */}
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  {selectedCategory.name}
                </h2>
                {selectedCategory.products.map((product, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-card border border-border hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        setSelectedProduct(index);
                        setExpandedProduct(expandedProduct === index ? null : index);
                      }}
                      className="w-full p-4 text-left"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-display font-semibold text-lg">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-bold">{product.price}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${
                            expandedProduct === index ? "rotate-180" : ""
                          }`} />
                        </div>
                      </div>
                    </button>
                    {expandedProduct === index && product.description && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground">
                        {product.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;
