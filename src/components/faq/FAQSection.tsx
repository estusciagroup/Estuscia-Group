import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, Search } from "lucide-react";
import { FAQItem } from "../../types";

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Estuscia Group LLP and how is it structured?",
    answer: "Estuscia Group LLP is a diversified business ecosystem operating across five distinct verticals: Financial Services, Business Consulting, Tech & Media, Global Trade & Commerce, and Venture Studio. Each vertical functions as a specialized entity while cross-leveraging shared capital, legal governance, and technology infrastructure.",
    category: "ecosystem"
  },
  {
    id: "faq-2",
    question: "How does Estuscia support early-stage startups and founders?",
    answer: "Through our Venture Studio and Startup Financial Planning Pipeline, we offer end-to-end acceleration. This includes 0-to-1 MVP software development, financial modeling, cap table structuring, legal registration, seed capital access, and strategic mentorship.",
    category: "incubation"
  },
  {
    id: "faq-3",
    question: "What corporate advisory services do you offer to established enterprises?",
    answer: "We assist established corporations with cross-border market expansion, operational restructuring, M&A strategy, regulatory compliance, and digital transformation architectures.",
    category: "services"
  },
  {
    id: "faq-4",
    question: "How can investors partner with Estuscia Group LLP?",
    answer: "Accredited private equity partners, angel syndicates, and institutional funds can co-invest alongside Estuscia across vetted venture studio startups, real estate assets, and trade financing liquidity facilities.",
    category: "partnerships"
  },
  {
    id: "faq-5",
    question: "What is the process for submitting a project or consultation request?",
    answer: "Simply navigate to our Contact Us section below and complete the inquiry form. An Estuscia executive advisor will review your project requirements within 24 hours to schedule an introductory consultation.",
    category: "services"
  }
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Find immediate answers regarding our corporate structure, venture incubation model, consulting engagements, and global trade operations.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["all", "ecosystem", "services", "incubation", "partnerships"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No questions found matching your search term.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-fadeIn pl-14">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
