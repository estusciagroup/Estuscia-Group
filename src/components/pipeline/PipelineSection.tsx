import { 
  FileSearch, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { PipelineStep } from "../../types";

const pipelineSteps: PipelineStep[] = [
  {
    stepNumber: 1,
    title: "Business Evaluation & Feasibility",
    subtitle: "Phase 01 • Diagnostics & Due Diligence",
    description: "In-depth review of financial model, unit economics, market addressability, regulatory risk, and valuation parameters before capital allocation.",
    keyDeliverables: [
      "Financial Health Assessment Report",
      "Addressable Market & Valuation Matrix",
      "Risk Mitigation Roadmap"
    ],
    iconName: "FileSearch"
  },
  {
    stepNumber: 2,
    title: "Capital Structuring & Investment Strategy",
    subtitle: "Phase 02 • Capital Architecture",
    description: "Designing debt/equity ratios, cap tables, escrow mechanisms, and investor syndication pathways tailored to institutional growth requirements.",
    keyDeliverables: [
      "Optimized Cap Table & Equity Terms",
      "Investment Prospectus & Financial Model",
      "Escrow & Compliance Framework"
    ],
    iconName: "BarChart3"
  },
  {
    stepNumber: 3,
    title: "Technology Integration & Digital Branding",
    subtitle: "Phase 03 • Digital Foundation",
    description: "Deploying enterprise-grade web/mobile infrastructure, AI integrations, and brand media positioning to prepare for scale.",
    keyDeliverables: [
      "Scalable Platform & Tech Infrastructure",
      "Brand Identity & Pitch Collateral",
      "Data Analytics & Compliance Dashboard"
    ],
    iconName: "Layers"
  },
  {
    stepNumber: 4,
    title: "Operational Scaling & Market Expansion",
    subtitle: "Phase 04 • Execution & Growth",
    description: "Executing GTM campaigns, establishing supply chain channels, acquiring enterprise clients, and optimizing operational overhead.",
    keyDeliverables: [
      "Go-To-Market Execution Plan",
      "Supply Chain & Distribution Channels",
      "Institutional Sales Advisory"
    ],
    iconName: "TrendingUp"
  },
  {
    stepNumber: 5,
    title: "Long-Term Growth & Ecosystem Integration",
    subtitle: "Phase 05 • Maturity & Value Creation",
    description: "Integrating into Estuscia Group's global network, facilitating M&A or secondary investment rounds, and achieving long-term sustainability.",
    keyDeliverables: [
      "Estuscia Partner Ecosystem Access",
      "Follow-on Capital & M&A Readiness",
      "Ongoing Governance & Board Support"
    ],
    iconName: "ShieldCheck"
  }
];

export default function PipelineSection() {
  return (
    <section id="pipeline" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-500/30">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Structured Methodology</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Startup Financial Planning Pipeline
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Our systematic 5-phase execution framework guides early-stage and growth enterprises from initial feasibility assessment to full market scaling and ecosystem integration.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="mt-16 space-y-8 max-w-5xl mx-auto">
          {pipelineSteps.map((step) => (
            <div 
              key={step.stepNumber}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Step Number & Badge */}
                <div className="md:col-span-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-lg">
                    0{step.stepNumber}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">{step.subtitle}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">{step.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-5 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="md:col-span-3 space-y-2 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 md:pl-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Deliverables</span>
                  {step.keyDeliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm sm:text-base rounded-2xl shadow-estuscia-glow hover:shadow-estuscia-glow-lg transition-all cursor-pointer"
          >
            <span>Submit Venture for Pipeline Evaluation</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
