import React from 'react';
import { RegistrationModal } from '../components/RegistrationModal';
import { useNavigate } from 'react-router-dom';

export const Registration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-[#050816] min-h-screen">
      <RegistrationModal isOpen={true} onClose={() => navigate('/')} />
    </div>
  );
};
