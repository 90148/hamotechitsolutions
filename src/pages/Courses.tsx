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
    <div className="pt-32 pb-24 bg-[#050816] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#E50914]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>FULL COURSE CATALOG</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-display">
            EXPLORE OUR <span className="text-gradient-red">IT PROGRAMS</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300">
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
              className="w-full pl-12 pr-4 py-3 bg-[#0B1020] border border-slate-700 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E50914] shadow-xl"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#E50914] text-white shadow'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-[#0B1020] rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">No courses matching your search criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 bg-[#E50914] text-white text-xs font-bold rounded-xl"
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
