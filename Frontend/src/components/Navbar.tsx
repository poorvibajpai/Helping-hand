import React from 'react';
import { Link } from 'react-router-dom';
// import { HelpingHand } from 'lucide-react';
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
              <span className="ml-2 text-xl font-bold text-gray-800">Madad_Chahiye</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/user-register"
              className="bg-[#C0E1E4] text-white px-4 py-2 rounded-md hover:bg-[#9CC5C9] transition-colors"
            >
              Register for Service
            </Link>
            <Link
              to="/register"
              className="bg-[#C0E1E4] text-white px-4 py-2 rounded-md hover:bg-[#9CC5C9] transition-colors"
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