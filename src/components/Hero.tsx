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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-slate-800/60">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#E50914]/15 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#00BFFF]/10 blur-3xl animate-pulse-slow pointer-events-none delay-1000" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#FFD21F]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#E50914]/40 text-slate-200 text-xs font-semibold shadow-lg backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
              <span className="text-[#FFD21F] font-bold">LIMITED SEATS AVAILABLE</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">ADMISSIONS OPEN FOR NEW BATCH</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-display tracking-tight">
                BUILD YOUR <span className="text-gradient-red">FUTURE IN IT</span>
              </h1>
              <p className="text-xl sm:text-2xl font-extrabold text-gradient-yellow tracking-wide font-display">
                YOUR FUTURE STARTS HERE!
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
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
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#E50914] via-[#c40711] to-[#E50914] hover:opacity-95 text-white font-extrabold text-sm tracking-wider shadow-2xl flex items-center justify-center space-x-2.5 glow-red transition-all duration-300 transform hover:-translate-y-0.5 border border-red-400/40"
              >
                <Sparkles className="w-5 h-5 text-[#FFD21F]" />
                <span>ENROLL NOW</span>
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm tracking-wide border border-slate-700 hover:border-slate-500 flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span>EXPLORE COURSES</span>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]" />
              </a>
            </motion.div>

            {/* Key Value Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-300"
            >
              {['100% Practical Training', 'Live Industry Projects', 'Placement Guidance', 'Hostel Facility'].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
              <div className="absolute -top-6 -left-6 z-20 w-28 h-28 rounded-full bg-[#050816] border border-[#E50914]/40 p-2 shadow-2xl flex items-center justify-center glow-red">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10px] font-extrabold fill-[#FFD21F] uppercase tracking-widest">
                      <textPath href="#textPath" startOffset="0%">
                        TRAIN • LEARN • GROW • SUCCEED •
                      </textPath>
                    </text>
                  </svg>
                  <img
                    src={logoImage}
                    alt="HamoTech logo"
                    className="w-12 h-12 rounded-full object-cover absolute inset-0 m-auto"
                  />
                </div>
              </div>

              {/* Main Futuristic Card Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full rounded-3xl bg-slate-900/80 border border-slate-700/80 p-6 glass-card shadow-2xl flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Decorative Code Graphic Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2">hamotech-core.ts</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#00BFFF]/10 text-[#00BFFF] text-[10px] font-bold font-mono">
                    LIVE BATCH
                  </span>
                </div>

                {/* Animated Simulated Tech Stack Code */}
                <div className="py-6 space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-purple-400">const studentCareer = async () =&gt; &#123;</div>
                  <div className="pl-4 text-slate-300">
                    await train(&quot;<span className="text-[#FFD21F]">Full Stack Java / Python</span>&quot;);
                  </div>
                  <div className="pl-4 text-slate-300">
                    await build(&quot;<span className="text-[#00BFFF]">Real-Time Projects</span>&quot;);
                  </div>
                  <div className="pl-4 text-slate-300">
                    await prepare(&quot;<span className="text-[#FF4D4D]">Placement Mock Interviews</span>&quot;);
                  </div>
                  <div className="pl-4 text-emerald-400">
                    return <span className="text-white font-bold">&quot;JOB_READY_ENGINEER&quot;</span>;
                  </div>
                  <div className="text-purple-400">&#125;;</div>
                </div>

                {/* Mini Tech Floating Icons */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center space-x-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <Code className="w-4 h-4 text-[#E50914]" />
                    <span className="text-[11px] font-semibold text-slate-200">Clean Code</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <Cpu className="w-4 h-4 text-[#FFD21F]" />
                    <span className="text-[11px] font-semibold text-slate-200">AI / Cloud</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
                    <span className="text-[11px] font-semibold text-slate-200">100% Support</span>
                  </div>
                </div>

              </motion.div>

            </div>

          </div>

        </div>

        {/* Bottom Statistics Cards Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Students Trained', count: 500, suffix: '+', color: 'text-[#E50914]' },
            { label: 'Industry Projects', count: 50, suffix: '+', color: 'text-[#FFD21F]' },
            { label: 'Placement Support', count: 95, suffix: '%', color: 'text-[#00BFFF]' },
            { label: 'Technology Programs', count: 10, suffix: '+', color: 'text-emerald-400' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#0B1020]/90 border border-slate-800/80 text-center hover:border-slate-700 transition-all duration-300 glass-card"
            >
              <div className={`text-3xl sm:text-4xl ${stat.color} font-black font-display mb-1`}>
                <AnimatedCounter end={stat.count} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
