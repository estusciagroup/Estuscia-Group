import { useState } from "react";
import {
  Building2,
  Landmark,
  Palette,
  Cpu,
  ShoppingBag,
  Shirt,
  Globe2,
  Coffee,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight
} from "lucide-react";
import { EcosystemEntity } from "../../types";

const ecosystemEntities: EcosystemEntity[] = [
  {
    id: "estuscia-group",
    name: "Estuscia Group",
    tagline: "Parent Ecosystem & Corporate Governance Holding",
    description: "The overarching corporate entity driving long-term strategic vision, multi-business governance, cross-entity resource optimization, and global venture expansion.",
    iconName: "Building2",
    capabilities: [
      "Group Strategy & Corporate Governance",
      "Cross-Entity Strategic Synergies",
      "Executive Advisory & Institutional Relations",
      "Global Venture Incubation & Expansion"
    ],
    gradient: "from-indigo-600 via-purple-600 to-violet-600",
    statsLabel: "Ecosystem Verticals",
    statsValue: "9 Firms"
  },
  {
    id: "estuscia-capital",
    name: "Estuscia Capital",
    tagline: "Private Equity, Capital Advisory & Wealth Management",
    description: "Specialized financial engineering, debt and equity advisory, venture funding, capital structuring, and asset growth strategies for institutions and growth enterprises.",
    iconName: "Landmark",
    capabilities: [
      "Capital Engineering & Restructuring",
      "Private Equity & Seed Funding",
      "Financial Feasibility & Business Valuations",
      "Asset Preservation & Wealth Management"
    ],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    statsLabel: "Capital Deployment",
    statsValue: "$50M+"
  },
  {
    id: "froi-studio",
    name: "Froi Studio",
    tagline: "Creative Design, Brand Positioning & Media Production",
    description: "High-impact creative agency delivering bespoke corporate brand visual identities, digital UI/UX product design, high-production media, and storytelling.",
    iconName: "Palette",
    capabilities: [
      "Corporate Brand Identity & Guidelines",
      "Digital UI/UX Product Design",
      "High-Production Video & Commercials",
      "Multi-Channel Creative Marketing"
    ],
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    statsLabel: "Brand Campaigns",
    statsValue: "120+"
  },
  {
    id: "estivoxx-technologies",
    name: "Estivoxx Technologies",
    tagline: "Enterprise Software, AI Solutions & Infrastructure",
    description: "Advanced technological engineering firm building custom enterprise software, artificial intelligence integration, cloud infrastructure, and automated workflows.",
    iconName: "Cpu",
    capabilities: [
      "Enterprise SaaS & Web Platform Engineering",
      "AI & Machine Learning Integration",
      "Cloud Architecture & System Security",
      "Automated Business Process Engineering"
    ],
    gradient: "from-purple-600 via-violet-600 to-fuchsia-600",
    statsLabel: "Tech Platforms Live",
    statsValue: "35+"
  },
  {
    id: "zedeo-cart",
    name: "Zedeo Cart",
    tagline: "Next-Gen E-Commerce Infrastructure & Merchant Solutions",
    description: "Scalable e-commerce ecosystem providing digital storefront engines, cross-border payment integration, inventory logistics software, and global merchant growth.",
    iconName: "ShoppingBag",
    capabilities: [
      "Turnkey E-Commerce Platform Architecture",
      "Cross-Border Payment & Gateway Support",
      "Order Fulfillment & Supply Chain Analytics",
      "Conversion & Performance Optimization"
    ],
    gradient: "from-emerald-600 via-teal-600 to-indigo-600",
    statsLabel: "Active Storefronts",
    statsValue: "500+"
  },
  {
    id: "animalo-fashion",
    name: "Animalo Fashion",
    tagline: "Contemporary Luxury Apparel & Sustainable Apparel House",
    description: "Modern apparel brand and textile production entity crafting premium streetwear, sustainable garment manufacturing, and international apparel retail channels.",
    iconName: "Shirt",
    capabilities: [
      "Bespoke Apparel Design & Merchandising",
      "Ethical Garment Manufacturing & Textiles",
      "Global Retail Distribution & Wholesale",
      "E-Commerce Fashion Direct-to-Consumer"
    ],
    gradient: "from-pink-600 via-purple-600 to-indigo-600",
    statsLabel: "Apparel Exports",
    statsValue: "15+ Countries"
  },
  {
    id: "estuscia-global",
    name: "Estuscia Global",
    tagline: "International Commerce, Trade Corridors & Commodities",
    description: "Cross-border commerce division facilitating international distribution channels, supply chain logistics, trade finance, customs clearance, and commodity trade.",
    iconName: "Globe2",
    capabilities: [
      "Cross-Border Logistics & Freight Handling",
      "Customs Clearance & Tariff Compliance",
      "International Sourcing & SCM Networks",
      "Commodity Sourcing & Bulk Trade Services"
    ],
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    statsLabel: "Trade Corridors",
    statsValue: "18+"
  },
  {
    id: "chai-with-trade",
    name: "Chai with trade",
    tagline: "B2B Trade Deal Matchmaking & Industry Networking Hub",
    description: "Exclusive business-to-business trade networking platform connecting global traders, exporters, manufacturers, and corporate buyers over strategic insights.",
    iconName: "Coffee",
    capabilities: [
      "B2B Buyer-Seller Matchmaking",
      "Import-Export Market Intelligence",
      "Executive Trade Summits & Gatherings",
      "Cross-Border Deal Facilitation"
    ],
    gradient: "from-amber-600 via-orange-600 to-purple-600",
    statsLabel: "Trade Network",
    statsValue: "2,500+ Execs"
  },
  {
    id: "maqcala-perfumes",
    name: "MaQcala Perfumes",
    tagline: "Luxury Artisanal Fragrance & Fine Perfumery House",
    description: "Prestige fragrance house crafting luxury artisanal scents, signature oriental and French perfume formulations, and premium beauty retail distribution.",
    iconName: "Sparkles",
    capabilities: [
      "Artisanal Olfactory Scent Formulation",
      "Luxury Perfume Packaging & Design",
      "Global High-End Beauty Distribution",
      "Private Label Fragrance Creation"
    ],
    gradient: "from-purple-600 via-rose-600 to-amber-600",
    statsLabel: "Signature Scents",
    statsValue: "24 Collections"
  }
];

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState<string>(ecosystemEntities[0].id);

  const activeEntity = ecosystemEntities.find((e) => e.id === activeTab) || ecosystemEntities[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2": return <Building2 className="h-6 w-6" />;
      case "Landmark": return <Landmark className="h-6 w-6" />;
      case "Palette": return <Palette className="h-6 w-6" />;
      case "Cpu": return <Cpu className="h-6 w-6" />;
      case "ShoppingBag": return <ShoppingBag className="h-6 w-6" />;
      case "Shirt": return <Shirt className="h-6 w-6" />;
      case "Globe2": return <Globe2 className="h-6 w-6" />;
      case "Coffee": return <Coffee className="h-6 w-6" />;
      case "Sparkles": return <Sparkles className="h-6 w-6" />;
      default: return <Layers className="h-6 w-6" />;
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
    <section id="ecosystem" className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/30">
            <Layers className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Our Business Ecosystem</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Diversified Verticals Driving Synergy & Scale
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Estuscia Group operates nine integrated ecosystem firms designed to support every phase of commercial expansion, capital engineering, creative design, enterprise technology, e-commerce, fashion, global trade, and luxury retail.
          </p>
        </div>

        {/* Entity Tabs Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {ecosystemEntities.map((entity) => {
            const isActive = entity.id === activeTab;
            return (
              <button
                key={entity.id}
                onClick={() => setActiveTab(entity.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${isActive
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-purple-400 shadow-estuscia-glow"
                  : "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-xs"
                  }`}
              >
                {getIcon(entity.iconName)}
                <span>{entity.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Entity Showcase Card */}
        <div className="mt-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-purple-500/30 p-8 sm:p-12 shadow-xl relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-6">

              <div className="flex items-center gap-3">
                <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${activeEntity.gradient} text-white shadow-md`}>
                  {getIcon(activeEntity.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{activeEntity.name}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mt-0.5">{activeEntity.tagline}</p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeEntity.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Strategic Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeEntity.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Engage {activeEntity.name}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              <div className="w-full p-8 rounded-3xl bg-gradient-to-b from-purple-100/60 via-purple-50/40 to-white dark:from-purple-950/60 dark:to-slate-900 border border-purple-200 dark:border-purple-500/20 text-center space-y-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{activeEntity.statsLabel}</p>
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
                  {activeEntity.statsValue}
                </p>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Institutional governance & cross-entity integration ensuring minimal friction and maximum leverage.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* All Verticals Grid Preview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemEntities.map((entity) => (
            <div
              key={entity.id}
              onClick={() => setActiveTab(entity.id)}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer group space-y-3 shadow-xs hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-purple-600 dark:text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                  {getIcon(entity.iconName)}
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">{entity.name}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">{entity.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
