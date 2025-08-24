import React from 'react';

// Federation Week 2025 Schedule
const eventData = [
  {
    day: 'Day 1',
    date: 'Sept 24, 2025',
    title: 'Praise & Worship',
    description: 'Join us for an uplifting session of praise and worship to kickstart the Federation Week celebrations.',
    icon: '🎵'
  },
  {
    day: 'Day 2',
    date: 'Sept 25, 2025',
    title: 'Singles Talk',
    description: 'An insightful discussion on relationships and faith for our single members.',
    icon: '💬'
  },
  {
    day: 'Day 3',
    date: 'Sept 26, 2025',
    title: 'Orphanage Visitation',
    description: 'A day of charity and community service at the local orphanage.',
    icon: '🏠'
  },
  {
    day: 'Day 4',
    date: 'Sept 27, 2025',
    title: 'Picnic Day',
    description: 'Fun, food, and fellowship at our grand picnic celebration.',
    icon: '🧺'
  },
  {
    day: 'Day 5',
    date: 'Sept 28, 2025',
    title: 'Thanksgiving Sunday',
    description: 'Closing mass and thanksgiving service to conclude the Federation Week.',
    icon: '🙏'
  },
];

const Schedule = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nfcs-dark">Federation Week Schedule</h2>
          <p className="text-lg text-gray-600 mt-2">A week of faith, fun, and fellowship.</p>
          <div className="w-24 h-1 bg-nfcs-red mx-auto mt-4"></div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event) => (
            <div key={event.title} className="bg-nfcs-gray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-baseline">
                  <span className="bg-nfcs-red text-white text-sm font-bold px-3 py-1 rounded-full">{event.day}</span>
                  <p className="ml-3 text-gray-500 font-medium">{event.date}</p>
                </div>
                <span className="text-2xl">{event.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-nfcs-blue mb-2">{event.title}</h3>
              <p className="text-nfcs-dark">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;