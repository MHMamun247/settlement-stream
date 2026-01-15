import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { BentoGrid } from "@/components/BentoGrid";
import { DeveloperSection } from "@/components/DeveloperSection";
import { IndustryTabs } from "@/components/IndustryTabs";
import { GlobalMap } from "@/components/GlobalMap";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TrustStrip />
        <BentoGrid />
        <DeveloperSection />
        <IndustryTabs />
        <GlobalMap />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
