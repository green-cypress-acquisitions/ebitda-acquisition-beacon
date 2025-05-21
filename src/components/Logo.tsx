
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center">
        <span className="text-white font-serif text-2xl font-bold">M</span>
      </div>
      <div className="font-serif font-semibold text-navy text-xl">
        Meridian<span className="text-gold">Capital</span>
      </div>
    </div>
  );
};

export default Logo;
