import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface HiringPartnersSectionProps {
  onOpenModal: () => void;
}

interface CompanyPartner {
  id: string;
  name: string;
  category: string;
  isDirectPartner?: boolean;
  logo: React.ReactNode;
}

export const HiringPartnersSection: React.FC<HiringPartnersSectionProps> = ({ onOpenModal }) => {
  // Row 1 Companies (12 MNCs & Leaders) - Scrolls Left
  const row1Companies: CompanyPartner[] = [
    {
      id: 'google',
      name: 'Google',
      category: 'Cloud & AI Titan',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.36 7.33 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
      )
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      category: 'Enterprise Software',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <rect x="2" y="2" width="9" height="9" fill="#F25022" rx="1"/>
          <rect x="13" y="2" width="9" height="9" fill="#7FBA00" rx="1"/>
          <rect x="2" y="13" width="9" height="9" fill="#00A4EF" rx="1"/>
          <rect x="13" y="13" width="9" height="9" fill="#FFB900" rx="1"/>
        </svg>
      )
    },
    {
      id: 'amazon',
      name: 'Amazon',
      category: 'Cloud & E-Commerce',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <path fill="#FF9900" d="M14.5 15.2c-2.4 1.8-6 2.7-9.1 2.7-4.3 0-8.2-1.6-11.2-4.2-.2-.2 0-.5.2-.3 3.3 1.9 7.2 2.9 11.3 2.9 2.7 0 5.7-.6 8.4-2 .4-.2.7.2.4.9z"/>
          <path fill="#FF9900" d="M15.4 14.3c-.3-.4-2-.2-2.8-.1-.2 0-.3-.2-.1-.3 1.2-1 3.2-1.2 3.5-.7.3.4-.1 2.4-1.2 3.5-.2.2-.4.1-.3-.1.4-.7.9-2.3.9-2.3z"/>
          <path fill="#232F3E" d="M15.5 5.5c-.8 0-1.6.4-2.1 1-.2-.8-.9-1-1.7-1-.9 0-1.7.5-2.2 1.2V5.7H7.8v10.5h1.7v-5.8c0-1.8 1.1-2.9 2.5-2.9 1.4 0 2.2.9 2.2 2.6v6.1h1.7v-6.8c0-2.8-1.6-4.9-4.4-4.9z"/>
        </svg>
      )
    },
    {
      id: 'teamverse',
      name: 'Teamverse',
      category: 'Product Engineering',
      isDirectPartner: true,
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <circle cx="7" cy="7" r="4" fill="#0284C7"/>
          <circle cx="17" cy="8" r="3.5" fill="#E11D48"/>
          <circle cx="12" cy="17" r="4.5" fill="#F59E0B"/>
          <line x1="7" y1="7" x2="17" y2="8" stroke="#94A3B8" strokeWidth="2"/>
          <line x1="7" y1="7" x2="12" y2="17" stroke="#94A3B8" strokeWidth="2"/>
          <line x1="17" y1="8" x2="12" y2="17" stroke="#94A3B8" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'tcs',
      name: 'TCS',
      category: 'Tata Consultancy Services',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#0A2540"/>
          <text x="16" y="21" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">TCS</text>
        </svg>
      )
    },
    {
      id: 'infosys',
      name: 'Infosys',
      category: 'Digital Tech Consulting',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#007CC3"/>
          <text x="16" y="21" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-0.5">Infosys</text>
        </svg>
      )
    },
    {
      id: 'accenture',
      name: 'Accenture',
      category: 'Strategy & Technology',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <path fill="#A100FF" d="M3 21l9.5-8.5L3 4h6.5l9.5 8.5L9.5 21H3z"/>
          <circle cx="19" cy="4.5" r="2" fill="#E11D48"/>
        </svg>
      )
    },
    {
      id: 'cognizant',
      name: 'Cognizant',
      category: 'Enterprise Digital',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <path fill="#0033A0" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.14 0 7.7-2.52 9.22-6.14h-3.41C16.63 17.5 14.48 19 12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7c2.48 0 4.63 1.5 5.81 3.14h3.41C19.7 4.52 16.14 2 12 2z"/>
          <circle cx="12" cy="12" r="3" fill="#00A3E0"/>
        </svg>
      )
    },
    {
      id: 'wipro',
      name: 'Wipro',
      category: 'Technology & Cloud',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <circle cx="8" cy="8" r="3" fill="#E11D48"/>
          <circle cx="16" cy="8" r="3" fill="#0284C7"/>
          <circle cx="8" cy="16" r="3" fill="#D97706"/>
          <circle cx="16" cy="16" r="3" fill="#10B981"/>
          <circle cx="12" cy="12" r="2" fill="#8B5CF6"/>
        </svg>
      )
    },
    {
      id: 'capgemini',
      name: 'Capgemini',
      category: 'Digital Transformation',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <path fill="#0070AD" d="M12 2C9.5 2 6 6 6 10c0 3 2 5.5 4.5 6.5-.5 1-2 2-3.5 2.5v1h10v-1c-1.5-.5-3-1.5-3.5-2.5 2.5-1 4.5-3.5 4.5-6.5 0-4-3.5-8-6-8z"/>
          <circle cx="12" cy="10" r="2.5" fill="#1CD3D3"/>
        </svg>
      )
    },
    {
      id: 'oracle',
      name: 'Oracle',
      category: 'Database & Cloud Solutions',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#C74634"/>
          <ellipse cx="16" cy="16" rx="9" ry="5.5" fill="none" stroke="#FFFFFF" strokeWidth="3"/>
        </svg>
      )
    },
    {
      id: 'ibm',
      name: 'IBM',
      category: 'Enterprise Computing',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#1F70C1"/>
          <text x="16" y="21" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="monospace" textAnchor="middle" letterSpacing="1">IBM</text>
        </svg>
      )
    }
  ];

  // Row 2 Companies (12 MNCs & Leaders) - Scrolls Right (Opposite Direction)
  const row2Companies: CompanyPartner[] = [
    {
      id: 'quantumworks',
      name: 'QuantumWorks',
      category: 'Enterprise Software',
      isDirectPartner: true,
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <circle cx="11" cy="11" r="7.5" fill="none" stroke="#0284C7" strokeWidth="3"/>
          <path d="M15 15l5 5" stroke="#0284C7" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="11" cy="11" r="3" fill="#38BDF8"/>
        </svg>
      )
    },
    {
      id: 'deloitte',
      name: 'Deloitte',
      category: 'Technology Consulting',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#111827"/>
          <text x="14" y="20" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">Deloitte</text>
          <circle cx="27" cy="19" r="2.5" fill="#86BC25"/>
        </svg>
      )
    },
    {
      id: 'novahamo',
      name: 'NovaHamo',
      category: 'Technologies Pvt Ltd',
      isDirectPartner: true,
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <path fill="#16A34A" d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"/>
          <path fill="#FFFFFF" d="M12 6l-4 4 1.4 1.4L12 8.8l2.6 2.6L16 10l-4-4z"/>
        </svg>
      )
    },
    {
      id: 'hcltech',
      name: 'HCLTech',
      category: 'Global Engineering & R&D',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#004F9F"/>
          <text x="16" y="20" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">HCLTech</text>
        </svg>
      )
    },
    {
      id: 'zoho',
      name: 'Zoho',
      category: 'SaaS & Enterprise Apps',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <rect x="2" y="2" width="9" height="9" rx="2" fill="#E42528"/>
          <rect x="13" y="2" width="9" height="9" rx="2" fill="#008952"/>
          <rect x="2" y="13" width="9" height="9" rx="2" fill="#006EA6"/>
          <rect x="13" y="13" width="9" height="9" rx="2" fill="#F8B133"/>
        </svg>
      )
    },
    {
      id: 'techmahindra',
      name: 'Tech Mahindra',
      category: 'Digital & Telecom IT',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#D32F2F"/>
          <text x="16" y="20" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">TECHM</text>
        </svg>
      )
    },
    {
      id: 'tasait',
      name: 'Tasa IT Services',
      category: 'Software Solutions',
      isDirectPartner: true,
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <rect width="24" height="24" rx="5" fill="#FFF1F2"/>
          <path d="M5 8h14M12 8v11" stroke="#BE123C" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="19" r="1.5" fill="#E11D48"/>
        </svg>
      )
    },
    {
      id: 'ltimindtree',
      name: 'LTIMindtree',
      category: 'Next-Gen IT Services',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#0B1A30"/>
          <text x="16" y="20" fill="#FF5722" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">LTIM</text>
        </svg>
      )
    },
    {
      id: 'sap',
      name: 'SAP',
      category: 'Enterprise Cloud ERP',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#008FD3"/>
          <text x="16" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">SAP</text>
        </svg>
      )
    },
    {
      id: 'cisco',
      name: 'Cisco',
      category: 'Networking & Security',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <rect x="2" y="10" width="1.5" height="4" rx="0.75" fill="#049FD9"/>
          <rect x="5" y="7" width="1.5" height="10" rx="0.75" fill="#049FD9"/>
          <rect x="8" y="11" width="1.5" height="3" rx="0.75" fill="#049FD9"/>
          <rect x="11" y="4" width="1.5" height="16" rx="0.75" fill="#049FD9"/>
          <rect x="14" y="11" width="1.5" height="3" rx="0.75" fill="#049FD9"/>
          <rect x="17" y="7" width="1.5" height="10" rx="0.75" fill="#049FD9"/>
          <rect x="20" y="10" width="1.5" height="4" rx="0.75" fill="#049FD9"/>
        </svg>
      )
    },
    {
      id: 'ey',
      name: 'EY',
      category: 'Ernst & Young Global',
      logo: (
        <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0">
          <rect width="32" height="32" rx="7" fill="#2E2E38"/>
          <text x="16" y="21" fill="#FFE600" fontSize="13" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">EY</text>
        </svg>
      )
    },
    {
      id: 'paypal',
      name: 'PayPal',
      category: 'Global FinTech',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
          <path fill="#003087" d="M6.5 21l3.2-18h5.8c3.2 0 5 1.6 4.5 4.5-.6 3.8-3 5.8-6.4 5.8h-2l-1.5 7.7H6.5z"/>
          <path fill="#0079C1" d="M9.5 13.3l1.3-6.5h4.8c2.8 0 4.2 1.3 3.8 3.8-.5 3.1-2.4 4.7-5.2 4.7h-2l-.9 4.7H8.8l.7-6.7z"/>
        </svg>
      )
    }
  ];

  // Helper renderer for a single company card
  const renderCard = (company: CompanyPartner, index: number, prefix: string) => (
    <div
      key={`${prefix}-${company.id}-${index}`}
      className="mx-2.5 sm:mx-3 px-4 sm:px-5 py-3 rounded-2xl bg-white/95 border border-rose-200/80 shadow-md hover:shadow-xl hover:border-rose-400 hover:scale-[1.03] transition-all duration-300 flex items-center space-x-3 shrink-0 group cursor-default backdrop-blur-sm"
    >
      {/* Brand Icon Box */}
      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center p-1.5 shadow-xs group-hover:scale-110 transition-transform">
        {company.logo}
      </div>

      {/* Brand Info */}
      <div className="text-left">
        <div className="flex items-center space-x-1.5">
          <span className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#E11D48] transition-colors whitespace-nowrap font-display">
            {company.name}
          </span>
          {company.isDirectPartner && (
            <span className="px-1.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-[#BE123C] text-[9px] font-black uppercase tracking-wider">
              Partner
            </span>
          )}
        </div>
        <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 whitespace-nowrap block">
          {company.category}
        </span>
      </div>
    </div>
  );

  return (
    <section 
      id="hiring-partners" 
      className="py-12 md:py-16 bg-gradient-to-b from-[#FFF7ED]/70 via-[#FFF1F2]/80 to-[#FDF2F8]/70 relative overflow-hidden border-t border-b border-rose-200/60"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-rose-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-sky-300/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-black uppercase tracking-widest shadow-sm"
          >
            <Building2 className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>GLOBAL HIRING NETWORK</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight"
          >
            TOP TECH MNCS &amp; STARTUPS <span className="text-gradient-red">RECRUIT OUR TALENT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Over <span className="font-extrabold text-slate-800">1200+ technology enterprises</span>, IT conglomerates, and high-growth product companies trust HamoTech graduates for their strong foundations, live project experience, and job-ready problem-solving abilities.
          </motion.p>

          {/* Quick Metrics Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-rose-200 shadow-xs flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1200+ Recruitment Partners</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-rose-200 shadow-xs flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Direct Campus &amp; Off-Campus Drives</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-rose-200 shadow-xs flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero-Cost Placement Support</span>
            </span>
          </motion.div>

        </div>

      </div>

      {/* Two-Row Infinite Horizontal Marquee with Opposite Directions */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Soft edge gradient fades for infinite seamless look */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 z-20 pointer-events-none bg-gradient-to-r from-[#FFF7ED] sm:from-[#FFF7ED]/95 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 z-20 pointer-events-none bg-gradient-to-l from-[#FFF7ED] sm:from-[#FFF7ED]/95 to-transparent" />

        {/* ROW 1: Scrolls to the Left */}
        <div className="flex overflow-hidden py-2 select-none">
          <div className="animate-marquee flex items-center">
            {/* First sequence */}
            {row1Companies.map((company, idx) => renderCard(company, idx, 'r1-a'))}
            {/* Exact replica sequence for seamless looping */}
            {row1Companies.map((company, idx) => renderCard(company, idx, 'r1-b'))}
          </div>
        </div>

        {/* ROW 2: Scrolls to the Right (Opposite Direction) */}
        <div className="flex overflow-hidden py-2 select-none">
          <div className="animate-marquee-reverse flex items-center">
            {/* First sequence */}
            {row2Companies.map((company, idx) => renderCard(company, idx, 'r2-a'))}
            {/* Exact replica sequence for seamless looping */}
            {row2Companies.map((company, idx) => renderCard(company, idx, 'r2-b'))}
          </div>
        </div>

      </div>

      {/* Bottom Hiring Callout for Recruiters & Students */}
      <div className="max-w-4xl mx-auto px-4 mt-12 relative z-10">
        <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-rose-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-black text-slate-900 font-display">
              Looking to Hire Job-Ready Software Engineers?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Partner with HamoTech IT Solutions to hire pre-vetted full-stack developers and AI engineers.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:opacity-95 text-white font-extrabold text-xs shadow-md shadow-rose-500/20 transition-all flex items-center space-x-2"
            >
              <span>HIRE OUR GRADUATES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
