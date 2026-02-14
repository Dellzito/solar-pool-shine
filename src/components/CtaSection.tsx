import { motion } from "framer-motion";
import ionizadorImg from "@/assets/ionizador-solar.png";

const CtaSection = () => {
  return (
    <section id="comprar" className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={ionizadorImg}
              alt="Ionizador Solar para Piscina"
              className="w-64 md:w-80 drop-shadow-2xl animate-float"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary-foreground mb-6">
              Transforme Sua Piscina <span className="text-accent">Agora</span>
            </h2>
            <ul className="space-y-3 mb-8 text-primary-foreground/85 text-lg">
              <li>✅ 2 Hastes de Cobre de alta durabilidade</li>
              <li>✅ Painel Solar de alta eficiência</li>
              <li>✅ Para piscinas de até 60.000 litros</li>
              <li>✅ Garantia de 1 ano</li>
              <li>✅ Frete Grátis para todo o Brasil</li>
            </ul>

            <div className="mb-6">
              <p className="text-primary-foreground/60 text-sm font-body line-through">
                De R$ 497,00
              </p>
              <p className="text-4xl md:text-5xl font-heading font-black text-accent">
                R$ 297,00
              </p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                ou 12x de R$ 29,04 sem juros
              </p>
            </div>

            <a
              href="#"
              className="inline-block bg-cta-gradient text-accent-foreground font-heading font-bold text-xl px-10 py-5 rounded-xl shadow-cta hover:scale-105 transition-transform animate-pulse-soft"
            >
              🛒 Comprar Agora com Desconto
            </a>

            <p className="text-primary-foreground/50 text-xs mt-4">
              Compra 100% segura • Satisfação garantida ou seu dinheiro de volta
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
