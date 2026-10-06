import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { COURSES } from '../data/courses';
import { CourseCard } from './CourseCard';

interface CourseSectionProps {
  onOpenModal: (courseTitle?: string) => void;
}

export const CourseSection: React.FC<CourseSectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'AI & Data', 'Cloud & DevOps', 'Mobile & UI', 'Programming Foundation'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00BFFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#E50914]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>JOB-ORIENTED IT CURRICULUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            OUR INDUSTRY-READY <span className="text-gradient-red">COURSES</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Learn the technologies top software companies are actively hiring for. Hands-on coding, live projects & mentorship.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#E50914] to-[#c40711] text-white shadow-lg glow-red scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} onOpenModal={onOpenModal} />
          ))}
        </motion.div>

        {/* View All Courses Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-extrabold text-sm border border-slate-700 hover:border-[#E50914] transition-all shadow-xl"
          >
            <span>VIEW ALL COURSES &amp; SYLLABUS</span>
            <ArrowRight className="w-4 h-4 text-[#FFD21F]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
