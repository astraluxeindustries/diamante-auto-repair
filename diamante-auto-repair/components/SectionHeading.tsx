import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm block mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1 bg-brand-red mt-6 ${align === 'center' ? 'mx-auto' : ''}`} 
      />
    </div>
  );
};