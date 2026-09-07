import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Premium Grooming <br className="hidden md:block" />
          <span className="text-amber-400">For The Modern Gentleman</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
          Experience the art of traditional barbering with a modern twist at Elite Cuts.
          Where style meets expertise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#book-now" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition-all transform hover:scale-105 inline-flex items-center justify-center"
          >
            Book Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#services" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-6 rounded-md transition-all"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm mb-2">Scroll Down</p>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;