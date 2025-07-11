import { Brain, Target, TrendingDown, Users } from "lucide-react";

export const WhyRemoteMonitoring = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Reduces reliance on episodic care",
      description: "Move beyond snapshot visits to continuous health insights"
    },
    {
      icon: Target,
      title: "Provides continuous, objective data",
      description: "Voice biomarkers deliver measurable, unbiased health metrics"
    },
    {
      icon: TrendingDown,
      title: "Enables early intervention",
      description: "Detect changes before they become critical health events"
    },
    {
      icon: Users,
      title: "Improves care coordination",
      description: "Share real-time insights across your entire care team"
    }
  ];

  return (
    <section id="why-remote-monitoring" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            A Smarter Standard for Chronic Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform how you monitor and manage chronic conditions with continuous voice-based insights
          </p>
          <div className="text-sm text-muted-foreground italic">
            "70% of care decisions are made without data between visits"
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-medical">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};