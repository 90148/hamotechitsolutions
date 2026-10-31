import React, { useState, useEffect, useCallback, useRef } from 'react';

interface AsciiGlitchTextProps {
  text: string;
  className?: string;
  autoTriggerInterval?: number; // In ms, e.g. 5000
  glitchOnHover?: boolean;
}

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~01ABCDEFXYZ';

export const AsciiGlitchText: React.FC<AsciiGlitchTextProps> = ({
  text,
  className = '',
  autoTriggerInterval = 6000,
  glitchOnHover = true
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);

    const length = text.length;
    let iteration = 0;
    const maxIterations = length * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            // If the wave has passed this index, settle the original character
            if (index < iteration / 2.5) {
              return text[index];
            }
            // Otherwise, render a random ASCII glitch character
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join('');
      });

      iteration += 1;

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 35);
  }, [text, isGlitching]);

  // Initial trigger & auto-loop
  useEffect(() => {
    setDisplayText(text);
    // Initial glitch on mount after a short delay
    const initialTimer = setTimeout(() => {
      triggerGlitch();
    }, 800);

    let periodicTimer: number | null = null;
    if (autoTriggerInterval > 0) {
      periodicTimer = window.setInterval(() => {
        triggerGlitch();
      }, autoTriggerInterval);
    }

    return () => {
      clearTimeout(initialTimer);
      if (periodicTimer) clearInterval(periodicTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, autoTriggerInterval, triggerGlitch]);

  return (
    <span
      onMouseEnter={glitchOnHover ? triggerGlitch : undefined}
      className={`inline-block font-mono cursor-pointer transition-colors duration-200 select-none ${
        isGlitching ? 'text-[#E11D48] filter drop-shadow-[0_0_8px_rgba(225,29,72,0.4)]' : ''
      } ${className}`}
      title="Hover to glitch"
    >
      {displayText}
    </span>
  );
};
