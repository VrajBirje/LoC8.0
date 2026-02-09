import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who can participate?", a: "Any college student (undergraduate or postgraduate) from any discipline can participate. No prior hackathon experience needed!" },
  { q: "What is the team size?", a: "Teams can have 2 to 4 members. Solo participation is not allowed — collaboration is key!" },
  { q: "What tech stack is allowed?", a: "You can use any programming language, framework, or tool. There are no restrictions on the technology stack." },
  { q: "Does it cost anything to register?", a: "Registration is completely free! We want to make this event accessible to everyone." },
  { q: "Is there a specific theme?", a: "The hackathon has 3 domains: Web Development, AI, and Machine Learning. You must pick one domain for your project." },
  { q: "What should we bring?", a: "Bring your laptop, charger, student ID, and your creativity. Food and beverages will be provided during the event." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">♦ Need Answers? ♦</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Frequently <span className="text-gradient-gold">Asked</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <AccordionItem value={`faq-${i}`} className="card-shine rounded-xl px-6 border-none">
                <AccordionTrigger className="text-foreground font-display text-lg hover:text-primary hover:no-underline">
                  <span className="text-primary mr-3">♠</span> {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
