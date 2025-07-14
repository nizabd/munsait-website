import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t.language.english, flag: '🇺🇸' },
    //{ code: 'ar', name: t.language.arabic, flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
        <ChevronDown className="w-3 h-3" />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-background border rounded-md shadow-lg z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'ar');
                setIsOpen(false);
              }}
              className={`
                w-full px-3 py-2 text-left text-sm hover:bg-accent transition-colors
                ${language === lang.code ? 'bg-accent text-primary font-medium' : 'text-muted-foreground'}
                first:rounded-t-md last:rounded-b-md
              `}
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};