import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface ServiceCategoriesProps {
  onServiceSelect: (service: any) => void;
}

const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ onServiceSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {
      icon: '🏠',
      name: 'Cleaning & Pest Control',
      description: 'Deep cleaning, sanitization, pest management',
      services: ['House Cleaning', 'Carpet Cleaning', 'Pest Control', 'Sanitization'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      icon: '🔧',
      name: 'Repairs & Maintenance',
      description: 'Electrician, plumber, appliance repair',
      services: ['Electrician', 'Plumber', 'AC Repair', 'Appliance Fix'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: '🎨',
      name: 'Home Renovation',
      description: 'Carpentry, painting, civil work',
      services: ['Painting', 'Carpentry', 'Tiling', 'Interior Design'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: '🚗',
      name: 'Vehicle Services',
      description: 'Car repair, maintenance, roadside assistance',
      services: ['Car Wash', 'Puncture Fix', 'Battery', 'Oil Change'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: '❤️',
      name: 'Health & Wellness',
      description: 'Fitness training, nutrition, healthcare',
      services: ['Personal Trainer', 'Physiotherapy', 'Nursing', 'Nutrition'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: '🧠',
      name: 'Mental Wellness',
      description: 'Therapy, meditation, mindfulness coaching',
      services: ['Online Therapy', 'Meditation', 'Life Coaching', 'Sound Therapy'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      trending: true
    }
  ];

  // Filter categories based on search term and selected category
  const filteredCategories = categories.filter(category => {
    const matchesSearch = searchTerm === '' || 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.services.some(service => 
        service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesCategory = selectedCategory === 'all' || 
      category.name.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const categoryTypes = ['all', 'cleaning', 'repairs', 'renovation', 'vehicle', 'health', 'wellness'];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From everyday maintenance to specialized wellness services, 
            we've got all your needs covered with verified professionals.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for specific services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categoryTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedCategory(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'All Services' : 
                   type === 'cleaning' ? 'Cleaning' :
                   type === 'repairs' ? 'Repairs' :
                   type === 'renovation' ? 'Renovation' :
                   type === 'vehicle' ? 'Vehicle' :
                   type === 'health' ? 'Health' :
                   type === 'wellness' ? 'Wellness' : type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Found {filteredCategories.length} category{filteredCategories.length !== 1 ? 'ies' : 'y'} matching "{searchTerm}"
            </p>
          </div>
        )}

        {/* Services Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative ${category.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                onClick={() => onServiceSelect({
                  name: category.name,
                  type: 'category',
                  services: category.services
                })}
              >
                {/* Badges */}
                {category.popular && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    Popular
                  </div>
                )}
                {category.trending && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full flex items-center">
                    <span className="mr-1">🔥</span>
                    Trending
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-3xl`}>
                  {category.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Services List */}
                <div className="space-y-2 mb-4">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {service}
                    </div>
                  ))}
                  {category.services.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{category.services.length - 3} more services
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Starting from ₹199
                  </span>
                  <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
                    →
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        )}

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => onServiceSelect({ name: 'All Services', type: 'all' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All 200+ Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;