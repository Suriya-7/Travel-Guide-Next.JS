// components/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-600 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4">
          Travel Destination Guide
        </h3>

        {/* Social Media Links */}
        <div className="mt-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 text-2xl transition-all duration-300"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 text-2xl transition-all duration-300"
                aria-label="Visit our Twitter page"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 text-2xl transition-all duration-300"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white opacity-30"></div>

        {/* Copyright */}
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Travel Destination Guide. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
