import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
    city: "",
    pathologies: {
      parkinsons: false,
      copd: false,
      diabetes: false,
      other: false,
    },
    chronicPatients: "",
    staffCount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend/Mailchimp/Airtable
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        facilityName: "",
        contactName: "",
        email: "",
        country: "",
        city: "",
        pathologies: {
          parkinsons: false,
          copd: false,
          diabetes: false,
          other: false,
        },
        chronicPatients: "",
        staffCount: "",
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePathologyChange = (pathology: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      pathologies: { ...prev.pathologies, [pathology]: checked }
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
            <h3 className="text-xl font-semibold mb-2">Welcome to Moonset!</h3>
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
          <DialogTitle className="text-2xl">Register Your Facility</DialogTitle>
          <DialogDescription>
            Join the waitlist to get early access to Moonset's voice biomarker platform.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="facilityName">Facility Name *</Label>
              <Input
                id="facilityName"
                type="text"
                required
                value={formData.facilityName}
                onChange={(e) => handleInputChange("facilityName", e.target.value)}
                placeholder="Enter facility name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Name *</Label>
              <Input
                id="contactName"
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => handleInputChange("contactName", e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter work email"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                type="text"
                required
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                placeholder="Enter country"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                type="text"
                required
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="Enter city"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Pathologies Managed *</Label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: "parkinsons", label: "Parkinson's" },
                { key: "copd", label: "COPD" },
                { key: "diabetes", label: "Diabetes" },
                { key: "other", label: "Other" },
              ].map((pathology) => (
                <div key={pathology.key} className="flex items-center space-x-2">
                  <Checkbox
                    id={pathology.key}
                    checked={formData.pathologies[pathology.key as keyof typeof formData.pathologies]}
                    onCheckedChange={(checked) => 
                      handlePathologyChange(pathology.key, checked as boolean)
                    }
                  />
                  <Label htmlFor={pathology.key} className="text-sm">
                    {pathology.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="chronicPatients">Estimated Chronic Patients *</Label>
              <Input
                id="chronicPatients"
                type="number"
                required
                value={formData.chronicPatients}
                onChange={(e) => handleInputChange("chronicPatients", e.target.value)}
                placeholder="Number of patients"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staffCount">Number of Staff *</Label>
              <Input
                id="staffCount"
                type="number"
                required
                value={formData.staffCount}
                onChange={(e) => handleInputChange("staffCount", e.target.value)}
                placeholder="Number of staff"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" variant="hero">
            Join the Moonset Waitlist
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};