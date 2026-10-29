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
import { AdminCandidates } from './pages/AdminCandidates';
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
    try {
      sessionStorage.setItem('hamotech_popup_dismissed_session', 'true');
    } catch {
      // Ignore storage errors
    }
  };

  // Automatic registration popup trigger logic
  // Trigger shortly after website opens and landing page renders (1.8s)
  useEffect(() => {
    // Clear any old legacy permanent blocker so users definitely see the popup
    try {
      localStorage.removeItem('hamotech_modal_dismissed_v1');
    } catch {
      // Ignore storage errors
    }

    const isDismissedInSession = sessionStorage.getItem('hamotech_popup_dismissed_session');
    if (isDismissedInSession) return;

    // Show registration popup notification 1.8s after landing page displays
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF1F2] via-[#FDF2F8] to-[#FFF7ED] text-slate-800 flex flex-col justify-between selection:bg-[#E11D48] selection:text-white">
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
          <Route path="/admin/candidates" element={<AdminCandidates />} />
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
