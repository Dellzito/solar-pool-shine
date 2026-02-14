import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carla M.",
    location: "São Paulo, SP",
    text: "Minha piscina nunca ficou tão limpa! Reduzi o cloro em 90% e meus filhos não reclamam mais de olhos vermelhos. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Roberto S.",
    location: "Belo Horizonte, MG",
    text: "Economia absurda. Gastava quase R$ 400/mês com produtos químicos, agora gasto menos de R$ 50. O ionizador se pagou em 2 meses.",
    rating: 5,
  },
  {
    name: "Ana Paula L.",
    location: "Florianópolis, SC",
    text: "Super prático! Coloquei na piscina e esqueci. A água fica cristalina sem esforço nenhum. Melhor investimento que fiz para minha casa.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-water-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground mb-4">
            Quem Usa, <span className="text-secondary">Aprova</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 5.000 famílias já transformaram suas piscinas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
