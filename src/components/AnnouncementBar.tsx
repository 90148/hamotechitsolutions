import React from 'react';
import { ArrowRight, Clock3, Megaphone } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenModal: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenModal }) => {
  const tickerText = [
    'Admissions Open for Upcoming Batches',
    'Limited Seats Available',
    'Next Cohort Starts Soon',
    'Live Training & Placement Guidance'
  ];

  return (
    <div className="bg-gradient-to-r from-[#FFE347] via-[#FFD45C] to-[#FFB45C] border-y border-amber-300/80 py-2 sm:py-2.5 overflow-hidden relative shadow-md w-full">
      <div className="flex items-center w-full overflow-hidden">
        <button
          type="button"
          onClick={onOpenModal}
          className="relative z-10 shrink-0 flex items-center gap-1.5 sm:gap-2 bg-[#FFE347] px-3 sm:px-6 py-1 text-xs sm:text-sm md:text-base font-extrabold text-slate-950 hover:text-[#BE123C] transition-colors shadow-sm"
        >
          <Megaphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BE123C]" />
          <span>Active Openings</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-right items-center">
            {[...tickerText, ...tickerText, ...tickerText].map((item, idx) => (
              <button
                key={`${item}-${idx}`}
                type="button"
                onClick={onOpenModal}
                className="flex items-center gap-1.5 sm:gap-2 mx-3 sm:mx-5 text-[11px] sm:text-xs md:text-sm font-semibold text-slate-950 tracking-wide hover:text-[#BE123C] transition-colors"
              >
                <Clock3 className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <span>{item}</span>
                <span className="text-slate-700/60">•</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
