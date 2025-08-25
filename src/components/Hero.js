import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the target date - Wednesday, September 24th, 2025
    const targetDate = new Date('September 24, 2025 00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // Calculate initial time left
    setTimeLeft(calculateTimeLeft());

    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-nfcs-blue to-nfcs-purple text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Federation Week <span className="text-nfcs-gold">2025</span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light">
            Celebrating Unity in Diversity
          </p>
          <p className="text-lg md:text-xl mb-10 font-light">
            June 15-22, 2025 • Our Mother of Perpetual Help Chaplaincy, AEFUTHA 1, Abakaliki
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-10">
            <h3 className="text-xl font-bold mb-4">Event Starts In</h3>
            <div className="flex justify-center space-x-2 md:space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-nfcs-gold rounded-lg flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-nfcs-dark">{timeLeft.days}</span>
                </div>
                <span className="mt-2 text-sm md:text-base">Days</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-nfcs-gold rounded-lg flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-nfcs-dark">{timeLeft.hours}</span>
                </div>
                <span className="mt-2 text-sm md:text-base">Hours</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-nfcs-gold rounded-lg flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-nfcs-dark">{timeLeft.minutes}</span>
                </div>
                <span className="mt-2 text-sm md:text-base">Minutes</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-nfcs-gold rounded-lg flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-nfcs-dark">{timeLeft.seconds}</span>
                </div>
                <span className="mt-2 text-sm md:text-base">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
