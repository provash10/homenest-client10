import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <Link to='/' className="text-2xl font-bold text-white">HomeNest</Link>
          <p className="text-gray-400">
            Your trusted real estate partner for buying, selling, and renting properties across the country.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-blue-400 rounded-full hover:bg-blue-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-pink-500 rounded-full hover:bg-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* quick links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/all-propertise" className="hover:text-white transition">All Properties</a></li>
            <li><a href="/add-propertise" className="hover:text-white transition">Add Property</a></li>
            <li><a href="/my-property" className="hover:text-white transition">My Properties</a></li>
            <li><a href="/my-ratings" className="hover:text-white transition">My Ratings</a></li>
          </ul>
        </div>

        {/* contact*/}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">Contact Us</h3>
          <p className="text-gray-400">123 Real Estate St., Dhaka, Bangladesh</p>
          <p className="text-gray-400">Email: support@homenest.com</p>
          <p className="text-gray-400">Phone: +880 1234 567890</p>
        </div>

        {/* terms */}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">Terms & Policies</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HomeNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
