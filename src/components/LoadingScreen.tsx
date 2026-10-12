import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import logoImage from '../assets/hamo logo.png';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF1F2] via-[#FDF2F8] to-[#FFF7ED] text-slate-800"
        >
          {/* Multi-color ambient background glows */}
          <div className="absolute w-80 h-80 rounded-full bg-rose-400/20 blur-3xl animate-pulse-slow pointer-events-none" />
          <div className="absolute w-80 h-80 rounded-full bg-purple-400/15 blur-3xl animate-pulse-slow pointer-events-none delay-500" />
          <div className="absolute w-60 h-60 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />

          {/* Logo animation container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Animated brand icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#E11D48] via-[#F43F5E] to-[#F59E0B] p-[2px] shadow-2xl glow-red">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-1 shadow-inner">
                  <img
                    src={logoImage}
                    alt="HamoTech logo"
                    className="w-full h-full rounded-[12px] object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2.5 rounded-3xl border-2 border-dashed border-rose-400/40 pointer-events-none"
              />
            </div>

            {/* Brand text */}
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider font-display">
                <span className="text-slate-900">HAMOTECH</span>{' '}
                <span className="text-[#E11D48]">IT SOLUTIONS</span>
              </h1>
              <p className="text-xs tracking-[0.3em] uppercase text-rose-600 font-semibold mt-2">
                TRAIN • LEARN • GROW • SUCCEED
              </p>
            </div>

            {/* Loading status bar */}
            <div className="w-48 h-1.5 bg-rose-200/60 rounded-full mt-7 overflow-hidden relative shadow-inner">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#E11D48] via-[#F43F5E] via-[#F59E0B] to-[#8B5CF6] rounded-full"
              />
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-500 mt-4 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>Preparing your IT career path...</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
