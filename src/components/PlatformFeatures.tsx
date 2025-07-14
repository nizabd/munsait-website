
import { 
  Heart, 
  BarChart3, 
  FileText, 
  Shield,
  Smartphone,
  Activity,
  Target
} from "lucide-react";

export const PlatformFeatures = () => {
  const features = [
    {
      icon: Heart,
      title: "Voice Journaling",
      description: "Patients express themselves naturally through guided or free-form voice entries, creating rich emotional and health data."
    },
    {
      icon: Activity,
      title: "Symptom & Emotion Tracking",
      description: "Monitor changes across respiratory, neurological, metabolic, and cognitive domains through voice pattern analysis over time."
    },
    {
      icon: Target,
      title: "Plan-of-Care Reminders",
      description: "Promote adherence with personalized daily support. Providers can assign goals and Munsait helps patients stay on track with voice-based prompts aligned with their care plan."
    },
    {
      icon: BarChart3,
      title: "Objective Health Signals",
      description: "Track fatigue, cognition, mood, and speech clarity through passive voice monitoring during routine conversations."
    },
    {
      icon: FileText,
      title: "Provider Dashboard",
      description: "Visualize trends, export summaries, and reduce no-show rates with comprehensive patient insights and automated reporting."
    },
    {
      icon: Shield,
      title: "Secure & Passive",
      description: "Non-invasive insights from natural speech. HIPAA-compliant platform ensures patient privacy while providing powerful analytics."
    },
    {
      icon: Smartphone,
      title: "No Additional Hardware",
      description: "Works with any smartphone or device. No complex setup required for patients, seamless integration for providers."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Voice Health Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything healthcare providers need to leverage voice biomarkers for better patient care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
