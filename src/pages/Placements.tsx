import React from 'react';
import { PlacementSection } from '../components/PlacementSection';
import { TestimonialSection } from '../components/TestimonialSection';

interface PlacementsProps {
  onOpenModal: () => void;
}

export const Placements: React.FC<PlacementsProps> = ({ onOpenModal }) => {
  return (
    <div className="pt-24 space-y-0">
      <PlacementSection onOpenModal={onOpenModal} />
      <TestimonialSection />
    </div>
  );
};
