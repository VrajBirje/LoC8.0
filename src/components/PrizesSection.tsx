import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, Gift, Briefcase } from "lucide-react";

const prizes = [
  { suit: "♠", icon: Trophy, title: "Winner", prize: "₹25,000", subtitle: "The Royal Flush" },
  { suit: "♥", icon: Medal, title: "Runner-Up", prize: "₹15,000", subtitle: "Full House" },
  { suit: "♦", icon: Star, title: "Special Awards", prize: "₹10,000", subtitle: "Wild Card" },
];

const benefits = [
  { icon: Award, text: "Certificates for all" },
  { icon: Gift, text: "Swags & Goodies" },
  { icon: Briefcase, text: "Internship Opportunities" },
  { icon: Trophy, text: "Cash Prizes" },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">♥ The Jackpot ♥</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Prize <span className="text-gradient-gold">Pool</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {prizes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`card-shine rounded-xl p-8 text-center hover:-translate-y-2 transition-all duration-300 ${
                i === 0 ? "border border-primary/40 border-glow-gold" : ""
              }`}
            >
              <span className="text-5xl text-primary block mb-4">{p.suit}</span>
              <p.icon className={`w-12 h-12 mx-auto mb-4 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
              <h3 className="text-xl font-display font-bold text-foreground">{p.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{p.subtitle}</p>
              <p className="text-3xl font-display font-bold text-gradient-gold">{p.prize}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2 p-4"
            >
              <b.icon className="w-8 h-8 text-primary" />
              <p className="text-sm text-muted-foreground">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
