import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';

interface CertificationSectionProps {
  onOpenModal: () => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FFF1F2]/80 via-[#FDF2F8]/80 to-[#FFF7ED]/80 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5 text-purple-600" />
              <span>OFFICIAL CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display leading-tight">
              GET INDUSTRY-RELEVANT <span className="text-gradient-red">CERTIFICATION</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Validate your technical skills with official certifications from Palmple's HamoTech IT Solutions. Demonstrate hands-on project mastery to hiring managers and recruiters.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Course Completion Certificate', desc: 'Verifiable credential highlighting your mastered tech stack & modules.' },
                { title: 'Project & Code Certification', desc: 'Proof of building real-world enterprise applications.' },
                { title: 'Live Internship Certificate', desc: 'Official internship credential documenting team project contributions.' },
                { title: 'Global Resume Recognition', desc: 'Strengthens your profile for software engineer job applications.' }
              ].map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/95 border border-rose-200/80 shadow-md shadow-rose-900/5 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 font-display uppercase tracking-wide">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white font-bold text-xs tracking-wider shadow-lg shadow-rose-500/25 inline-flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
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
              className="relative w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-white via-rose-50/50 to-amber-50/50 border-2 border-amber-300/80 shadow-2xl shadow-rose-900/10 glass-card text-center space-y-6 animate-float"
            >
              {/* Gold Emblem Badge */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 via-[#E11D48] to-purple-500 p-[2px] mx-auto shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-amber-500" />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500 block mb-1">
                  PALMPLE'S HAMOTECH IT SOLUTIONS
                </span>
                <h3 className="text-xl font-black text-slate-900 font-display">
                  CERTIFICATE OF EXCELLENCE
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  This certifies that candidate has successfully completed
                </p>
                <p className="text-sm font-extrabold text-[#BE123C] mt-2 font-display uppercase tracking-wide">
                  FULL STACK SOFTWARE ENGINEERING
                </p>
              </div>

              <div className="pt-4 border-t border-rose-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <div>
                  <span className="block font-bold text-slate-900">CHENNAI, INDIA</span>
                  <span>AUTHORIZED INSTITUTE</span>
                </div>
                <div>
                  <span className="block font-bold text-[#BE123C]">HT-CERT-2026</span>
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
