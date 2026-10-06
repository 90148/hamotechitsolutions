import React from 'react';
import { QrCode, Sparkles } from 'lucide-react';

interface QRCodeSectionProps {
  onOpenModal: () => void;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-16 bg-[#0B1020] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#050816] via-[#0B1020] to-[#050816] border border-cyan-500/30 glass-card shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          
          <div className="space-y-3 max-w-md">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[#00BFFF] text-xs font-bold uppercase tracking-wider">
              <QrCode className="w-3.5 h-3.5" />
              <span>INSTANT MOBILE DISCOVERY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              SCAN TO EXPLORE <span className="text-gradient-blue">OUR COURSES</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Scan the QR code with your mobile smartphone camera to instantly explore courses, view practical curriculum details, and submit direct registration.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs inline-flex items-center space-x-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
                <span>Or Register Directly Here</span>
              </button>
            </div>
          </div>

          {/* Glowing QR Code Card Container */}
          <div className="p-4 rounded-2xl bg-white border-2 border-[#00BFFF] shadow-2xl glow-blue flex flex-col items-center shrink-0">
            <div className="w-40 h-40 bg-white flex items-center justify-center p-2">
              {/* Clean SVG QR Code Graphic Representation */}
              <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                <rect x="0" y="0" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="8" y="8" width="14" height="14" rx="2" fill="currentColor" />
                
                <rect x="70" y="0" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="78" y="8" width="14" height="14" rx="2" fill="currentColor" />
                
                <rect x="0" y="70" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="8" y="78" width="14" height="14" rx="2" fill="currentColor" />

                <rect x="40" y="10" width="15" height="15" fill="currentColor" />
                <rect x="40" y="40" width="20" height="20" fill="currentColor" />
                <rect x="70" y="40" width="10" height="25" fill="currentColor" />
                <rect x="10" y="40" width="20" height="10" fill="currentColor" />
                <rect x="40" y="70" width="25" height="20" fill="currentColor" />
                <rect x="75" y="75" width="15" height="15" fill="currentColor" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mt-2">
              HAMOTECH COURSES
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
