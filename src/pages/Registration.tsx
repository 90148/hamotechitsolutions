import React from 'react';
import { RegistrationModal } from '../components/RegistrationModal';
import { useNavigate } from 'react-router-dom';

export const Registration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden flex items-center justify-center">
      <RegistrationModal isOpen={true} onClose={() => navigate('/')} />
    </div>
  );
};
