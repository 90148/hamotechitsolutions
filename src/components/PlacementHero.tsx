import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Trophy, 
  Building2, 
  TrendingUp, 
  Users, 
  Star
} from 'lucide-react';
import placementHeroBanner from '../assets/placements-hero-banner.png';

interface PlacementHeroProps {
  onOpenModal: () => void;
}

export const PlacementHero: React.FC<PlacementHeroProps> = ({ onOpenModal }) => {
  const placementMetrics = [
    {
      value: '95%',
      label: 'Placement Support Rate',
      sub: 'Dedicated Career Cell',
      icon: TrendingUp,
      color: 'from-rose-500 to-[#E11D48]',
      textColor: 'text-[#E11D48]'
    },
    {
      value: '₹18 LPA',
      label: 'Highest Package Offered',
      sub: 'Product Engineering Roles',
      icon: Trophy,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-600'
    },
    {
      value: '1,200+',
      label: 'Corporate Hiring Partners',
      sub: 'MNCs, Unicorns & Global IT',
      icon: Building2,
      color: 'from-blue-500 to-sky-600',
      textColor: 'text-sky-600'
    },
    {
      value: '500+',
      label: 'Placed IT Alumni',
      sub: 'Working Across Top Tech Hubs',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-600'
    }
  ];

  return (
    <section className="relative pt-16 sm:pt-24 pb-8 sm:pb-14 overflow-hidden">
      {/* Ambient pastel glow lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-10">
        
        {/* ============================================================ */}
        {/* MAIN HERO CARD CONTAINER                                     */}
        {/* ============================================================ */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-br from-white/95 via-rose-50/70 to-orange-50/50 border border-rose-200/90 shadow-2xl shadow-rose-950/5 p-4 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Subtle light accents inside card */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Headings & Intro */}
          <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 mb-6 sm:mb-10">
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 border border-rose-200 text-[#BE123C] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
              <span>PALMPLE&apos;S HAMOTECH IT SOLUTIONS • PLACEMENT CELL</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display leading-[1.18] sm:leading-[1.15]">
              DIRECT CAMPUS &amp; CORPORATE <br className="hidden sm:inline" />
              <span className="text-gradient-red">IT PLACEMENTS GUIDANCE</span>
            </h1>

            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              We bridge the gap between classroom learning and tier-1 IT recruitment. Get trained on live enterprise stacks, crack high-impact technical rounds, and land your dream tech job with confidence.
            </p>

            {/* Quick Value Pills (2x2 on mobile, flex wrap on tablet/desktop) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-3 pt-1 sm:pt-2">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/90 border border-rose-100 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">100% Placement</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/90 border border-rose-100 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">Mock Interviews</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/90 border border-rose-100 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48] shrink-0" />
                <span className="truncate">ATS Resumes</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/90 border border-rose-100 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">Direct MNC Drives</span>
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* FEATURED PLACEMENT HERO IMAGE BANNER (MOBILE-OPTIMIZED)      */}
          {/* ============================================================ */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-rose-200/90 shadow-2xl shadow-rose-900/15 group bg-slate-900">
            {/* Responsive Height: Generous vertical view on mobile so people aren't squished */}
            <div className="relative w-full h-[260px] xs:h-[290px] sm:h-[350px] md:h-[400px] lg:h-[440px] overflow-hidden">
              <img
                src={placementHeroBanner}
                alt="HamoTech IT Solutions successful candidates receiving corporate job offers in tech campus recruitment drive"
                className="w-full h-full object-cover object-[65%_center] sm:object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Protective subtle lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent pointer-events-none hidden md:block" />

              {/* Floating Top-Left Badge: Drive Status (Compact on mobile) */}
              <div className="absolute top-2.5 left-2.5 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl border border-rose-200/80 shadow-lg flex items-center space-x-1.5 sm:space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#E11D48] leading-none">
                    Hiring Season 2025–26
                  </p>
                  <p className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">
                    Active Recruitment Drives
                  </p>
                </div>
              </div>

              {/* Floating Top-Right Badge: Corporate Partners */}
              <div className="hidden sm:flex absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-rose-200/80 shadow-xl items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-bold uppercase leading-none">Global Network</p>
                  <p className="text-xs font-black text-slate-900 leading-tight">1,200+ Hiring Partners</p>
                </div>
              </div>

              {/* Mobile-Only Bottom Glass Strip: Unobtrusive and sleek */}
              <div className="sm:hidden absolute bottom-2.5 left-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 flex items-center justify-between text-white shadow-xl">
                <div className="flex items-center space-x-1.5">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-100">5.0 Star Placement Rating</span>
                </div>
                <span className="text-[10px] font-extrabold bg-gradient-to-r from-rose-500 to-amber-400 text-white px-2 py-0.5 rounded-md shadow-xs">
                  ₹18 LPA Max
                </span>
              </div>

              {/* Desktop/Tablet Bottom Overlay Card (Clean on left side, hidden on small mobile) */}
              <div className="hidden sm:block absolute bottom-5 left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/70 shadow-2xl max-w-md text-left">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black text-slate-800">5.0 / 5.0 Star Placement Rating</span>
                </div>
                <p className="text-xs font-bold text-slate-900 font-display">
                  Transforming Freshers &amp; Non-IT Students into Hired Software Engineers
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Dedicated resume building, coding practice, and mock HR rounds ensure you stand out.
                </p>
              </div>

              {/* Bottom-Right Package Badge on Desktop */}
              <div className="hidden lg:flex absolute bottom-5 right-5 bg-gradient-to-br from-slate-900/90 to-slate-950/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 shadow-2xl items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E11D48] to-[#F59E0B] flex items-center justify-center text-white font-black text-sm shadow-md">
                  ₹18L
                </div>
                <div>
                  <p className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Top Package Secured</p>
                  <p className="text-xs font-bold text-white">Full Stack &amp; Cloud Engineers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Highlight Card placed cleanly BELOW image */}
          <div className="sm:hidden mt-3 p-3 rounded-2xl bg-white/90 border border-rose-200/90 shadow-sm flex items-center space-x-2.5 text-left">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E11D48] to-[#F59E0B] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
              ★
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">
                Transforming Freshers into Hired Software Engineers
              </p>
              <p className="text-[10px] text-slate-500">
                100% Practical Training &amp; Mock Technical Preparation
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CALL TO ACTION BUTTONS (FULL WIDTH ON MOBILE)                */}
          {/* ============================================================ */}
          <div className="pt-5 sm:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-rose-600/25 hover:shadow-xl hover:shadow-rose-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Apply for Placement Guidance</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#placed-students"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-white border border-rose-200 text-slate-800 hover:text-[#E11D48] hover:border-rose-300 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all text-center"
            >
              View Placed Students &amp; Salaries
            </a>

            <a
              href="tel:9884166198"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-3.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs sm:text-sm font-bold transition-all text-center"
              title="Call Placement Helpline"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Placement Desk: +91 98841 66198</span>
            </a>
          </div>

          {/* ============================================================ */}
          {/* 4 KEY PLACEMENT METRICS CARDS                                */}
          {/* ============================================================ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-rose-200/70">
            {placementMetrics.map((item) => (
              <div 
                key={item.label}
                className="bg-white/90 border border-rose-200/80 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-xs`}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">Verified</span>
                </div>
                <div className={`text-xl sm:text-3xl font-black ${item.textColor} font-display leading-tight`}>
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 mt-1">
                  {item.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
