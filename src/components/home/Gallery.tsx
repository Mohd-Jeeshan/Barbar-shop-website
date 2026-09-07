import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Modern Fade Haircut',
    category: 'Haircut'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Beard Trimming',
    category: 'Beard'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Classic Haircut',
    category: 'Haircut'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3993287/pexels-photo-3993287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Straight Razor Shave',
    category: 'Shave'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2801332/pexels-photo-2801332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Hair Styling',
    category: 'Styling'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/4969888/pexels-photo-4969888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Hot Towel Treatment',
    category: 'Treatment'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Style Gallery</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of haircuts and styles to find inspiration for your next visit.
            Our barbers excel in creating looks that match your personality and preferences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === category 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">{image.alt}</h3>
                <p className="text-sm text-gray-500">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
              >
                <X size={24} />
                <span className="sr-only">Close</span>
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-medium">{selectedImage.alt}</h3>
                <p>{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;