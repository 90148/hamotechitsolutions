import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#050816] min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-3xl flex items-center justify-center text-[#E50914] mb-6 glow-red">
        <AlertTriangle className="w-10 h-10" />
      </div>

      <h1 className="text-4xl sm:text-6xl font-black text-white font-display">
        404 – PAGE NOT FOUND
      </h1>

      <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-md">
        The page or resource you are searching for does not exist or has been relocated.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] text-white font-bold text-sm tracking-wide shadow-xl inline-flex items-center space-x-2 glow-red hover:scale-105 transition-transform"
        >
          <Home className="w-4 h-4 text-[#FFD21F]" />
          <span>BACK TO HOME</span>
        </Link>
      </div>
    </div>
  );
};
