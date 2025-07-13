
import { UserCheck, Mic, Brain, BarChart3 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Providers assign personalized care goals",
      description: "Set treatment objectives tailored to each patient's needs — from managing respiratory symptoms or emotional wellness to cognitive rehabilitation or metabolic support.",
      patientBenefit: "Care becomes clearer and more actionable for the patient — one step at a time."
    },
    {
      icon: Mic,
      title: "Patients engage through natural voice",
      description: "Patients check in through guided voice prompts or ambient journaling. No apps to navigate. Just speak.",
      patientBenefit: "Empathetic and frictionless — feels like support, not a task."
    },
    {
      icon: Brain,
      title: "AI detects subtle health changes",
      description: "Munsait analyzes vocal patterns to flag early signs of fatigue, emotional strain, cognitive shifts, or speech changes — based on condition-specific markers.",
      patientBenefit: "Issues are caught earlier, enabling more timely and targeted support."
    },
    {
      icon: BarChart3,
      title: "Providers track progress and adherence",
      description: "Get a longitudinal view of patient status and behavior between visits. Track engagement, flag drop-offs, and adjust care plans as needed — all in one dashboard.",
      patientBenefit: "A connected care experience that adapts in real time, supporting better outcomes and fewer crises."
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
            A comprehensive four-step process that transforms patient voices into actionable healthcare insights
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform translate-x-4 z-0"></div>
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
                    
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                    
                    <div className="border-l-2 border-secondary pl-3">
                      <p className="text-xs text-secondary font-medium">
                        🔹 Patient benefit: {step.patientBenefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Closing message */}
          <div className="text-center bg-card rounded-2xl p-8 shadow-card">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Why it matters
              </h3>
              <p className="text-muted-foreground">
                Munsait helps providers deliver care that's not only smarter — but more human.
              </p>
              <p className="text-primary font-medium">
                Better engagement. Earlier insight. Stronger outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
