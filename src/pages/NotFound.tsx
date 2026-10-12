import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-40 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="w-20 h-20 bg-rose-50 border border-rose-200 rounded-3xl flex items-center justify-center text-rose-600 mb-6 shadow-xl shadow-rose-950/5">
        <AlertTriangle className="w-10 h-10" />
      </div>

      <h1 className="text-4xl sm:text-6xl font-black text-slate-900 font-display">
        404 – PAGE NOT FOUND
      </h1>

      <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-md font-medium">
        The page or resource you are searching for does not exist or has been relocated.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-sm tracking-wide shadow-xl shadow-rose-600/25 inline-flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <Home className="w-4 h-4 text-amber-300" />
          <span>BACK TO HOME</span>
        </Link>
      </div>
    </div>
  );
};
