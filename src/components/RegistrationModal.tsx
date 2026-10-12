import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { COURSES } from '../data/courses';
import { submitRegistration, type LeadData } from '../services/registrationService';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId
}) => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    phone: '',
    email: '',
    qualification: 'B.E / B.Tech',
    college: '',
    course: defaultCourseId ? COURSES.find(c => c.id === defaultCourseId)?.title || COURSES[0].title : COURSES[0].title,
    mode: 'Offline',
    experience: 'Beginner',
    batch: 'Morning',
    interest: 'Training',
    message: '',
    consent: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');

  // Synchronize course selection if defaultCourseId changes
  useEffect(() => {
    if (defaultCourseId) {
      const found = COURSES.find(c => c.id === defaultCourseId);
      if (found) {
        setFormData(prev => ({ ...prev, course: found.title }));
      }
    }
  }, [defaultCourseId]);

  // Handle ESC key & scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await submitRegistration(formData);
      setIsSubmitted(true);
      setSubmittedLeadId(res.leadId);
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting your registration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const phone = '919884166198';
    const text = encodeURIComponent(
      `Hi HamoTech IT Solutions! I just registered online (Ref ID: ${submittedLeadId}). Name: ${formData.name}, Course: ${formData.course}. Please confirm my counseling slot.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Content Window */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white border border-rose-200/90 rounded-2xl shadow-2xl shadow-rose-900/20 overflow-hidden z-10 glass-modal my-auto max-h-[90vh] flex flex-col"
          >
            {/* Top Accent Gradient Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#E11D48] via-[#F43F5E] via-[#F59E0B] to-[#8B5CF6]" />

            {/* Header */}
            <div className="p-6 pb-4 border-b border-rose-100 flex items-start justify-between relative bg-gradient-to-r from-rose-50/80 via-white to-amber-50/40">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-rose-200 text-[#BE123C] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Limited Seats Available</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                  START YOUR IT CAREER TODAY 🚀
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Register now and take the first step toward becoming job-ready.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Registration Modal"
                className="text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-rose-100/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              {isSubmitted ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 px-4"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    Registration Submitted Successfully! 🎉
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <span className="text-[#BE123C] font-semibold">{formData.name}</span>. Your enrollment inquiry for{' '}
                    <span className="text-[#0284C7] font-semibold">{formData.course}</span> has been received. Our senior career counselor will reach out to you within 24 hours.
                  </p>

                  <div className="mt-4 p-3 bg-rose-50 rounded-lg text-xs text-slate-600 max-w-xs mx-auto border border-rose-200">
                    Registration Reference ID: <span className="text-[#E11D48] font-mono font-bold">{submittedLeadId}</span>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp Us Now</span>
                    </button>

                    <button
                      onClick={handleResetAndClose}
                      className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-rose-50 text-slate-700 rounded-xl font-bold text-sm transition-colors border border-rose-200 shadow-sm"
                    >
                      Continue Exploring
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Registration Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number (10 Digits) <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Qualification */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Current Qualification <span className="text-[#E11D48]">*</span>
                      </label>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                      >
                        <option value="B.E / B.Tech">B.E / B.Tech</option>
                        <option value="B.Sc / BCA / MCA">B.Sc / BCA / MCA</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Other Student / Fresher">Other Student / Fresher</option>
                      </select>
                    </div>
                  </div>

                  {/* College / University */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      College / University Name
                    </label>
                    <input
                      type="text"
                      name="college"
                      placeholder="e.g. SRM Institute / Anna University"
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                    />
                  </div>

                  {/* Preferred Course */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Preferred Course <span className="text-[#E11D48]">*</span>
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-[#BE123C] font-bold text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                    >
                      {COURSES.map(c => (
                        <option key={c.id} value={c.title} className="bg-white text-slate-900">
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Learning Mode, Experience Level & Batch */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Learning Mode <span className="text-[#E11D48]">*</span>
                      </label>
                      <select
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#E11D48]"
                      >
                        <option value="Offline">Classroom Offline</option>
                        <option value="Online">Live Online</option>
                        <option value="Hybrid">Hybrid Mode</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Experience Level
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#E11D48]"
                      >
                        <option value="Beginner">Complete Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Batch
                      </label>
                      <select
                        name="batch"
                        value={formData.batch}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#E11D48]"
                      >
                        <option value="Morning">Morning Batch</option>
                        <option value="Afternoon">Afternoon Batch</option>
                        <option value="Evening">Evening Batch</option>
                      </select>
                    </div>
                  </div>

                  {/* Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Interest
                    </label>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-700 pt-1">
                      {(['Training', 'Internship', 'Placement Guidance'] as const).map(opt => (
                        <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="interest"
                            value={opt}
                            checked={formData.interest === opt}
                            onChange={handleChange}
                            className="text-[#E11D48] focus:ring-[#E11D48]"
                          />
                          <span className="font-medium">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Message / Goals
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="e.g. I want to build a career in Full Stack Java development..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#E11D48]"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-0.5 text-[#E11D48] rounded focus:ring-[#E11D48]"
                      />
                      <span className="text-xs text-slate-600 leading-tight">
                        I agree to be contacted by HamoTech IT Solutions regarding courses, training, internships, and placement opportunities.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-xl shadow-rose-500/25 flex items-center justify-center space-x-2 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>SUBMITTING REGISTRATION...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-200" />
                          <span>SUBMIT REGISTRATION</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
