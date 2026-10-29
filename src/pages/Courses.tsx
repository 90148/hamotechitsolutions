import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Search, BookOpen } from 'lucide-react';

interface CoursesPageProps {
  onOpenModal: (courseTitle?: string) => void;
}

export const Courses: React.FC<CoursesPageProps> = ({ onOpenModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'AI & Data', 'Cloud & DevOps', 'Mobile & UI', 'Programming Foundation', 'Cyber Security'];

  const filtered = COURSES.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Ambient pastel glow orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-rose-600" />
            <span>FULL COURSE CATALOG</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-display">
            EXPLORE OUR <span className="text-gradient-red">IT PROGRAMS</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Comprehensive curriculum, hands-on projects, expert mentorship & placement preparation.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search courses or technologies (e.g. Java, Python, AWS, Flutter...)"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/90 border border-rose-200/80 rounded-2xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 shadow-xl shadow-rose-950/5 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/25 scale-105'
                    : 'bg-white/80 text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-rose-100 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white/85 rounded-3xl border border-rose-200 shadow-xl shadow-rose-950/5 max-w-lg mx-auto">
            <p className="text-slate-600 text-sm font-medium">No courses matching your search criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(course => (
              <CourseCard key={course.id} course={course} onOpenModal={onOpenModal} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
