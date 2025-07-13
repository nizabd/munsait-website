
import { CheckCircle, MessageCircle, Calendar } from "lucide-react";

export const PatientAdherence = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Helping Patients Follow Through
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Munsait closes the loop between consultation and real-world action, transforming care plans into daily habits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Care Goals</h3>
                <p className="text-sm text-muted-foreground">From rest and hydration to cognitive exercises or mental health check-ins</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Voice-Based Reflections</h3>
                <p className="text-sm text-muted-foreground">Daily voice journaling prompts aligned with treatment objectives</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Timely Reminders</h3>
                <p className="text-sm text-muted-foreground">Personalized notifications that support long-term compliance</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                With Munsait, providers can assign personalized care goals that translate into daily voice-based reflections and actionable reminders, helping patients build healthy habits and stay compliant with their care plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
