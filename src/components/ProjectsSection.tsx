import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ShoppingCart, BrainCircuit, CloudLightning, Smartphone, GraduationCap, BarChart3, CheckCircle, Sparkles } from 'lucide-react';
import { REAL_TIME_PROJECTS } from '../data/projects';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShoppingCart,
  BrainCircuit,
  CloudLightning,
  Smartphone,
  GraduationCap,
  BarChart3
};

interface ProjectsSectionProps {
  onOpenModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#FFF7ED]/70 via-[#FFF1F2]/80 to-[#FDF2F8]/70 relative overflow-hidden border-t border-rose-100">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Slide Up & Fading Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-8 md:mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#0284C7] text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
            <FolderGit2 className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>ENTERPRISE PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            LEARN THROUGH <span className="text-gradient-red animate-slide-up">REAL-TIME PROJECTS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Gain authentic software engineering experience by building live industrial applications designed by IT architects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_TIME_PROJECTS.map((p, idx) => {
            const IconComponent = iconMap[p.icon] || FolderGit2;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="p-6 rounded-2xl bg-white/95 border border-rose-200/90 hover:border-rose-400 glass-card shadow-lg shadow-rose-900/5 hover:shadow-2xl hover:shadow-rose-500/15 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Top Category Pill & Difficulty */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded bg-rose-50 border border-rose-200 text-[#BE123C] uppercase">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 border border-rose-100 bg-slate-50 px-2 py-0.5 rounded">
                      {p.difficulty}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <IconComponent className="w-5 h-5 text-[#0284C7]" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 font-display group-hover:text-[#E11D48] transition-colors line-clamp-1">
                      {p.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {p.description}
                  </p>

                  {/* Skills Gained */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Key Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.skillsGained.map(skill => (
                        <span key={skill} className="text-[10px] text-slate-700 flex items-center space-x-1 font-medium">
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack with Interactive Code Hover Effects */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.map(tech => (
                      <span
                        key={tech}
                        className="code-badge-interactive px-2 py-0.5 rounded bg-rose-50/70 text-slate-700 text-[10px] font-mono border border-rose-100 cursor-pointer hover:border-rose-400 hover:text-rose-600 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-rose-50 border border-rose-200 hover:border-rose-300 text-slate-800 hover:text-[#E11D48] font-bold text-xs flex items-center justify-center space-x-2 transition-all mt-2 shadow-sm transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Build This In Course</span>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
