import { 
  CreditCard, 
  Stethoscope, 
  ShoppingBag, 
  Tv2, 
  Cloud, 
  Sun,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { IndustrySector } from "../../types";

const industrySectors: IndustrySector[] = [
  {
    id: "fintech",
    title: "Financial Technology (Fintech)",
    description: "Next-gen payment gateways, alternative lending, wealth management tools, and blockchain escrow mechanisms.",
    iconName: "CreditCard",
    focusAreas: ["Digital Wallets", "Algorithmic Wealth", "Regulatory Tech"]
  },
  {
    id: "healthtech",
    title: "Healthcare & Life Sciences",
    description: "Digital health platforms, telemedicine networks, medical logistics, and health diagnostics software.",
    iconName: "Stethoscope",
    focusAreas: ["Telehealth Systems", "Pharma Supply Chain", "AI Diagnostics"]
  },
  {
    id: "ecommerce-trade",
    title: "E-commerce & Global Trade",
    description: "Cross-border retail marketplaces, B2B wholesale portals, inventory management, and automated fulfillment.",
    iconName: "ShoppingBag",
    focusAreas: ["B2B Marketplaces", "Omnichannel Retail", "Global Logistics"]
  },
  {
    id: "media-entertainment",
    title: "Digital Media & Entertainment",
    description: "Content production studios, digital marketing networks, streaming technology, and creator economy tools.",
    iconName: "Tv2",
    focusAreas: ["Video Production", "AdTech Networks", "Creator Monetization"]
  },
  {
    id: "enterprise-saas",
    title: "Enterprise Software & SaaS",
    description: "Cloud ERP systems, workflow automation, AI copilots, cybersecurity suites, and data intelligence tools.",
    iconName: "Cloud",
    focusAreas: ["Cloud ERPs", "Workflow Automation", "Cybersecurity"]
  },
  {
    id: "cleantech",
    title: "Clean Technology & Energy",
    description: "Renewable energy infrastructure, carbon offset tracking, smart grid logistics, and sustainable mobility.",
    iconName: "Sun",
    focusAreas: ["Renewable Energy", "ESG Analytics", "Smart Mobility"]
  }
];

export default function IndustriesSection() {
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "CreditCard": return <CreditCard className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
      case "Stethoscope": return <Stethoscope className="h-6 w-6 text-purple-600 dark:text-purple-400" />;
      case "ShoppingBag": return <ShoppingBag className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case "Tv2": return <Tv2 className="h-6 w-6 text-pink-600 dark:text-pink-400" />;
      case "Cloud": return <Cloud className="h-6 w-6 text-violet-600 dark:text-violet-400" />;
      case "Sun": return <Sun className="h-6 w-6 text-amber-500" />;
      default: return <Sparkles className="h-6 w-6 text-purple-600" />;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Target Market Sectors</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industries We Serve & Transform
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Our multi-business ecosystem deploys strategic capital, corporate consulting, custom software, and cross-border trade networks across key high-growth industries.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySectors.map((sector) => (
            <div 
              key={sector.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl space-y-5 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 w-fit group-hover:scale-110 transition-transform">
                  {getIndustryIcon(sector.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {sector.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Focus Areas</span>
                <div className="flex flex-wrap gap-1.5">
                  {sector.focusAreas.map((fa, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {fa}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
