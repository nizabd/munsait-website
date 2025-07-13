
import { TrendingUp, Users, FileText, Target } from "lucide-react";

export const ProviderValue = () => {
  const values = [
    {
      icon: Target,
      title: "Earlier Detection",
      description: "Identify health changes and emotional patterns before they become critical, enabling proactive intervention and better outcomes."
    },
    {
      icon: Users,
      title: "Better Remote Follow-Up",
      description: "Stay connected with patients between visits through continuous voice monitoring and regular check-ins. Assign care goals and send tailored reminders to promote better adherence."
    },
    {
      icon: FileText,
      title: "Lower Documentation Burden",
      description: "Automated analysis and reporting reduce administrative work while providing richer patient insights and care plan tracking."
    },
    {
      icon: TrendingUp,
      title: "Scalable Longitudinal Insights",
      description: "Track patient progress over weeks, months, and years with objective data that scales across your practice. Monitor treatment adherence and goal completion in real-time."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Healthcare Providers Choose Munsait
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your practice with voice-powered insights that improve care quality while reducing workload
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-medical">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics or testimonial */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Earlier intervention opportunities</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">50%</div>
              <div className="text-sm text-muted-foreground">Reduction in documentation time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground">More patient touchpoints</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
