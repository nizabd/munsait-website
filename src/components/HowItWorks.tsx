
import { UserCheck, Mic, Brain, BarChart3 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Providers assign personalized care goals",
      description: "Set treatment objectives tailored to each patient's needs: from managing respiratory symptoms or emotional wellness to cognitive rehabilitation or metabolic support.",
      patientBenefit: "Care becomes clearer and more actionable for the patient, one step at a time."
    },
    {
      icon: Mic,
      title: "Patients engage through natural voice",
      description: "Patients check in through guided voice prompts or ambient journaling. No apps to navigate. Just speak.",
      patientBenefit: "Empathetic and frictionless. Feels like support, not a task."
    },
    {
      icon: Brain,
      title: "AI detects subtle health changes",
      description: "Munsait analyzes vocal patterns to flag early signs of fatigue, emotional strain, cognitive shifts, or speech changes based on condition-specific markers.",
      patientBenefit: "Issues are caught earlier, enabling more timely and targeted support."
    },
    {
      icon: BarChart3,
      title: "Providers track progress and adherence",
      description: "Get a longitudinal view of patient status and behavior between visits. Track engagement, flag drop-offs, and adjust care plans as needed. All in one dashboard.",
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

                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-1 relative z-10 h-full flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col">
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
                    
                    <div className="border-l-2 border-secondary pl-3 mt-auto">
                      <p className="text-xs text-secondary font-medium">
                        🔹 Patient benefit: {step.patientBenefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Updated Why it matters section */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 shadow-card">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">
                Our Mission
              </h3>
              <p className="text-lg text-white max-w-4xl mx-auto">
                Munsait empowers providers to deliver care that is proactive, personalized, and precise by turning voice into a powerful, non-invasive health signal.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-secondary">Proactive</h4>
                  <p className="text-sm text-white">
                    Detects early shifts in vocal patterns that may reflect changes in condition, enabling timely, preventive action.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-secondary">Personalized</h4>
                  <p className="text-sm text-white">
                    Translates each patient's care plan into voice-based prompts and reminders tailored to their needs and goals.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-secondary">Precise</h4>
                  <p className="text-sm text-white">
                    Analyzes objective vocal features like tone, rhythm, and energy to surface signals beyond what's reported. Supporting data-informed care.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mt-8">
                <p className="text-white">
                  These insights help providers better understand how patients are doing between visits. Improving engagement, adherence, and outcomes.
                </p>
                <p className="text-primary font-semibold text-lg">
                  Smarter signals. More responsive care. Real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
