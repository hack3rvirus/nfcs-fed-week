import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import NfcsLogo from '../assets/nfcs-logo.png';

const Footer = () => {
  return (
    <footer className="bg-nfcs-dark text-nfcs-gray pt-12 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={NfcsLogo} alt="NFCS Logo" className="h-16 w-auto bg-white rounded-full p-1 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">NFCS AEFUTHA 1</h3>
            <p className="text-sm max-w-xs">
              Nigeria Federation of Catholic Students, Alex Ekwueme Federal University Teaching Hospital, Abakaliki.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-nfcs-red" />
                Our Mother of Perpetual Help Chaplaincy, AEFUTHA 1, Abakaliki
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-nfcs-red" />
                contact@nfcsaefutha1.com
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.facebook.com/share/1GZesZfhxm/" target="_blank" rel="noopener noreferrer" className="text-nfcs-gray hover:text-nfcs-red transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/nfcs_aefutha1?igsh=MXE2YmEwaDI2d2xqag==" target="_blank" rel="noopener noreferrer" className="text-nfcs-gray hover:text-nfcs-red transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NFCS AEFUTHA 1. All Rights Reserved.</p>
          <p className="mt-2">
            Built by <a href="https://hackversesoftwaresolutions.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-nfcs-red hover:underline">Hacker</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
