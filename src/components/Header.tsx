import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, MapPin, User, Menu, Bell, Wallet, X } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isLoggedIn, 
  onLogin, 
  onLogout,
  onMenuToggle 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Delhi NCR');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // All available services for search
  const allServices = [
    // Cleaning & Pest Control
    'House Cleaning', 'Carpet Cleaning', 'Pest Control', 'Sanitization', 'Deep Cleaning',
    // Repairs & Maintenance
    'Electrician', 'Plumber', 'AC Repair', 'Appliance Fix', 'Electrical Repair', 'Plumbing',
    // Home Renovation
    'Painting', 'Carpentry', 'Tiling', 'Interior Design', 'Home Renovation',
    // Vehicle Services
    'Car Wash', 'Puncture Fix', 'Battery', 'Oil Change', 'Car Repair', 'Vehicle Maintenance',
    // Health & Wellness
    'Personal Trainer', 'Physiotherapy', 'Nursing', 'Nutrition', 'Fitness Training',
    // Mental Wellness
    'Online Therapy', 'Meditation', 'Life Coaching', 'Sound Therapy', 'Mental Health',
    // Additional Services
    'Photography', 'Event Planning', 'Tutoring', 'Pet Care', 'Gardening', 'Security'
  ];

  // Filter services based on search query
  const filteredServices = searchQuery
    ? allServices.filter(service =>
        service.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8) // Show max 8 suggestions
    : [];

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}&location=${encodeURIComponent(location)}`);
      setShowSearchSuggestions(false);
      setSearchQuery('');
    }
  };

  // Handle service selection from suggestions
  const handleServiceSelect = (service: string) => {
    navigate(`/search?q=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`);
    setShowSearchSuggestions(false);
    setSearchQuery('');
  };

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img 
              src="/ChatGPT Image Jul 29, 2025, 06_03_13 PM.png" 
              alt="Rozkaam Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-gray-900">Rozkaam</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setShowSearchSuggestions(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </form>

              {/* Search Suggestions Dropdown */}
              {showSearchSuggestions && filteredServices.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  <div className="p-2">
                    <div className="text-xs font-medium text-gray-500 mb-2 px-2">Popular Services</div>
                    {filteredServices.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleServiceSelect(service)}
                        className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
                  onClick={() => navigate('/dashboard')}
                >
                  <Wallet className="w-4 h-4" />
                  <span>₹2,450</span>
                </button>

                <button 
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/dashboard')}
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </button>

                <button 
                  onClick={onLogout}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  to="/login"
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
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
          <div className="relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearchSuggestions(false);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>

            {/* Mobile Search Suggestions */}
            {showSearchSuggestions && filteredServices.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                <div className="p-2">
                  <div className="text-xs font-medium text-gray-500 mb-2 px-2">Popular Services</div>
                  {filteredServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceSelect(service)}
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;