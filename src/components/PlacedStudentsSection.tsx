import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Quote
} from 'lucide-react';
import { PLACED_STUDENTS } from '../data/placedStudents';

interface PlacedStudentsSectionProps {
  onOpenModal: () => void;
}

export const PlacedStudentsSection: React.FC<PlacedStudentsSectionProps> = ({ onOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'python' | 'fullstack' | 'high-package'>('all');

  const filteredStudents = PLACED_STUDENTS.filter(student => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'python') return student.category === 'python';
    if (activeFilter === 'fullstack') return student.category === 'fullstack' || student.category === 'software-engineer';
    if (activeFilter === 'high-package') return student.packageNumber >= 8.5;
    return true;
  });

  return (
    <section 
      id="placed-students" 
      className="py-20 md:py-28 bg-gradient-to-b from-[#FFF1F2]/90 via-[#FFF7ED]/80 to-[#FFF1F2]/90 relative overflow-hidden border-t border-b border-rose-200/70"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-rose-400/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-300/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-sky-300/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Highlighted Banner Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          
          {/* Top Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 border-2 border-rose-300 shadow-md shadow-rose-500/10 text-xs font-black uppercase tracking-widest text-[#BE123C]"
          >
            <Trophy className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>HALL OF FAME • PROUD PLACEMENT ACHIEVERS</span>
            <Sparkles className="w-4 h-4 text-rose-500" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
              CONGRATULATIONS TO OUR <span className="text-gradient-red">PLACED STUDENTS!</span>
            </h2>
            <p className="text-base sm:text-lg font-extrabold text-[#D97706] tracking-wide font-display uppercase">
              From HamoTech IT Solutions to Software Engineers
            </p>
          </motion.div>

          {/* Motto / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-slate-800">Different Paths | One Goal | Brighter Futures.</span>{' '}
            Meet our recent batch graduates who turned intensive coding practice and real-time project mentorship into high-paying corporate tech offers.
          </motion.p>

          {/* Highlight Key Statistics Ticker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Highest Package', value: '10.5 LPA', color: 'text-[#BE123C]', sub: 'QuantumWorks' },
              { label: 'Average Package', value: '8.2 LPA', color: 'text-[#0284C7]', sub: 'Top IT Roles' },
              { label: 'Placement Rate', value: '100%', color: 'text-emerald-600', sub: 'Placement Assistance' },
              { label: 'Recruiters Network', value: '1200+', color: 'text-[#D97706]', sub: 'Hiring Partners' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="p-3 sm:p-4 rounded-2xl bg-white/95 border border-rose-200/80 shadow-md text-center hover:border-rose-300 transition-all"
              >
                <div className={`text-xl sm:text-2xl font-black font-display ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700">{stat.label}</div>
                <div className="text-[10px] text-slate-500 font-medium">{stat.sub}</div>
              </div>
            ))}
          </motion.div>

          {/* Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: `All Placed Students (${PLACED_STUDENTS.length})` },
              { id: 'python', label: 'Python Developers' },
              { id: 'fullstack', label: 'Full Stack & Software Engineers' },
              { id: 'high-package', label: 'Top Packages (≥ 8.5 LPA)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white shadow-lg shadow-rose-500/25 scale-105'
                    : 'bg-white/90 text-slate-700 hover:bg-white hover:text-slate-900 border border-rose-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Students Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredStudents.map((student, idx) => (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-3xl bg-white border border-rose-200/90 hover:border-rose-400 glass-card-hover shadow-xl hover:shadow-2xl hover:shadow-rose-500/15 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative"
              >
                {/* Decorative Top Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#E11D48] via-amber-400 to-[#0284C7]" />

                <div className="p-5 flex-1 flex flex-col">
                  
                  {/* Top Bar: Company Badge & Package Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] font-bold text-slate-800 truncate">
                      <Building2 className="w-3 h-3 text-[#0284C7] shrink-0" />
                      <span className="truncate">{student.company}</span>
                    </span>

                    {/* Salary Package Highlight */}
                    <div className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-[#BE123C] font-black text-xs font-mono shadow-xs shrink-0 flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-[#BE123C]" />
                      <span>{student.packageLPA}</span>
                    </div>
                  </div>

                  {/* Student Image Showcase */}
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-36 sm:w-36 sm:h-40 rounded-2xl p-1 bg-gradient-to-br from-rose-400 via-amber-300 to-sky-400 shadow-md group-hover:shadow-rose-400/30 transition-all duration-300">
                      <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-100 relative">
                        <img
                          src={student.image}
                          alt={`${student.name} - ${student.role} placed at ${student.company}`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Verified Placement Badge */}
                    <div className="absolute -bottom-2 -right-1 bg-emerald-600 text-white rounded-full p-1.5 shadow-md border-2 border-white flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Special Ribbon Badge */}
                    {student.badge && (
                      <div className="absolute -top-2 -left-2 bg-gradient-to-r from-[#BE123C] to-[#E11D48] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm tracking-wider">
                        {student.badge}
                      </div>
                    )}
                  </div>

                  {/* Student Name & Role */}
                  <div className="text-center space-y-1 mb-3">
                    <h3 className="text-lg font-black text-slate-900 font-display group-hover:text-[#E11D48] transition-colors">
                      {student.name}
                    </h3>
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-bold text-amber-900">
                      <Briefcase className="w-3 h-3 text-amber-600" />
                      <span>{student.role}</span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
                    {student.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-slate-600 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Student Quote Snippet */}
                  {student.quote && (
                    <div className="mt-auto pt-3 border-t border-rose-100 text-[11px] text-slate-600 italic leading-relaxed text-center flex items-center justify-center gap-1">
                      <Quote className="w-3 h-3 text-rose-400 shrink-0 inline" />
                      <span className="line-clamp-2">&quot;{student.quote}&quot;</span>
                    </div>
                  )}

                </div>

                {/* Card Footer Status */}
                <div className="px-5 py-2.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="flex items-center space-x-1.5 text-emerald-700 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Offer Verified</span>
                  </span>
                  <span className="text-slate-500 font-medium">Class of 2026</span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Featured Partner Companies Ticker */}
        <div className="mt-16 p-6 rounded-3xl bg-white/95 border border-rose-200/90 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BE123C] block mb-1">
                TOP RECRUITMENT TIE-UPS
              </span>
              <h4 className="text-xl font-black text-slate-900 font-display">
                Where HamoTech Students Get Placed
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {['Teamverse', 'QuantumWorks', 'NovaHamo Technologies', 'Tasa IT Services', '1200+ Partner MNCs'].map((company, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 font-bold text-xs text-slate-800 shadow-xs flex items-center space-x-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivational Bottom Banner & Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-slate-800 text-xs font-extrabold uppercase tracking-wide">
            🌟 Real Hardwork Creates Real Opportunities!
          </div>

          <p className="text-xs sm:text-sm text-slate-600">
            Step towards a successful IT career with practical training, live projects, and 100% placement guidance.
          </p>

          <div>
            <button
              onClick={onOpenModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] hover:opacity-95 text-white font-black text-sm tracking-wider shadow-xl shadow-rose-500/25 inline-flex items-center space-x-2.5 glow-red transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-amber-200" />
              <span>BECOME OUR NEXT PLACEMENT SUCCESS STORY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
