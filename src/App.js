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
    // Group data is now stored in localStorage via the modal component
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