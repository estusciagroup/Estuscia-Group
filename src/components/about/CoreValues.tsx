import { Lightbulb, Shield, Leaf, HeartHandshake, Globe, Sparkles } from "lucide-react";

const coreValues = [
  {
    title: "Innovation",
    description: "Pioneering creative financial models, technology architectures, and commercial frameworks that redefine traditional growth boundaries.",
    icon: Lightbulb,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Integrity",
    description: "Upholding uncompromising institutional transparency, ethical governance, and strict compliance across every venture and partnership.",
    icon: Shield,
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Sustainability",
    description: "Building resilient businesses that generate long-term financial, social, and environmental value without compromising future stability.",
    icon: Leaf,
    color: "from-purple-600 to-violet-600"
  },
  {
    title: "Empowerment",
    description: "Equipping founders, teams, and investors with the capital, knowledge, and infrastructure needed to achieve extraordinary results.",
    icon: HeartHandshake,
    color: "from-violet-600 to-fuchsia-600"
  },
  {
    title: "Global Vision",
    description: "Connecting local market expertise with international capital and supply corridors to foster cross-border economic expansion.",
    icon: Globe,
    color: "from-fuchsia-600 to-pink-600"
  }
];

export default function CoreValues() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/30">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Guiding Principles</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Corporate Core Values
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            These foundational principles guide our strategic investments, client engagements, executive decisions, and ecosystem governance.
          </p>
        </div>

        {/* 5 Cards Row/Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((val, i) => {
            const IconComponent = val.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-xs hover:shadow-lg space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                  Principle 0{i+1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
