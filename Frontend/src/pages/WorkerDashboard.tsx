import React, { useState } from 'react';
import { mockServiceRequests, mockDashboardStats, mockReviews } from '../data/mockData';
import { Calendar, DollarSign, Star, Bell, CheckCircle, XCircle } from 'lucide-react';

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('requests');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <DollarSign className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold">₹{mockDashboardStats.totalEarnings}</span>
          </div>
          <p className="text-gray-600 mt-2">Total Earnings</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <CheckCircle className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">{mockDashboardStats.completedJobs}</span>
          </div>
          <p className="text-gray-600 mt-2">Completed Jobs</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <Bell className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold">{mockDashboardStats.activeRequests}</span>
          </div>
          <p className="text-gray-600 mt-2">Active Requests</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <Star className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold">{mockDashboardStats.averageRating}</span>
          </div>
          <p className="text-gray-600 mt-2">Average Rating</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex">
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'requests'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('requests')}
            >
              Service Requests
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'calendar'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('calendar')}
            >
              Calendar
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'requests' && (
            <div className="space-y-6">
              {mockServiceRequests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{request.customerName}</h3>
                      <p className="text-gray-600">{request.serviceType}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      request.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📍 {request.location}</p>
                    <p>🕒 {new Date(request.datetime).toLocaleString()}</p>
                    <p>💰 Budget: ₹{request.budget}</p>
                    <p>📝 {request.description}</p>
                  </div>
                  {request.status === 'pending' && (
                    <div className="mt-4 flex space-x-4">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                        Accept
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="text-center py-8 text-gray-500">
              Calendar view will be implemented here
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {mockReviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{review.customerName}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{review.comment}</p>
                  <div className="text-sm text-gray-500">
                    <span>{review.serviceType}</span>
                    <span className="mx-2">•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkerDashboard;