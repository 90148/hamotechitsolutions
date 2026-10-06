import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Briefcase, Code2, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>ABOUT PALMPLE'S HAMOTECH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
              EMPOWERING THE NEXT GENERATION OF <span className="text-gradient-red">IT PROFESSIONALS</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              HamoTech IT Solutions provides industry-focused IT training designed to transform students and aspiring professionals into job-ready software technology specialists. We bridge the gap between academic theory and real-world IT enterprise demands.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Practical Learning', desc: '100% hands-on coding exercises & practical problem solving' },
                { title: 'Industry-Relevant Curriculum', desc: 'Updated to match current 2026 tech stack expectations' },
                { title: 'Experienced Trainers', desc: 'Guided directly by senior software engineers & cloud architects' },
                { title: 'Real-Time Projects', desc: 'Build enterprise application portfolios to impress recruiters' },
                { title: 'Logical Thinking', desc: 'Develop core algorithmic logic and problem-solving mindset' },
                { title: 'Placement Preparation', desc: 'Resume tuning, mock interviews & technical preparation' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0B1020]/80 border border-slate-800/80 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-white font-display uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Visual & Floating Info Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Center Main Card Visual */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#0B1020] to-[#050816] p-8 border border-slate-700/80 glass-card shadow-2xl space-y-6">
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#E50914] to-[#FFD21F] p-[2px] glow-red">
                  <div className="w-full h-full bg-[#0B1020] rounded-[14px] flex items-center justify-center">
                    <Award className="w-7 h-7 text-[#FFD21F]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black text-white font-display">
                    PALMPLE'S HAMOTECH
                  </h3>
                  <p className="text-xs text-[#E50914] font-bold tracking-wider uppercase">
                    TRAIN • LEARN • GROW • SUCCEED
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-[#00BFFF]" />
                    <span className="text-xs font-bold text-slate-200">Learn by Doing</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">100% Practical</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-[#FFD21F]" />
                    <span className="text-xs font-bold text-slate-200">Industry Projects</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FFD21F]">5+ Live Apps</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#E50914]" />
                    <span className="text-xs font-bold text-slate-200">Career Guidance</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#E50914]">95% Support</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-400 italic">
                  &quot;Our mission is to convert fresh learners into confident, employable IT professionals.&quot;
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
