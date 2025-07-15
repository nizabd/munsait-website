
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { MunsaitLogo } from "./MunsaitLogo";

interface HeaderProps {
  onRegisterClick: () => void;
}

export const Header = ({ onRegisterClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t.header.howItWorks, href: "#how-it-works" },
    { name: t.header.whyVoice, href: "#why-voice" },
    { name: t.header.features, href: "#features" },
    { name: t.header.providerValue, href: "#provider-value" },
    { name: t.header.whoWeAre, href: "#who-we-are" },
    { name: t.header.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <MunsaitLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>


          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="register" onClick={onRegisterClick}>
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="register" 
                  className="w-full"
                  onClick={() => {
                    onRegisterClick();
                    setIsMenuOpen(false);
                  }}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
