import { Target, Compass, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
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
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>About Estuscia Group LLP</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Building Innovative Companies Across Industries
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Estuscia Group LLP is a multi-business ecosystem committed to building innovative companies across multiple industries. Our mission is to create businesses that solve real-world challenges while empowering entrepreneurs, startups, and organizations with strategic financial, legal, and operational support.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-5 hover:border-purple-500/50 transition-all shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To create businesses that solve real-world challenges while empowering entrepreneurs, startups, and organizations with strategic financial, legal, and operational support. We bridge capital, technology, and market opportunities to accelerate sustainable enterprise value.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Empower early-stage & growth startups with capital and guidance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Optimize operational, legal, and regulatory compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Foster cross-border trade and technological advancement</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-5 hover:border-purple-500/50 transition-all shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 text-white flex items-center justify-center shadow-md">
              <Compass className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To build one of the world’s most trusted business ecosystems, recognized for driving sustainable innovation, multi-sector economic impact, and long-term value creation across global markets.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Global benchmark in diversified business incubation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Unwavering commitment to institutional transparency</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Long-term value creation for partners and investors</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Foundation Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 text-white border border-purple-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Core Belief</span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Sustainable growth is achieved through transparency, innovation, and strong business foundations.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Every enterprise under Estuscia Group LLP is built on institutional governance, scalable technology, and risk-managed capital structuring.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("why-us")}
            className="shrink-0 px-6 py-3.5 bg-white text-slate-900 font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-100 transition-all cursor-pointer shadow-md"
          >
            Learn Our Pillars
          </button>
        </div>

      </div>
    </section>
  );
}
