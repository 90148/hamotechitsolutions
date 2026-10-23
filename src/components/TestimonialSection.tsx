import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-[#FDF2F8]/70 via-[#FFF1F2]/80 to-[#FFF7ED]/70 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#D97706] text-xs font-bold uppercase tracking-wider shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#D97706]" />
            <span>ALUMNI REVIEWS &amp; SUCCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            WHAT OUR <span className="text-gradient-red">STUDENTS SAY</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Discover how HamoTech IT Solutions has helped students transition into software careers.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-white/95 border border-rose-200/90 glass-card shadow-2xl shadow-rose-900/10 relative overflow-hidden"
            >
              <Quote className="w-16 h-16 text-rose-500/10 absolute top-6 right-8 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Photo */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-rose-400 shrink-0 shadow-lg shadow-rose-500/20">
                  <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                </div>

                {/* Body Content */}
                <div className="space-y-4 text-center sm:text-left flex-1">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center sm:justify-start space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-normal">
                    &quot;{current.content}&quot;
                  </p>

                  {/* Student Details */}
                  <div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h3 className="text-lg font-black text-slate-900 font-display">
                        {current.name}
                      </h3>
                      {current.packageLPA && (
                        <span className="px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200 text-[#BE123C] text-[11px] font-black font-mono">
                          Offer: {current.packageLPA}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#E11D48] font-bold">
                      {current.role} • <span className="text-slate-500 font-normal">{current.company}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Course: {current.course} (Batch {current.batchYear})
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-6 max-w-xs mx-auto">
            <button
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full bg-white text-slate-700 hover:text-[#E11D48] border border-rose-200 hover:border-rose-300 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === i ? 'w-6 bg-[#E11D48]' : 'bg-rose-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="p-3 rounded-full bg-white text-slate-700 hover:text-[#E11D48] border border-rose-200 hover:border-rose-300 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
