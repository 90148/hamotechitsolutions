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
import { HiringPartnersSection } from '../components/HiringPartnersSection';
import { PlacedStudentsSection } from '../components/PlacedStudentsSection';
import { CertificationSection } from '../components/CertificationSection';
import { HostelSection } from '../components/HostelSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
{/*import { QRCodeSection } from '../components/QRCodeSection';*/}
import { Sparkles } from 'lucide-react';

interface HomeProps {
  onOpenModal: (courseTitle?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
  return (
    <div className="space-y-0 pt-24">
      {/* Upcoming batch status ticker below the fixed navbar */}
      <AnnouncementBar onOpenModal={() => onOpenModal()} />

      {/* Hero */}
      <Hero onOpenModal={() => onOpenModal()} />

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

      {/* Top Tech MNCs & Startups Hiring Partners Marquee */}
      <HiringPartnersSection onOpenModal={() => onOpenModal()} />

      {/* Placed Students Hall of Fame / Student Success Stories */}
      <PlacedStudentsSection onOpenModal={() => onOpenModal()} />

      {/* Certification Section */}
      <CertificationSection onOpenModal={() => onOpenModal()} />

      {/* Hostel Facility Section */}
      <HostelSection onOpenModal={() => onOpenModal()} />

      {/* Student Testimonials */}
      <TestimonialSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Final Mid-Page CTA Section */}
      <section className="py-12 md:py-14 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 text-white text-center shadow-xl shadow-rose-900/10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white drop-shadow-sm">
            READY TO START YOUR IT CAREER?
          </h2>
          <p className="text-sm sm:text-base text-rose-50 max-w-2xl mx-auto font-medium">
            Join hundreds of successful students. Enroll in our upcoming live technology batch today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenModal()}
              className="px-8 py-3.5 rounded-xl bg-white text-rose-600 hover:text-rose-700 font-extrabold text-sm shadow-2xl inline-flex items-center space-x-2 hover:scale-105 transition-transform hover:bg-rose-50"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>ENROLL NOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* QR Code Section 
      <QRCodeSection onOpenModal={() => onOpenModal()} />*/}
    </div>
  );
};
