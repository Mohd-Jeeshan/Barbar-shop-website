import React from 'react';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of premium grooming services tailored to enhance your style and confidence.
            Our skilled barbers ensure precision and excellence with every visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Looking for a specialized service? We've got you covered with custom styling options.
          </p>
          <a 
            href="#book-now" 
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md transition-all"
          >
            Book Your Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;