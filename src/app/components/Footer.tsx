// components/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-text py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Copyright */}
        <div>
          <p className="text-sm text-text">
            &copy; 2025 Travel Destination Guide. All rights reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6">
          <ul className="flex justify-center space-x-8">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary text-2xl"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary text-2xl"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary text-2xl"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
