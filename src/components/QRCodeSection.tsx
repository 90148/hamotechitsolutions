import React from 'react';
import { QrCode, Sparkles } from 'lucide-react';

interface QRCodeSectionProps {
  onOpenModal: () => void;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-[#FFF1F2]/70 via-[#FFF7ED]/70 to-[#FDF2F8]/70 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white via-rose-50/40 to-sky-50/40 border border-sky-200/80 glass-card shadow-2xl shadow-rose-900/5 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          
          <div className="space-y-3 max-w-md">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-sky-200 text-[#0284C7] text-xs font-bold uppercase tracking-wider shadow-sm">
              <QrCode className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>INSTANT MOBILE DISCOVERY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              SCAN TO EXPLORE <span className="text-gradient-blue">OUR COURSES</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Scan the QR code with your mobile smartphone camera to instantly explore courses, view practical curriculum details, and submit direct registration.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-rose-50 border border-rose-200 hover:border-rose-300 text-slate-800 font-bold text-xs inline-flex items-center space-x-2 shadow-sm transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>Or Register Directly Here</span>
              </button>
            </div>
          </div>

          {/* Glowing QR Code Card Container */}
          <div className="p-4 rounded-2xl bg-white border-2 border-sky-300 shadow-xl shadow-sky-500/10 flex flex-col items-center shrink-0">
            <div className="w-40 h-40 bg-white flex items-center justify-center p-2">
              <svg className="w-full h-full text-slate-800" viewBox="0 0 100 100" fill="currentColor">
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
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest mt-2">
              HAMOTECH COURSES
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
