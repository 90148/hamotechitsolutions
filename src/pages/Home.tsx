import React from 'react';
import { Hero } from '../components/Hero';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { AboutSection } from '../components/AboutSection';
import { CourseSection } from '../components/CourseSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { LearningProcess } from '../components/LearningProcess';
import { ProjectsSection } from '../components/ProjectsSection';
import { InternshipSection } from '../components/InternshipSection';
import { PlacementSection } from '../components/PlacementSection';
import { CertificationSection } from '../components/CertificationSection';
import { HostelSection } from '../components/HostelSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { QRCodeSection } from '../components/QRCodeSection';
import { Sparkles } from 'lucide-react';

interface HomeProps {
  onOpenModal: (courseTitle?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <Hero onOpenModal={() => onOpenModal()} />

      {/* Ticker Announcement */}
      <AnnouncementBar onOpenModal={() => onOpenModal()} />

      {/* About Section */}
      <AboutSection />

      {/* Course Showcase */}
      <CourseSection onOpenModal={onOpenModal} />

      {/* Why Choose HamoTech */}
      <WhyChooseUs />

      {/* 6-Step Learning Journey */}
      <LearningProcess />

      {/* Real-Time Projects */}
      <ProjectsSection onOpenModal={() => onOpenModal()} />

      {/* Internship Section */}
      <InternshipSection onOpenModal={() => onOpenModal()} />

      {/* Placement Preparation */}
      <PlacementSection onOpenModal={() => onOpenModal()} />

      {/* Certification Section */}
      <CertificationSection onOpenModal={() => onOpenModal()} />

      {/* Hostel Facility Section */}
      <HostelSection onOpenModal={() => onOpenModal()} />

      {/* Student Testimonials */}
      <TestimonialSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Final Mid-Page CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#E50914] via-[#0B1020] to-[#050816] text-white text-center border-t border-red-500/30">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black font-display">
            READY TO START YOUR IT CAREER?
          </h2>
          <p className="text-sm text-slate-300">
            Join hundreds of successful students. Enroll in our upcoming live technology batch today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenModal()}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FFD21F] to-[#E50914] text-[#050816] font-extrabold text-sm shadow-xl inline-flex items-center space-x-2 hover:scale-105 transition-transform"
            >
              <Sparkles className="w-4 h-4" />
              <span>ENROLL NOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* QR Code Section */}
      <QRCodeSection onOpenModal={() => onOpenModal()} />
    </div>
  );
};
