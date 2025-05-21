
import React from 'react';
import { Calendar } from 'lucide-react';

const CriteriaItem = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string 
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h3 className="text-xl font-serif font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const InvestmentCriteria = () => {
  return (
    <section id="criteria" className="py-16 px-6 lg:px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Investment Criteria</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're looking for established businesses with strong fundamentals and growth potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CriteriaItem 
            title="Financial Profile" 
            description="$500K - $1.5M in annual EBITDA with consistent cash flow and profitability."
          />
          <CriteriaItem 
            title="Industry Focus" 
            description="B2B services, manufacturing, distribution, and technology-enabled businesses."
          />
          <CriteriaItem 
            title="Business Maturity" 
            description="Established businesses with 5+ years of operating history and proven market position."
          />
          <CriteriaItem 
            title="Growth Potential" 
            description="Companies with clear opportunities for operational improvements and strategic growth."
          />
          <CriteriaItem 
            title="Management" 
            description="Strong existing team or clear path for management transition and development."
          />
          <CriteriaItem 
            title="Location" 
            description="Businesses located in North America with preference for metropolitan areas."
          />
        </div>
      </div>
    </section>
  );
};

export default InvestmentCriteria;
