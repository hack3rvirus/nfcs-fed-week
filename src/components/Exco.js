import React from 'react';
import ghibliImage from '../assets/ghibli4.jpeg';

// Sample data for executive members
const excoMembers = [
  {
    name: 'Eneh StellaMaris',
    position: 'President',
    imageUrl: ghibliImage,
  },
  {
    name: 'Okonkwo Christian',
    position: 'Vice President',
    imageUrl: ghibliImage,
  },
  {
    name: 'Okoh Margaret',
    position: 'General Secretary',
    imageUrl: ghibliImage,
  },
  {
    name: 'Chinwa',
    position: 'Financial Secretary',
    imageUrl: ghibliImage,
  },
  {
    name: 'Emeka Obi',
    position: 'PRO',
    imageUrl: ghibliImage,
  },
  {
    name: 'Adaeze Spunky',
    position: 'Director of Socials',
    imageUrl: ghibliImage,
  },
];

const Exco = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nfcs-dark">Meet the Executive Council</h2>
          <p className="text-lg text-gray-600 mt-2">The dedicated team serving our community.</p>
          <div className="w-24 h-1 bg-nfcs-red mx-auto mt-4"></div>
        </div>

        {/* EXCO Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {excoMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-nfcs-blue">{member.name}</h3>
              <p className="text-md text-nfcs-dark font-semibold">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exco;