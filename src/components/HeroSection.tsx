import { Button } from "@/components/ui/button";
import { Brain, Mic, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Modernize
                <span className="block text-primary">Chronic Care</span>
                <span className="block text-secondary">Monitoring</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Use voice to remotely monitor disease progression with real-time, objective insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={onRegisterClick}
                className="text-lg px-8 py-4"
              >
                Register Your Facility
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Brain className="w-5 h-5 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mic className="w-5 h-5 text-secondary" />
                <span>Voice Biomarkers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Real-time Insights</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative bg-card rounded-2xl p-8 shadow-medical">
              {/* Voice Waveform Animation */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-foreground">Voice Analysis Dashboard</h3>
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(12)].map((_, j) => (
                          <div
                            key={j}
                            className="w-1 bg-gradient-hero rounded-full animate-pulse-medical"
                            style={{
                              height: `${Math.random() * 20 + 4}px`,
                              animationDelay: `${(i * 12 + j) * 100}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {['Tremor Detection', 'Respiratory Pattern', 'Speech Clarity', 'Fatigue Level', 'Overall Health'][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock Dashboard */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Voice Clarity</div>
                </div>
                <div className="bg-accent rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary">Normal</div>
                  <div className="text-sm text-muted-foreground">Respiratory</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};