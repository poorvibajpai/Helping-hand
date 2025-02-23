import React from 'react';
import { useParams } from 'react-router-dom';
import { serviceCategories, workerProfiles } from '../data/mockData';
import { MapPin, Languages, Clock } from 'lucide-react';

const ServiceCategoryPage = () => {
  const { id } = useParams();
  const category = serviceCategories.find(cat => cat.id === id);
  const workers = workerProfiles.filter(worker => worker.service === category?.name);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <p className="text-gray-600 mb-12">{category.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <div key={worker.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={worker.photo}
                alt={worker.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{worker.name}</h3>
                <p className="text-blue-600">{worker.experience} years experience</p>
              </div>
            </div>

            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{worker.serviceAreas.join(', ')}</span>
              </div>
              <div className="flex items-center">
                <Languages className="h-5 w-5 mr-2" />
                <span>{worker.languages.join(', ')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{worker.availability.hours}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between mb-2">
                <span>Hourly Rate:</span>
                <span className="font-semibold">₹{worker.hourlyRate}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Daily Rate:</span>
                <span className="font-semibold">₹{worker.dailyRate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">⭐ {worker.rating} ({worker.totalReviews} reviews)</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCategoryPage;