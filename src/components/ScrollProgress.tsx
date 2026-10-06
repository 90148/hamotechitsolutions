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
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#E50914] via-[#FFD21F] to-[#00BFFF] transition-all duration-150 ease-out glow-red"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
