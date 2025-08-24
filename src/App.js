import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PicnicPickerModal from './components/PicnicPickerModal';

// Import Page Components
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import PicnicGroupsPage from './pages/PicnicGroupsPage';

// Helper function to send data to Google Sheets
// You'll need to implement this according to your specific Google Sheets integration method
const sendToGoogleSheets = async (userData) => {
  try {
    // Example implementation using a Google Apps Script web app URL
    // Replace with your actual Google Apps Script web app URL
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
    
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${encodeURIComponent(userData.name)}&group=${encodeURIComponent(userData.group)}`
    });
    
    if (response.ok) {
      console.log('Data successfully sent to Google Sheets');
    } else {
      console.error('Failed to send data to Google Sheets');
    }
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
  }
};

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already picked a group
    const hasPickedGroup = localStorage.getItem('hasPickedGroup');
    if (!hasPickedGroup) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleGroupSelect = (group) => {
    console.log(`User selected group: ${group.name}`);
    // Send data to Google Sheets
    const userName = localStorage.getItem('userName');
    if (userName) {
      sendToGoogleSheets({ 
        name: userName, 
        group: group.name 
      });
    }
  };

  return (
    <Router>
      <div className="bg-gradient-to-br from-nfcs-gray via-white to-nfcs-gray min-h-screen">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/picnic-groups" element={<PicnicGroupsPage />} />
          </Routes>
        </main>
        <Footer />

        {showModal && (
          <PicnicPickerModal
            onClose={() => setShowModal(false)}
            onGroupSelect={handleGroupSelect}
          />
        )}
      </div>
    </Router>
  );
}

export default App;