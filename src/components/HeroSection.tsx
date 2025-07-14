
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
                <span className="block text-primary">{t.hero.titlePart2}</span>
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

          {/* Hero Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative bg-card rounded-2xl p-8 shadow-medical">
              {/* Voice Analysis Dashboard */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-foreground">Provider Dashboard</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Emotional Wellness', value: 85, color: 'bg-secondary' },
                    { label: 'Fatigue Detection', value: 72, color: 'bg-primary' },
                    { label: 'Speech Clarity', value: 91, color: 'bg-secondary' },
                    { label: 'Cognitive Health', value: 88, color: 'bg-primary' }
                  ].map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{metric.label}</span>
                          <span className="font-medium">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-accent rounded-full h-2">
                          <div 
                            className={`${metric.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${metric.value}%`, animationDelay: `${i * 300}ms` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voice Journaling Preview */}
              <div className="bg-accent rounded-lg p-4">
                <div className="text-sm font-medium text-foreground mb-2">Latest Voice Journal</div>
                <div className="text-xs text-muted-foreground">
                  "Today I'm feeling more energetic. My morning routine went smoothly..."
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Analyzed for emotional patterns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
