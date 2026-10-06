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
    <section className="py-20 md:py-28 bg-[#0B1020] relative overflow-hidden border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00BFFF]/40 text-[#00BFFF] text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            LEARN THROUGH <span className="text-gradient-red">REAL-TIME PROJECTS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Gain authentic software engineering experience by building live industrial applications designed by IT architects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_TIME_PROJECTS.map((p, idx) => {
            const IconComponent = iconMap[p.icon] || FolderGit2;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[#050816] border border-slate-800 hover:border-slate-700 glass-card shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Category Pill & Difficulty */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded bg-[#E50914]/15 border border-[#E50914]/30 text-[#FFD21F] uppercase">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                      {p.difficulty}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <h3 className="text-base font-black text-white font-display group-hover:text-[#FFD21F] transition-colors line-clamp-1">
                      {p.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {p.description}
                  </p>

                  {/* Skills Gained */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Key Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.skillsGained.map(skill => (
                        <span key={skill} className="text-[10px] text-slate-300 flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-mono border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-[#E50914] text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all mt-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
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
