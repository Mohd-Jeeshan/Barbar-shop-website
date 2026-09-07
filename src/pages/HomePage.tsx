import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import Booking from '../components/home/Booking';
import Contact from '../components/home/Contact';

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
    </div>
  );
};

export default HomePage;