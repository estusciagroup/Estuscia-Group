import { useState } from "react";
import { Sparkles, Calendar, Clock, ArrowUpRight, X, BookOpen } from "lucide-react";
import { InsightArticle } from "../../types";

const articles: InsightArticle[] = [
  {
    id: "article-1",
    title: "Structuring Early-Stage Startup Capital in High-Volatility Markets",
    summary: "Discover how hybrid debt-equity syndication and milestone escrow accounts protect valuation while securing necessary runway for tech ventures.",
    content: "When navigating early-stage venture building in volatile macro environments, traditional equity dilution can severely impair long-term founder alignment. Estuscia Group LLP advocates a structured capital approach: combining non-dilutive bridge financing with equity option tranches tied strictly to technical and commercial milestones. This methodology ensures capital efficiency, maintains valuation defense, and aligns investor return horizons.",
    category: "Venture Capital",
    date: "October 14, 2025",
    readTime: "5 min read",
    author: "Dr. Elena Rostova",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "article-2",
    title: "Cross-Border Trade Corridors: Leveraging Middle East & Asia Expansion",
    summary: "An executive guide to navigating import tariffs, customs clearance, and local joint-venture partnerships in emerging trade corridors.",
    content: "Global supply chain diversification is no longer optional for mid-tier manufacturing and consumer goods enterprises. By establishing dual-hub corporate entities in strategic free zones, businesses can unlock tax optimization, streamlined clearance protocols, and direct access to high-demand markets across the GCC and Southeast Asia.",
    category: "Global Trade",
    date: "November 02, 2025",
    readTime: "7 min read",
    author: "Tariq Al-Mansoor",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "article-3",
    title: "AI & SaaS Co-Building: The Venture Studio Acceleration Model",
    summary: "Why traditional incubators are being superseded by hands-on technical venture studios that actively build core AI software infrastructure.",
    content: "Early-stage founders often lose critical market momentum attempting to hire and manage offshore software developers. Estuscia Venture Studio solves this by deploying embedded senior AI architects, full-stack engineers, and cloud DevOps teams directly into the startup from Day 0, accelerating time-to-market by 3x.",
    category: "Technology",
    date: "December 18, 2025",
    readTime: "6 min read",
    author: "Devon Chen",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
  }
];

export default function InsightsSection() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Corporate Insights</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Thought Leadership & Market Analysis
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Expert perspectives on corporate restructuring, venture building, global trade logistics, and tech innovation from Estuscia leadership.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div 
              key={art.id}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={art.imageUrl} 
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-purple-300 border border-purple-500/30">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">By {art.author}</span>
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                {selectedArticle.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{selectedArticle.title}</h3>
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100">
              <img 
                src={selectedArticle.imageUrl} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {selectedArticle.content}
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold hover:bg-purple-600 transition-colors cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
