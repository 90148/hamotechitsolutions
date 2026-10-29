import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BarChart, FolderGit2, ArrowRight, Sparkles, Code2, Terminal, Cpu, Cloud, Smartphone, Code, BarChart3, Layers, Palette, ShieldCheck } from 'lucide-react';
import type { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  onOpenModal: (courseTitle?: string) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Terminal,
  Cpu,
  Cloud,
  Smartphone,
  Code,
  BarChart3,
  Layers,
  Palette,
  ShieldCheck
};

export const CourseCard: React.FC<CourseCardProps> = ({ course, onOpenModal }) => {
  const IconComponent = iconMap[course.iconName] || Code2;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl bg-white/95 border border-rose-200/90 hover:border-rose-400 p-6 glass-card shadow-lg shadow-rose-900/5 hover:shadow-2xl hover:shadow-rose-500/15 flex flex-col justify-between overflow-hidden"
    >
      {/* Top subtle hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Featured Badge */}
      {course.badge && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#E11D48] to-[#F59E0B] text-white text-[10px] font-black uppercase tracking-wider shadow-sm animate-pulse-slow">
          {course.badge}
        </div>
      )}

      <div>
        {/* Course Header & Icon with Hover Spin/Scale */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 group-hover:border-[#E11D48] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
            <IconComponent className="w-6 h-6 text-[#E11D48] transition-colors" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#BE123C] uppercase tracking-wider">
              {course.category}
            </span>
            <h3 className="text-lg font-black text-slate-900 font-display group-hover:text-[#E11D48] transition-colors line-clamp-1">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Meta Pills (Duration, Level, Projects) */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-[11px] text-slate-600 font-medium">
          <span className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-rose-50/80 border border-rose-100 hover:border-rose-300 transition-colors">
            <Clock className="w-3 h-3 text-[#E11D48]" />
            <span>{course.duration}</span>
          </span>
          <span className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-sky-50/80 border border-sky-100 hover:border-sky-300 transition-colors">
            <BarChart className="w-3 h-3 text-[#0284C7]" />
            <span>{course.level}</span>
          </span>
          <span className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-50/80 border border-emerald-100 hover:border-emerald-300 transition-colors">
            <FolderGit2 className="w-3 h-3 text-emerald-600" />
            <span>{course.projectsCount}+ Projects</span>
          </span>
        </div>

        {/* Tech Stack Badges with Interactive Code Hover Effects */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {course.technologies.map(tech => (
            <span
              key={tech}
              className="code-badge-interactive px-2.5 py-1 rounded-md bg-rose-50/70 border border-rose-100 text-slate-700 text-[10px] font-mono font-semibold cursor-pointer hover:border-rose-400 hover:text-rose-600 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-rose-100 flex items-center justify-between gap-2">
        <Link
          to={`/courses/${course.id}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100/80 border border-rose-200 hover:border-rose-300 text-slate-800 hover:text-[#E11D48] font-bold text-xs text-center flex items-center justify-center space-x-1 transition-colors shadow-sm"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E11D48]" />
        </Link>

        <button
          onClick={() => onOpenModal(course.title)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white font-bold text-xs text-center flex items-center justify-center space-x-1 shadow-md shadow-rose-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Enroll Now</span>
        </button>
      </div>
    </motion.div>
  );
};
