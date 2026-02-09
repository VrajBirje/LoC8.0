const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-3xl font-display font-bold text-gradient-gold mb-4">♠ ♥ ♦ ♣</p>
        <p className="text-muted-foreground text-sm mb-2">
          LOC – Line of Code Hackathon 2025
        </p>
        <p className="text-muted-foreground text-xs">
          Built with passion. May the best code win.
        </p>

        {/* Register CTA */}
        <a
          href="#register"
          className="inline-block mt-6 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold glow-pulse hover:brightness-110 transition"
        >
          Register Now ♠
        </a>
      </div>
    </footer>
  );
};

export default Footer;
