import React, { useState, useEffect, useMemo } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

const PicnicGroupsPage = () => {
  const [groupData, setGroupData] = useState({});
  const [activeTab, setActiveTab] = useState('Blue');

  // Group information
  const groups = useMemo(() => [
    { name: 'Blue', color: 'bg-blue-500', textColor: 'text-white', emoji: '🔵' },
    { name: 'Pink', color: 'bg-pink-500', textColor: 'text-white', emoji: '💖' },
    { name: 'White', color: 'bg-gray-200', textColor: 'text-gray-800', emoji: '⚪' },
    { name: 'Red', color: 'bg-red-500', textColor: 'text-white', emoji: '🔴' }
  ], []);

  // Load group data from Firebase
  useEffect(() => {
    const loadGroupData = () => {
      try {
        // Listen for changes in each group
        groups.forEach(group => {
          const groupRef = ref(database, 'picnicGroups/' + group.name);
          onValue(groupRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              // Convert Firebase object to array
              const membersArray = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
              }));
              setGroupData(prevData => ({
                ...prevData,
                [group.name]: membersArray
              }));
            } else {
              setGroupData(prevData => ({
                ...prevData,
                [group.name]: []
              }));
            }
          });
        });
      } catch (error) {
        console.error('Error loading group data from Firebase:', error);
        // Fallback to localStorage if Firebase fails
        const localData = JSON.parse(localStorage.getItem('picnicGroups') || '{}');
        setGroupData(localData);
      }
    };

    loadGroupData();
  }, [groups]);

  // Calculate total members
  const totalMembers = Object.values(groupData).reduce((total, group) => total + (group ? group.length : 0), 0);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-nfcs-dark mb-4">Picnic Group Members</h1>
        <p className="text-center text-gray-600 mb-8">The list is updated live as members join their groups.</p>
        
        {/* Stats Overview */}
        <div className="bg-nfcs-gray p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold text-nfcs-red mb-4">Group Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {groups.map(group => (
              <div key={group.name} className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-2xl mb-2">{group.emoji}</div>
                <div className={`font-bold ${group.color} ${group.textColor} rounded-full py-1 mb-2`}>
                  {group.name}
                </div>
                <div className="text-2xl font-bold text-nfcs-dark">
                  {groupData[group.name] ? groupData[group.name].length : 0}
                </div>
                <div className="text-gray-600 text-sm">Members</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">Total Registered Members: <span className="text-nfcs-blue">{totalMembers}</span></p>
          </div>
        </div>

        {/* Group Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {groups.map(group => (
              <button
                key={group.name}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === group.name
                    ? `${group.color} ${group.textColor} shadow-lg transform scale-105`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(group.name)}
              >
                {group.emoji} Group {group.name}
              </button>
            ))}
          </div>
        </div>

        {/* Group Members List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className={`px-6 py-4 ${groups.find(g => g.name === activeTab)?.color} ${groups.find(g => g.name === activeTab)?.textColor}`}>
            <h2 className="text-2xl font-bold">
              {groups.find(g => g.name === activeTab)?.emoji} Group {activeTab} Members
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {groupData[activeTab] && groupData[activeTab].length > 0 ? (
                  groupData[activeTab].map((member, index) => (
                    <tr key={member.id || index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {member.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(member.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                      No members in this group yet. Be the first to join!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Church Location Map */}
        <div className="bg-nfcs-gray p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-nfcs-dark mb-4 text-center">📍 Our Location</h2>
          <p className="text-center text-gray-700 mb-6">
            Our Mother of Perpetual Help Chaplaincy, AEFUTHA 1 Abakaliki<br />
            Ebonyi State, Nigeria
          </p>
          
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            {/* Updated with correct Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.4708542180056!2d8.1110815!3d6.3329937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105ca1803b3dc679%3A0x6f113b9eeba871af!2sSt%20padro%20pio%20parish%20FETHA%20Abakaliki!5e0!3m2!1sen!2sng!4v1756044547316!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="St Padro Pio Parish FETHA Abakaliki Location"
            ></iframe>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              <strong>Need directions?</strong> Use the map above or contact us for detailed directions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicnicGroupsPage;