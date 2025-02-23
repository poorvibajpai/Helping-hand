import { WorkerProfile, ServiceCategory, ServiceRequest, Review } from '../types';
import { Users, Wrench, ChefHat, Trash2, Shield, Cpu, Hammer } from 'lucide-react';

export const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Plumbing Services',
    description: 'Expert plumbing solutions for residential and commercial properties',
    icon: 'Wrench',
    startingPrice: 299,
    responseTime: '30 minutes',
    rating: 4.5,
    totalProviders: 15
  },
  {
    id: '2',
    name: 'Cooking & Chef Services',
    description: 'Professional chefs for all your culinary needs',
    icon: 'ChefHat',
    startingPrice: 599,
    responseTime: '1 hour',
    rating: 4.7,
    totalProviders: 12
  },
  {
    id: '3',
    name: 'House Cleaning',
    description: 'Thorough cleaning services for homes and offices',
    icon: 'Trash2',
    startingPrice: 399,
    responseTime: '45 minutes',
    rating: 4.4,
    totalProviders: 20
  },
  {
    id: '4',
    name: 'Security Guard Services',
    description: 'Professional security personnel for your safety',
    icon: 'Shield',
    startingPrice: 499,
    responseTime: '1 hour',
    rating: 4.6,
    totalProviders: 18
  },
  {
    id: '5',
    name: 'Technical Support & Repairs',
    description: 'Expert technical support for all electronic devices',
    icon: 'Cpu',
    startingPrice: 349,
    responseTime: '30 minutes',
    rating: 4.5,
    totalProviders: 14
  },
  {
    id: '6',
    name: 'Carpentry Work',
    description: 'Skilled carpenters for all your woodwork needs',
    icon: 'Hammer',
    startingPrice: 449,
    responseTime: '1 hour',
    rating: 4.6,
    totalProviders: 10
  }
];

export const workerProfiles: WorkerProfile[] = [
  {
    id: '1',
    name: 'Ramesh Kumar',
    photo: 'https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=200&h=200&fit=crop',
    service: 'Plumbing Services',
    experience: 5,
    specialization: ['Pipe Fitting', 'Leak Repair', 'Bathroom Installation'],
    languages: ['Hindi', 'English'],
    serviceAreas: ['Mumbai Central', 'Bandra', 'Andheri'],
    hourlyRate: 299,
    dailyRate: 1499,
    rating: 4.5,
    totalReviews: 128,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hours: '8:00 AM - 8:00 PM'
    },
    status: 'active'
  },
  {
    id: '2',
    name: 'Priya Singh',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&fit=crop',
    service: 'Cooking & Chef Services',
    experience: 8,
    specialization: ['North Indian', 'South Indian', 'Chinese', 'Continental'],
    languages: ['Hindi', 'English', 'Punjabi'],
    serviceAreas: ['Powai', 'Vikhroli', 'Bhandup'],
    hourlyRate: 399,
    dailyRate: 1999,
    rating: 4.8,
    totalReviews: 256,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      hours: '7:00 AM - 9:00 PM'
    },
    status: 'active'
  },
  {
    id: '3',
    name: 'Abdul Karim',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop',
    service: 'Security Guard Services',
    experience: 10,
    specialization: ['Residential Security', 'Corporate Security', 'Event Security'],
    languages: ['Hindi', 'English', 'Urdu'],
    serviceAreas: ['Worli', 'Lower Parel', 'Prabhadevi'],
    hourlyRate: 199,
    dailyRate: 999,
    rating: 4.7,
    totalReviews: 312,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      hours: '24/7 Shifts'
    },
    status: 'active'
  },
  {
    id: '4',
    name: 'Suresh Patel',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop',
    service: 'Technical Support & Repairs',
    experience: 6,
    specialization: ['Computer Repair', 'Smartphone Repair', 'Network Setup'],
    languages: ['Hindi', 'English', 'Gujarati'],
    serviceAreas: ['Borivali', 'Kandivali', 'Malad'],
    hourlyRate: 349,
    dailyRate: 1699,
    rating: 4.6,
    totalReviews: 184,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hours: '9:00 AM - 7:00 PM'
    },
    status: 'active'
  },
  {
    id: '5',
    name: 'Maya Sharma',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop',
    service: 'House Cleaning',
    experience: 4,
    specialization: ['Deep Cleaning', 'Office Cleaning', 'Move-in/Move-out Cleaning'],
    languages: ['Hindi', 'English', 'Marathi'],
    serviceAreas: ['Thane', 'Mulund', 'Ghatkopar'],
    hourlyRate: 249,
    dailyRate: 1299,
    rating: 4.5,
    totalReviews: 156,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hours: '8:00 AM - 6:00 PM'
    },
    status: 'active'
  },
  {
    id: '6',
    name: 'Rajesh Verma',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop',
    service: 'Carpentry Work',
    experience: 7,
    specialization: ['Furniture Making', 'Wood Repair', 'Custom Carpentry'],
    languages: ['Hindi', 'English'],
    serviceAreas: ['Chembur', 'Kurla', 'Sion'],
    hourlyRate: 399,
    dailyRate: 1899,
    rating: 4.7,
    totalReviews: 203,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hours: '9:00 AM - 7:00 PM'
    },
    status: 'active'
  }
];

export const mockServiceRequests: ServiceRequest[] = [
  {
    id: '1',
    customerId: 'c1',
    customerName: 'Amit Shah',
    serviceType: 'Plumbing Services',
    location: 'Bandra West, Mumbai',
    datetime: '2024-03-20T10:00:00',
    status: 'pending',
    description: 'Leaking tap in kitchen needs repair',
    budget: 500
  },
  {
    id: '2',
    customerId: 'c2',
    customerName: 'Neha Gupta',
    serviceType: 'House Cleaning',
    location: 'Powai, Mumbai',
    datetime: '2024-03-21T09:00:00',
    status: 'accepted',
    description: 'Deep cleaning of 2BHK apartment',
    budget: 1200
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    customerId: 'c1',
    customerName: 'Amit Shah',
    rating: 5,
    comment: 'Excellent service, very professional and punctual',
    date: '2024-03-15',
    serviceType: 'Plumbing Services'
  },
  {
    id: '2',
    customerId: 'c2',
    customerName: 'Neha Gupta',
    rating: 4,
    comment: 'Good service, but could improve on time management',
    date: '2024-03-14',
    serviceType: 'House Cleaning'
  }
];

export const mockDashboardStats = {
  totalEarnings: 25600,
  completedJobs: 45,
  activeRequests: 3,
  averageRating: 4.6
};