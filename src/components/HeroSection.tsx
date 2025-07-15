import { Button } from "@/components/ui/button";
import { Brain, Mic, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
    const { t, isRTL } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse-medical"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-secondary rounded-full animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary rounded-full animate-pulse-medical" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t.hero.titlePart1}
                <span className="block text-white">{t.hero.titlePart2}</span>
                <span className="block text-secondary">{t.hero.titlePart3}</span>
              </h1>
              
              <p className="text-xl text-white max-w-2xl">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={onRegisterClick}
                className="text-lg px-8 py-4"
              >
                {t.hero.joinWaitlist}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.open('mailto:info@munsait.com?subject=Partnership Inquiry', '_blank')}
              >
                {t.hero.partnerWithUs}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-white">
                <Brain className="w-5 h-5 text-secondary" />
                <span>{t.hero.aiPowered}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <Mic className="w-5 h-5 text-secondary" />
                <span>{t.hero.voiceBiomarkers}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span>{t.hero.clinicalIntelligence}</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration - Dashboard Screenshot */}
          <div className="relative animate-scale-in">
            <img
              src="/dashboard-screenshot.png"
              alt="Munsait Provider Dashboard - Real-time voice biomarker analytics and patient monitoring"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};