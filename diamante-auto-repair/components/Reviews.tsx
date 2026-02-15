import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { REVIEWS } from '../constants';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Testimonials" title="Trusted by St. George" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-charcoal p-8 md:p-10 rounded-sm relative"
            >
              <Quote size={48} className="text-brand-gray/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6 text-brand-red">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.author}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Verified Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};