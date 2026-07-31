import { Quote, Sparkles, Star } from "lucide-react";
import { Testimonial } from "../../types";

const testimonials: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Marcus Sterling",
    role: "Founder & CEO",
    company: "Apex Pay Solutions",
    quote: "Estuscia Group LLP transformed our fintech startup from a local pilot into an institutional-grade company. Their venture studio co-built our tech stack while their financial arm structured our $2.5M seed round.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    sector: "Fintech"
  },
  {
    id: "test-2",
    clientName: "Sarah Jenkins",
    role: "VP of Global Supply Chain",
    company: "Novus Logistics Corp",
    quote: "Partnering with Estuscia Global Trade expanded our distribution network into Middle East corridors seamlessly. Their customs compliance and tariff advisory saved us months of delay.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    sector: "Global Trade"
  },
  {
    id: "test-3",
    clientName: "David K. Thorne",
    role: "Managing Director",
    company: "Vanguard Asset Management",
    quote: "Estuscia's corporate consulting provided the exact clarity we needed during our cross-border restructuring. Their execution velocity and regulatory diligence are best-in-class.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    sector: "Asset Management"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Ecosystem Success</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Partner & Founder Endorsements
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Read how Estuscia Group LLP empowers ambitious entrepreneurs, corporations, and institutional investors across sectors.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-purple-400" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img 
                  src={t.avatarUrl} 
                  alt={t.clientName}
                  className="w-11 h-11 rounded-full object-cover border border-purple-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.clientName}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.role}, <span className="text-purple-600 dark:text-purple-400 font-semibold">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
