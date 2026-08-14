import { 
  Shield, 
  Users, 
  Layers, 
  Globe2, 
  Leaf, 
  Sparkles,
  Check
} from "lucide-react";

const whyUsPillars = [
  {
    title: "Diversified Ecosystem Strategy",
    description: "Operating across finance, consulting, tech, trade, and incubation creates cross-entity leverage, lowering operational friction and maximizing revenue channels.",
    icon: Layers,
    accent: "from-blue-600 to-indigo-600"
  },
  {
    title: "Experienced Leadership & Advisory Board",
    description: "Led by veteran corporate strategists, financial managers, legal advisors, and tech founders with proven track records across global markets.",
    icon: Users,
    accent: "from-indigo-600 to-purple-600"
  },
  {
    title: "End-to-End Business Solutions",
    description: "From 0-to-1 startup formation and legal structuring to multi-million dollar capital rounds and global supply chain expansion, we cover the full growth lifecycle.",
    icon: Shield,
    accent: "from-purple-600 to-violet-600"
  },
  {
    title: "Global Business Network & Strategic Partnerships",
    description: "Deep ties with institutional investors, regulatory authorities, trade corridors, and technology hubs across Asia, Middle East, Europe, and Americas.",
    icon: Globe2,
    accent: "from-violet-600 to-fuchsia-600"
  },
  {
    title: "Focus on Sustainable Innovation",
    description: "Prioritizing ESG principles, scalable tech architectures, transparent governance, and clean technology initiatives designed for long-term endurance.",
    icon: Leaf,
    accent: "from-fuchsia-600 to-pink-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Competitive Advantage</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Estuscia Group
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We provide the strategic framework, financial liquidity, technological backbone, and global access required to transform high-potential vision into durable market leadership.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComp className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400">
                  <Check className="h-4 w-4" />
                  <span>Institutional Standard Guaranteed</span>
                </div>
              </div>
            );
          })}

          {/* Banner Box filling 6th spot */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950 text-white border border-purple-500/30 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300">Ready To Collaborate?</span>
              <h3 className="text-2xl font-extrabold text-white">Partner with Estuscia Ecosystem</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you are a startup founder, corporate enterprise, or investor, discover how our multi-business model unlocks growth.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full py-3.5 bg-white text-slate-900 text-center text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Get In Touch
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
