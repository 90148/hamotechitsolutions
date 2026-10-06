import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BarChart, FolderGit2, ArrowRight, Sparkles, Code2, Terminal, Cpu, Cloud, Smartphone, Code, BarChart3, Layers, Palette, ShieldCheck } from 'lucide-react';
import type { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  onOpenModal: (courseTitle?: string) => void;
}

// Icon mapping dictionary
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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-2xl bg-[#0B1020]/90 border border-slate-800/90 hover:border-[#E50914]/60 p-6 glass-card shadow-xl hover:shadow-2xl flex flex-col justify-between overflow-hidden"
    >
      {/* Top subtle hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/5 via-transparent to-[#00BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Featured Badge */}
      {course.badge && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#E50914] to-[#FFD21F] text-[#050816] text-[10px] font-black uppercase tracking-wider shadow">
          {course.badge}
        </div>
      )}

      <div>
        {/* Course Header & Icon */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-[#E50914] flex items-center justify-center transition-colors group-hover:scale-105">
            <IconComponent className="w-6 h-6 text-[#FFD21F] group-hover:text-[#E50914] transition-colors" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#00BFFF] uppercase tracking-wider">
              {course.category}
            </span>
            <h3 className="text-lg font-black text-white font-display group-hover:text-[#FFD21F] transition-colors line-clamp-1">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Meta Pills (Duration, Level, Projects) */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-[11px] text-slate-400 font-medium">
          <span className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
            <Clock className="w-3 h-3 text-[#FFD21F]" />
            <span>{course.duration}</span>
          </span>
          <span className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
            <BarChart className="w-3 h-3 text-[#00BFFF]" />
            <span>{course.level}</span>
          </span>
          <span className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
            <FolderGit2 className="w-3 h-3 text-emerald-400" />
            <span>{course.projectsCount}+ Projects</span>
          </span>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {course.technologies.map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 text-[10px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <Link
          to={`/courses/${course.id}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-xs text-center flex items-center justify-center space-x-1 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#00BFFF]" />
        </Link>

        <button
          onClick={() => onOpenModal(course.title)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] hover:from-[#c40711] hover:to-[#a3050e] text-white font-bold text-xs text-center flex items-center justify-center space-x-1 shadow-md glow-red transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
          <span>Enroll Now</span>
        </button>
      </div>
    </motion.div>
  );
};
