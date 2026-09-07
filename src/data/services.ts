import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    name: 'Classic Haircut',
    description: 'Traditional haircut with clippers and scissors, includes hot towel and styling.',
    price: 35,
    duration: 30,
    image: 'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 2,
    name: 'Beard Trim & Shape',
    description: 'Professional beard grooming with precise outlining and hot towel treatment.',
    price: 25,
    duration: 20,
    image: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 3,
    name: 'Haircut & Beard Combo',
    description: 'Complete package with haircut, beard trim, and styling. Our most popular service.',
    price: 55,
    duration: 45,
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  },
  {
    id: 4,
    name: 'Premium Straight Razor Shave',
    description: 'Classic straight razor shave with hot towel, pre-shave oil, and aftershave treatment.',
    price: 40,
    duration: 35,
    image: 'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 5,
    name: 'Father & Son Package',
    description: 'Haircuts for both father and son. A great bonding experience.',
    price: 60,
    duration: 60,
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false
  },
  {
    id: 6,
    name: 'Executive Treatment',
    description: 'Premium haircut, beard grooming, facial treatment, and style consultation.',
    price: 80,
    duration: 75,
    image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true
  }
];