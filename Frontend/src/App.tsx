import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import WorkerProfile from './pages/WorkerProfile';
import WorkerDashboard from './pages/WorkerDashboard';
import RegisterForm from './pages/RegisterForm';
import UserRegisterForm from './pages/UserRegisterForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<ServiceCategoryPage />} />
            <Route path="/worker/:id" element={<WorkerProfile />} />
            <Route path="/dashboard" element={<WorkerDashboard />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/services" element={<ServiceCategoryPage />} />
            <Route path="/user-register" element={<UserRegisterForm />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;