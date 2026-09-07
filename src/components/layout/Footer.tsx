import React from 'react';
import { Scissors, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="h-6 w-6 text-amber-500" />
              <span className="ml-2 text-xl font-bold">ELITE CUTS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium grooming services for the modern gentleman since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Gallery', 'Testimonials', 'Book Appointment'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-amber-500" />
                <span>Monday - Friday: 9am - 8pm</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-amber-500" />
                <span>Saturday: 10am - 6pm</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-amber-500" />
                <span>Sunday: 10am - 4pm</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-amber-500 mt-0.5" />
                <span>123 Barber Street, Styleville, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-500" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Elite Cuts Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;