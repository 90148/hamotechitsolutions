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
    <section className="py-16 bg-[#0B1020] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#050816] via-[#0B1020] to-[#050816] border border-amber-500/30 glass-card shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5" />
                <span>OUTSTATION STUDENT SUPPORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
                HOSTEL FACILITY <span className="text-gradient-yellow">AVAILABLE</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We ensure outstation students from across Tamil Nadu & India have a safe, clean, and comfortable living environment near our Guduvancheri, Chennai institute campus.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFD21F] to-[#E50914] text-[#050816] font-extrabold text-xs tracking-wider shadow-lg inline-flex items-center space-x-2 hover:scale-105 transition-transform"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>ENQUIRE HOSTEL SEATS</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-white font-display uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
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
