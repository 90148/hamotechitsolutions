import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenModal: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenModal }) => {
  const tickerText = [
    '🔥 Admissions Open for New Batches',
    '⚡ Limited Seats Available',
    '💻 Industry-Oriented Practical Training',
    '🚀 Real-Time Enterprise Projects',
    '🎯 100% Placement Preparation & Mock Interviews',
    '🎓 Course & Internship Certification'
  ];

  return (
    <div className="bg-gradient-to-r from-[#E50914] via-[#0B1020] to-[#050816] border-y border-red-500/30 py-3 overflow-hidden relative shadow-lg">
      <div className="flex whitespace-nowrap animate-marquee items-center cursor-pointer" onClick={onOpenModal}>
        {/* Repeat list twice for seamless infinite scroll */}
        {[...tickerText, ...tickerText].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 mx-4">
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-display flex items-center space-x-2">
              <span>{item}</span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
