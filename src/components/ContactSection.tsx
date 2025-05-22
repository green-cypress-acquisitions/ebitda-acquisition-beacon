
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 lg:px-10 bg-navy text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Let's Connect</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Are you considering selling your business or know someone who is? We'd love to have a confidential conversation.
          </p>
        </div>
        
        <div className="bg-white text-navy p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center">Schedule a Meeting</h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-gold hover:bg-gold-light text-navy w-full sm:w-auto flex items-center gap-2 py-6">
              <Calendar className="w-5 h-5" />
              <a 
                href="https://calendar.app.google/zyczRJS7tKMcBMjE9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg"
              >
                Book a Meeting
              </a>
            </Button>
            
            <p className="text-gray-600 text-center">or email us directly at</p>
            
            <a 
              href="mailto:john@greencypressacquisitions.com" 
              className="text-navy-light hover:text-navy-dark underline font-medium"
            >
              john@greencypressacquisitions.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
