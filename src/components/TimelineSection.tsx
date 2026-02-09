import { motion } from "framer-motion";

const steps = [
  { suit: "♠", title: "Registration Opens", date: "1 Feb", desc: "Sign up your team and submit project ideas." },
  { suit: "♦", title: "PPT Submission", date: "10 Feb", desc: "Submit your project proposal for screening." },
  { suit: "♥", title: "Shortlisting", date: "15 Feb", desc: "Selected teams are announced for the finals." },
  { suit: "♣", title: "Hackathon Day 1", date: "21 Feb", desc: "Opening ceremony, team setup, and hacking begins!" },
  { suit: "♠", title: "Hackathon Day 2", date: "22 Feb", desc: "Final submissions, judging & awards ceremony." },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">♠ The Game Plan ♠</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Event <span className="text-gradient-gold">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-glow-gold z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="card-shine rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-2xl text-primary">{step.suit}</span>
                  <p className="text-xs text-primary font-semibold mt-2">{step.date}</p>
                  <h3 className="text-lg font-display font-bold text-foreground mt-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
