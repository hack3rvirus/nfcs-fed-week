import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const Map = () => {
  return (
    <div className="bg-white py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nfcs-dark mb-4">📍 Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at Our Mother of Perpetual Help Chaplaincy AEFUTHA 1, Abakaliki for our exciting Federation Week 2025!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="h-96 w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.4708542180056!2d8.1110815!3d6.3329937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105ca1803b3dc679%3A0x6f113b9eeba871af!2sSt%20padro%20pio%20parish%20FETHA%20Abakaliki!5e0!3m2!1sen!2sng!4v1756044547316!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Mother of Perpetual Help Chaplaincy AEFUTHA 1, Abakaliki Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-nfcs-gray to-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-nfcs-dark mb-6">Our Mother of Perpetual Help Chaplaincy AEFUTHA 1 Abakaliki</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-nfcs-blue text-xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-nfcs-dark">Address</h4>
                  <p className="text-gray-700">
                  Our Mother of Perpetual Help Chaplaincy<br />
                    AEFUTHA 1 Abakaliki<br />
                    Ebonyi State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-nfcs-blue text-xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-nfcs-dark">Phone</h4>
                  <p className="text-gray-700">+234 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-nfcs-blue text-xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-nfcs-dark">Email</h4>
                  <p className="text-gray-700">info@federationweek2025.org</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-start">
                <div className="text-nfcs-blue text-xl mt-1 mr-4 flex-shrink-0">📱</div>
                <div>
                  <h4 className="font-bold text-lg text-nfcs-dark">Follow Us</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.facebook.com/share/1GZesZfhxm/" target="_blank" rel="noopener noreferrer" className="text-nfcs-blue hover:text-nfcs-purple transition-colors duration-300">
                      <FaFacebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/nfcs_aefutha1?igsh=MXE2YmEwaDI2d2xqag==" target="_blank" rel="noopener noreferrer" className="text-nfcs-blue hover:text-nfcs-purple transition-colors duration-300">
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;