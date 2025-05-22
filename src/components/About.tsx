
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">About Green Cypress Acquisitions</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              Green Cypress Acquisitions is a search fund founded by experienced business operators and investors with a 
              passion for growing small to medium-sized businesses.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach centers on finding well-established businesses where we can apply our operational expertise 
              to accelerate growth while preserving the company's core values and culture.
            </p>
            <p className="text-gray-700">
              We're backed by a network of successful entrepreneurs and investors who provide strategic guidance 
              and industry expertise throughout the acquisition and growth process.
            </p>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-serif font-semibold mb-4 text-navy">Our Promise to Business Owners</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Preserve and build upon your company's legacy</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Provide fair valuation and flexible deal structures</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Ensure smooth transition for employees and customers</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Execute a professional and efficient acquisition process</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Focus on long-term growth rather than short-term gains</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
