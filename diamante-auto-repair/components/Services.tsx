import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-charcoal relative">
        {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray/10 skew-x-12 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading subtitle="What We Do" title="Professional Auto Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-brand-gray p-8 rounded-sm border border-white/5 hover:border-brand-red/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-brand-dark rounded-sm flex items-center justify-center mb-6 border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};