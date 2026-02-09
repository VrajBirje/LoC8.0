import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Brain, Cpu } from "lucide-react";

const domains = [
  {
    suit: "♠",
    icon: Globe,
    title: "Web Development",
    front: "Build stunning web applications with modern frameworks and tools.",
    back: "Full-stack projects using React, Next.js, Node, databases, APIs. Focus on UX, performance, and creativity.",
    color: "text-royal-blue",
  },
  {
    suit: "♥",
    icon: Brain,
    title: "Artificial Intelligence",
    front: "Leverage AI to solve real-world problems with intelligent systems.",
    back: "NLP, Computer Vision, Generative AI, LLM integrations, chatbots, recommendation systems, and more.",
    color: "text-crimson",
  },
  {
    suit: "♣",
    icon: Cpu,
    title: "Machine Learning",
    front: "Train models that learn, predict, and transform data into insights.",
    back: "Predictive analytics, classification, deep learning, data pipelines, model deployment & evaluation.",
    color: "text-emerald",
  },
];

const DomainCard = ({ domain, index }: { domain: typeof domains[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative h-80 cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 card-shine rounded-xl p-8 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className={`text-6xl mb-4 ${domain.color}`}>{domain.suit}</span>
          <domain.icon className={`w-10 h-10 ${domain.color} mb-4`} />
          <h3 className="text-xl font-display font-bold text-foreground mb-3">{domain.title}</h3>
          <p className="text-muted-foreground text-sm">{domain.front}</p>
          <p className="text-xs text-primary mt-4">Click to flip ♦</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 card-shine rounded-xl p-8 flex flex-col items-center justify-center text-center border border-primary/30"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className={`text-4xl mb-4 ${domain.color}`}>{domain.suit}</span>
          <h3 className="text-lg font-display font-bold text-foreground mb-4">{domain.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{domain.back}</p>
        </div>
      </div>
    </motion.div>
  );
};

const DomainsSection = () => {
  return (
    <section id="domains" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">♦ Pick Your Suit ♦</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Hack <span className="text-gradient-gold">Domains</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {domains.map((d, i) => (
            <DomainCard key={d.title} domain={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
