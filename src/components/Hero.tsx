import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Code, Cpu, ShieldCheck } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import logoImage from '../assets/hamo logo.png';

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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Students Trained', count: 500, suffix: '+', color: 'text-[#E11D48]' },
            { label: 'Industry Projects', count: 50, suffix: '+', color: 'text-[#D97706]' },
            { label: 'Placement Support', count: 95, suffix: '%', color: 'text-[#0284C7]' },
            { label: 'Technology Programs', count: 10, suffix: '+', color: 'text-emerald-600' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-white/90 border border-rose-200/70 text-center hover:border-rose-300 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 glass-card"
            >
              <div className={`text-3xl sm:text-4xl ${stat.color} font-black font-display mb-1`}>
                <AnimatedCounter end={stat.count} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
