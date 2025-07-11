import { Cpu, Users, MapPin } from "lucide-react";

export const WhoWeAre = () => {
  const highlights = [
    {
      icon: Cpu,
      title: "Built on OpenAI & DALL·E Technology",
      description: "Leveraging cutting-edge AI models for superior voice analysis and insights"
    },
    {
      icon: Users,
      title: "Cross-disciplinary Expert Team",
      description: "Data scientists, clinicians, and engineers working together for healthcare innovation"
    },
    {
      icon: MapPin,
      title: "Global Presence",
      description: "Based in Dubai & Casablanca, serving healthcare providers worldwide"
    }
  ];

  return (
    <section id="who-we-are" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Where AI Meets Clinical Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team dedicated to transforming chronic care through innovative voice technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-medical">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {highlight.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};