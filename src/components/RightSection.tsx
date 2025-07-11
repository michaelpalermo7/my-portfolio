import React from 'react';
import selfie from '../assets/selfie.jpg';

const RightSection: React.FC = () => {
  return (
    <div className="flex-shrink-0 ml-6">
      <img
        src={selfie}
        alt="Michael Palermo"
        className="rounded-full object-cover mt-2 w-44 h-44"
      />
    </div>
  );
};

export default RightSection;