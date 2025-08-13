import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCategories from './components/ServiceCategories';
import ServiceWizard from './components/ServiceWizard';
import SubscriptionPlans from './components/SubscriptionPlans';
import ProfessionalProfiles from './components/ProfessionalProfiles';
import UserDashboard from './components/UserDashboard';
import TrustSafety from './components/TrustSafety';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileMenu from './components/MobileMenu';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import SearchResults from './components/SearchResults';

const AppContent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header 
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onMenuToggle={toggleMobileMenu}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero onServiceSelect={handleServiceSelect} isLoggedIn={isLoggedIn} />} />
            <Route path="/services" element={<ServiceCategories onServiceSelect={handleServiceSelect} />} />
            <Route path="/service-wizard" element={<ServiceWizard onServiceSelect={handleServiceSelect} />} />
            <Route path="/subscription-plans" element={<SubscriptionPlans />} />
            <Route path="/professionals" element={<ProfessionalProfiles />} />
            <Route path="/trust-safety" element={<TrustSafety />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
            <Route path="/search" element={<SearchResults onServiceSelect={handleServiceSelect} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
        />

        {/* Booking Modal */}
        {isBookingModalOpen && selectedService && (
          <BookingModal
            service={selectedService}
            isOpen={isBookingModalOpen}
            onClose={() => {
              setIsBookingModalOpen(false);
              setSelectedService(null);
            }}
          />
        )}
      </div>
    </Router>
  );
};

function App(){
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App;