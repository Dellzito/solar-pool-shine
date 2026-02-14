import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Coloque na Piscina",
    description: "Basta colocar o ionizador flutuando na água. Sem fios, sem instalação.",
  },
  {
    number: "02",
    title: "O Sol Faz o Trabalho",
    description: "O painel solar gera energia que ativa as hastes de cobre, liberando íons purificadores.",
  },
  {
    number: "03",
    title: "Água Cristalina",
    description: "Os íons de cobre eliminam algas e bactérias, mantendo sua piscina limpa por muito mais tempo.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground mb-4">
            Simples de Usar,{" "}
            <span className="text-secondary">Poderoso nos Resultados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em 3 passos, sua piscina fica cristalina sem esforço.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="text-7xl md:text-8xl font-heading font-black text-secondary/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3 -mt-8">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 lg:-right-8 text-secondary/30 text-4xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
