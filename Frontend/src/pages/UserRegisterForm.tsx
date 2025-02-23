import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface UserFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  location: string;
}

const UserRegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.location) {
        toast.error('Please fill in all required fields');
        return;
      }

      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      
      if (response.data) {
        toast.success('Registration successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to register. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Register for Service</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C0E1E4] focus:ring-[#C0E1E4]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C0E1E4] focus:ring-[#C0E1E4]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C0E1E4] focus:ring-[#C0E1E4]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C0E1E4] focus:ring-[#C0E1E4]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C0E1E4] focus:ring-[#C0E1E4]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C0E1E4] text-white py-2 px-4 rounded-md hover:bg-[#9CC5C9] transition-colors font-bold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegisterForm;
