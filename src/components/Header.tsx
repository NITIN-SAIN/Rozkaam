import React, { useState } from 'react';
import { Search, MapPin, User, Menu, Bell, Wallet } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  currentView: string;
  onViewChange: (view: string) => void;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isLoggedIn, 
  onLogin, 
  currentView, 
  onViewChange,
  onMenuToggle 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Delhi NCR');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Rozkaam</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location Selector - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 mr-4">
            <MapPin className="w-4 h-4 text-gray-500" />
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
            >
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                </button>
                
                <button 
                  className="hidden md:flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => onViewChange('dashboard')}
                >
                  <Wallet className="w-4 h-4" />
                  <span>₹2,450</span>
                </button>

                <button 
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => onViewChange('dashboard')}
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <button 
                  onClick={onLogin}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Login
                </button>
                <button 
                  onClick={onLogin}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;