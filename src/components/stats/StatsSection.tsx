import { CorporateStat } from "../../types";
import { TrendingUp, Award, Globe, ShieldCheck } from "lucide-react";

const statsList: CorporateStat[] = [
  {
    label: "Enterprise Value Created",
    value: "$50M+",
    change: "+34% YoY",
    description: "Combined valuation across incubated startups & portfolio assets."
  },
  {
    label: "Incubated Companies",
    value: "12+",
    change: "High Growth",
    description: "Startups provided seed capital, software & strategic advisory."
  },
  {
    label: "Global Trade Corridors",
    value: "15+",
    change: "Active Corridors",
    description: "Cross-border logistics & distribution channels established."
  },
  {
    label: "Governance Commitment",
    value: "100%",
    change: "Compliant",
    description: "Unwavering commitment to legal, tax & regulatory compliance."
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-indigo-50 to-slate-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950 text-slate-900 dark:text-white border-y border-purple-200/80 dark:border-purple-500/20 relative overflow-hidden transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/60 border border-purple-200/80 dark:border-purple-500/20 backdrop-blur-md space-y-3 hover:border-purple-500 transition-colors shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{stat.label}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30">
                  {stat.change}
                </span>
              </div>

              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-blue-300 dark:via-indigo-200 dark:to-purple-300">
                {stat.value}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
