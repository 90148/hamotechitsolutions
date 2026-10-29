import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, CheckCircle2, Sparkles, MessageSquare, AlertCircle, 
  Loader2, Phone, ZoomIn, Eye, ShieldCheck, User, Mail, BookOpen, GraduationCap 
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { submitRegistration, type LeadData } from '../services/registrationService';
import posterImg from '../assets/hamotech-poster.jpg';

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
    qualification: 'B.E / B.Tech / Student',
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
  const [isPosterZoomed, setIsPosterZoomed] = useState(false);

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
      if (e.key === 'Escape') {
        if (isPosterZoomed) {
          setIsPosterZoomed(false);
        } else if (isOpen) {
          onClose();
        }
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
  }, [isOpen, onClose, isPosterZoomed]);

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
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 25 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative w-full max-w-5xl bg-white border border-rose-200 rounded-3xl shadow-2xl shadow-rose-950/25 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
            >
              {/* Top Accent Gradient Bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#E11D48] via-[#F43F5E] via-[#F59E0B] to-[#8B5CF6]" />

              {/* Circular Floating Close Button (matching reference image) */}
              <button
                onClick={onClose}
                aria-label="Close Registration Modal"
                className="absolute top-3.5 right-3.5 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-600 hover:text-rose-600 border border-slate-200/90 hover:border-rose-300 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Modal Body: Split 2-Column on Desktop (Form on Left, Poster on Right) */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                {isSubmitted ? (
                  /* Success Screen */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-6 max-w-xl mx-auto"
                  >
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200 shadow-sm animate-bounce-subtle">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                      Registration Received Successfully! 🎉
                    </h3>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      Thank you, <span className="text-[#BE123C] font-bold">{formData.name}</span>. Your enrollment details for{' '}
                      <span className="text-rose-600 font-bold">{formData.course}</span> have been sent to our admissions team. A senior career counselor will call you within 24 hours to confirm your batch &amp; scholarship.
                    </p>

                    <div className="mt-5 p-3.5 bg-rose-50/80 rounded-xl text-xs text-slate-700 max-w-sm mx-auto border border-rose-200 shadow-xs">
                      Reference Registration ID: <span className="text-[#E11D48] font-mono font-extrabold text-sm ml-1">{submittedLeadId}</span>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Chat With Admissions on WhatsApp</span>
                      </button>

                      <button
                        onClick={handleResetAndClose}
                        className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-rose-50 text-slate-700 rounded-xl font-bold text-sm transition-colors border border-rose-200 shadow-sm"
                      >
                        Continue Exploring Website
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* LEFT COLUMN: Registration Form */}
                    <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
                      
                      {/* Form Header */}
                      <div className="space-y-2">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-xs">
                          <Sparkles className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
                          <span>Admissions Open • Limited Seats</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-tight">
                          Fill the Form Now! <span className="text-[#E11D48]">Grab Your 30% Discount</span>
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          Register your details below for personalized career guidance, curriculum syllabus &amp; demo class access.
                        </p>
                      </div>

                      {errorMessage && (
                        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Main Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                            <User className="w-3.5 h-3.5 text-rose-500" />
                            <span>Name <span className="text-[#E11D48]">*</span></span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all shadow-xs"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                            <Mail className="w-3.5 h-3.5 text-sky-500" />
                            <span>Email <span className="text-[#E11D48]">*</span></span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all shadow-xs"
                          />
                        </div>

                        {/* Contact Number */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                            <Phone className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Contact Number <span className="text-[#E11D48]">*</span></span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Enter your contact number (10 digits)"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all shadow-xs"
                          />
                        </div>

                        {/* Enter Desired Course */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                            <span>Enter Desired Course <span className="text-[#E11D48]">*</span></span>
                          </label>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 focus:bg-white rounded-xl text-[#BE123C] font-bold text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all shadow-xs"
                          >
                            {COURSES.map(c => (
                              <option key={c.id} value={c.title} className="text-slate-900 font-medium">
                                {c.title} ({c.duration})
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Training Mode & Qualification Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Preferred Mode
                            </label>
                            <select
                              name="mode"
                              value={formData.mode}
                              onChange={handleChange}
                              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-rose-500"
                            >
                              <option value="Offline">Offline Classroom (Guduvanchery)</option>
                              <option value="Online">Live Online Interactive</option>
                              <option value="Hybrid">Hybrid Mode</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                              <GraduationCap className="w-3.5 h-3.5 text-purple-500" />
                              <span>Qualification</span>
                            </label>
                            <select
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleChange}
                              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-rose-500"
                            >
                              <option value="B.E / B.Tech">B.E / B.Tech</option>
                              <option value="B.Sc / BCA / MCA">B.Sc / BCA / MCA</option>
                              <option value="Diploma">Diploma</option>
                              <option value="Working Professional">Working Professional</option>
                              <option value="Fresher / Other">Fresher / Other</option>
                            </select>
                          </div>
                        </div>

                        {/* Agreement Checkbox */}
                        <div className="pt-1">
                          <label className="flex items-start space-x-2.5 cursor-pointer">
                            <input
                              type="checkbox"
                              name="consent"
                              checked={formData.consent}
                              onChange={handleChange}
                              className="mt-0.5 text-rose-600 rounded focus:ring-rose-500"
                            />
                            <span className="text-xs text-slate-600 leading-tight">
                              I authorize HamoTech IT Solutions to contact me with training schedules, placement guidance &amp; fee structure.
                            </span>
                          </label>
                        </div>

                        {/* Submit Button (Bright Yellow/Amber gradient matching reference image) */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FFD21F] via-[#F59E0B] to-[#F97316] hover:brightness-105 text-slate-950 font-black text-sm tracking-wider shadow-xl shadow-amber-500/25 flex items-center justify-center space-x-2 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                                <span>SUBMITTING REGISTRATION...</span>
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-4 h-4 text-slate-950" />
                                <span>SUBMIT</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-600 font-semibold gap-2">
                          <span className="flex items-center space-x-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>100% Placement Support</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                            <span>Hostel Facility Available</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                            <span>Live Projects Lab</span>
                          </span>
                        </div>

                      </form>

                    </div>

                    {/* RIGHT COLUMN: HamoTech Official Poster Feature Card */}
                    <div className="lg:col-span-5 bg-gradient-to-b from-rose-50/70 via-pink-50/50 to-amber-50/40 p-6 sm:p-7 border-t lg:border-t-0 lg:border-l border-rose-100 flex flex-col justify-between items-center relative">
                      
                      {/* Top Poster Badge */}
                      <div className="w-full flex items-center justify-between mb-3">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#BE123C] bg-white px-3 py-1 rounded-full border border-rose-200 shadow-xs flex items-center space-x-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                          <span>Official HamoTech Poster</span>
                        </span>
                        
                        <button
                          type="button"
                          onClick={() => setIsPosterZoomed(true)}
                          className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-white hover:bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200 transition-colors flex items-center space-x-1 shadow-xs"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>Click to Zoom</span>
                        </button>
                      </div>

                      {/* Poster Image Container with Interactive Hover & Lightbox Trigger */}
                      <div 
                        onClick={() => setIsPosterZoomed(true)}
                        className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border-2 border-rose-200 shadow-xl shadow-rose-900/10 cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:border-rose-400 poster-glow-box"
                      >
                        <img
                          src={posterImg}
                          alt="HamoTech IT Solutions Training & Placement Poster"
                          className="w-full h-auto object-cover block"
                        />

                        {/* Hover Overlay with Zoom Prompt */}
                        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-2 p-4 text-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 border border-white/50 backdrop-blur-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-xs font-extrabold tracking-wider bg-rose-600 px-3 py-1 rounded-full shadow-md">
                            CLICK TO VIEW FULL POSTER
                          </span>
                          <span className="text-[10px] text-slate-200">
                            View all courses, hostel info &amp; scan QR code
                          </span>
                        </div>
                      </div>

                      {/* Quick Contact & Direct Action under poster */}
                      <div className="w-full mt-4 space-y-2 pt-2 border-t border-rose-200/60 text-center">
                        <div className="flex items-center justify-center space-x-2 text-xs font-bold text-slate-700">
                          <Phone className="w-3.5 h-3.5 text-rose-600" />
                          <span>Direct Helpline: 98841 66198 / 76590 44625</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 pt-1">
                          <a
                            href="tel:9884166198"
                            className="flex-1 py-2 px-3 rounded-lg bg-white border border-rose-200 hover:border-rose-400 text-rose-600 hover:text-rose-700 text-xs font-bold transition-all shadow-xs flex items-center justify-center space-x-1.5"
                          >
                            <Phone className="w-3 h-3 text-rose-600" />
                            <span>Call Center</span>
                          </a>

                          <a
                            href="https://wa.me/919884166198?text=Hi%20HamoTech!%20I%20want%20to%20know%20about%20your%20IT%20courses."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center space-x-1.5"
                          >
                            <MessageSquare className="w-3 h-3 fill-white" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN POSTER LIGHTBOX MODAL */}
      <AnimatePresence>
        {isPosterZoomed && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPosterZoomed(false)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-lg"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 max-w-2xl max-h-[92vh] overflow-auto rounded-2xl bg-white p-2 shadow-2xl border border-rose-300"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPosterZoomed(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white flex items-center justify-center shadow-xl transition-all"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={posterImg}
                alt="HamoTech IT Solutions Official Poster Fullscreen"
                className="w-full h-auto rounded-xl object-contain max-h-[88vh]"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
