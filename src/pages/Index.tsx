import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofSection from "@/components/ProofSection";
import PillarsSection from "@/components/PillarsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <ProofSection />
      <PillarsSection />
      <AboutSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
