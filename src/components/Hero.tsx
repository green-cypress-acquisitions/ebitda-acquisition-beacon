
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-green to-green-light text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
          Finding Value. <br />
          Building Excellence.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Green Cypress Acquisitions is a search fund focused on acquiring and growing established businesses 
          with consistent profitability and strong growth potential.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-white text-green hover:bg-cream hover:text-green-dark text-lg px-8 py-6">
            <a href="#about">Learn More</a>
          </Button>
          <Button className="bg-cream text-green hover:bg-cream-dark text-lg px-8 py-6">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
