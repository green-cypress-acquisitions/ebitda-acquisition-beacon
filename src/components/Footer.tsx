
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#about" className="text-gray-600 hover:text-navy">About</a>
            <a href="#criteria" className="text-gray-600 hover:text-navy">Criteria</a>
            <a href="#contact" className="text-gray-600 hover:text-navy">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Meridian Capital Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
