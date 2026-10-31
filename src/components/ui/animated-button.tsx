import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'group relative isolate overflow-hidden',
        'before:pointer-events-none before:absolute before:inset-y-0 before:-left-1/2 before:w-1/3 before:skew-x-[-20deg] before:bg-white/35 before:blur-md before:transition-transform before:duration-700',
        'hover:before:translate-x-[420%] focus-visible:before:translate-x-[420%]',
        'disabled:pointer-events-none disabled:opacity-60',
        className
      )}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}
