import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      
      if (documentHeight > 0) {
        setScrollPercentage((currentScroll / documentHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-rose-100/60 backdrop-blur-xs z-50 overflow-visible pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#E11D48] via-[#F43F5E] via-[#F59E0B] to-[#8B5CF6] transition-all duration-150 ease-out relative"
        style={{ width: `${scrollPercentage}%` }}
      >
        {/* Animated glowing tip that tracks with scrolling */}
        {scrollPercentage > 1 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-rose-500 shadow-[0_0_12px_rgba(225,29,72,0.8)] animate-pulse" />
        )}
      </div>
    </div>
  );
};
