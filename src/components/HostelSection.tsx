import React from 'react';
import { Home, Sparkles, CheckCircle2 } from 'lucide-react';

interface HostelSectionProps {
  onOpenModal: () => void;
}

export const HostelSection: React.FC<HostelSectionProps> = ({ onOpenModal }) => {
  const highlights = [
    { title: 'Safe & Secure Environment', desc: 'Protected premises with CCTV surveillance and warden assistance.' },
    { title: 'Comfortable Accommodation', desc: 'Clean, spacious rooms designed for focused study and rest.' },
    { title: 'Student-Friendly Facilities', desc: 'High-speed Wi-Fi, food options, and nearby transportation.' },
    { title: 'Limited Offline Seats', desc: 'Reserved exclusively for outstation students joining classroom training.' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFF7ED]/70 via-[#FFF1F2]/80 to-[#FDF2F8]/70 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white via-amber-50/40 to-rose-50/40 border border-amber-200/80 glass-card shadow-2xl shadow-rose-900/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-[#D97706] text-xs font-bold uppercase tracking-wider shadow-sm">
                <Home className="w-3.5 h-3.5 text-[#D97706]" />
                <span>OUTSTATION STUDENT SUPPORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
                HOSTEL FACILITY <span className="text-gradient-yellow">AVAILABLE</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We ensure outstation students from across Tamil Nadu &amp; India have a safe, clean, and comfortable living environment near our Guduvancheri, Chennai institute campus.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#E11D48] text-white font-extrabold text-xs tracking-wider shadow-lg shadow-amber-500/25 inline-flex items-center space-x-2 hover:scale-105 transition-transform"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>ENQUIRE HOSTEL SEATS</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/95 border border-amber-200/70 shadow-md shadow-amber-900/5 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 font-display uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
