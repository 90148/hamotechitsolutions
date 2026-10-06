import React, { useEffect, useState } from 'react';
import { ChevronUp, Phone, Sparkles } from 'lucide-react';

interface FloatingButtonsProps {
  onOpenModal: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Bottom Left Enroll Now Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={onOpenModal}
          className="flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#E50914] to-[#c40711] hover:from-[#c40711] hover:to-[#a3050e] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 glow-red border border-red-500/30"
        >
          <Sparkles className="w-4 h-4 text-[#FFD21F] animate-spin-slow" />
          <span>ENROLL NOW</span>
        </button>
      </div>

      {/* Mobile Direct Phone Button & Back To Top Container */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col space-y-3">
        {/* Mobile Call CTA */}
        <a
          href="tel:98841 66198"
          className="md:hidden flex items-center justify-center w-12 h-12 bg-slate-900/90 text-[#FFD21F] border border-[#FFD21F]/40 rounded-full shadow-lg backdrop-blur-md active:scale-95 transition-transform"
          aria-label="Call HamoTech IT Solutions"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Back to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center justify-center w-12 h-12 bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/80 rounded-full shadow-lg backdrop-blur-md hover:border-[#E50914] hover:bg-[#0B1020] transition-all duration-300 hover:scale-110"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
};
