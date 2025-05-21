
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="py-4 px-6 lg:px-10 flex justify-between items-center bg-white shadow-sm sticky top-0 z-10">
      <Logo />
      <div>
        <Button className="bg-green hover:bg-green-light text-white">
          <a href="#contact" className="text-white">Schedule Meeting</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
