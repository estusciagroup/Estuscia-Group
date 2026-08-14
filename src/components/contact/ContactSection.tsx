import { useState, FormEvent } from "react";
import {
  Building2,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  ShieldCheck
} from "lucide-react";
import { LeadSubmission } from "../../types";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "General Inquiry" as LeadSubmission['inquiryType'],
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_estuscia2026",
        "template_estuscia2026",
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization || "Not Provided",
          inquiry_type: formData.inquiryType,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        "8sMHg-Kgo0C5ooSg-"
      );

      // Save locally (optional)
      const existingLeads = JSON.parse(
        localStorage.getItem("estuscia_leads") || "[]"
      );

      const newLead: LeadSubmission = {
        id: "lead-" + Date.now(),
        ...formData,
        createdAt: new Date().toISOString(),
        status: "new",
      };

      localStorage.setItem(
        "estuscia_leads",
        JSON.stringify([newLead, ...existingLeads])
      );

      setSubmitted(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        inquiryType: "General Inquiry",
        message: "",
      });

    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Unable to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Connect With Us</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start the Conversation
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Connect with our executive team to explore financial advisory, corporate consulting, technology integration, global trade, or startup incubation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Corporate Info Column */}
          <div className="lg:col-span-5 space-y-8 p-8 rounded-3xl bg-slate-950 text-white border border-purple-500/30 shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Headquarters</span>
              <h3 className="text-2xl font-black text-white mt-1">Estuscia Group</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                A multi-business ecosystem driving sustainable growth across finance, consulting, tech, trade, and venture incubation.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-800">

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-950 text-purple-400 border border-purple-800 shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Registered Office</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Estuscia Group</p>
                  <p className="text-xs text-slate-300">Hilite Business Park, Calicut</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-950 text-purple-400 border border-purple-800 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Communications</h4>
                  <a href="mailto:contact@estuscia.com" className="text-sm font-semibold text-purple-300 hover:underline">
                    estusciagroup@gmail.com
                  </a>
                  <p className="text-xs text-slate-400">Inquiries answered within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-950 text-purple-400 border border-purple-800 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Hotline</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">(+91) 9633329669 | 9633359669</p>
                  {/* <p className="text-xs text-slate-400">Direct Executive Support Line</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-950 text-purple-400 border border-purple-800 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Hours</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Monday - Saturday: 09:30 AM - 05:30 PM IST</p>
                  <p className="text-xs text-slate-400">Closed Weekends & Public Holidays</p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              <p className="text-[11px] text-slate-300 leading-tight">
                All communications and proposals submitted are protected under strict NDA and corporate confidentiality protocols.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Inquiry Received Successfully</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-purple-600 dark:text-purple-400">{formData.fullName}</span>. An Estuscia executive advisor has been assigned to your request and will reach out via email shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", email: "", phone: "", organization: "", inquiryType: "General Inquiry", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send Us a Message</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill out the fields below and select your primary vertical of interest.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company or Startup Name"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Area of Interest / Vertical *
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                  >
                    <option value="Estuscia Group">Estuscia Group (Parent Ecosystem & Governance)</option>
                    <option value="Estuscia Capital">Estuscia Capital (Private Equity & Wealth Management)</option>
                    <option value="Froi Studio">Froi Studio (Creative Design & Media Production)</option>
                    <option value="Estivoxx Technologies">Estivoxx Technologies (Enterprise SaaS & AI)</option>
                    <option value="Zedeo Cart">Zedeo Cart (E-Commerce Infrastructure)</option>
                    <option value="Animalo Fashion">Animalo Fashion (Contemporary Apparel & Apparel Exports)</option>
                    <option value="Estuscia Global">Estuscia Global (Cross-Border Trade & Logistics)</option>
                    <option value="Chai with trade">Chai with trade (B2B Trade Networking Hub)</option>
                    <option value="MaQcala Perfumes">MaQcala Perfumes (Luxury Artisanal Fragrances)</option>
                    <option value="General Inquiry">General Corporate Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives, project timeline, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-estuscia-glow hover:shadow-estuscia-glow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry to Estuscia Group</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
