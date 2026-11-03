import React from 'react';
import { PlacementHero } from '../components/PlacementHero';
import { PlacementSection } from '../components/PlacementSection';
import { HiringPartnersSection } from '../components/HiringPartnersSection';
import { PlacedStudentsSection } from '../components/PlacedStudentsSection';
import { TestimonialSection } from '../components/TestimonialSection';

interface PlacementsProps {
  onOpenModal: () => void;
}

export const Placements: React.FC<PlacementsProps> = ({ onOpenModal }) => {
  return (
    <div className="pt-8 sm:pt-14 space-y-0 min-h-screen">
      {/* Placement Page Hero Section with Featured Corporate Recruitment Drive Image */}
      <PlacementHero onOpenModal={onOpenModal} />
      
      {/* 6-Stage Career Transformation Path */}
      <PlacementSection onOpenModal={onOpenModal} />
      
      {/* 1200+ Tech MNCs & Startup Hiring Partners Marquee */}
      <HiringPartnersSection onOpenModal={onOpenModal} />
      
      {/* Placed Students Hall of Fame with Packages & Roles */}
      <PlacedStudentsSection onOpenModal={onOpenModal} />
      
      {/* Student Reviews & Testimonials */}
      <TestimonialSection />
    </div>
  );
};
