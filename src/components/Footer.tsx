const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-border/20 py-8">
      <div className="container px-4 text-center">
        <p className="text-primary-foreground/60 text-sm font-body">
          © {new Date().getFullYear()} Carnicería Mary. Todos los derechos reservados.
        </p>
        <p className="text-primary-foreground/40 text-xs mt-2">
          Mercado Municipal 18 de Marzo, Tepeapulco, Hidalgo.
        </p>
        <span className="text-primary-foreground/60 text-sm font-thin">
          Desarrollado por <a href="www.vitemx.com" className="">vitemx</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
