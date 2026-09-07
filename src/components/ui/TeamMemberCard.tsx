import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group transition-all hover:shadow-xl">
      <div className="relative overflow-hidden h-72">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-center space-x-4">
              <a 
                href={member.social.instagram} 
                className="bg-white bg-opacity-20 hover:bg-opacity-50 text-white p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={member.social.facebook} 
                className="bg-white bg-opacity-20 hover:bg-opacity-50 text-white p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={member.social.twitter} 
                className="bg-white bg-opacity-20 hover:bg-opacity-50 text-white p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-amber-500 font-medium mb-3">{member.position}</p>
        <p className="text-gray-600">{member.description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;