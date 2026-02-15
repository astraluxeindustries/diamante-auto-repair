import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2670&auto=format&fit=crop" 
          alt="Premium Mechanic Shop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-brand-dark/90 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex gap-1 text-brand-red">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-white font-medium tracking-wide">
              {BUSINESS_INFO.rating} Rating ({BUSINESS_INFO.reviewCount} Reviews)
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8"
          >
            Premium Care For <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
              Your Vehicle
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
          >
            Experience fair prices, flexible hours, and top-tier expertise in St. George. 
            We treat every car like it's our own.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                icon={<ChevronRight size={18} />}
            >
              Book Service
            </Button>
            <Button 
                variant="outline"
                onClick={() => window.open(BUSINESS_INFO.googleMapsUrl, '_blank')}
            >
              Get Directions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};