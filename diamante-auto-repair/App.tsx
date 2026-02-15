import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CTA } from './components/CTA';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;