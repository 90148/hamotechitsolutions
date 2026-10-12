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
      <div className="pt-40 pb-20 text-center min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-black text-slate-900 font-display mb-4">Course Not Found</h2>
        <p className="text-slate-600 text-sm mb-6">The requested course program could not be located.</p>
        <Link to="/courses" className="px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-rose-600/25">
          Back to All Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 min-h-screen relative overflow-hidden">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-rose-100/60 via-pink-100/50 to-amber-100/50 border-b border-rose-200/70 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-rose-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-rose-500" />
            <span>Back to Courses</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider px-3 py-1 rounded-full bg-rose-100 border border-rose-200">
                {course.category}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-display leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-medium">
                {course.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-700 font-medium">
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-amber-200 shadow-sm">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Duration: {course.duration}</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-sky-200 shadow-sm">
                  <BarChart className="w-4 h-4 text-sky-500" />
                  <span>Level: {course.level}</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-emerald-200 shadow-sm">
                  <FolderGit2 className="w-4 h-4 text-emerald-500" />
                  <span>{course.projectsCount}+ Real-Time Projects</span>
                </span>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="lg:col-span-4 bg-white/95 p-6 rounded-2xl border border-rose-200 shadow-xl shadow-rose-950/10 space-y-4">
              <h3 className="text-lg font-black text-slate-900 font-display">
                ADMISSIONS OPEN
              </h3>
              <p className="text-xs text-slate-600">
                Offline Classroom & Live Online Interactive Batches Available.
              </p>
              <button
                onClick={() => onOpenModal(course.title)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-extrabold text-sm shadow-lg shadow-rose-600/25 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
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
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-rose-100 shadow-lg shadow-rose-950/5 space-y-4">
              <h2 className="text-xl font-black text-slate-900 font-display flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>What You Will Learn</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="space-y-4">
              <h2 className="text-xl font-black text-slate-900 font-display">
                Curriculum Modules Breakdown
              </h2>
              <div className="space-y-3">
                {course.modules.map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-rose-100 shadow-md shadow-rose-950/5 space-y-2 hover:border-rose-200 transition-all">
                    <h3 className="text-sm font-bold text-rose-600 font-display">
                      {m.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {m.topics.map((t, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                          <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-rose-100 shadow-lg shadow-rose-950/5 space-y-4">
              <h2 className="text-xl font-black text-slate-900 font-display flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-sky-500" />
                <span>Industry Tools &amp; Technologies Covered</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-slate-700 font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Details */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Career Opportunities */}
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-rose-100 shadow-lg shadow-rose-950/5 space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-rose-500" />
                <span>Career Roles &amp; Opportunities</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {course.careerOpportunities.map((role, idx) => (
                  <li key={idx} className="flex items-center space-x-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-rose-100 shadow-lg shadow-rose-950/5 space-y-2">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sky-500" />
                <span>Prerequisites</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {course.prerequisites}
              </p>
            </div>

            {/* Certification & Placement Support */}
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-rose-100 shadow-lg shadow-rose-950/5 space-y-3">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Certification Included</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Receive an official HamoTech Course & Project Completion Certificate upon passing the practical evaluation.
              </p>
              <button
                onClick={() => onOpenModal(course.title)}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs tracking-wider shadow-lg shadow-rose-600/25 transition-all"
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
