import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import WorkerProfile from './pages/WorkerProfile';
import WorkerDashboard from './pages/WorkerDashboard';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<ServiceCategoryPage />} />
          <Route path="/worker/:id" element={<WorkerProfile />} />
          <Route path="/dashboard" element={<WorkerDashboard />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;