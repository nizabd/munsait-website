
import { Mic, Brain, Monitor } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Patients speak naturally",
      description: "Through voice journaling or simple check-ins, patients share their thoughts and feelings in their own words, anytime, anywhere."
    },
    {
      icon: Brain,
      title: "AI analyzes vocal features",
      description: "Our advanced algorithms detect subtle changes in voice patterns that indicate fatigue, stress, emotional state, and cognitive changes."
    },
    {
      icon: Monitor,
      title: "Providers receive continuous, objective insights",
      description: "Get longitudinal data and trend analysis through intuitive dashboards, while assigning personalized care plans. Patients receive voice-driven prompts and reminders — improving engagement, adherence, and outcomes."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works for Providers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple three-step process that transforms patient voices into actionable healthcare insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform translate-x-4 z-0"></div>
                )}

                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-medical">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
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
