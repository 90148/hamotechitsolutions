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
    { name: 'Internships', path: '/internships' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50914] via-[#0B1020] to-[#00BFFF] p-[1px] glow-red group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
                <img
                  src={logoImage}
                  alt="HamoTech logo"
                  className="w-full h-full rounded-[11px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white leading-none font-display">
                HAMOTECH
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#E50914] leading-tight font-display">
                IT SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#FFD21F] bg-slate-900/80 border border-[#FFD21F]/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
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
              href="tel:98841 66198"
              className="hidden lg:flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>98841 66198</span>
            </a>

            <button
              onClick={onOpenModal}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] hover:from-[#c40711] hover:to-[#a3050e] text-white font-bold text-xs tracking-wide shadow-lg glow-red hover:scale-105 transition-all duration-200 border border-red-500/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>ENROLL NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenModal}
              className="sm:hidden px-3.5 py-1.5 rounded-lg bg-[#E50914] text-white font-bold text-xs shadow"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
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
            className="xl:hidden bg-[#0B1020]/95 backdrop-blur-2xl border-b border-slate-800 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-sm font-semibold text-slate-200 hover:text-[#FFD21F] hover:border-[#E50914]/40"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
                <a
                  href="tel:9884166198"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-900 text-slate-200 font-semibold text-sm border border-slate-800"
                >
                  <Phone className="w-4 h-4 text-[#FFD21F]" />
                  <span>Call Us: +91 98841 66198</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E50914] to-[#c40711] text-white font-extrabold text-sm tracking-wider shadow-lg flex items-center justify-center space-x-2 glow-red"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD21F]" />
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
