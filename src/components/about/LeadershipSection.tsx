import { Linkedin, Mail, Sparkles, User, ImagePlus } from "lucide-react";
import { LeadershipMember } from "../../types";
import Shahzeen from "../../assets/images/Shahzeen.png";
import Akshay from "../../assets/images/Akshay.png";
import Riza from "../../assets/images/Riza.jpeg";
import Anirudh from "../../assets/images/Anirudh.png";

const leadershipTeam: (LeadershipMember & { initials: string })[] = [
  {
    id: "ceo",
    name: "Shahzeen Khalid",
    role: "Founder & Chief Executive Officer (CEO)",
    bio: "Leading the vision, strategy, and long-term growth of Estuscia Group. Responsible for building the organization’s ecosystem, driving innovation, creating strategic partnerships, and ensuring every venture aligns with the company’s mission of creating sustainable businesses with global impact.",
    avatarUrl: Shahzeen,
    initials: "SK",
    linkedInUrl: "https://linkedin.com",
    emailUrl: "mailto:ceo@estuscia.com",
    expertise: [
      "Ecosystem Strategy",
      "Global Expansion",
      "Venture Building",
      "Executive Leadership",
    ],
  },
  {
    id: "coo",
    name: "Akshay M A",
    role: "Chief Operating Officer (COO)",
    bio: "Oversees the company’s daily operations, legal compliance, financial administration, and business execution. Ensures operational efficiency, regulatory compliance, resource management, and seamless coordination across all departments to support sustainable organizational growth.",
    avatarUrl: Akshay,
    initials: "AM",
    linkedInUrl: "https://linkedin.com",
    emailUrl: "mailto:coo@estuscia.com",
    expertise: [
      "Operations Management",
      "Legal Compliance",
      "Financial Admin",
      "Resource Execution",
    ],
  },
  {
    id: "cos",
    name: "Riza Mathiyam",
    role: "Chief of Staff (COS)",
    bio: "Works closely with the CEO to execute strategic initiatives, coordinate cross-functional teams, monitor organizational priorities, and improve internal communication. Acts as the central link between leadership and departments, ensuring decisions are implemented effectively and business objectives remain on track.",
    avatarUrl: Riza,
    initials: "RM",
    linkedInUrl: "https://linkedin.com",
    emailUrl: "mailto:cos@estuscia.com",
    expertise: [
      "Strategic Execution",
      "Cross-Functional Ops",
      "Priority Alignment",
      "Internal Governance",
    ],
  },
  {
    id: "sales-manager",
    name: "Anirudh Menon",
    role: "Sales Team Manager",
    bio: "Leads the Sales Department by managing the sales team, developing sales strategies, monitoring performance, achieving revenue targets, and strengthening client relationships. Responsible for team productivity, customer acquisition, and delivering consistent business growth through effective sales execution.",
    avatarUrl: Anirudh,
    initials: "AN",
    linkedInUrl: "https://linkedin.com",
    emailUrl: "mailto:sales@estuscia.com",
    expertise: [
      "Sales Strategy",
      "Revenue Targets",
      "Client Acquisition",
      "Team Productivity",
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Governance & Executive Vision</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Leadership & Executive Team
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Guiding Estuscia Group’s multi-business ecosystem with vision, operational discipline, strategic execution, and client acquisition excellence.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member) => (
            <div 
              key={member.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Photo Slot / Image Gap (Formatted for Future Photo Upload) */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-slate-100 via-purple-50/50 to-indigo-100 dark:from-slate-800 dark:via-purple-950/40 dark:to-slate-900 border border-dashed border-purple-300 dark:border-purple-700/60 flex flex-col items-center justify-center p-4 text-center group-hover:border-purple-500 transition-all">
                  {member.avatarUrl ? (
                    <img 
                      src={member.avatarUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
                        {member.initials}
                      </div>
                      {/* <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400"> */}
                        {/* <ImagePlus className="h-3 w-3 text-purple-500" /> */}
                        {/* <span>Photo Placeholder</span> */}
                      {/* </div> */}
                    </div>
                  )}

                  {/* Contact overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center gap-2">
                      {member.linkedInUrl && (
                        <a href={member.linkedInUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.emailUrl && (
                        <a href={member.emailUrl} className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-colors">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {member.expertise.map((exp, i) => (
                  <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
