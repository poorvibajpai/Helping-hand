export interface WorkerProfile {
  id: string;
  name: string;
  photo: string;
  service: string;
  experience: number;
  specialization: string[];
  languages: string[];
  serviceAreas: string[];
  hourlyRate: number;
  dailyRate: number;
  rating: number;
  totalReviews: number;
  availability: {
    days: string[];
    hours: string;
  };
  status: 'active' | 'busy' | 'offline';
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  startingPrice: number;
  responseTime: string;
  rating: number;
  totalProviders: number;
}

export interface ServiceRequest {
  id: string;
  customerId: string;
  customerName: string;
  serviceType: string;
  location: string;
  datetime: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  description: string;
  budget: number;
}

export interface Review {
  id: string;
  customerId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
}

export interface DashboardStats {
  totalEarnings: number;
  completedJobs: number;
  activeRequests: number;
  averageRating: number;
}