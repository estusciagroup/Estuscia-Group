import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Globe, Linkedin, Twitter, Mail, ShieldAlert } from "lucide-react";
import logoImg from "../../assets/images/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
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
    <footer className="bg-slate-950 text-white border-t border-slate-800 transition-colors pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div
              onClick={() => scrollToSection("hero")}
              className="flex items-center cursor-pointer group"
            >
              <img
                src={logoImg}
                alt="Estuscia Group Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Estuscia Group is a diversified business ecosystem focused on financial services, business consulting, technology, media, trade, and startup development. Building sustainable long-term value through strategic solutions.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="mailto:estusciagroup@gmail.com" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors cursor-pointer">About Estuscia</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Our Ecosystem</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors cursor-pointer">Services Offered</button></li>
              <li><button onClick={() => scrollToSection("pipeline")} className="hover:text-white transition-colors cursor-pointer">Financial Pipeline</button></li>
              <li><button onClick={() => scrollToSection("why-us")} className="hover:text-white transition-colors cursor-pointer">Why Choose Us</button></li>
              <li><button onClick={() => scrollToSection("leadership")} className="hover:text-white transition-colors cursor-pointer">Leadership Team</button></li>
              <li><button onClick={() => scrollToSection("insights")} className="hover:text-white transition-colors cursor-pointer">Insights & News</button></li>
              <li><button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors cursor-pointer">FAQ</button></li>
            </ul>
          </div>

          {/* Ecosystem Firms */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400">Ecosystem Firms</h4>
            <ul className="space-y-1.5 text-xs font-medium text-slate-400">
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Estuscia Group</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Estuscia Capital</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Froi Studio</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Estivoxx Technologies</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Zedeo Cart</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Animalo Fashion</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Estuscia Global</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">Chai with Trade</button></li>
              <li><button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer">MaQcala Perfumes</button></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          {/* <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400">Corporate Dispatch</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to Estuscia quarterly market reports, ecosystem venture updates, and financial insights.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center gap-2 text-xs text-purple-300 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                <span>Subscribed to Estuscia Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-xs font-bold text-white hover:from-indigo-500 hover:to-purple-500 transition-all cursor-pointer shadow-md"
                >
                  Subscribe to Dispatch
                </button>
              </form>
            )}
          </div> */}

        </div>

        {/* Legal & Disclaimers */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-slate-500">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>

          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Terms of Governance
          </button>

          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Regulatory Compliance
          </button>

          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Cookie Settings
          </button>
        </div>

      </div>
    </footer>
  );
}
