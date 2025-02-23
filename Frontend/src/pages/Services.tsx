import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceProvider {
  id: string;
  name: string;
  service: string;
  experience: string;
  location: string;
  phone: string;
  email: string;
}

const Services = () => {
  const [services, setServices] = useState<ServiceProvider[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        toast.error('Unable to fetch services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', formData);
      
      if (response.data) {
        toast.success('Registration successful!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to register. Please try again.';
      toast.error(errorMessage);
      console.error('Registration error:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Available Service Providers</h2>
      
      {services.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No service providers registered yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((provider) => (
            <div key={provider.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <User className="h-12 w-12 text-blue-600 p-2 bg-blue-100 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{provider.name}</h3>
                  <p className="text-blue-600">{provider.service}</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>📍 {provider.location}</p>
                <p>⭐ {provider.experience} years experience</p>
                <p>📞 {provider.phone}</p>
                <p>✉️ {provider.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;