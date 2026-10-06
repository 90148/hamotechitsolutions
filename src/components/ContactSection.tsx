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
    <section id="contact" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#E50914]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>WE ARE HERE TO HELP YOU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            LET'S BUILD YOUR <span className="text-gradient-red">FUTURE TOGETHER</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Have questions about training batches, fee structure, or hostel accommodation? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#0B1020] border border-slate-800 glass-card space-y-6 shadow-xl">
              <h3 className="text-xl font-black text-white font-display">
                CAMPUS &amp; ADMISSIONS OFFICE
              </h3>

              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-display uppercase">Address</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      3rd Street, Guduvancheri, Bajankovil, Chennai – 603 202
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FFD21F]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-display uppercase">Phone &amp; Helpline</h4>
                    <a href="tel:98841 66198" className="text-xs text-[#FFD21F] font-semibold hover:underline mt-1 block">
                      +91 98841 66198
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-display uppercase">Email Address</h4>
                    <a href="mailto:hamotechitsolutions@gmail.com" className="text-xs text-[#00BFFF] hover:underline mt-1 block">
                      hamotechitsolutions@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-display uppercase">Website</h4>
                    <a href="http://www.hamotechitsolutions.com" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:underline mt-1 block">
                      www.hamotechitsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                <a
                  href="tel:98841 66198"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs text-center flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
                  <span>Call Us</span>
                </a>

                <a
                  href="https://wa.me/9198841 66198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map Container */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden h-64 shadow-xl relative">
              <iframe
                title="HamoTech IT Solutions Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11954.0622639565!2d80.04231435!3d12.834518350000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263189df2a1d9%3A0x154fa651ccc8b758!2sNovahamo%20Technologies%20PVT.LTD.!5e1!3m2!1sen!2sin!4v1791288942047!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#0B1020] border border-slate-800 glass-card shadow-2xl">
              <h3 className="text-xl font-black text-white font-display mb-2">
                SEND AN ENQUIRY
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below and our counseling coordinator will contact you promptly.
              </p>

              {isSuccess ? (
                <div className="p-8 text-center bg-slate-900/90 rounded-2xl border border-emerald-500/40 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white font-display">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {formData.name}. We have received your inquiry for {formData.course}. Our counselor will call you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-xs border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-950/80 border border-red-500/40 rounded-xl text-red-300 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. SURYA"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#E50914]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#E50914]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. anish@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#E50914]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Interested Course</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#E50914]"
                      >
                        {COURSES.map(c => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message / Question</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="e.g. I want details regarding weekend batch timings and fees..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#E50914]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] text-white font-extrabold text-sm tracking-wider shadow-xl flex items-center justify-center space-x-2 glow-red"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FFD21F]" />
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
