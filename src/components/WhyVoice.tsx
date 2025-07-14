
import { Mic, Heart, Brain, Activity } from "lucide-react";

export const WhyVoice = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Voice reflects emotional health",
      description: "Changes in tone, pace, and vocal patterns can indicate stress, depression, anxiety, and overall emotional well-being."
    },
    {
      icon: Brain,
      title: "Subtle changes are detectable",
      description: "Subtle shifts in voice patterns can reveal early signs of cognitive decline, memory issues, or neurological changes."
    },
    {
      icon: Activity,
      title: "Physical health shows in voice",
      description: "Fatigue, pain levels, respiratory issues, and motor function changes are often reflected in vocal characteristics."
    },
    {
      icon: Mic,
      title: "Non-invasive and natural",
      description: "Voice analysis requires no physical contact, special equipment, or disruption to daily routines. Just natural speech."
    }
  ];

  return (
    <section id="why-voice" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Voice Biomarkers Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your voice is a powerful window into your overall health - both physical and emotional
          </p>
          <div className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            "Voice biomarkers can detect health changes days or weeks before traditional methods, 
            providing early intervention opportunities that improve patient outcomes."
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-medical transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medical flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
