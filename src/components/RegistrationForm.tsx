import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    facilityName: "",
    contactName: "",
    email: "",
    country: "",
    specialties: [] as string[],
    suggestions: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  console.log("1. handleSubmit started");
  e.preventDefault();

  console.log("2. Form submitted with data:", formData);

  if (!formData.email) {
    console.error("3. Email is required!");
    return;
  }

  console.log("4. Email validation passed");

  try {
    console.log("5. About to send to Formspree...");
    console.log("6. Formspree URL:", 'https://formspree.io/f/movlqqrz');
    console.log("7. Data being sent:", {
      facilityName: formData.facilityName,
      contactName: formData.contactName,
      email: formData.email,
      country: formData.country,
      specialties: formData.specialties.join(', '),
      suggestions: formData.suggestions
    });

    const response = await fetch('https://formspree.io/f/movlqqrz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        facilityName: formData.facilityName,
        contactName: formData.contactName,
        email: formData.email,
        country: formData.country,
        specialties: formData.specialties.join(', '),
        suggestions: formData.suggestions
      })
    });

    console.log("8. Response received!");
    console.log("9. Response status:", response.status);

    const responseText = await response.text();
    console.log("10. Response text:", responseText);

    if (response.ok) {
      console.log("11. SUCCESS! Form submitted!");
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({
          facilityName: "",
          contactName: "",
          email: "",
          country: "",
          specialties: [] as string[],
          suggestions: "",
        });
      }, 2000);
    } else {
      console.error("12. Form submission failed");
    }
  } catch (error) {
    console.error("13. Error caught:", error);
  }
};

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSpecialtyChange = (specialty: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      specialties: checked
        ? [...prev.specialties, specialty]
        : prev.specialties.filter(s => s !== specialty)
    }));
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Welcome to Munsait!</h3>
            <p className="text-muted-foreground">
              Thank you for joining our waitlist. We'll be in touch soon with next steps.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join the waitlist to get early access to Munsait's remote patient monitoring.</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="facilityName">Facility Name</Label>
              <Input
                id="facilityName"
                type="text"
                value={formData.facilityName}
                onChange={(e) => handleInputChange("facilityName", e.target.value)}
                placeholder="Enter facility name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Name</Label>
              <Input
                id="contactName"
                type="text"
                value={formData.contactName}
                onChange={(e) => handleInputChange("contactName", e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter email address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              type="text"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              placeholder="Enter country"
            />
          </div>

          <div className="space-y-3">
            <Label>Specialties</Label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "ENT",
                "Neurologist",
                "Pulmonologist",
                "Cardiologist",
                "Endocrinologist",
                "Primary care",
                "Family Medicine",
                "Paediatrician",
                "Oncology",
                "Psychiatry",
                "Psychologist",
                "Speech Pathologist",
                "Physical Therapist",
                "Occupational Therapist",
                "Other"
              ].map((specialty) => (
                <div key={specialty} className="flex items-center space-x-2">
                  <Checkbox
                    id={specialty}
                    checked={formData.specialties.includes(specialty)}
                    onCheckedChange={(checked) =>
                      handleSpecialtyChange(specialty, checked as boolean)
                    }
                  />
                  <Label htmlFor={specialty} className="text-sm">
                    {specialty}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="suggestions">Suggestions</Label>
            <textarea
              id="suggestions"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.suggestions}
              onChange={(e) => handleInputChange("suggestions", e.target.value)}
              placeholder="What are the main features you want to see? How do you plan to use Munsait?"
            />
          </div>

          <Button type="submit" className="w-full" variant="hero">
            Join the Munsait Waitlist
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};