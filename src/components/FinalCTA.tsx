import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onRegisterClick: () => void;
}

export const FinalCTA = ({ onRegisterClick }: FinalCTAProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse-medical"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse-medical" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to transform your chronic care approach?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join early pilots and shape the future of voice-based health monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={onRegisterClick}
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-glow"
            >
              Register Your Facility
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80">
            <div className="text-sm">✓ HIPAA Compliant</div>
            <div className="text-sm">✓ GDPR Compliant</div>
            <div className="text-sm">✓ No Hardware Required</div>
            <div className="text-sm">✓ Easy Integration</div>
          </div>
        </div>
      </div>
    </section>
  );
};