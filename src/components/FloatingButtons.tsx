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
      <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40">
        <button
          onClick={onOpenModal}
          className="flex items-center space-x-1.5 sm:space-x-2 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-rose-500/25 border border-rose-300 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDE047] animate-spin-slow" />
          <span>ENROLL NOW</span>
        </button>
      </div>

      {/* Mobile Direct Phone Button & Back To Top Container */}
      <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 flex flex-col space-y-2 sm:space-y-3">
        {/* Mobile Call CTA */}
        <a
          href="tel:9884166198"
          className="md:hidden flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-white/95 text-rose-600 border border-rose-200 rounded-full shadow-xl shadow-rose-950/10 backdrop-blur-md active:scale-95 transition-all hover:bg-rose-50"
          aria-label="Call HamoTech IT Solutions"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
        </a>

        {/* Back to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-white/95 text-slate-700 hover:text-rose-600 border border-rose-200 rounded-full shadow-xl shadow-rose-950/10 backdrop-blur-md hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
    </>
  );
};
