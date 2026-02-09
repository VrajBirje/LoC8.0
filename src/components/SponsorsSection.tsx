import { motion } from "framer-motion";

const sponsors = [
  "TechCorp", "InnovateLabs", "DevForge", "CloudNine", "DataSync",
  "PixelPerfect", "CodeCraft", "NexGen AI",
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">♣ Powered By ♣</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our <span className="text-gradient-gold">Sponsors</span>
          </h2>
        </motion.div>

        {/* Infinite scroll */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-marquee">
            {[...sponsors, ...sponsors].map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 card-shine rounded-xl px-10 py-6 flex items-center justify-center min-w-[180px]"
              >
                <span className="font-display text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection;
