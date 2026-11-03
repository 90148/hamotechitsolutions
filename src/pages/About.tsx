import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CertificationSection } from '../components/CertificationSection';

interface AboutProps {
  onOpenModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenModal }) => {
  return (
    <div className="pt-20 sm:pt-24 space-y-0 min-h-screen">
      <AboutSection />
      <WhyChooseUs />
      <CertificationSection onOpenModal={onOpenModal} />
    </div>
  );
};
