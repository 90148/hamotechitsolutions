import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/faq';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-gradient-to-b from-[#FFF1F2]/80 via-[#FDF2F8]/80 to-[#FFF7ED]/80 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Slide Up & Fading Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-8 md:mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#0284C7] text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
            <HelpCircle className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>GOT QUESTIONS? WE HAVE ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            FREQUENTLY ASKED <span className="text-gradient-red animate-slide-up">QUESTIONS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Everything you need to know about our courses, admissions, hostel facilities, and placement support.
          </p>
        </motion.div>

        {/* Accordion Stack with Staggered Entrance */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="rounded-2xl bg-white/95 border border-rose-200/90 shadow-md shadow-rose-900/5 overflow-hidden transition-all hover:border-rose-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#E11D48] text-white shadow-sm' : 'bg-rose-50 text-[#E11D48]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-rose-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-rose-50/30 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
