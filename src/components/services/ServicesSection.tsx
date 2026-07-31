import { useState } from "react";
import {
  TrendingUp,
  Briefcase,
  Code2,
  Truck,
  Rocket,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  X
} from "lucide-react";
import { CorporateService } from "../../types";

const corporateServices: CorporateService[] = [
  {
    id: "financial-advisory",
    title: "Financial & Investment Advisory",
    description: "Expert financial engineering, portfolio optimization, investment structuring, and debt-equity syndicate solutions for corporations, high-net-worth investors, and growing enterprises.",
    iconName: "TrendingUp",
    category: "Finance",
    highlights: [
      "Custom Corporate Capital Structuring",
      "Investment Risk Analytics & Due Diligence",
      "Sovereign & Private Debt Advisory",
      "Escrow & Transaction Structuring"
    ]
  },
  {
    id: "corporate-consulting",
    title: "Business & Corporate Consulting",
    description: "Strategic corporate advisory assisting companies in scaling operations, entering new regional markets, streamlining legal governance, and restructuring for maximum efficiency.",
    iconName: "Briefcase",
    category: "Consulting",
    highlights: [
      "Cross-Border Corporate Governance",
      "Market Entry & Regulatory Compliance",
      "Mergers, Acquisitions & Joint Ventures",
      "Operational Cost & Profit Engineering"
    ]
  },
  {
    id: "tech-solutions",
    title: "Technology Solutions & Digital Media",
    description: "End-to-end digital transformation, cloud architecture, custom web & enterprise mobile applications, AI integration, alongside digital brand strategy and media distribution.",
    iconName: "Code2",
    category: "Technology",
    highlights: [
      "Custom Enterprise Web & SaaS Development",
      "Artificial Intelligence & Process Automation",
      "Brand Identity & Corporate Media Strategy",
      "Cloud Infrastructure & Cybersecurity"
    ]
  },
  {
    id: "trade-management",
    title: "Trade & Supply Chain Management",
    description: "Comprehensive cross-border trade execution, supply chain optimization, customs compliance, freight logistics, and international commercial network development.",
    iconName: "Truck",
    category: "Global Trade",
    highlights: [
      "Import-Export Regulatory Compliance",
      "Supply Chain Optimization & Sourcing",
      "Freight, Logistics & Channel Management",
      "International Trade Contract Structuring"
    ]
  },
  {
    id: "incubation-growth",
    title: "Startup Incubation & Venture Growth",
    description: "A comprehensive acceleration ecosystem providing early-stage founders with seed capital, shared back-office resources, CTO-level technical building, and market access.",
    iconName: "Rocket",
    category: "Incubation",
    highlights: [
      "0-to-1 MVP Co-building & Product Design",
      "Capital Readiness & Pitch Deck Review",
      "Legal, Accounting & Shared Back-Office",
      "Direct Investor & Mentor Network Access"
    ]
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<CorporateService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp": return <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
      case "Briefcase": return <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />;
      case "Code2": return <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case "Truck": return <Truck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
      case "Rocket": return <Rocket className="h-6 w-6 text-pink-600 dark:text-pink-400" />;
      default: return <Sparkles className="h-6 w-6 text-purple-600" />;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Comprehensive Solutions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Strategic Corporate Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Tailored financial, strategic, technological, and logistical solutions designed to empower enterprises, investors, and high-growth ventures.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Highlights</span>
                  {service.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-purple-500 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-purple-600 dark:hover:bg-purple-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Consult Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-6 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">{selectedService.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Deliverables & Capabilities</h4>
              <div className="space-y-2">
                {selectedService.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md hover:from-indigo-500 hover:to-purple-500 transition-all cursor-pointer"
              >
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
