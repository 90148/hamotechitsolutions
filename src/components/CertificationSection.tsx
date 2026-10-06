import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';

interface CertificationSectionProps {
  onOpenModal: () => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 md:py-28 bg-[#050816] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-purple-500/40 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>OFFICIAL CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display leading-tight">
              GET INDUSTRY-RELEVANT <span className="text-gradient-red">CERTIFICATION</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Validate your technical skills with official certifications from Palmple's HamoTech IT Solutions. Demonstrate hands-on project mastery to hiring managers and recruiters.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Course Completion Certificate', desc: 'Verifiable credential highlighting your mastered tech stack & modules.' },
                { title: 'Project & Code Certification', desc: 'Proof of building real-world enterprise applications.' },
                { title: 'Live Internship Certificate', desc: 'Official internship credential documenting team project contributions.' },
                { title: 'Global Resume Recognition', desc: 'Strengthens your profile for software engineer job applications.' }
              ].map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0B1020] border border-slate-800 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFD21F] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-white font-display uppercase tracking-wide">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] text-white font-bold text-xs tracking-wider shadow-lg inline-flex items-center space-x-2 glow-red"
              >
                <Sparkles className="w-4 h-4 text-[#FFD21F]" />
                <span>GET CERTIFIED NOW</span>
              </button>
            </div>
          </div>

          {/* Right Certificate Graphic Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-[#0B1020] via-[#050816] to-[#0B1020] border-2 border-[#FFD21F]/40 shadow-2xl glass-card text-center space-y-6 animate-float"
            >
              {/* Gold Emblem Badge */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FFD21F] via-[#E50914] to-[#00BFFF] p-[2px] mx-auto glow-yellow">
                <div className="w-full h-full bg-[#050816] rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-[#FFD21F]" />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400 block mb-1">
                  PALMPLE'S HAMOTECH IT SOLUTIONS
                </span>
                <h3 className="text-xl font-black text-white font-display">
                  CERTIFICATE OF EXCELLENCE
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  This certifies that candidate has successfully completed
                </p>
                <p className="text-sm font-extrabold text-[#FFD21F] mt-2 font-display uppercase tracking-wide">
                  FULL STACK SOFTWARE ENGINEERING
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <div>
                  <span className="block font-bold text-white">CHENNAI, INDIA</span>
                  <span>AUTHORIZED INSTITUTE</span>
                </div>
                <div>
                  <span className="block font-bold text-[#00BFFF]">HT-CERT-2026</span>
                  <span>VERIFIABLE ID</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
