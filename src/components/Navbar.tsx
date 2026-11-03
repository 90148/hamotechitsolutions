import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/hamo logo.png';
import { AnimatedButton } from './ui/animated-button';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to hero section on clicking brand logo
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Handle section links like /#why-us or /#placed-students
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMobileMenuOpen(false);
  };

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
          {/* Logo with Liquid Red Text & Scroll-to-Hero Handler */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
            title="Return to Home Page Hero Section"
          >
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
              <span className="text-lg sm:text-xl font-black tracking-wider leading-none font-display liquid-text-red">
                HAMOTECH
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold leading-tight font-display liquid-subtext-red">
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
                  onClick={(e) => handleNavClick(e, link.path)}
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

            <AnimatedButton
              onClick={onOpenModal}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white font-bold text-xs tracking-wide shadow-lg shadow-rose-500/25 hover:scale-105 transition-all duration-200 border border-rose-300/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>ENROLL NOW</span>
            </AnimatedButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 xl:hidden">
            <button
              onClick={onOpenModal}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white font-bold text-xs shadow-md shadow-rose-500/20 active:scale-95 transition-transform"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 sm:p-2 rounded-xl bg-white text-slate-700 hover:text-slate-900 border border-rose-200 shadow-sm active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
            className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-rose-200/90 overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-3">
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => {
                      if (link.path === '/') {
                        handleLogoClick(e);
                      } else {
                        handleNavClick(e, link.path);
                      }
                    }}
                    className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-rose-50/70 border border-rose-100 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E11D48] hover:bg-rose-100/70 active:bg-rose-100 transition-colors"
                  >
                    <span className="truncate">{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0 ml-1" />
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-rose-100 flex flex-col space-y-2.5">
                <a
                  href="tel:9884166198"
                  className="flex items-center justify-center space-x-2 py-2.5 sm:py-3 rounded-xl bg-rose-50/80 text-slate-800 font-bold text-xs sm:text-sm border border-rose-200 hover:bg-rose-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E11D48]" />
                  <span>Call Us: +91 98841 66198</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white font-extrabold text-xs sm:text-sm tracking-wider shadow-lg shadow-rose-500/25 flex items-center justify-center space-x-2 active:scale-98 transition-transform"
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
