import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    location: '',
    charge: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate form data before submission
      if (!formData.name || !formData.phone || !formData.category || !formData.location || !formData.charge) {
        toast.error('Please fill in all required fields');
        return;
      }

      // Ensure charge is a valid number
      const chargeValue = parseFloat(formData.charge);
      if (isNaN(chargeValue) || chargeValue <= 0) {
        toast.error('Please enter a valid charge amount');
        return;
      }

      // Format the data before sending
      const formattedData = {
        ...formData,
        charge: chargeValue,
      };

      const response = await axios.post('http://localhost:5000/api/users', formattedData);
      
      if (response.data) {
        toast.success('Registration successful!');
        // Add a small delay before navigation to ensure the toast is visible
        setTimeout(() => {
          navigate('/dashboard');  // Changed from '/' to '/dashboard'
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

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Register as a Service Provider</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Service Type</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select a service</option>
            <option value="Cook">Cook</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Plumber">Plumber</option>
            <option value="Security Guard">Security Guard</option>
            <option value="Technician">Technician</option>
            <option value="Carpenter">Carpenter</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Charges</label>
          <input
            type="number"
            name="charge"
            value={formData.charge}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Experience (years)</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit" 
          className="w-full bg-[#6db5bc] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;