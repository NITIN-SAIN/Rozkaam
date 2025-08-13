import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, Clock, Shield, Filter, X } from 'lucide-react';

interface SearchResultsProps {
  onServiceSelect: (service: any) => void;
}

interface ServiceResult {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  availability: string;
  professional: {
    name: string;
    verified: boolean;
    experience: string;
  };
  tags: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ onServiceSelect }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [results, setResults] = useState<ServiceResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    rating: 'all',
    availability: 'all',
    category: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  const query = searchParams.get('q') || '';
  const location = searchParams.get('location') || 'Delhi NCR';

  // Mock search results - in a real app, this would come from an API
  const mockResults: ServiceResult[] = [
    {
      id: '1',
      name: 'House Cleaning',
      category: 'Cleaning & Pest Control',
      description: 'Professional house cleaning service with eco-friendly products',
      rating: 4.8,
      reviews: 156,
      price: 299,
      location: 'Delhi NCR',
      availability: 'Available Today',
      professional: {
        name: 'CleanPro Services',
        verified: true,
        experience: '5+ years'
      },
      tags: ['Eco-friendly', 'Same Day', 'Verified']
    },
    {
      id: '2',
      name: 'Electrical Repair',
      category: 'Repairs & Maintenance',
      description: 'Expert electrical repair and installation services',
      rating: 4.9,
      reviews: 89,
      price: 450,
      location: 'Delhi NCR',
      availability: 'Available Tomorrow',
      professional: {
        name: 'ElectroFix Solutions',
        verified: true,
        experience: '8+ years'
      },
      tags: ['Licensed', '24/7', 'Emergency']
    },
    {
      id: '3',
      name: 'AC Repair',
      category: 'Repairs & Maintenance',
      description: 'Quick AC repair and maintenance services',
      rating: 4.7,
      reviews: 203,
      price: 599,
      location: 'Delhi NCR',
      availability: 'Available Today',
      professional: {
        name: 'CoolCare Experts',
        verified: true,
        experience: '6+ years'
      },
      tags: ['Same Day', 'Warranty', 'Expert']
    },
    {
      id: '4',
      name: 'Plumbing Services',
      category: 'Repairs & Maintenance',
      description: 'Professional plumbing repair and installation',
      rating: 4.6,
      reviews: 127,
      price: 399,
      location: 'Delhi NCR',
      availability: 'Available Today',
      professional: {
        name: 'PipeMaster Pro',
        verified: true,
        experience: '7+ years'
      },
      tags: ['Emergency', 'Licensed', 'Guaranteed']
    },
    {
      id: '5',
      name: 'Painting Services',
      category: 'Home Renovation',
      description: 'Interior and exterior painting services',
      rating: 4.8,
      reviews: 94,
      price: 899,
      location: 'Delhi NCR',
      availability: 'Available Next Week',
      professional: {
        name: 'ColorCraft Studios',
        verified: true,
        experience: '4+ years'
      },
      tags: ['Premium', 'Design Consultation', 'Warranty']
    },
    {
      id: '6',
      name: 'Personal Training',
      category: 'Health & Wellness',
      description: 'Personalized fitness training at home',
      rating: 4.9,
      reviews: 67,
      price: 1200,
      location: 'Delhi NCR',
      availability: 'Available Today',
      professional: {
        name: 'FitLife Trainers',
        verified: true,
        experience: '3+ years'
      },
      tags: ['Certified', 'Home Visit', 'Custom Plan']
    }
  ];

  useEffect(() => {
    // Simulate API call delay
    setLoading(true);
    setTimeout(() => {
      // Filter results based on search query
      const filtered = mockResults.filter(service =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.category.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 500);
  }, [query]);

  const handleServiceSelect = (service: ServiceResult) => {
    onServiceSelect({
      name: service.name,
      type: 'search',
      service: service
    });
  };

  const clearFilters = () => {
    setFilters({
      priceRange: 'all',
      rating: 'all',
      availability: 'all',
      category: 'all'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Search Results for "{query}"
              </h1>
              <p className="text-gray-600 mt-1">
                {results.length} services found in {location}
              </p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Prices</option>
                    <option value="0-500">₹0 - ₹500</option>
                    <option value="500-1000">₹500 - ₹1000</option>
                    <option value="1000+">₹1000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Ratings</option>
                    <option value="4.5+">4.5+ Stars</option>
                    <option value="4.0+">4.0+ Stars</option>
                    <option value="3.5+">3.5+ Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select
                    value={filters.availability}
                    onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Any Time</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="week">This Week</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {results.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any services matching "{query}" in {location}
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {results.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleServiceSelect(service)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{service.category}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {service.rating} ({service.reviews} reviews)
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {service.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">₹{service.price}</div>
                      <div className="text-sm text-gray-500">starting from</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{service.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-gray-600">{service.professional.name}</span>
                      </div>
                      {service.professional.verified && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.availability}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
