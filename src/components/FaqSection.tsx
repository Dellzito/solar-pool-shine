import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O ionizador solar funciona em qualquer piscina?",
    a: "Sim! Ele funciona em piscinas de fibra, alvenaria e vinil, com capacidade de até 60.000 litros.",
  },
  {
    q: "Preciso eliminar completamente o cloro?",
    a: "Não. O ionizador reduz em até 95% a necessidade de cloro. Uma pequena quantidade residual ainda é recomendada para garantir a sanitização completa.",
  },
  {
    q: "Quanto tempo duram as hastes de cobre?",
    a: "As duas hastes de cobre duram em média de 1 a 2 anos, dependendo do tamanho da piscina e da incidência solar. A substituição é simples e acessível.",
  },
  {
    q: "Funciona em dias nublados?",
    a: "Sim. O painel solar funciona com luz difusa também. Nos dias ensolarados a eficiência é máxima, mas mesmo em dias nublados continua gerando íons.",
  },
  {
    q: "Como é a manutenção?",
    a: "Praticamente zero. Basta limpar o painel solar ocasionalmente com um pano úmido para manter a eficiência máxima.",
  },
  {
    q: "Posso usar com bomba e filtro normalmente?",
    a: "Com certeza! O ionizador é complementar ao sistema de filtragem. Ele atua na purificação biológica, enquanto o filtro cuida da purificação física.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground mb-4">
            Perguntas <span className="text-secondary">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
