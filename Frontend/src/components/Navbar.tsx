import React from 'react';
import { Link } from 'react-router-dom';
import { HelpingHand } from 'lucide-react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-8 object-contain"
                src={logo}
                alt="Company Logo"
              />
              <span className="ml-2 text-2xl font-bold text-gray-800">Madad_Chahiye</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Worker Dashboard
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Register as Worker
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;