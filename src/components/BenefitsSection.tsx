import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Zap, Leaf, DollarSign, Sun } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Elimina até 95% do Cloro",
    description: "Os íons de cobre purificam a água naturalmente, sem irritar olhos e pele.",
  },
  {
    icon: DollarSign,
    title: "Economia de até R$ 3.000/ano",
    description: "Reduza drasticamente os gastos com cloro, algicida e produtos químicos.",
  },
  {
    icon: Sun,
    title: "100% Energia Solar",
    description: "Funciona com a energia do sol. Sem fios, sem eletricidade, sem custo operacional.",
  },
  {
    icon: ShieldCheck,
    title: "Saúde para sua Família",
    description: "Água livre de químicos agressivos. Ideal para crianças e peles sensíveis.",
  },
  {
    icon: Zap,
    title: "Instalação em 5 Segundos",
    description: "É só colocar na piscina. Sem instalação técnica, sem manutenção complexa.",
  },
  {
    icon: Leaf,
    title: "Sustentável e Ecológico",
    description: "Tecnologia verde que não agride o meio ambiente nem a sua piscina.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-water-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground mb-4">
            Por Que Escolher o <span className="text-secondary">Ionizador Solar</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A tecnologia que revolucionou o tratamento de piscinas em mais de 40 países.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <benefit.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
