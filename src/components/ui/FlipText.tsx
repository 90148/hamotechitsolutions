import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type TargetAndTransition } from 'framer-motion';

interface FlipTextProps {
  words: string[];
  interval?: number;
  className?: string;
  variant?: 'flip' | 'flip-fade' | 'flip-3d';
}

interface AnimationConfig {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
}

export const FlipText: React.FC<FlipTextProps> = ({
  words,
  interval = 3000,
  className = '',
  variant = 'flip-fade'
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[index] || '';

  // Variants for different flip styles
  const variants: Record<'flip' | 'flip-fade' | 'flip-3d', AnimationConfig> = {
    'flip-fade': {
      initial: {
        opacity: 0,
        y: 20,
        rotateX: 90,
        filter: 'blur(6px)'
      },
      animate: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1]
        }
      },
      exit: {
        opacity: 0,
        y: -20,
        rotateX: -90,
        filter: 'blur(6px)',
        transition: {
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },
    'flip': {
      initial: {
        rotateX: 90,
        opacity: 0
      },
      animate: {
        rotateX: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      },
      exit: {
        rotateX: -90,
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: 'easeIn'
        }
      }
    },
    'flip-3d': {
      initial: {
        opacity: 0,
        rotateX: 100,
        scale: 0.85
      },
      animate: {
        opacity: 1,
        rotateX: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1]
        }
      },
      exit: {
        opacity: 0,
        rotateX: -100,
        scale: 0.85,
        transition: {
          duration: 0.4,
          ease: 'easeIn'
        }
      }
    }
  };

  const selectedVariant = variants[variant] || variants['flip-fade'];

  return (
    <span
      className={`inline-block relative overflow-hidden align-baseline ${className}`}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={selectedVariant.initial}
          animate={selectedVariant.animate}
          exit={selectedVariant.exit}
          className="inline-block transform-gpu will-change-transform"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
