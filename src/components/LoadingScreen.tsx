import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import logoImage from '../assets/hamo logo.png';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dismiss loading screen quickly so it doesn't block the user (around 1.2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white"
        >
          {/* Futuristic background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#E50914]/20 blur-3xl animate-pulse-slow pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full bg-[#00BFFF]/15 blur-3xl animate-pulse-slow pointer-events-none delay-500" />

          {/* Logo animation container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Animated brand icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#E50914] via-[#0B1020] to-[#00BFFF] p-[2px] shadow-2xl glow-red">
                <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center">
                  <img
                    src={logoImage}
                    alt="HamoTech logo"
                    className="w-full h-full rounded-[14px] object-cover animate-pulse"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-3xl border border-dashed border-[#E50914]/40 pointer-events-none"
              />
            </div>

            {/* Brand text */}
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider font-display">
                <span className="text-white">HAMOTECH</span>{' '}
                <span className="text-[#E50914]">IT SOLUTIONS</span>
              </h1>
              <p className="text-xs tracking-[0.3em] uppercase text-slate-400 mt-2 font-medium">
                TRAIN • LEARN • GROW • SUCCEED
              </p>
            </div>

            {/* Loading status bar */}
            <div className="w-48 h-1 bg-slate-800 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#E50914] via-[#FFD21F] to-[#00BFFF] rounded-full"
              />
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-500 mt-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>Preparing your IT career path...</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
