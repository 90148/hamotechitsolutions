import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '919884166198';
  const message = encodeURIComponent(
    'Hello HamoTech IT Solutions, I am interested in your IT training courses. Please share course details.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group shadow-emerald-500/25"
    >
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

      {/* WhatsApp Icon */}
      <MessageSquare className="w-7 h-7 fill-white relative z-10" />

      {/* Tooltip on desktop hover */}
      <span className="absolute right-16 bg-white/95 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-rose-200 shadow-xl shadow-rose-950/10 hidden sm:block">
        Chat with Admissions Team
      </span>
    </a>
  );
};
