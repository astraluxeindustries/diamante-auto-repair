import React from 'react';
import { Button } from './Button';
import { BUSINESS_INFO } from '../constants';
import { Phone } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-red text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Fix Your Car?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Don't wait until it's too late. Experience the Diamanté difference today with fair prices and premium service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="white"
            onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
            icon={<Phone size={18} />}
            className="text-brand-red hover:bg-gray-100"
          >
            Call {BUSINESS_INFO.phone}
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 hover:text-white hover:border-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Visit Our Shop
          </Button>
        </div>
      </div>
    </section>
  );
};