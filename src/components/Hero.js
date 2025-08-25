import React from 'react';

const Hero = () => {
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

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="btn-primary">
              📅 View Event Details
            </button>
            <button className="btn-secondary">
              🧺 Join a Picnic Group
            </button>
          </div>

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
