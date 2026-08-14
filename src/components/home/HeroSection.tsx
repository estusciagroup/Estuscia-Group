import { ArrowRight, ShieldCheck, TrendingUp, Building2, Layers, Sparkles, Globe2, Briefcase } from "lucide-react";
import heroImg from "../../assets/images/estuscia_hero_1785514629970.jpg";

export default function HeroSection() {
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
    <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">

      {/* Background Violet-Blue Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/30 text-purple-800 dark:text-purple-300 text-xs font-extrabold uppercase tracking-widest shadow-xs">
              <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>Estuscia Group • Corporate Business Ecosystem</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Building Businesses. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                Creating Opportunities.
              </span> <br />
              Empowering the Future.
            </h1>

            {/* Sub Heading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Estuscia Group is a diversified business ecosystem focused on financial services, business consulting, technology, media, trade, and startup development. We help entrepreneurs, businesses, and investors build sustainable long-term growth through strategic solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection("ecosystem")}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-base rounded-2xl shadow-estuscia-glow hover:shadow-estuscia-glow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700/80 hover:border-purple-500/50 font-bold text-base rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Contact Us</span>
              </a> */}
            </div>

            {/* Key Metrics / Quick Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                <p className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">Business Pillars</p>
                <p className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">6 Core</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                <p className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">Ecosystem Reach</p>
                <p className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">Global</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                <p className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">Strategic Value</p>
                <p className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">$50M+</p>
              </div>
            </div>

          </div>

          {/* Right Hero Graphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-violet-600/20 border border-purple-300 dark:border-purple-500/30 shadow-2xl overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-slate-100 dark:bg-slate-900">
                <img
                  src={heroImg}
                  alt="Estuscia Group Strategic Ecosystem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Floating Glass Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-purple-500/30 space-y-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">Sustainable Growth Engine</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug font-medium">
                    Unifying Financial Services, Corporate Strategy, Tech Innovation & Global Trade.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-500/40 text-indigo-800 dark:text-indigo-300 text-xs font-bold flex items-center gap-2.5 shadow-lg hidden sm:flex">
              <Building2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span>Multi-Industry Portfolio</span>
            </div>

            <div className="absolute -bottom-4 -right-4 p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-purple-200 dark:border-purple-500/40 text-purple-800 dark:text-purple-300 text-xs font-bold flex items-center gap-2.5 shadow-lg hidden sm:flex">
              <TrendingUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>Strategic Advisory & Incubation</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
