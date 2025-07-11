import { 
  Heart, 
  BarChart3, 
  CheckCircle, 
  FileText, 
  Smartphone,
  Activity
} from "lucide-react";

export const PlatformFeatures = () => {
  const features = [
    {
      icon: Heart,
      title: "Voice Biomarker Detection",
      description: "Advanced analysis of tremor, fatigue, respiratory distress, and other vocal indicators"
    },
    {
      icon: BarChart3,
      title: "Visual Dashboards",
      description: "Intuitive trend tracking with intelligent alerts and comprehensive health timelines"
    },
    {
      icon: CheckCircle,
      title: "Automated Check-ins",
      description: "Reduce staff workload while increasing patient compliance and engagement"
    },
    {
      icon: FileText,
      title: "Custom Reports",
      description: "Generate and share detailed health reports across your entire care team"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "Works seamlessly on any smartphone - no additional hardware required"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous health insights with immediate notifications for critical changes"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for Long-Term Care Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive features designed to integrate seamlessly into your care workflow
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