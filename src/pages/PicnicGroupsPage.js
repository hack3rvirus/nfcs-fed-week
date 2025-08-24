import React from 'react';

const PicnicGroupsPage = () => {
  // IMPORTANT: Replace this URL with the one you get from Google Sheets
  const googleSheetEmbedUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYTRcUK65g0vrlLDOi27TSi5ApSV9u7kCdMl13J7_YO7WRrxt1Lbs1d7-_HzDfAZjhEJ6KEsgSeQ_d/pubhtml?widget=true&amp;headers=false";

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-nfcs-dark mb-4">Picnic Group Members</h1>
        <p className="text-center text-gray-600 mb-8">The list is updated live as members join their groups.</p>
        
        <div className="bg-nfcs-gray p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold text-nfcs-red mb-4">Picnic Groups</h2>
          <p className="mb-4">All members who have selected their groups are listed below. The list updates automatically as new members join.</p>
          <p>Group colors: 🔵 Blue | 💖 Pink | ⚪ White | 🔴 Red</p>
        </div>

        <div className="mt-8 border-4 border-nfcs-blue rounded-lg overflow-hidden">
          <iframe
            src={googleSheetEmbedUrl}
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            title="Picnic Group List"
          >
            Loading group list...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default PicnicGroupsPage;