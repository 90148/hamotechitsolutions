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
    <section id="placements" className="py-20 md:py-28 bg-[#0B1020] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            <span>CAREER TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            FROM LEARNING TO <span className="text-gradient-red">CAREER</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
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
              className="p-6 rounded-2xl bg-[#050816] border border-slate-800 hover:border-slate-700 glass-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <item.icon className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-500">STAGE 0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-black text-white font-display mb-2 group-hover:text-[#FFD21F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900 flex items-center space-x-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Career Support</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E50914] via-[#c40711] to-[#E50914] text-white font-extrabold text-sm tracking-wider shadow-2xl inline-flex items-center space-x-2.5 glow-red hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-[#FFD21F]" />
            <span>START YOUR CAREER JOURNEY TODAY</span>
          </button>
        </div>

      </div>
    </section>
  );
};
