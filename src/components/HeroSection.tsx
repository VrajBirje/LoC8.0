import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import LOCLogo from "../assets/LOC.png";


const suits = ["♠", "♥", "♦", "♣"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Floating suits */}
      {suits.map((suit, i) => (
        <span
          key={i}
          className={`absolute text-6xl md:text-8xl text-primary/20 select-none pointer-events-none ${
            i === 0 ? "suit-float top-[15%] left-[10%]" :
            i === 1 ? "suit-float-delay top-[25%] right-[12%]" :
            i === 2 ? "suit-float-slow bottom-[30%] left-[20%]" :
            "suit-float bottom-[20%] right-[18%]"
          }`}
        >
          {suit}
        </span>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            ♠ 21 & 22 February 2026 ♠
          </p>
          {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4">
            <span className="text-gradient-gold">LOC</span>
          </h1> */}
      <img 
  src={LOCLogo} 
  alt="LOC Logo" 
  className="w-[200px] md:w-[350px] lg:w-[600px]"
/>

          <h2 className="text-2xl md:text-4xl font-display text-foreground mb-6 mt-0">
            Line of Code Hackathon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 font-body">
            Code your way to the winning hand
          </p>
          <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-10">
            Prize Pool: ₹30,000
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#register"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg glow-pulse hover:brightness-110 transition"
          >
            Register Now ♠
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-lg border border-primary/50 text-primary font-bold text-lg hover:bg-primary/10 transition"
          >
            View Rules ♦
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
