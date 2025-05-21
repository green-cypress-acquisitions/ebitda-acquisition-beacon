
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InvestmentCriteria from '@/components/InvestmentCriteria';
import About from '@/components/About';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <InvestmentCriteria />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
