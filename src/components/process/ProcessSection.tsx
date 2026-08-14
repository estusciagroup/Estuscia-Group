import { Search, Compass, Cpu, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "In-depth consultation to map business objectives, evaluate existing unit economics, assess technical stacks, and identify strategic growth bottlenecks.",
    deliverables: "Comprehensive Audit & Opportunity Blueprint",
    icon: Search
  },
  {
    number: "02",
    title: "Strategy & Structuring",
    description: "Designing tailored capital structures, legal frameworks, technology roadmaps, and trade corridor strategies aligned with institutional risk bounds.",
    deliverables: "Execution Roadmap & Capital Terms",
    icon: Compass
  },
  {
    number: "03",
    title: "Implementation & Scaling",
    description: "Deploying capital, building software solutions, executing GTM marketing, and integrating cross-border supply chain capabilities.",
    deliverables: "Live Tech & Operational Execution",
    icon: Cpu
  },
  {
    number: "04",
    title: "Ongoing Support & Governance",
    description: "Providing continuous executive advisory, financial monitoring, ecosystem network access, and follow-on capital syndication.",
    deliverables: "Ecosystem Integration & Board Advisory",
    icon: TrendingUp
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>4-Step Engagement Model</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Proven Process
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            How Estuscia Group collaborates with enterprise clients, founders, and investors to engineer sustainable value.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl space-y-5 flex flex-col justify-between group relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-xs">
                      <IconComp className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Deliverable</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{step.deliverables}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
