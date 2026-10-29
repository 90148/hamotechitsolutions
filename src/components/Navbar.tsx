import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/hamo logo.png';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Placements', path: '/placements' },
    { name: 'Success Stories', path: '/#placed-students' },
    { name: 'Internships', path: '/internships' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-white/60 backdrop-blur-md py-4 border-b border-rose-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E11D48] via-[#F43F5E] to-[#F59E0B] p-[1.5px] shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-0.5">
                <img
                  src={logoImage}
                  alt="HamoTech logo"
                  className="w-full h-full rounded-[9px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-slate-900 leading-none font-display">
                HAMOTECH
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#E11D48] leading-tight font-display">
                IT SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#E11D48] bg-rose-50 border border-rose-200 shadow-sm'
                      : 'text-slate-600 hover:text-[#E11D48] hover:bg-rose-50/70'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:9884166198"
              className="hidden lg:flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-rose-50/80 border border-rose-200/80 hover:border-rose-300 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>98841 66198</span>
            </a>

            <button
              onClick={onOpenModal}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white font-bold text-xs tracking-wide shadow-lg shadow-rose-500/25 hover:scale-105 transition-all duration-200 border border-rose-300/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>ENROLL NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenModal}
              className="sm:hidden px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white font-bold text-xs shadow-md shadow-rose-500/20"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-white text-slate-700 hover:text-slate-900 border border-rose-200 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-2xl border-b border-rose-100 overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-rose-50/60 border border-rose-100 text-sm font-semibold text-slate-700 hover:text-[#E11D48] hover:bg-rose-100/60"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-rose-100 flex flex-col space-y-3">
                <a
                  href="tel:9884166198"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-rose-50/80 text-slate-700 font-semibold text-sm border border-rose-200"
                >
                  <Phone className="w-4 h-4 text-[#E11D48]" />
                  <span>Call Us: +91 98841 66198</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white font-extrabold text-sm tracking-wider shadow-lg shadow-rose-500/25 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>ENROLL NOW</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
