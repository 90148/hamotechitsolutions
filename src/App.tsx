import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FloatingButtons } from './components/FloatingButtons';
import { RegistrationModal } from './components/RegistrationModal';

import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { About } from './pages/About';
import { Placements } from './pages/Placements';
import { Internships } from './pages/Internships';
import { Contact } from './pages/Contact';
import { Registration } from './pages/Registration';
import { NotFound } from './pages/NotFound';

// Helper component to reset scroll position on route changes
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string | undefined>();

  const openModal = (courseTitle?: string) => {
    setSelectedCourseTitle(courseTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Set localStorage flag so auto-trigger does not repeatedly annoy the user in the same session
    try {
      localStorage.setItem('hamotech_modal_dismissed_v1', 'true');
    } catch {
      // Ignore storage errors
    }
  };

  // Controlled automatic popup trigger logic
  useEffect(() => {
    const isDismissed = localStorage.getItem('hamotech_modal_dismissed_v1');
    if (isDismissed) return;

    // 1. Time-based trigger after 18 seconds
    const timer = setTimeout(() => {
      if (!isModalOpen && !localStorage.getItem('hamotech_modal_dismissed_v1')) {
        setIsModalOpen(true);
      }
    }, 18000);

    // 2. Scroll-based trigger (50-60% of page)
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && window.scrollY / docHeight > 0.55) {
        if (!isModalOpen && !localStorage.getItem('hamotech_modal_dismissed_v1')) {
          setIsModalOpen(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col justify-between selection:bg-[#E50914] selection:text-white">
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow />
      <LoadingScreen />

      <Navbar onOpenModal={() => openModal()} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/courses" element={<Courses onOpenModal={openModal} />} />
          <Route path="/courses/:id" element={<CourseDetails onOpenModal={openModal} />} />
          <Route path="/about" element={<About onOpenModal={() => openModal()} />} />
          <Route path="/placements" element={<Placements onOpenModal={() => openModal()} />} />
          <Route path="/internships" element={<Internships onOpenModal={() => openModal()} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Action Elements */}
      <WhatsAppButton />
      <FloatingButtons onOpenModal={() => openModal()} />

      {/* Lead Generation Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        defaultCourseId={selectedCourseTitle}
      />
    </div>
  );
};

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
