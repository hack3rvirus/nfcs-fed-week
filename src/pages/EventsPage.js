import React from 'react';

const EventsPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-nfcs-dark mb-12">Our Events</h1>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nfcs-blue mb-6">Upcoming Events</h2>
          <div className="bg-nfcs-gray p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-nfcs-red">Federation Week 2025</h3>
            <p className="text-lg text-gray-700 mt-2">September 24th - 28th, 2025</p>
            <p className="mt-4">
              Join us for our biggest event of the year! A full week of spiritual growth, community engagement, fun, and fellowship. See the full schedule on our homepage.
            </p>
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-nfcs-blue mb-6">Past Events Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Charity Visit 2024" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-nfcs-dark">Charity Visit 2024</h3>
                <p className="text-gray-600 text-sm mt-2">A wonderful day spent with children at the local orphanage.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Fresher's Welcome 2024" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-nfcs-dark">Fresher's Welcome 2024</h3>
                <p className="text-gray-600 text-sm mt-2">Welcoming new members into our Catholic community.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Retreat 2024" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-nfcs-dark">Spiritual Retreat 2024</h3>
                <p className="text-gray-600 text-sm mt-2">A weekend of prayer, reflection, and spiritual growth.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Seminar 2024" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-nfcs-dark">Leadership Seminar 2024</h3>
                <p className="text-gray-600 text-sm mt-2">Developing leadership skills among our members.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Sports Day 2024" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-nfcs-dark">Sports Day 2024</h3>
                <p className="text-gray-600 text-sm mt-2">Friendly competition and team building activities.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Concert 2024" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-nfcs-dark">Gospel Concert 2024</h3>
                <p className="text-gray-600 text-sm mt-2">An evening of praise, worship, and musical celebration.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;