import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, FolderCheck, Award, UserCheck, Rocket } from 'lucide-react';

export const LearningProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Learn',
      desc: 'Master core theory and live coding concepts taught by experienced industry trainers.',
      icon: BookOpen,
      color: 'text-[#E11D48]',
      bg: 'bg-rose-50 border-rose-200'
    },
    {
      step: '02',
      title: 'Practice',
      desc: 'Solve real algorithmic challenges and write clean, modular software code daily.',
      icon: Code,
      color: 'text-[#D97706]',
      bg: 'bg-amber-50 border-amber-200'
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Develop live enterprise-grade projects with Git workflows and team collaboration.',
      icon: FolderCheck,
      color: 'text-[#0284C7]',
      bg: 'bg-sky-50 border-sky-200'
    },
    {
      step: '04',
      title: 'Get Certified',
      desc: 'Earn your official HamoTech Course & Internship Completion Certificates.',
      icon: Award,
      color: 'text-purple-600',
      bg: 'bg-purple-50 border-purple-200'
    },
    {
      step: '05',
      title: 'Prepare',
      desc: 'Undergo mock technical interviews, HR preparation, and resume optimization.',
      icon: UserCheck,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200'
    },
    {
      step: '06',
      title: 'Get Placed',
      desc: 'Attend direct interview drives and launch your successful career in the IT industry.',
      icon: Rocket,
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-200'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#FDF2F8]/70 via-[#FFF1F2]/80 to-[#FFF7ED]/70 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Slide Up & Fading Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-8 md:mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
            <Rocket className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>STEP-BY-STEP ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            OUR 6-STEP <span className="text-gradient-red animate-slide-up">LEARNING JOURNEY</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A proven structured learning pathway that turns ambition into technical excellence.
          </p>
        </motion.div>

        {/* Timeline Grid / Connection with Staggered Slide Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-5 rounded-2xl bg-white/95 border border-rose-200/90 hover:border-rose-400 glass-card shadow-lg shadow-rose-900/5 hover:shadow-2xl hover:shadow-rose-500/15 flex flex-col justify-between group transition-all duration-300 cursor-default"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-slate-300 group-hover:text-slate-800 transition-colors">
                    {item.step}
                  </span>
                  <div className={`w-10 h-10 rounded-xl border ${item.bg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className={`text-lg font-black font-display mb-2 text-slate-900 transition-colors`}>
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-rose-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>PHASE {idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-rose-200 group-hover:bg-[#E11D48] transition-colors" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
