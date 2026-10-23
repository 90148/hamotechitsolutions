import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, MessageSquare } from 'lucide-react';
import logoImage from '../assets/hamo logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg- gradient-to-b from-[#FFF1F2] to-white border-t border-rose-200/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-rose-200/70">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E11D48] via-[#F43F5E] to-[#F59E0B] p-[1.5px] shadow-md shadow-rose-500/20">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-0.5">
                  <img
                    src={logoImage}
                    alt="HamoTech logo"
                    className="w-full h-full rounded-[9px] object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-slate-900 leading-none font-display">
                  HAMOTECH
                </span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#E11D48] leading-tight font-display">
                  IT SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-xs tracking-[0.2em] font-semibold text-[#BE123C] uppercase">
              TRAIN • LEARN • GROW • SUCCEED
            </p>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              World-Class IT Training &amp; Placement Guidance to Build Your Successful Career in IT. Transform your career with practical hands-on projects and industry mentors.
            </p>

            {/* Social Media Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/919884166198"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white border border-rose-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white border border-rose-200 text-slate-600 hover:text-[#0284C7] hover:border-sky-300 hover:bg-sky-50 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <span className="font-bold text-xs font-mono">in</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white border border-rose-200 text-slate-600 hover:text-[#E11D48] hover:border-rose-300 hover:bg-rose-50 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <span className="font-bold text-xs font-mono">ig</span>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white border border-rose-200 text-slate-600 hover:text-red-600 hover:border-red-300 hover:bg-red-50 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <span className="font-bold text-xs font-mono">yt</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Industry Courses', path: '/courses' },
                { name: 'Internship Program', path: '/internships' },
                { name: 'Placement Support', path: '/placements' },
                { name: 'Contact Us', path: '/contact' }
              ].map(l => (
                <li key={l.name}>
                  <Link to={l.path} className="hover:text-[#E11D48] transition-colors flex items-center space-x-1">
                    <span>{l.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Featured Programs
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {[
                { name: 'Full Stack Java', path: '/courses/full-stack-java' },
                { name: 'Full Stack Python', path: '/courses/full-stack-python' },
                { name: 'Python with AI / ML', path: '/courses/python-ai-ml' },
                { name: 'Cloud & DevOps', path: '/courses/cloud-devops' },
                { name: 'Flutter Mobile App', path: '/courses/mobile-app-development' },
                { name: 'Data Analytics & Power BI', path: '/courses/data-analytics-power-bi' }
              ].map(c => (
                <li key={c.name}>
                  <Link to={c.path} className="hover:text-[#E11D48] transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <span>3rd Street, Guduvancheri, Bajankovil, Chennai – 603 202</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href="tel:9884166198" className="hover:text-[#E11D48] transition-colors">
                  +91 98841 66198
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                <a href="mailto:hamotechitsolutions@gmail.com" className="hover:text-[#E11D48] transition-colors">
                  hamotechitsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="http://www.hamotechitsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E11D48] transition-colors">
                  www.hamotechitsolutions.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} HamoTech IT Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/#faq" className="hover:text-[#E11D48] transition-colors">FAQs</Link>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#E11D48] cursor-pointer">Privacy Policy</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#E11D48] cursor-pointer">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
