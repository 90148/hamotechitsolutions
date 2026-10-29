import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Send, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { COURSES } from '../data/courses';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: COURSES[0].title,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    await new Promise(res => setTimeout(res, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-b from-[#FDF2F8]/80 via-[#FFF1F2]/80 to-[#FFF7ED]/80 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Slide Up & Fading Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-8 md:mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
            <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>WE ARE HERE TO HELP YOU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            LET'S BUILD YOUR <span className="text-gradient-red animate-slide-up">FUTURE TOGETHER</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Have questions about training batches, fee structure, or hostel accommodation? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="p-8 rounded-3xl bg-white/95 border border-rose-200/90 glass-card space-y-6 shadow-xl shadow-rose-900/5">
              <h3 className="text-xl font-black text-slate-900 font-display">
                CAMPUS &amp; ADMISSIONS OFFICE
              </h3>

              <div className="space-y-5 text-sm text-slate-600">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#E11D48]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display uppercase">Address</h4>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Bajanlai Kovil Street 3, Guduvanchery, Chennai - 603202, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#E11D48]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display uppercase">Phone &amp; Admissions</h4>
                    <div className="space-y-1 mt-1">
                      <a href="tel:9884166198" className="block text-xs font-bold text-[#E11D48] hover:underline">
                        +91 98841 66198 (Primary)
                      </a>
                      <a href="tel:7659044625" className="block text-xs text-slate-600 hover:text-rose-600 hover:underline">
                        +91 76590 44625
                      </a>
                      <a href="tel:7200477378" className="block text-xs text-slate-600 hover:text-rose-600 hover:underline">
                        +91 72004 77378
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-[#E11D48]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display uppercase">Email Enquiries</h4>
                    <a href="mailto:hamotechitsolution25@gmail.com" className="text-xs text-slate-600 hover:text-[#E11D48] mt-1 block">
                      hamotechitsolution25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Globe className="w-5 h-5 text-[#E11D48]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display uppercase">Official Website</h4>
                    <a href="https://www.palmplehamotechitsolutions.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 hover:text-[#E11D48] mt-1 block">
                      www.palmplehamotechitsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Need quick answers?</span>
                    <span className="block text-[11px] text-slate-600">Chat directly with counselor</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/919884166198?text=Hello%20HamoTech,%20I%20have%20an%20enquiry%20regarding%20IT%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-rose-200/90 shadow-xl shadow-rose-900/5 h-64 relative bg-rose-50">
              <iframe
                title="HamoTech IT Solutions Location Guduvanchery Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3546733224367!2d80.05781497576579!3d12.820358818167384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70b779a9573%3A0xc3b8a36d9366e076!2sGuduvanchery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>

          {/* Right Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-white/95 border border-rose-200/90 glass-card shadow-xl shadow-rose-900/5">
              <h3 className="text-xl font-black text-slate-900 font-display mb-2">
                SEND US A MESSAGE
              </h3>
              <p className="text-xs text-slate-600 mb-6 font-medium">
                Fill out the quick enquiry form below and our counselor will call you within 24 hours.
              </p>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-rose-600">{formData.name}</span>. Your enquiry has been received. Our counselor will contact you soon.
                  </p>
                  <button
                    onClick={() => { setIsSuccess(false); setFormData({ name: '', phone: '', email: '', course: COURSES[0].title, message: '' }); }}
                    className="px-6 py-2.5 bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-xs font-bold hover:bg-rose-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. anand@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Course</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                      >
                        {COURSES.map(c => (
                          <option key={c.id} value={c.title} className="bg-white text-slate-800">{c.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message / Question</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="e.g. I want details regarding weekend batch timings and fees..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-rose-50/50 border border-rose-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-sm tracking-wider shadow-xl shadow-rose-500/25 flex items-center justify-center space-x-2 transition-transform hover:scale-[1.01] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-200" />
                        <span>SEND ENQUIRY</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
