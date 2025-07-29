import React from 'react';
import { 
  Home, 
  Wrench, 
  Paintbrush, 
  Car, 
  Heart, 
  Brain,
  Sparkles,
  Shield,
  ChevronRight
} from 'lucide-react';

interface ServiceCategoriesProps {
  onServiceSelect: (service: any) => void;
}

const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ onServiceSelect }) => {
  const categories = [
    {
      icon: Home,
      name: 'Cleaning & Pest Control',
      description: 'Deep cleaning, sanitization, pest management',
      services: ['House Cleaning', 'Carpet Cleaning', 'Pest Control', 'Sanitization'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      icon: Wrench,
      name: 'Repairs & Maintenance',
      description: 'Electrician, plumber, appliance repair',
      services: ['Electrician', 'Plumber', 'AC Repair', 'Appliance Fix'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Paintbrush,
      name: 'Home Renovation',
      description: 'Carpentry, painting, civil work',
      services: ['Painting', 'Carpentry', 'Tiling', 'Interior Design'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Car,
      name: 'Vehicle Services',
      description: 'Car repair, maintenance, roadside assistance',
      services: ['Car Wash', 'Puncture Fix', 'Battery', 'Oil Change'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Heart,
      name: 'Health & Wellness',
      description: 'Fitness training, nutrition, healthcare',
      services: ['Personal Trainer', 'Physiotherapy', 'Nursing', 'Nutrition'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Brain,
      name: 'Mental Wellness',
      description: 'Therapy, meditation, mindfulness coaching',
      services: ['Online Therapy', 'Meditation', 'Life Coaching', 'Sound Therapy'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      trending: true
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
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
                  <Sparkles className="w-3 h-3 mr-1" />
                  Trending
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
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
                    <Shield className="w-3 h-3 text-green-500 mr-2" />
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
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

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