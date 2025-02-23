import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MapPin, User } from 'lucide-react';

interface ServiceProvider {
  id: string;
  name: string;
  service: string;
  experience: string;
  location: string;
  phone: string;
  email: string;
}

const ServiceCategoryPage = () => {
  const { id } = useParams();
  const [workers, setWorkers] = useState<ServiceProvider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setWorkers(response.data);
      } catch (error) {
        console.error('Error fetching workers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Available Service Providers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <div key={worker.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <User className="h-12 w-12 text-[#C0E1E4] p-2 bg-gray-100 rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{worker.name}</h3>
                <p className="text-[#C0E1E4]">{worker.service}</p>
              </div>
            </div>

            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{worker.location}</span>
              </div>
              <p>⭐ {worker.experience} years experience</p>
              <p>📞 {worker.phone}</p>
              <p>✉️ {worker.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCategoryPage;