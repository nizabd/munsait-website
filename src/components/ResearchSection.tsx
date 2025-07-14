import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const ResearchSection = () => {
  const { t } = useLanguage();

  const papers = [
    {
      year: "2025",
      category: "BRIDGE2AI",
      title: "The Bridge2AI-voice application: initial feasibility study of voice data acquisition through mobile health",
      authors: "Moothedan, E. et al.",
      journal: "Frontiers in Digital Health",
      url: "https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1514971/full"
    },
    {
      year: "2025",
      category: "RESPIRATORY",
      title: "Measuring respiration rate from speech",
      authors: "Abrol, S. et al.",
      journal: "Digital Biomarkers",
      url: "https://karger.com/dib/article/9/1/67/922511/Measuring-Respiration-Rate-from-Speech"
    },
    {
      year: "2021",
      category: "REVIEW",
      title: "Voice for health: The use of vocal biomarkers from research to clinical practice",
      authors: "Fagherazzi, G et al.",
      journal: "Digital Biomarkers",
      url: "https://www.frontiersin.org/journals/digital-health/articles/10.3389/frdem.2023.1214940/full"
    },
    {
      year: "2025",
      category: "ANALYSIS",
      title: '"Voice is the new blood": a discourse analysis of voice AI health-tech start-up websites',
      authors: "Blatter, A. et al.",
      journal: "Frontiers in Digital Health",
      url: "https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1568159/full"
    },
    {
      year: "2023",
      category: "CARDIOVASCULAR",
      title: "Guess what we can hear—Novel voice biomarkers for the remote detection of disease",
      authors: "Sara, J.D.S. et al.",
      journal: "Mayo Clinic Proceedings",
      url: "https://www.bioanalyytikot.fi/app/uploads/2025/03/Article-on-AI-and-novel-biomarkers-1.pdf"
    },
    {
      year: "2024",
      category: "AUDIOMICS",
      title: "Voice as an AI biomarker of health—Introducing Audiomics",
      authors: "Bensoussan, Y., Elemento, O. and Rameau, A.",
      journal: "JAMA Otolaryngology–Head & Neck Surgery",
      url: "https://jamanetwork.com/journals/jamaotolaryngology/article-abstract/2815136"
    },
    {
      year: "2023",
      category: "NEUROLOGY",
      title: "Association between acoustic features and brain volumes: the Framingham Heart Study",
      authors: "Ding, H. et al.",
      journal: "Frontiers in Dementia",
      url: "https://www.frontiersin.org/journals/dementia/articles/10.3389/frdem.2023.1214940/full"
    },
    {
      year: "2024",
      category: "PROTOCOLS",
      title: "Developing multi-disorder voice protocols: a team science approach involving clinical expertise, bioethics, standards, and DEI",
      authors: "Rameau, A. et al.",
      journal: "Proceedings of Interspeech 2024",
      url: "https://www.isca-archive.org/interspeech_2024/bensoussan24_interspeech.pdf"
    },
    {
      year: "2024",
      category: "THESIS",
      title: "Exploring vocal biomarkers for disease screening and health monitoring",
      authors: "El Béji, A.",
      journal: "Luxembourg Institute of Health",
      url: "https://orbilu.uni.lu/bitstream/10993/63517/1/EL%20BEJI%20Abir_Final_Version.pdf"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      BRIDGE2AI: "bg-primary/10 text-primary",
      RESPIRATORY: "bg-secondary/10 text-secondary",
      REVIEW: "bg-purple-100 text-purple-700",
      ANALYSIS: "bg-blue-100 text-blue-700",
      DATASET: "bg-green-100 text-green-700",
      CARDIOVASCULAR: "bg-red-100 text-red-700",
      AUDIOMICS: "bg-orange-100 text-orange-700",
      NEUROLOGY: "bg-indigo-100 text-indigo-700",
      PROTOCOLS: "bg-teal-100 text-teal-700",
      THESIS: "bg-pink-100 text-pink-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.research.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.research.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-1 animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>

              <div className="space-y-3">
                {/* Year and Category */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-muted-foreground">{paper.year}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(paper.category)}`}>
                    {paper.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-3">
                  {paper.title}
                </h3>

                {/* Authors */}
                <p className="text-xs text-muted-foreground font-medium">
                  {paper.authors}
                </p>

                {/* Journal */}
                <p className="text-xs text-muted-foreground italic">
                  {paper.journal}
                </p>

                {/* View Paper Button */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full text-xs font-medium"
                  onClick={() => window.open(paper.url, '_blank')}
                >
                  {t.research.viewPaper}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t.research.ctaText}
          </p>
          <Button
            variant="outline"
            onClick={() => window.open('mailto:info@munsait.com?subject=Research Collaboration Inquiry', '_blank')}
          >
            {t.research.ctaButton}
          </Button>
        </div>
      </div>
    </section>
  );
};