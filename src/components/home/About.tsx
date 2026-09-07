import React from 'react';
import { team } from '../../data/team';
import TeamMemberCard from '../ui/TeamMemberCard';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* About Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Elite Cuts</h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-gray-700 mb-6">
              Founded in 2010, Elite Cuts has been delivering exceptional grooming experiences to gentlemen who appreciate precision, style, and the traditional barbershop atmosphere with a modern twist.
            </p>
            <p className="text-gray-700 mb-6">
              Our master barbers combine old-school techniques with contemporary styles to create looks that enhance each client's unique features and personality. We believe that a great haircut is more than just a service—it's an experience that builds confidence.
            </p>
            <p className="text-gray-700 mb-6">
              At Elite Cuts, we use only premium products and tools to ensure the highest quality results. Our commitment to excellence, attention to detail, and passion for our craft sets us apart as the premier destination for men's grooming.
            </p>
            <div className="flex gap-4 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-500">15+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-500">6</p>
                <p className="text-gray-600">Expert Barbers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-500">10k+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barber Shop Interior" 
                className="rounded-lg shadow-xl w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Premium Experience</p>
                <p>Since 2010</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of barbers brings years of experience and a passion for their craft.
              Each specializes in different techniques to give you the perfect cut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;