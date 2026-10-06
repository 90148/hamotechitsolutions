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
      color: 'text-[#E50914]',
      bg: 'bg-[#E50914]/10 border-[#E50914]/30'
    },
    {
      step: '02',
      title: 'Practice',
      desc: 'Solve real algorithmic challenges and write clean, modular software code daily.',
      icon: Code,
      color: 'text-[#FFD21F]',
      bg: 'bg-[#FFD21F]/10 border-[#FFD21F]/30'
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Develop live enterprise-grade projects with Git workflows and team collaboration.',
      icon: FolderCheck,
      color: 'text-[#00BFFF]',
      bg: 'bg-[#00BFFF]/10 border-[#00BFFF]/30'
    },
    {
      step: '04',
      title: 'Get Certified',
      desc: 'Earn your official HamoTech Course & Internship Completion Certificates.',
      icon: Award,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30'
    },
    {
      step: '05',
      title: 'Prepare',
      desc: 'Undergo mock technical interviews, HR preparation, and resume optimization.',
      icon: UserCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30'
    },
    {
      step: '06',
      title: 'Get Placed',
      desc: 'Attend direct interview drives and launch your successful career in the IT industry.',
      icon: Rocket,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#050816] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#E50914]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            <span>STEP-BY-STEP ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            OUR 6-STEP <span className="text-gradient-red">LEARNING JOURNEY</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            A proven structured learning pathway that turns ambition into technical excellence.
          </p>
        </div>

        {/* Timeline Grid / Connection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-5 rounded-2xl bg-[#0B1020] border border-slate-800/80 hover:border-slate-700 glass-card flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-slate-600 group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                  <div className={`w-10 h-10 rounded-xl border ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className={`text-lg font-black font-display mb-2 text-white group-hover:${item.color} transition-colors`}>
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>PHASE {idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#E50914] transition-colors" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
