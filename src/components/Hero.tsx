import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Code, Cpu, ShieldCheck, Award } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import logoImage from '../assets/hamo logo.png';
import placementStatsImg from '../assets/placement-stats.png';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-rose-200/60">
      {/* Ambient background pastel glow spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-rose-400/25 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-300/25 blur-3xl animate-pulse-slow pointer-events-none delay-1000" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-amber-300/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-300 text-slate-700 text-xs font-semibold shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
              <span className="text-[#BE123C] font-bold">LIMITED SEATS AVAILABLE</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">ADMISSIONS OPEN FOR NEW BATCH</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight font-display tracking-tight">
                BUILD YOUR <span className="text-gradient-red">FUTURE IN IT</span>
              </h1>
              <p className="text-xl sm:text-2xl font-extrabold text-[#D97706] tracking-wide font-display">
                YOUR FUTURE STARTS HERE!
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              World-Class IT Training, Practical Real-Time Projects &amp; Placement Guidance to build a successful high-growth software career.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] hover:opacity-95 text-white font-extrabold text-sm tracking-wider shadow-xl shadow-rose-500/25 flex items-center justify-center space-x-2.5 glow-red transition-all duration-300 transform hover:-translate-y-0.5 border border-rose-300/40"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>ENROLL NOW</span>
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 font-bold text-sm tracking-wide border border-rose-200 hover:border-rose-300 shadow-md flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span>EXPLORE COURSES</span>
                <ArrowRight className="w-4 h-4 text-[#E11D48]" />
              </a>
            </motion.div>

            {/* Key Value Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-600 font-medium"
            >
              {['100% Practical Training', 'Live Industry Projects', 'Placement Guidance', 'Hostel Facility'].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Outer Circular Glow Container */}
            <div className="relative w-full max-w-md aspect-square">
              
              {/* Rotating Circular Brand Badge */}
              <div className="absolute -top-6 -left-6 z-20 w-28 h-28 rounded-full bg-white border-2 border-rose-300 p-2 shadow-2xl shadow-rose-500/20 flex items-center justify-center glow-pink">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10px] font-extrabold fill-[#BE123C] uppercase tracking-widest">
                      <textPath href="#textPath" startOffset="0%">
                        TRAIN • LEARN • GROW • SUCCEED •
                      </textPath>
                    </text>
                  </svg>
                  <img
                    src={logoImage}
                    alt="HamoTech logo"
                    className="w-12 h-12 rounded-full object-cover absolute inset-0 m-auto shadow-sm"
                  />
                </div>
              </div>

              {/* Main Futuristic Card Container in Light Theme */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full rounded-3xl bg-white/95 border border-rose-200/90 p-6 glass-card shadow-2xl shadow-rose-900/10 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Decorative Code Graphic Header */}
                <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-500 ml-2">hamotech-core.ts</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-rose-50 text-[#E11D48] border border-rose-200 text-[10px] font-bold font-mono">
                    LIVE BATCH
                  </span>
                </div>

                {/* Simulated Tech Stack Code with high-contrast text */}
                <div className="py-6 space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-purple-700 font-semibold">const studentCareer = async () =&gt; &#123;</div>
                  <div className="pl-4 text-slate-700">
                    await train(&quot;<span className="text-[#BE123C] font-semibold">Full Stack Java / Python</span>&quot;);
                  </div>
                  <div className="pl-4 text-slate-700">
                    await build(&quot;<span className="text-[#0284C7] font-semibold">Real-Time Projects</span>&quot;);
                  </div>
                  <div className="pl-4 text-slate-700">
                    await prepare(&quot;<span className="text-[#D97706] font-semibold">Placement Mock Interviews</span>&quot;);
                  </div>
                  <div className="pl-4 text-emerald-700 font-bold">
                    return <span className="text-slate-900">&quot;JOB_READY_ENGINEER&quot;</span>;
                  </div>
                  <div className="text-purple-700 font-semibold">&#125;;</div>
                </div>

                {/* Mini Tech Floating Icons */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-rose-100">
                  <div className="flex items-center space-x-2 p-2 rounded-xl bg-rose-50/70 border border-rose-100">
                    <Code className="w-4 h-4 text-[#E11D48]" />
                    <span className="text-[11px] font-semibold text-slate-700">Clean Code</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-xl bg-amber-50/70 border border-amber-100">
                    <Cpu className="w-4 h-4 text-[#D97706]" />
                    <span className="text-[11px] font-semibold text-slate-700">AI / Cloud</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-xl bg-sky-50/70 border border-sky-100">
                    <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-[11px] font-semibold text-slate-700">100% Support</span>
                  </div>
                </div>

              </motion.div>

            </div>

          </div>

        </div>

        {/* Bottom Statistics Cards Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 lg:mt-24 rounded-3xl bg-white/90 border border-rose-200/80 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-rose-900/5 glass-card relative overflow-hidden"
        >
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Column: Heading & Statistics Cards */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>PROVEN CAREER EXCELLENCE &amp; PLACEMENT IMPACT</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display leading-tight">
                  Accelerate Your Career With <span className="text-gradient-red">Proven Industry Outcomes</span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Through intensive project labs, real-time mentor guidance, and 1200+ recruitment partnerships, our graduates consistently secure high-growth developer and engineering roles.
                </p>
              </div>

              {/* Statistics Cards Grid */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {[
                  { label: 'Students Trained', count: 500, suffix: '+', color: 'text-[#E11D48]', bg: 'hover:border-rose-300' },
                  { label: 'Industry Projects', count: 50, suffix: '+', color: 'text-[#D97706]', bg: 'hover:border-amber-300' },
                  { label: 'Placement Support', count: 95, suffix: '%', color: 'text-[#0284C7]', bg: 'hover:border-sky-300' },
                  { label: 'Technology Programs', count: 10, suffix: '+', color: 'text-emerald-600', bg: 'hover:border-emerald-300' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-4 sm:p-5 rounded-2xl bg-white border border-rose-100 shadow-sm hover:shadow-md ${stat.bg} transition-all duration-300 group`}
                  >
                    <div className={`text-2xl sm:text-3xl lg:text-4xl ${stat.color} font-black font-display mb-1 group-hover:scale-105 transition-transform duration-200`}>
                      <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quick Feature Highlights & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-rose-100/90">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mock Technical Interviews</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated Placement Cell</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ATS Resume Building</span>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:opacity-95 text-white text-xs font-extrabold tracking-wider shadow-md hover:shadow-rose-500/20 transition-all flex items-center space-x-2 shrink-0 transform hover:-translate-y-0.5"
                >
                  <span>JOIN NEXT BATCH</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Column: Visual Placement UI Design with Professional & Floating Badges */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  scale: { duration: 0.6 },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="relative w-full max-w-md group"
              >
                {/* Ambient colorful backlight glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-rose-400/20 via-sky-400/20 to-amber-300/25 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                {/* Main Card Wrap */}
                <div className="relative rounded-3xl bg-white p-3 sm:p-4 border border-rose-200/90 shadow-2xl shadow-rose-950/10 overflow-hidden">
                  
                  {/* Clean image showcase */}
                  <div className="relative overflow-hidden rounded-2xl bg-white">
                    <img
                      src={placementStatsImg}
                      alt="HamoTech Placement Record - 40 LPA Highest Package, 1200+ Hiring Partners, 8 LPA Average Salary"
                      className="w-full h-auto object-contain select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Active recruitment live indicator */}
                  <div className="mt-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-slate-50 via-rose-50/50 to-slate-50 border border-rose-100 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="font-bold text-slate-800">100% Placement Support</span>
                    </div>
                    <span className="text-[#BE123C] font-extrabold text-[11px] uppercase tracking-wider font-mono">
                      1200+ Partners
                    </span>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
