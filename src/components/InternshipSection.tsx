import React from 'react';
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
    <section id="internship" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1020] via-[#050816] to-[#0B1020] border border-red-500/30 p-8 sm:p-12 glass-card shadow-2xl relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>REAL INDUSTRY WORKFLOW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
                GET REAL <span className="text-gradient-red">INDUSTRY EXPERIENCE</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Step beyond conventional learning. Our Internship Program provides candidates with real-world development workflows, team collaboration, code reviews, and software deployment experience.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E50914] via-[#c40711] to-[#E50914] text-white font-extrabold text-sm tracking-wider shadow-xl flex items-center space-x-2 glow-red hover:scale-105 transition-transform"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD21F]" />
                  <span>APPLY FOR INTERNSHIP</span>
                </button>
              </div>
            </div>

            {/* Right Benefits Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <b.icon className="w-4 h-4 text-[#FFD21F]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-white font-display uppercase tracking-wide">
                      {b.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
