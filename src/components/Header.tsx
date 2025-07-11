import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6  max-w-6xl mx-auto w-full">
      {/* Logo on left */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-20 w-auto cursor-pointer" />
      </div>

      {/* Menu icon on right */}
      <div className="flex-shrink-0">
        <span className="text-3xl cursor-pointer">☰</span> {/* Placeholder menu icon */}
      </div>
    </header>
  );
};

export default Header;