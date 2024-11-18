import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Detection from './components/Detection';
import CleaningProcess from './components/CleaningProcess';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Detection />
      <CleaningProcess />
      <FAQ />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <CookieBanner />
    </div>
  );
}

export default App;