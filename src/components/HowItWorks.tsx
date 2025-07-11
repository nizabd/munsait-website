import { Mic, Brain, Monitor, Activity } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Patients record 30-second voice samples weekly",
      description: "Simple voice recordings using any smartphone - no special hardware required"
    },
    {
      icon: Brain,
      title: "AI analyzes vocal biomarkers",
      description: "Advanced algorithms detect subtle changes in voice patterns indicative of health status"
    },
    {
      icon: Monitor,
      title: "Doctor dashboard updates with trends & alerts",
      description: "Real-time visualization of patient health trends with intelligent alert system"
    },
    {
      icon: Activity,
      title: "Teams act based on insights",
      description: "Make informed care decisions with objective data between visits"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, seamless integration into your existing care workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform translate-x-4"></div>
                )}

                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-medical">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};