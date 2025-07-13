
import { 
  Heart, 
  BarChart3, 
  FileText, 
  Shield,
  Smartphone,
  Activity
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
      title: "Symptom & Emotional Tracking",
      description: "Monitor changes in mood, energy levels, pain, and other symptoms through voice pattern analysis over time."
    },
    {
      icon: BarChart3,
      title: "Passive Voice Monitoring",
      description: "Capture health insights during routine conversations without requiring structured assessments."
    },
    {
      icon: FileText,
      title: "Provider Dashboards & Reports",
      description: "Access comprehensive patient insights through intuitive dashboards with trend analysis and automated reporting."
    },
    {
      icon: Shield,
      title: "Secure Data Capture",
      description: "HIPAA-compliant platform ensures patient privacy while providing powerful analytics for healthcare providers."
    },
    {
      icon: Smartphone,
      title: "Non-Invasive Technology",
      description: "Works with any smartphone or device - no additional hardware or complex setup required for patients."
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
