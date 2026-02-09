import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
