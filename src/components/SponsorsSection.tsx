import { motion } from "framer-motion";

const partners = [
  {
    name: "Unstop",
    type: "Branding Partner",
    logo: "/logos/unstop.png",
  },
  {
    name: "RedBull",
    type: "Energy Partner",
    logo: "/logos/redbull.png",
  },
];

const sponsors = [
  {
    name: "iPolygon",
    logo: "/logos/polygon.png",
  },
  {
    name: "Vercel",
    logo: "/logos/vercel.png",
  },
  {
    name: "Aventus",
    logo: "/logos/aventus.png",
  },
  {
    name: "CertifYx",
    logo: "/logos/certifyx.png",
  },
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
          className="text-center mb-20"
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-2">♣ Powered By ♣</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our <span className="text-gradient-gold">Partners & Sponsors</span>
          </h2>
        </motion.div>

        {/* Our Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
            Our <span className="text-gradient-gold">Partners</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="card-shine rounded-xl px-8 py-6 flex flex-col items-center justify-center min-w-[200px] gap-3"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="text-center">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {partner.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{partner.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
            Our <span className="text-gradient-gold">Sponsors</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.map((sponsor, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="card-shine rounded-xl px-10 py-6 flex flex-col items-center justify-center min-w-[200px] gap-3"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <p className="font-display text-lg font-semibold text-foreground text-center">
                  {sponsor.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
