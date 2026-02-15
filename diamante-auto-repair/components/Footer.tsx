import React from 'react';
import { Car, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white">
                <Car size={18} strokeWidth={2} />
              </div>
              <span className="text-xl font-extrabold uppercase tracking-tight">Diamanté</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Providing premium, reliable, and honest auto repair services to the St. George community. Your safety is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-charcoal flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-charcoal flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-500 hover:text-brand-red transition-colors text-sm uppercase tracking-wider">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Engine Diagnostics</li>
              <li>Brake Repair</li>
              <li>Suspension & Steering</li>
              <li>Oil Changes</li>
              <li>Electrical Systems</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Address</span>
                {BUSINESS_INFO.address}
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Phone</span>
                {BUSINESS_INFO.phone}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Diamanté Auto Repair. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};