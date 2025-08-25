import React from 'react';
import maryImage from '../assets/mary.png';
import frankImage from '../assets/mee.jpg';
import ghibliImage from '../assets/ghibli4.jpeg';

// Planning committee members with realistic photos
const committeeMembers = [
  {
    name: 'Nwachukwu Mary',
    position: 'Planning Committee Chair',
    imageUrl: maryImage,
  },
  {
    name: 'Elvis Nwoke',
    position: 'Logistics Coordinator',
    imageUrl: ghibliImage, // Using placeholder as specific image not available
  },
  {
    name: 'Frank Oge',
    position: 'Media Director',
    imageUrl: frankImage,
  },
  {
    name: 'Big Shaq',
    position: 'Publicity Officer',
    imageUrl: ghibliImage, // Using placeholder as specific image not available
  },
  {
    name: 'Adaeze',
    position: 'Welfare Coordinator',
    imageUrl: ghibliImage, // Using placeholder as specific image not available
  },
];

const PlanningCommittee = () => {
  return (
    <div className="bg-gradient-to-br from-nfcs-gray via-white to-nfcs-gray py-16 md:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nfcs-dark mb-4">
            Federation Week <span className="text-gradient">Planning Committee</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The brilliant minds and dedicated hearts making our historic first Federation Week possible!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-nfcs-blue to-nfcs-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-white rounded-2xl p-6 shadow-xl card-hover group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-nfcs-blue to-nfcs-purple rounded-full transform group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-300 border-4 border-white shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-bold text-nfcs-dark mb-2 group-hover:text-nfcs-blue transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-nfcs-purple font-semibold mb-4">{member.position}</p>
              
              <div className="flex justify-center space-x-4">
                <div className="w-2 h-2 bg-nfcs-blue rounded-full"></div>
                <div className="w-2 h-2 bg-nfcs-purple rounded-full"></div>
                <div className="w-2 h-2 bg-nfcs-pink rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want to join our amazing team or have questions about Federation Week?
          </p>
          <button className="btn-primary">
            📧 Contact the Committee
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanningCommittee;