import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import NfcsLogo from '../assets/nfcs-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Events", path: "/events", icon: "📅" },
    { name: "About Us", path: "/about", icon: "👥" },
    { name: "Picnic Groups", path: "/picnic-groups", icon: "🧺" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img 
              src={NfcsLogo} 
              alt="NFCS Logo" 
              className="h-14 w-auto transform group-hover:scale-110 transition-transform duration-300" 
            />
            <span className="ml-3 text-xl font-bold text-gradient hidden sm:block">
              NFCS AeFutha 1
            </span>
          </Link>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-nfcs-blue to-nfcs-purple text-white shadow-lg'
                    : 'text-nfcs-dark hover:text-nfcs-blue hover:bg-gray-100'
                }`}
              >
                <span className="mr-2 text-lg">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg bg-gradient-to-r from-nfcs-blue to-nfcs-purple text-white focus:outline-none transform hover:scale-110 transition-transform duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-nfcs-blue to-nfcs-purple text-white'
                  : 'text-nfcs-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-3 text-xl">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
