import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date('2025-09-24T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
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
            <span className="mr-2">🎉</span> HISTORIC FIRST FEDERATION WEEK! <span className="ml-2">🎉</span>
          </div>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"> Federation Week <span className="text-nfcs-gold">2025</span> </h1>
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">{seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90"> Be part of history! Our inaugural week of faith, fellowship, and celebration </p>
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="btn-primary"> 📅 View Event Details </button>
            <button className="btn-secondary"> 🧺 Join
