
import { TrendingUp, Users, FileText, Target, CheckCircle, Activity } from "lucide-react";

export const ProviderValue = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Better Plan-of-Care Compliance",
      description: "Voice-driven reminders and personalized prompts help patients follow through with treatment recommendations and care goals."
    },
    {
      icon: Users,
      title: "Improved Patient Engagement",
      description: "Voice journaling creates deeper patient self-reflection and connection to their health journey, leading to better outcomes."
    },
    {
      icon: Target,
      title: "Reduced No-Show Rates",
      description: "Proactive voice-based follow-ups and continuous engagement keep patients connected to their care between appointments."
    },
    {
      icon: Activity,
      title: "Objective, Passive Data",
      description: "Access real-time data on emotional and cognitive health without additional clinical workload or patient burden."
    },
    {
      icon: FileText,
      title: "Visibility Between Appointments",
      description: "Monitor patient progress continuously when it matters most — during daily life outside the clinical setting."
    },
    {
      icon: TrendingUp,
      title: "Scalable Clinical Intelligence",
      description: "Track treatment effectiveness across your entire patient panel with longitudinal voice biomarker analysis."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Providers Choose Munsait
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Munsait delivers a powerful new layer of patient insight — without increasing clinical workload
          </p>
          <p className="text-lg text-muted-foreground font-medium">
            This is not just remote monitoring. It's remote understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Better care plan compliance</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">60%</div>
              <div className="text-sm text-muted-foreground">Reduction in no-show rates</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground">More patient engagement touchpoints</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
