import React, { useState } from 'react';

// Sample data for the picnic groups
const groups = [
  { name: 'Alpha', leader: 'John Doe', color: 'bg-red-500' },
  { name: 'Beta', leader: 'Jane Smith', color: 'bg-blue-500' },
  { name: 'Gamma', leader: 'Peter Jones', color: 'bg-green-500' },
  { name: 'Delta', leader: 'Mary Williams', color: 'bg-yellow-500' },
  { name: 'Epsilon', leader: 'David Brown', color: 'bg-purple-500' },
  { name: 'Zeta', leader: 'Susan Davis', color: 'bg-pink-500' },
];

const PicnicPicker = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div className="bg-nfcs-gray py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nfcs-dark">Choose Your Picnic Group</h2>
          <p className="text-lg text-gray-600 mt-2">Connect and celebrate with your chosen family for the week!</p>
          <div className="w-24 h-1 bg-nfcs-red mx-auto mt-4"></div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {groups.map((group) => (
            <div
              key={group.name}
              className={`p-6 rounded-lg shadow-lg text-white text-center cursor-pointer transform transition-transform duration-300 ${
                selectedGroup === group.name ? 'scale-105 ring-4 ring-nfcs-blue' : 'hover:scale-105'
              } ${group.color}`}
              onClick={() => setSelectedGroup(group.name)}
            >
              <h3 className="text-2xl font-bold mb-2">Group {group.name}</h3>
              <p className="font-semibold">Led by: {group.leader}</p>
            </div>
          ))}
        </div>

        {/* Selection Display & Action Button */}
        <div className="text-center">
          {selectedGroup ? (
            <>
              <p className="text-xl font-semibold text-nfcs-dark mb-4">
                You have selected <span className="text-nfcs-red font-bold">Group {selectedGroup}</span>!
              </p>
              <button className="bg-nfcs-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Confirm Your Spot
              </button>
            </>
          ) : (
            <p className="text-xl font-semibold text-gray-500">
              Click on a group card to make your selection.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PicnicPicker;