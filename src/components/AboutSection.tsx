import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Briefcase, Code2, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-gradient-to-b from-[#FFF1F2]/60 via-[#FDF2F8]/70 to-[#FFF7ED]/60 relative overflow-hidden border-b border-rose-100">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column with Slide-Up & Fading Animations */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
              <Target className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>ABOUT HAMOTECH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-display">
              EMPOWERING THE NEXT GENERATION OF <span className="text-gradient-red animate-slide-up">IT PROFESSIONALS</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              HamoTech IT Solutions provides industry-focused IT training designed to transform students and aspiring professionals into job-ready software technology specialists. We bridge the gap between academic theory and real-world IT enterprise demands.
            </p>

            {/* Core Pillars Grid with Staggered Slide Up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Practical Learning', desc: '100% hands-on coding exercises & practical problem solving' },
                { title: 'Industry-Relevant Curriculum', desc: 'Updated to match current 2026 tech stack expectations' },
                { title: 'Experienced Trainers', desc: 'Guided directly by senior software engineers & cloud architects' },
                { title: 'Real-Time Projects', desc: 'Build enterprise application portfolios to impress recruiters' },
                { title: 'Logical Thinking', desc: 'Develop core algorithmic logic and problem-solving mindset' },
                { title: 'Placement Preparation', desc: 'Resume tuning, mock interviews & technical preparation' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-white/95 border border-rose-200/80 shadow-md shadow-rose-900/5 hover:border-rose-400 flex items-start space-x-3 transition-all duration-200 cursor-default"
                >
                  <CheckCircle className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 font-display uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Visual & Floating Info Cards Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Center Main Card Visual */}
            <div className="relative rounded-3xl bg-white/95 p-8 border border-rose-200 shadow-2xl shadow-rose-900/10 glass-card space-y-6 hover:border-rose-300 transition-colors">
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#E11D48] via-[#F43F5E] to-[#F59E0B] p-[2px] shadow-lg shadow-rose-500/20">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <Award className="w-7 h-7 text-[#E11D48]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 font-display">
                   HAMOTECH
                  </h3>
                  <p className="text-xs text-[#BE123C] font-bold tracking-wider uppercase font-mono">
                    TRAIN • LEARN • GROW • SUCCEED
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-100 flex items-center justify-between hover:bg-rose-50 hover:border-rose-200 transition-all hover:translate-x-1 cursor-default">
                  <div className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-[#E11D48]" />
                    <span className="text-xs font-bold text-slate-800">Learn by Doing</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">100% Practical</span>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-100 flex items-center justify-between hover:bg-amber-50 hover:border-amber-200 transition-all hover:translate-x-1 cursor-default">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-[#D97706]" />
                    <span className="text-xs font-bold text-slate-800">Industry Projects</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">5+ Live Apps</span>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-between hover:bg-purple-50 hover:border-purple-200 transition-all hover:translate-x-1 cursor-default">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#8B5CF6]" />
                    <span className="text-xs font-bold text-slate-800">Career Guidance</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">95% Support</span>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-100 text-center">
                <p className="text-xs text-slate-500 italic font-medium">
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
