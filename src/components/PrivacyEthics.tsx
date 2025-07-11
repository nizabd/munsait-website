import { Shield, Lock, Users } from "lucide-react";

export const PrivacyEthics = () => {
  const principles = [
    {
      icon: Shield,
      title: "HIPAA & GDPR Compliant",
      description: "Full compliance with healthcare privacy regulations across all jurisdictions"
    },
    {
      icon: Lock,
      title: "De-identified Voice Data",
      description: "All voice data is processed with advanced de-identification protocols"
    },
    {
      icon: Users,
      title: "Academic & Clinical Partners",
      description: "Developed in collaboration with leading medical institutions and research centers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ethical by Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with privacy, security, and ethical considerations at the forefront
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-medical">
                <principle.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground">
                {principle.title}
              </h3>
              
              <p className="text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};