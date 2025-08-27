import React, { useState, useEffect } from 'react';

const Hero = () => {
  // --- START: COUNTDOWN TIMER LOGIC ---
  const calculateTimeLeft = () => {
    // Set the target date: September 24, 2025
    const targetDate = new Date('2025-09-24T00:16:00');
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Set up a timer to update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return null;
    }
    return (
      <div key={interval} className="text-center bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg w-20 md:w-28">
        <div className="text-3xl md:text-5xl font-bold">{timeLeft[interval]}</div>
        <div className="text-xs md:text-sm uppercase tracking-wider opacity-80">{interval}</div>
      </div>
    );
  });
  // --- END: COUNTDOWN TIMER LOGIC ---


  return (
    <div className="relative bg-gradient-to-br from-nfcs-blue via-nfcs-purple to-nfcs-pink text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-nfcs-gold bg-opacity-20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-nfcs-red bg-opacity-20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge for first Federation Week */}
          <div className="inline-flex items-center bg-nfcs-gold text-nfcs-dark px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse-slow">
            <span className="mr-2">🎉</span>
            HISTORIC FIRST FEDERATION WEEK!
            <span className="ml-2">🎉</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
           Federation Week <span className="text-nfcs-gold">2025</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Be part of history! Our inaugural week of faith, fellowship, and celebration
          </p>

          {/* --- NEW: COUNTDOWN TIMER DISPLAY --- */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 my-10">
            {timerComponents.length ? timerComponents : <span className="text-2xl font-bold">The Week Is Here!</span>}
          </div>
          {/* --- END: COUNTDOWN TIMER DISPLAY --- */}


          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="btn-primary">
              📅 View Event Details
            </button>
            <button className="btn-secondary">
              🧺 Join a Picnic Group
            </button>
          </div>


          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
