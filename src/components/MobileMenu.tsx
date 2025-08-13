import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Home, 
  User, 
  Calendar, 
  Wallet, 
  Settings,
  Heart,
  Shield,
  Phone,
  MapPin,
  Crown,
  Gift
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  onLogin
}) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', name: 'Home', icon: Home, path: '/' },
    { id: 'services', name: 'All Services', icon: Settings, path: '/services' },
    { id: 'wellness', name: 'Mental Wellness', icon: Heart, path: '/services' },
    { id: 'plans', name: 'Subscription Plans', icon: Crown, path: '/subscription-plans' },
    { id: 'professionals', name: 'Find Professionals', icon: User, path: '/professionals' },
    { id: 'safety', name: 'Trust & Safety', icon: Shield, path: '/trust-safety' }
  ];

  const userMenuItems = isLoggedIn ? [
    { id: 'dashboard', name: 'My Dashboard', icon: User, path: '/dashboard' },
    { id: 'bookings', name: 'My Bookings', icon: Calendar, path: '/dashboard' },
    { id: 'wallet', name: 'Wallet', icon: Wallet, path: '/dashboard' },
    { id: 'rewards', name: 'Rewards & Offers', icon: Gift, path: '/dashboard' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/profile' }
  ] : [];

  const supportItems = [
    { name: 'Help Center', icon: Phone, href: '#' },
    { name: 'Service Areas', icon: MapPin, href: '#' },
    { name: 'Contact Support', icon: Phone, href: 'tel:1800-ROZKAAM' }
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Rozkaam</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* User Section */}
        {isLoggedIn ? (
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Welcome back!</h3>
                <p className="text-sm text-gray-600">Manage your services</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="font-semibold text-gray-900">₹2,450</div>
                <div className="text-gray-600">Wallet</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="font-semibold text-gray-900">Handy Pro</div>
                <div className="text-gray-600">Plan</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 border-b">
            <button
              onClick={() => {
                onLogin();
                onClose();
              }}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Login / Sign Up
            </button>
          </div>
        )}

        {/* Main Navigation */}
        <div className="py-4">
          <div className="px-6 py-2">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Main Menu
            </h4>
          </div>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.path)}
                className="w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* User Menu (if logged in) */}
        {isLoggedIn && (
          <div className="py-4 border-t">
            <div className="px-6 py-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                My Account
              </h4>
            </div>
            <nav className="space-y-1">
              {userMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.path)}
                  className="w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Support Section */}
        <div className="py-4 border-t">
          <div className="px-6 py-2">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Support
            </h4>
          </div>
          <nav className="space-y-1">
            {supportItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Emergency Button */}
        <div className="p-6 border-t">
          <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            Emergency SOS
          </button>
          <div className="text-center mt-2">
            <span className="text-xs text-gray-500">24/7 Helpline: 1800-ROZKAAM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;