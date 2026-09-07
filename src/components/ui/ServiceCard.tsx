import React from 'react';
import { Clock } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {service.popular && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{service.name}</h3>
          <p className="text-lg font-bold text-amber-500">${service.price}</p>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{service.duration} min</span>
          </div>
          <a 
            href="#book-now" 
            className="text-amber-500 font-medium hover:text-amber-600 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;