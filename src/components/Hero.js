import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const federationWeekDate = new Date('September 24, 2025 00:00:00');
      const currentTime = new Date();
      const difference = federationWeekDate - currentTime;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            Federation Week <span className="text-gradient">2025</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Be part of history! Our inaugural week of faith, fellowship, and celebration
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
            {[
              { value: timeLeft.days || 0, label: 'Days', color: 'bg-nfcs-blue' },
              { value: timeLeft.hours || 0, label: 'Hours', color: 'bg-nfcs-purple' },
              { value: timeLeft.minutes || 0, label: 'Minutes', color: 'bg-nfcs-pink' },
              { value: timeLeft.seconds || 0, label: 'Seconds', color: 'bg-nfcs-gold' }
            ].map((item, index) => (
              <div key={index} className={`${item.color} rounded-xl p-4 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
                <div className="text-sm opacity-90">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/events" className="btn-primary">
              📅 View Event Details
            </Link>
            <Link to="/picnic-groups" className="btn-secondary">
              🧺 Join a Picnic Group
            </Link>
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
