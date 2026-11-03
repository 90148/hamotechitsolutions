import React from 'react';
import { InternshipSection } from '../components/InternshipSection';
import { ProjectsSection } from '../components/ProjectsSection';

interface InternshipsProps {
  onOpenModal: () => void;
}

export const Internships: React.FC<InternshipsProps> = ({ onOpenModal }) => {
  return (
    <div className="pt-20 sm:pt-24 space-y-0 min-h-screen">
      <InternshipSection onOpenModal={onOpenModal} />
      <ProjectsSection onOpenModal={onOpenModal} />
    </div>
  );
};
