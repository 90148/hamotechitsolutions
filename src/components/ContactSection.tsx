import React, { useState } from 'react';
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
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#FDF2F8]/80 via-[#FFF1F2]/80 to-[#FFF7ED]/80 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>WE ARE HERE TO HELP YOU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            LET'S BUILD YOUR <span className="text-gradient-red">FUTURE TOGETHER</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Have questions about training batches, fee structure, or hostel accommodation? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
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
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      3rd Street, Guduvancheri, Bajankovil, Chennai – 603 202
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display uppercase">Phone &amp; Helpline</h4>
                    <a href="tel:9884166198" className="text-xs text-[#BE123C] font-semibold hover:underline mt-1 block">
                      +91 98841 66198
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display uppercase">Email Address</h4>
                    <a href="mailto:hamotechitsolutions@gmail.com" className="text-xs text-[#0284C7] hover:underline mt-1 block">
                      hamotechitsolutions@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display uppercase">Website</h4>
                    <a href="http://www.hamotechitsolutions.com" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-700 hover:underline mt-1 block">
                      www.hamotechitsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-rose-100 flex flex-wrap gap-2">
                <a
                  href="tel:9884166198"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-slate-800 font-bold text-xs text-center flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Call Us</span>
                </a>

                <a
                  href="https://wa.me/919884166198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center space-x-1.5 shadow-md transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map Container */}
            <div className="rounded-3xl bg-white border border-rose-200 overflow-hidden h-64 shadow-lg shadow-rose-900/5 relative">
              <iframe
                title="HamoTech IT Solutions Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11954.0622639565!2d80.04231435!3d12.834518350000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263189df2a1d9%3A0x154fa651ccc8b758!2sNovahamo%20Technologies%20PVT.LTD.!5e1!3m2!1sen!2sin!4v1791288942047!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white/95 border border-rose-200/90 glass-card shadow-2xl shadow-rose-900/10">
              <h3 className="text-xl font-black text-slate-900 font-display mb-2">
                SEND AN ENQUIRY
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the form below and our counseling coordinator will contact you promptly.
              </p>

              {isSuccess ? (
                <div className="p-8 text-center bg-rose-50/60 rounded-2xl border border-emerald-500/40 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900 font-display">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {formData.name}. We have received your inquiry for {formData.course}. Our counselor will call you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-white hover:bg-rose-50 text-slate-800 font-bold text-xs border border-rose-200 shadow-sm"
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
                        placeholder="e.g. SURYA"
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
                        placeholder="e.g. anish@example.com"
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
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-sm tracking-wider shadow-xl shadow-rose-500/25 flex items-center justify-center space-x-2 transition-transform hover:scale-[1.01]"
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
          </div>

        </div>

      </div>
    </section>
  );
};
