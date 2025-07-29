import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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
import UserProfile from './components/UserProfile';

function AppContent() {
  const { currentUser } = useAuth();
  const [currentView, setCurrentView] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  const renderMainContent = () => {
    if (currentUser && currentView === 'dashboard') {
      return <UserDashboard onViewChange={setCurrentView} />;
    }

    if (currentUser && currentView === 'profile') {
      return <UserProfile />;
    }

    return (
      <>
        <Hero onServiceSelect={handleServiceSelect} isLoggedIn={!!currentUser} />
        <ServiceCategories onServiceSelect={handleServiceSelect} />
        <ServiceWizard onServiceSelect={handleServiceSelect} />
        <SubscriptionPlans />
        <ProfessionalProfiles />
        <TrustSafety />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isLoggedIn={!!currentUser}
        currentView={currentView}
        onViewChange={setCurrentView}
        onMenuToggle={() => setShowMobileMenu(!showMobileMenu)}
      />
      
      <MobileMenu 
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        isLoggedIn={!!currentUser}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      <main className="relative">
        {renderMainContent()}
      </main>

      <Footer />

      {showBookingModal && (
        <BookingModal
          service={selectedService}
          onClose={() => setShowBookingModal(false)}
          isLoggedIn={!!currentUser}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <AppContent />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default App;