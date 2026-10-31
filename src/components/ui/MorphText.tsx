import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export const MorphText: React.FC<MorphTextProps> = ({
  texts,
  interval = 3500,
  className = ''
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  const currentText = texts[index] || '';

  return (
    <span className={`inline-block relative min-h-[1.4em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
            letterSpacing: '0.15em',
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            letterSpacing: '0.01em',
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
            letterSpacing: '-0.05em',
            scale: 1.04,
            transition: {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          className="inline-block transform-gpu will-change-transform will-change-filter"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
