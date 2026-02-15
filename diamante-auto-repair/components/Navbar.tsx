import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO, NAVIGATION } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-red rounded-sm flex items-center justify-center text-white transform group-hover:rotate-3 transition-transform">
              <Car size={24} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white uppercase leading-none">Diamanté</span>
              <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase leading-none mt-1">Auto Repair</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
              className="flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-sm font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              <Phone size={16} className="text-brand-red fill-current" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white border-b border-white/10 pb-4"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
                className="mt-4 bg-brand-red text-white py-4 text-center rounded-sm font-bold uppercase tracking-wide"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};