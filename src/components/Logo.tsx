
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="/lovable-uploads/527d9ed4-3d92-4a93-aad5-cf077b260ac4.png" 
        alt="Green Cypress Acquisitions Logo" 
        className="h-12 w-auto"
      />
      <div className="font-serif font-semibold text-green text-xl hidden sm:block">
        Green Cypress <span className="block">Acquisitions, LLC</span>
      </div>
    </div>
  );
};

export default Logo;
