import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#C0E1E4] to-[#9CC5C9] text-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <span className="font-bold">
              © Madad_Chahiye - Apro_Dynamics
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-bold">
              E-mail: <a href="mailto:madadchahiyee@gmail.com" className="hover:underline">madadchahiyee@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
