import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { Clock, BarChart, FolderGit2, CheckCircle2, Award, Briefcase, Wrench, Sparkles, ArrowLeft, ShieldCheck, ChevronRight } from 'lucide-react';

interface CourseDetailsProps {
  onOpenModal: (courseTitle?: string) => void;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ onOpenModal }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="pt-40 pb-20 bg-[#050816] text-center min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-black text-white font-display mb-4">Course Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested course program could not be located.</p>
        <Link to="/courses" className="px-6 py-3 bg-[#E50914] text-white text-xs font-bold rounded-xl">
          Back to All Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-[#050816] min-h-screen">
      
      {/* Top Banner Header */}
      <div className="bg-[#0B1020] border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FFD21F]" />
            <span>Back to Courses</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#00BFFF] uppercase tracking-wider px-3 py-1 rounded bg-[#00BFFF]/10 border border-[#00BFFF]/30">
                {course.category}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-white font-display leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {course.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300 font-medium">
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Clock className="w-4 h-4 text-[#FFD21F]" />
                  <span>Duration: {course.duration}</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <BarChart className="w-4 h-4 text-[#00BFFF]" />
                  <span>Level: {course.level}</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <FolderGit2 className="w-4 h-4 text-emerald-400" />
                  <span>{course.projectsCount}+ Real-Time Projects</span>
                </span>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="lg:col-span-4 bg-[#050816] p-6 rounded-2xl border border-red-500/40 shadow-2xl space-y-4">
              <h3 className="text-lg font-black text-white font-display">
                ADMISSIONS OPEN
              </h3>
              <p className="text-xs text-slate-400">
                Offline Classroom & Live Online Interactive Batches Available.
              </p>
              <button
                onClick={() => onOpenModal(course.title)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] text-white font-extrabold text-sm shadow-lg flex items-center justify-center space-x-2 glow-red"
              >
                <Sparkles className="w-4 h-4 text-[#FFD21F]" />
                <span>REGISTER FOR THIS COURSE</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* What You Will Learn */}
            <div className="p-6 rounded-2xl bg-[#0B1020] border border-slate-800 space-y-4">
              <h2 className="text-xl font-black text-white font-display flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#FFD21F]" />
                <span>What You Will Learn</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] mt-1.5 shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="space-y-4">
              <h2 className="text-xl font-black text-white font-display">
                Curriculum Modules Breakdown
              </h2>
              <div className="space-y-3">
                {course.modules.map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#0B1020] border border-slate-800 space-y-2">
                    <h3 className="text-sm font-bold text-[#FFD21F] font-display">
                      {m.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {m.topics.map((t, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                          <ChevronRight className="w-3.5 h-3.5 text-[#00BFFF]" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="p-6 rounded-2xl bg-[#0B1020] border border-slate-800 space-y-4">
              <h2 className="text-xl font-black text-white font-display flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-[#00BFFF]" />
                <span>Industry Tools &amp; Technologies Covered</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Details */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Career Opportunities */}
            <div className="p-6 rounded-2xl bg-[#0B1020] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white font-display flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#E50914]" />
                <span>Career Roles &amp; Opportunities</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {course.careerOpportunities.map((role, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="p-6 rounded-2xl bg-[#0B1020] border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white font-display flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
                <span>Prerequisites</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {course.prerequisites}
              </p>
            </div>

            {/* Certification & Placement Support */}
            <div className="p-6 rounded-2xl bg-[#0B1020] border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white font-display flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Certification Included</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Receive an official HamoTech Course & Project Completion Certificate upon passing the practical evaluation.
              </p>
              <button
                onClick={() => onOpenModal(course.title)}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] text-white font-bold text-xs tracking-wider shadow glow-red"
              >
                ENROLL IN {course.title.toUpperCase()}
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
