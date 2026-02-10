import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ♠",
      description: "We'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">
            ♥ Get in Touch ♥
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-shine rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition resize-none"
                placeholder="Tell us something..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg glow-pulse hover:brightness-110 transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send Message ♠
            </button>
          </motion.form>

          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card-shine rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Contact Details
              </h3>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="text-primary w-6 h-6" />
                <a
                  href="mailto:djsacm@gmail.com"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  djsacm@gmail.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-4">
                <Phone className="text-primary w-6 h-6" />
                <div className="text-muted-foreground">
                  <p>+91 75068 97238</p>
                  <p>+91 883 068 6336</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://www.instagram.com/djsanghvi_acm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>

                <a
                  href="https://www.linkedin.com/company/dj-sanghvi-acm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
