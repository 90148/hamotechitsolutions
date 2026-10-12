import React from 'react';
import { motion } from 'framer-motion';
import { Target, FileText, Brain, Code2, Users, MessageSquare, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface PlacementSectionProps {
  onOpenModal: () => void;
}

export const PlacementSection: React.FC<PlacementSectionProps> = ({ onOpenModal }) => {
  const placementPath = [
    { title: 'Resume Building', desc: 'Crafting ATS-friendly software developer resumes highlighting projects & tech stack.', icon: FileText },
    { title: 'Aptitude Training', desc: 'Sharpening quantitative, logical, and analytical reasoning required by top recruiters.', icon: Brain },
    { title: 'Coding Practice', desc: 'Daily Data Structures & Algorithms (DSA) problem solving on LeetCode/HackerRank style platforms.', icon: Code2 },
    { title: 'Mock Interviews', desc: 'One-on-one technical mock sessions with detailed feedback from senior developers.', icon: Users },
    { title: 'HR & Communication Skills', desc: 'Coaching on soft skills, salary negotiation, corporate etiquette, and confident presentation.', icon: MessageSquare },
    { title: 'Direct Placement Support', desc: 'Scheduling interview opportunities with our partner IT companies and startups.', icon: Award }
  ];

  return (
    <section id="placements" className="py-20 md:py-28 bg-gradient-to-b from-[#FFF1F2]/80 via-[#FDF2F8]/80 to-[#FFF7ED]/80 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Target className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>CAREER TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            FROM LEARNING TO <span className="text-gradient-red">CAREER</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            We don't just teach technology — we prepare you end-to-end to excel in corporate IT recruitment drives.
          </p>
        </div>

        {/* Grid Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placementPath.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/95 border border-rose-200/90 hover:border-rose-300 glass-card shadow-lg shadow-rose-900/5 hover:shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    <item.icon className="w-6 h-6 text-[#E11D48]" />
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-400">STAGE 0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 font-display mb-2 group-hover:text-[#E11D48] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-rose-100 flex items-center space-x-1.5 text-[11px] text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Career Support</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-sm tracking-wider shadow-xl shadow-rose-500/25 inline-flex items-center space-x-2.5 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>START YOUR CAREER JOURNEY TODAY</span>
          </button>
        </div>

      </div>
    </section>
  );
};
