const FooterSection = () => {
  return (
    <footer className="bg-navy-gradient py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading font-bold text-xl text-primary-foreground mb-2">
          Ionizador Solar
        </p>
        <p className="text-primary-foreground/60 text-sm mb-6">
          Tecnologia limpa para piscinas cristalinas.
        </p>
        <nav className="flex justify-center gap-6 mb-6 text-sm text-primary-foreground/50">
          <a href="#beneficios" className="hover:text-primary-foreground/80 transition-colors">Benefícios</a>
          <a href="#como-funciona" className="hover:text-primary-foreground/80 transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-primary-foreground/80 transition-colors">FAQ</a>
          <a href="#comprar" className="hover:text-primary-foreground/80 transition-colors">Comprar</a>
        </nav>
        <p className="text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} Ionizador Solar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
