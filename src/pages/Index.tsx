import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RegistrationForm } from "@/components/RegistrationForm";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyVoice } from "@/components/WhyVoice";
import { PlatformFeatures } from "@/components/PlatformFeatures";
import { PatientAdherence } from "@/components/PatientAdherence";
import { ProviderValue } from "@/components/ProviderValue";
import { PrivacyEthics } from "@/components/PrivacyEthics";
import { WhoWeAre } from "@/components/WhoWeAre";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ResearchSection } from "@/components/ResearchSection";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header onRegisterClick={handleRegisterClick} />
        
        <main className="pt-16">
          <HeroSection onRegisterClick={handleRegisterClick} />
          <HowItWorks />
          <WhyVoice />

          <ResearchSection />
          <PatientAdherence />
          <ProviderValue />
          <PrivacyEthics />
          <WhoWeAre />
          <FinalCTA onRegisterClick={handleRegisterClick} />
        </main>

        <Footer />

        <RegistrationForm
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
};

export default Index;