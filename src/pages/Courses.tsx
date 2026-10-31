import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { InteractiveParticles } from '../components/ui/interactive-particles';
import { AnimatedButton } from '../components/ui/animated-button';
import { Search, Sparkles, CheckCircle2, ArrowRight, PhoneCall, Award, Users, BookOpen } from 'lucide-react';
import coursesHeroImage from '../assets/courses-hero-students.jpg';

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
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Ambient pastel glow orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* HERO SECTION WITH STUDENTS BANNER IMAGE                     */}
        {/* ============================================================ */}
        <div className="mb-12 rounded-3xl bg-gradient-to-br from-white/95 via-rose-50/70 to-orange-50/50 border border-rose-200/90 shadow-2xl shadow-rose-950/5 p-5 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle background radial light beams */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Column: Headline, Highlights, & Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
                <span>PALMPLE&apos;S HAMOTECH IT SOLUTIONS • ADMISSIONS OPEN</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display leading-[1.12]">
                MASTER IN-DEMAND <br />
                <span className="text-gradient-red">IT &amp; SOFTWARE SKILLS</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
                Transform from a curious learner to a job-ready tech professional. Hands-on code labs, 50+ real-time enterprise projects, 1-on-1 mentor guidance, and 100% career placement support.
              </p>

              {/* Value proposition badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 bg-white/90 px-3 py-2 rounded-xl border border-rose-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Practical Labs</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 bg-white/90 px-3 py-2 rounded-xl border border-rose-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>50+ Real Projects</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 bg-white/90 px-3 py-2 rounded-xl border border-rose-100 shadow-sm col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <span>Placement Cell</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <AnimatedButton
                  type="button"
                  onClick={() => onOpenModal()}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/25 hover:shadow-xl hover:shadow-rose-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center space-x-2"
                >
                  <span>Enroll Now / Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>

                <a
                  href="#course-list"
                  className="px-5 py-3.5 rounded-xl bg-white border border-rose-200 text-slate-700 hover:text-[#E11D48] hover:border-rose-300 font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Browse 10+ Programs
                </a>

                <a
                  href="tel:9884166198"
                  className="inline-flex items-center space-x-1.5 px-4 py-3.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
                  title="Direct Counselor Helpline"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>+91 98841 66198</span>
                </a>
              </div>

              {/* Trust counters */}
              <div className="pt-2 flex items-center space-x-6 text-xs text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-rose-500" />
                  <span><strong className="text-slate-800 font-black">500+</strong> Trained</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span><strong className="text-slate-800 font-black">95%</strong> Career Support</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span><strong className="text-slate-800 font-black">10+</strong> Industry Stacks</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Image with Interactive Floating Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-rose-200/90 shadow-2xl shadow-rose-900/15 group bg-white">
                
                {/* Hero Student Banner Image */}
                <img
                  src={coursesHeroImage}
                  alt="HamoTech IT Students preparing for their tech careers with laptop, books, and code skills"
                  className="relative z-0 w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                <InteractiveParticles
                  src={coursesHeroImage}
                  allowUpload={false}
                  className="absolute inset-0 z-10 opacity-70 mix-blend-multiply"
                  background="transparent"
                  color="#E11D48"
                  size={1.35}
                  randomness={2.2}
                  depth={4}
                  touchRadius={0.18}
                  threshold={48}
                />

                {/* Subtle protective gradient over image */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />

                {/* Floating Badge: Top Right */}
                <div className="absolute top-3 right-3 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-rose-200/80 shadow-lg text-[11px] font-bold text-slate-800 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Admissions Open 2025–26</span>
                </div>

                {/* Floating Card: Bottom Content */}
                <div className="absolute bottom-3 left-3 right-3 z-30 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-white/60 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E11D48]">
                      TRAIN • LEARN • GROW • SUCCEED
                    </p>
                    <p className="text-xs font-black text-slate-900 font-display">
                      Industry-Standard IT Curriculum
                    </p>
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 bg-rose-50 text-[#E11D48] rounded-lg border border-rose-200 shrink-0">
                    10+ Stacks
                  </span>
                </div>

              </div>

              {/* Floating outer badge: 95% Career Placement Support */}
              <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-rose-200 shadow-xl items-center space-x-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E11D48] to-[#F59E0B] flex items-center justify-center text-white font-black text-xs shadow-md">
                  95%
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase leading-none">Placement Assistance</p>
                  <p className="text-xs font-black text-slate-900 leading-tight">Career Support Cell</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* SEARCH & FILTER CONTROLS BAR                                 */}
        {/* ============================================================ */}
        <div id="course-list" className="scroll-mt-28 max-w-3xl mx-auto mb-10 space-y-4">
          
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              EXPLORE OUR <span className="text-gradient-red">IT PROGRAMS</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Filter by tech domain or search specific tools like Java, Python, AWS, Docker, Flutter, or React.
            </p>
          </div>

          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search courses or technologies (e.g. Java, Python, AI/ML, DevOps, Flutter, Power BI...)"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/90 border border-rose-200/80 rounded-2xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 shadow-xl shadow-rose-950/5 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
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

          <div className="flex items-center justify-between px-2 text-xs text-slate-500">
            <span>Showing <strong className="text-slate-800">{filtered.length}</strong> of {COURSES.length} courses</span>
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="text-rose-600 hover:text-rose-700 font-bold underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* COURSE CARDS GRID                                            */}
        {/* ============================================================ */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white/85 rounded-3xl border border-rose-200 shadow-xl shadow-rose-950/5 max-w-lg mx-auto">
            <p className="text-slate-600 text-sm font-medium">No courses matching your search criteria.</p>
            <button
              type="button"
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