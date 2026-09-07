export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  popular: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  image: string;
  rating: number;
}