import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GitBranch, Users, Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface InternshipSectionProps {
  onOpenModal: () => void;
}

export const InternshipSection: React.FC<InternshipSectionProps> = ({ onOpenModal }) => {
  const benefits = [
    { title: 'Live Project Experience', desc: 'Work on actual software features, codebases, and deployment targets.', icon: Briefcase },
    { title: 'Git & GitHub Workflow', desc: 'Master branch strategies, pull requests, code reviews, and version control.', icon: GitBranch },
    { title: 'Agile Team Collaboration', desc: 'Experience real sprint planning, standups, and developer communication.', icon: Users },
    { title: 'Technical Mentoring', desc: 'Get daily guidance and feedback from experienced software engineers.', icon: ShieldCheck },
    { title: 'Official Certificate', desc: 'Receive an official Internship Completion Certificate for your resume.', icon: Award },
    { title: 'Interview Preparation', desc: 'Leverage your internship experience to ace technical interview questions.', icon: CheckCircle2 }
  ];

  return (
    <section id="internship" className="py-12 md:py-16 bg-gradient-to-b from-[#FDF2F8]/80 via-[#FFF1F2]/80 to-[#FFF7ED]/80 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-r from-white via-rose-50/60 to-purple-50/60 border border-rose-200/90 p-6 sm:p-10 glass-card shadow-2xl shadow-rose-900/10 relative overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
                <Briefcase className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>REAL INDUSTRY WORKFLOW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
                GET REAL <span className="text-gradient-red animate-slide-up">INDUSTRY EXPERIENCE</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Step beyond conventional learning. Our Internship Program provides candidates with real-world development workflows, team collaboration, code reviews, and software deployment experience.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-sm tracking-wider shadow-xl shadow-rose-500/25 flex items-center space-x-2 hover:scale-105 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>APPLY FOR INTERNSHIP</span>
                </button>
              </div>
            </div>

            {/* Right Benefits Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-white/95 border border-rose-200/80 shadow-md shadow-rose-900/5 hover:border-rose-400 flex items-start space-x-3 transition-all duration-200 cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-sm">
                    <b.icon className="w-4 h-4 text-[#E11D48]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 font-display uppercase tracking-wide">
                      {b.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug font-medium">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
