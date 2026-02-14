import { motion } from "framer-motion";
import ionizadorImg from "@/assets/ionizador-solar.png";
import poolBg from "@/assets/pool-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={poolBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-accent/20 text-accent font-heading font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full mb-6">
              🌞 Energia Solar • Zero Química
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight text-primary-foreground mb-6">
              Piscina Limpa e Cristalina{" "}
              <span className="text-accent">Sem Cloro</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-body leading-relaxed">
              O Ionizador Solar elimina até <strong>95% do uso de cloro</strong>,
              protege sua saúde e economiza até <strong>R$ 3.000/ano</strong> em
              produtos químicos. Para piscinas de até 60.000 litros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#comprar"
                className="bg-cta-gradient text-accent-foreground font-heading font-bold text-lg px-8 py-4 rounded-xl shadow-cta hover:scale-105 transition-transform text-center"
              >
                Quero Minha Piscina Limpa →
              </a>
              <a
                href="#como-funciona"
                className="border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition-colors text-center"
              >
                Como Funciona?
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8 text-primary-foreground/70 text-sm font-body">
              <span>✅ Frete Grátis</span>
              <span>✅ Garantia 1 Ano</span>
              <span>✅ 12x sem juros</span>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="animate-float">
              <img
                src={ionizadorImg}
                alt="Ionizador Solar para Piscina com painel solar e hastes de cobre"
                className="w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
