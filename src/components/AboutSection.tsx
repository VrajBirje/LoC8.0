import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ShieldCheck, Gift } from "lucide-react";

const cards = [
  {
    suit: "♠",
    icon: FileText,
    title: "About the Event",
    desc: "LOC is a 36-hour hackathon where the brightest minds come together to build, innovate, and compete. Whether you're a seasoned dev or a first-timer, this is your stage.",
  },
  {
    suit: "♦",
    icon: ShieldCheck,
    title: "Rules & Guidelines",
    desc: "Teams of 2-4 members. Original work only. Pre-built templates allowed but no pre-written project code. Judged on innovation, impact, technical execution & presentation.",
  },
  {
    suit: "♥",
    icon: Gift,
    title: "Participant Benefits",
    desc: "Mentorship from industry experts, networking opportunities, free swag & goodies, certificates for all participants, and a chance to win exciting cash prizes.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">♣ Know the Game ♣</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Unfold Your <span className="text-gradient-gold">Cards</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-shine rounded-xl p-8 group cursor-default transition-all duration-300 hover:-translate-y-2"
              style={{ perspective: "800px" }}
            >
              <span className="text-4xl text-primary mb-4 block">{card.suit}</span>
              <card.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
