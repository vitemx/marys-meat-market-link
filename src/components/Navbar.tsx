import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#horarios", label: "Horarios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-foreground/90 backdrop-blur-md border-b border-border/20">
      <div className="container flex items-center justify-between h-16 px-4">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="font-display text-xl font-bold text-primary-foreground"
        >
          Carnicería <span className="text-primary">Mary</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(l.href);
              }}
              className="text-primary-foreground/80 hover:text-primary transition-colors font-body text-sm uppercase tracking-wider cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground" aria-label="Menú">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-border/20 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(l.href);
              }}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-primary transition-colors font-body text-sm uppercase tracking-wider cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
