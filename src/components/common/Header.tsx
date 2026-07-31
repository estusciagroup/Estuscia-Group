import { useState } from "react";
import { ChevronRight, Sun, Moon, Menu, X, Globe, Sparkles } from "lucide-react";
import logoImg from "../../assets/images/logo.png";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-colors duration-300 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Brand Logo & Name */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={logoImg}
              alt="Estuscia Group LLP Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <button onClick={() => scrollToSection("about")} className="hover:text-purple-400 transition-colors cursor-pointer">
              About
            </button>

            <button onClick={() => scrollToSection("ecosystem")} className="hover:text-purple-400 transition-colors cursor-pointer">
              Ecosystem
            </button>

            <button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors cursor-pointer">
              Services
            </button>

            <button onClick={() => scrollToSection("pipeline")} className="hover:text-purple-400 transition-colors cursor-pointer">
              Pipeline
            </button>

            <button onClick={() => scrollToSection("why-us")} className="hover:text-purple-400 transition-colors cursor-pointer">
              Why Us
            </button>

            <button onClick={() => scrollToSection("leadership")} className="hover:text-purple-400 transition-colors cursor-pointer">
              Leadership
            </button>

            <button onClick={() => scrollToSection("insights")} className="hover:text-purple-400 transition-colors cursor-pointer">
              Insights
            </button>

            <button onClick={() => scrollToSection("faq")} className="hover:text-purple-400 transition-colors cursor-pointer">
              FAQ
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-purple-400 transition-all cursor-pointer"
              aria-label="Toggle Theme"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon className="h-4 w-4 text-purple-400" /> : <Sun className="h-4 w-4 text-amber-400" />}
            </button>

            {/* Contact Us CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-estuscia-glow hover:shadow-estuscia-glow-lg transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 py-5 px-6 space-y-4 shadow-xl text-white">
          <nav className="flex flex-col gap-3 text-xs font-bold uppercase tracking-wider text-slate-300">
            <button onClick={() => scrollToSection("about")} className="text-left hover:text-purple-400 py-1 cursor-pointer">About Us</button>

            <button onClick={() => scrollToSection("ecosystem")} className="text-left hover:text-purple-400 py-1 cursor-pointer">Business Ecosystem</button>

            <button onClick={() => scrollToSection("services")} className="text-left hover:text-purple-400 py-1 cursor-pointer">Services Offered</button>

            <button onClick={() => scrollToSection("pipeline")} className="text-left hover:text-purple-400 py-1 cursor-pointer">Financial Pipeline</button>

            <button onClick={() => scrollToSection("why-us")} className="text-left hover:text-purple-400 py-1 cursor-pointer">Why Choose Estuscia</button>

            <button onClick={() => scrollToSection("leadership")} className="text-left hover:text-purple-400 py-1 cursor-pointer">Leadership Team</button>

            <button onClick={() => scrollToSection("insights")} className="text-left hover:text-purple-400 py-1 cursor-pointer">Insights & News</button>

            <button onClick={() => scrollToSection("faq")} className="text-left hover:text-purple-400 py-1 cursor-pointer">FAQ</button>
          </nav>
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
            >
              <span>Explore Opportunities & Contact</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
