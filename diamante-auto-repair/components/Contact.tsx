import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';
import { BUSINESS_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-charcoal border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <SectionHeading align="left" subtitle="Get In Touch" title="Visit Our Shop" />
            <p className="text-gray-400 mb-10 text-lg">
              Ready to get back on the road? Stop by our shop in St. George or give us a call to schedule your service.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-dark border border-white/10 flex items-center justify-center text-brand-red shrink-0 rounded-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-400">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-dark border border-white/10 flex items-center justify-center text-brand-red shrink-0 rounded-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-400">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-dark border border-white/10 flex items-center justify-center text-brand-red shrink-0 rounded-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-400">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sun: Opens 10:00 AM</p>
                  <p className="text-gray-400">Sat: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
                <Button 
                    variant="white"
                    onClick={() => window.open(BUSINESS_INFO.googleMapsUrl, '_blank')}
                >
                    Open in Maps
                </Button>
            </div>
          </div>

          {/* Map Image / Placeholder */}
          <div className="relative h-full min-h-[400px] rounded-sm overflow-hidden border border-white/10 bg-brand-dark group">
             {/* Using a static map image placeholder but styling it nicely. 
                 In a real app, this would be a Google Maps Embed iframe. */}
             <iframe 
                width="100%" 
                height="100%" 
                style={{border:0, minHeight: '500px', filter: 'grayscale(100%) invert(90%)'}}
                loading="lazy" 
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.2837267156947!2d-113.5937!3d37.1086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca454545454545%3A0x4545454545454545!2s861%20Redrock%20Rd%2C%20St.%20George%2C%20UT%2084770!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
             ></iframe>
             
             {/* Overlay card */}
             <div className="absolute bottom-6 left-6 right-6 bg-brand-red p-6 text-white rounded-sm shadow-xl">
                <h4 className="font-bold text-lg mb-1">Diamanté Auto Repair</h4>
                <p className="text-white/90 text-sm">Top rated service in Washington County</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};