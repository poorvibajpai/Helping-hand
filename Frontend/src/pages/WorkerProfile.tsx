import React from 'react';
import { useParams } from 'react-router-dom';
import { workerProfiles, mockReviews } from '../data/mockData';
import { MapPin, Languages, Clock, Star, Calendar } from 'lucide-react';

const WorkerProfile = () => {
  const { id } = useParams();
  const worker = workerProfiles.find(w => w.id === id);

  if (!worker) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-600">Worker not found</div>
      </div>
    );
  }

  const workerReviews = mockReviews.filter(review => review.serviceType === worker.service);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center">
            <img
              src={worker.photo}
              alt={worker.name}
              className="h-24 w-24 rounded-full object-cover"
            />
            <div className="ml-6">
              <h1 className="text-3xl font-bold">{worker.name}</h1>
              <p className="text-xl text-blue-600">{worker.service}</p>
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-lg">{worker.rating}</span>
                <span className="ml-2 text-gray-600">({worker.totalReviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span>{worker.experience} years of experience</span>
              </div>
              <div className="flex items-center">
                <Languages className="h-5 w-5 text-gray-500 mr-2" />
                <span>{worker.languages.join(', ')}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <span>{worker.serviceAreas.join(', ')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span>{worker.availability.hours}</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-4">Specializations</h2>
            <div className="flex flex-wrap gap-2">
              {worker.specialization.map((spec, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Hourly Rate</span>
                <span className="text-2xl font-bold">₹{worker.hourlyRate}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Daily Rate</span>
                <span className="text-2xl font-bold">₹{worker.dailyRate}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="border-t p-6">
          <h2 className="text-xl font-semibold mb-6">Reviews</h2>
          <div className="space-y-6">
            {workerReviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{review.customerName}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1">{review.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{review.comment}</p>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerProfile;