import React, { useState, useEffect, useMemo } from 'react';

const PicnicPickerModal = ({ onClose, onGroupSelect }) => {
  const [name, setName] = useState('');
  const [step, setStep] = useState(1); // 1: Name input, 2: Box selection, 3: Result
  const [selectedBox, setSelectedBox] = useState(null);
  const [assignedGroup, setAssignedGroup] = useState(null);
  const [isRevealing, setIsRevealing] = useState(false);

  // Define the groups with their colors and emojis using useMemo to prevent re-creation on each render
  const groups = useMemo(() => [
    { name: 'Blue', color: 'bg-blue-500', textColor: 'text-white', emoji: '🔵' },
    { name: 'Pink', color: 'bg-pink-500', textColor: 'text-white', emoji: '💖' },
    { name: 'White', color: 'bg-gray-200', textColor: 'text-gray-800', emoji: '⚪' },
    { name: 'Red', color: 'bg-red-500', textColor: 'text-white', emoji: '🔴' }
  ], []);

  // Initialize shuffled groups in localStorage if not already done
  useEffect(() => {
    const shuffledGroups = localStorage.getItem('shuffledGroups');
    if (!shuffledGroups) {
      // Create an array with equal numbers of each group (for demo, 100 of each)
      let groupArray = [];
      groups.forEach(group => {
        // In a real implementation, you might want to adjust these numbers
        for (let i = 0; i < 100; i++) {
          groupArray.push(group.name);
        }
      });
      
      // Shuffle the array using Fisher-Yates algorithm
      for (let i = groupArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [groupArray[i], groupArray[j]] = [groupArray[j], groupArray[i]];
      }
      
      localStorage.setItem('shuffledGroups', JSON.stringify(groupArray));
      localStorage.setItem('currentGroupIndex', '0');
    }
  }, [groups]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setStep(2);
    }
  };

  const handleBoxSelect = (boxIndex) => {
    if (selectedBox !== null) return; // Prevent multiple selections
    
    setSelectedBox(boxIndex);
    setIsRevealing(true);
    
    console.log('Box selected:', boxIndex);
    
    // Get the next group from the shuffled list
    const shuffledGroups = JSON.parse(localStorage.getItem('shuffledGroups') || '[]');
    let currentGroupIndex = parseInt(localStorage.getItem('currentGroupIndex') || '0');
    
    console.log('Current group index:', currentGroupIndex);
    console.log('Available groups:', shuffledGroups.length);
    
    // If we've run out of groups, default to random assignment
    let groupName;
    if (currentGroupIndex < shuffledGroups.length) {
      groupName = shuffledGroups[currentGroupIndex];
      currentGroupIndex++;
      localStorage.setItem('currentGroupIndex', currentGroupIndex.toString());
      console.log('Assigned group from shuffled list:', groupName);
    } else {
      // Fallback to random assignment if we've exhausted our list
      const randomIndex = Math.floor(Math.random() * groups.length);
      groupName = groups[randomIndex].name;
      console.log('Falling back to random assignment, assigned group:', groupName);
    }
    
    // Find the group object
    const group = groups.find(g => g.name === groupName);
    
    if (!group) {
      console.error('Could not find group object for:', groupName);
      return;
    }
    
    setTimeout(() => {
      setAssignedGroup(group);
      setIsRevealing(false);
      
      // Save to localStorage
      localStorage.setItem('hasPickedGroup', 'true');
      localStorage.setItem('userGroup', group.name);
      localStorage.setItem('userName', name);
      
      console.log('User data saved to localStorage');
      
      // Send data to Google Forms
      sendToGoogleForms(name, group.name);
      
      setTimeout(() => {
        setStep(3); // Show result
      }, 1000);
    }, 1500);
  };

  // Function to send data to Google Forms
  const sendToGoogleForms = (userName, groupName) => {
    // Using your actual Google Form URL
    const nameFieldId = 'entry.1815392300';
    const groupFieldId = 'entry.381455523';
    
    // Create the URL with the form data
    const formUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZkRC4Hnc2o-ayCrlkDByaihhJdWrxEw1e2bDWDgNLQ5ojTA/formResponse?${nameFieldId}=${encodeURIComponent(userName)}&${groupFieldId}=${encodeURIComponent(groupName)}`;
    
    console.log('Sending data to Google Forms:', { userName, groupName });
    console.log('Full URL:', formUrl);
    
    // Create an image element to send the data (this bypasses CORS issues)
    const img = document.createElement('img');
    img.src = formUrl;
    img.style.display = 'none';
    document.body.appendChild(img);
    
    // Remove the image after a short delay
    setTimeout(() => {
      document.body.removeChild(img);
      console.log('Data sent to Google Forms successfully');
    }, 1000);
  };

  const handleClose = () => {
    if (assignedGroup) {
      onGroupSelect(assignedGroup);
    }
    onClose();
  };

  // Create boxes for selection
  const boxes = Array(4).fill(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full mx-4 transform transition-all duration-300">
        {step === 1 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-nfcs-dark mb-4">
              Welcome to Federation Week 2025! 🎉
            </h2>
            <p className="text-gray-600 text-center mb-6">
              This is our first Federation Week celebration! Enter your name to join a picnic group and be part of this historic event.
            </p>
            <form onSubmit={handleNameSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nfcs-blue focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-nfcs-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Continue to Pick Group
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-nfcs-dark mb-4">
              Choose Your Picnic Group! 🎨
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Select any box to reveal your group for the grand picnic celebration!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {boxes.map((_, index) => (
                <div
                  key={index}
                  className={`h-32 md:h-40 flex items-center justify-center rounded-xl cursor-pointer transform transition-all duration-300 ${
                    selectedBox === index 
                      ? (isRevealing ? 'scale-110 bg-gray-300' : 'scale-110 ring-4 ring-nfcs-blue') 
                      : 'bg-gray-800 hover:scale-105 hover:shadow-lg'
                  }`}
                  onClick={() => handleBoxSelect(index)}
                >
                  {selectedBox === index && isRevealing ? (
                    <div className="text-2xl animate-pulse">🎁</div>
                  ) : selectedBox === index && assignedGroup ? (
                    <div className="text-center">
                      <div className="text-3xl mb-2">{assignedGroup.emoji}</div>
                      <div className={`font-bold ${assignedGroup.textColor}`}>Group {assignedGroup.name}</div>
                    </div>
                  ) : (
                    <div className="text-4xl text-white">📦</div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center text-gray-600 text-sm">
              <p>Select any box - your group will be randomly assigned!</p>
            </div>
          </>
        )}

        {step === 3 && assignedGroup && (
          <div className="text-center py-8">
            <div className="inline-block p-6 rounded-full bg-gradient-to-r from-nfcs-blue to-nfcs-purple mb-6">
              <div className="text-5xl">{assignedGroup.emoji}</div>
            </div>
            <h2 className="text-3xl font-bold text-nfcs-dark mb-4">
              Congratulations, {name}!
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              You're in the <span className="font-bold">{assignedGroup.name.toUpperCase()}</span> GROUP!
            </p>
            <p className="text-gray-600 mb-8">
              Check the Picnic Groups page to see all members of your group.
            </p>
            <button
              onClick={handleClose}
              className="bg-nfcs-blue text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Continue to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PicnicPickerModal;