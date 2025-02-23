import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ChefHat, Trash2, Shield, Cpu, Hammer } from 'lucide-react';
import { serviceCategories } from '../data/mockData';

const iconMap: { [key: string]: any } = {
  Wrench,
  ChefHat,
  Trash2,
  Shield,
  Cpu,
  Hammer
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#C0E1E4] to-[#9CC5C9] text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire the best, Forget the rest!
            </h1>
            <p className="text-xl mb-8">
              Verified. Trusted. Professional. Find premium household services tailored to your needs
            </p>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => {
              const IconComponent = iconMap[category.icon];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-12 w-12 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      {/* <p className="text-blue-600">Starting ₹{category.startingPrice}</p> */}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>⚡ {category.responseTime} response</span>
                    <span>⭐ {category.rating}/5</span>
                    <span>👥 {category.totalProviders} providers</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;