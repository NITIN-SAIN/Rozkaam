import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  Heart,
  CheckCircle,
  Users,
  ThumbsUp,
  Filter
} from 'lucide-react';

const ProfessionalProfiles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [temperamentMatch, setTemperamentMatch] = useState(false);

  const professionals = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      category: 'electrician',
      specialization: 'Electrical Repairs & Installation',
      rating: 4.9,
      reviews: 245,
      experience: '8 years',
      location: 'South Delhi',
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?w=400',
      badges: ['KYC Verified', 'Insurance Covered', 'Safety Certified'],
      skills: ['Wiring', 'AC Installation', 'Fan Repair', 'Switch Board'],
      price: '₹299/hour',
      availability: 'Available Today',
      completedJobs: 1250,
      responseTime: '15 mins',
      temperament: 'friendly'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      category: 'wellness',
      specialization: 'Clinical Psychologist',
      rating: 4.8,
      reviews: 189,
      experience: '12 years',
      location: 'Online Sessions',
      image: 'https://images.pexels.com/photos/5214329/pexels-photo-5214329.jpeg?w=400',
      badges: ['Licensed', 'Verified', 'Specialized Training'],
      skills: ['Anxiety Therapy', 'Depression Counseling', 'CBT', 'Mindfulness'],
      price: '₹1,200/session',
      availability: 'Tomorrow 10 AM',
      completedJobs: 890,
      responseTime: '2 hours',
      temperament: 'calm'
    },
    {
      id: 3,
      name: 'Mohammed Ali',
      category: 'cleaning',
      specialization: 'Deep Cleaning Specialist',
      rating: 4.7,
      reviews: 312,
      experience: '5 years',
      location: 'Gurgaon',
      image: 'https://images.pexels.com/photos/5691636/pexels-photo-5691636.jpeg?w=400',
      badges: ['Eco-Certified', 'Equipment Provided', 'Insured'],
      skills: ['Deep Cleaning', 'Sanitization', 'Carpet Cleaning', 'Pest Control'],
      price: '₹199/hour',
      availability: 'Available Now',
      completedJobs: 687,
      responseTime: '5 mins',
      temperament: 'professional'
    },
    {
      id: 4,
      name: 'Anita Patel',
      category: 'renovation',
      specialization: 'Interior Design Consultant',
      rating: 4.9,
      reviews: 156,
      experience: '10 years',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/7689730/pexels-photo-7689730.jpeg?w=400',
      badges: ['Certified Designer', 'Portfolio Verified', 'Premium'],
      skills: ['Space Planning', 'Color Consultation', '3D Visualization', 'Budget Planning'],
      price: '₹2,500/consultation',
      availability: 'Next Week',
      completedJobs: 423,
      responseTime: '4 hours',
      temperament: 'creative'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Professionals', count: professionals.length },
    { id: 'electrician', name: 'Electricians', count: 1 },
    { id: 'wellness', name: 'Wellness Experts', count: 1 },
    { id: 'cleaning', name: 'Cleaning Specialists', count: 1 },
    { id: 'renovation', name: 'Renovation Experts', count: 1 }
  ];

  const filteredProfessionals = selectedCategory === 'all' 
    ? professionals 
    : professionals.filter(p => p.category === selectedCategory);

  const getTemperamentIcon = (temperament: string) => {
    switch (temperament) {
      case 'friendly': return '😊';
      case 'calm': return '😌';
      case 'professional': return '🤝';
      case 'creative': return '🎨';
      default: return '👤';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Verified Professionals
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All our professionals are thoroughly verified, insured, and committed to delivering 
            exceptional service with complete safety protocols.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-sm'
                }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Temperament Toggle */}
          <div className="flex justify-center">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={temperamentMatch}
                onChange={(e) => setTemperamentMatch(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Enable temperament matching</span>
              <Heart className="w-4 h-4 text-red-500" />
            </label>
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProfessionals.map((professional) => (
            <div
              key={professional.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {professional.name}
                      </h3>
                      {temperamentMatch && (
                        <div className="text-lg" title={`${professional.temperament} personality`}>
                          {getTemperamentIcon(professional.temperament)}
                        </div>
                      )}
                    </div>
                    <p className="text-blue-600 font-medium text-sm mb-2">
                      {professional.specialization}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{professional.rating}</span>
                        <span className="ml-1">({professional.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {professional.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {professional.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                    >
                      <Shield className="w-3 h-3 inline mr-1" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {professional.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {professional.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{professional.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {professional.completedJobs}
                    </div>
                    <div className="text-xs text-gray-600">Jobs Done</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {professional.experience}
                    </div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {professional.responseTime}
                    </div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {professional.price}
                  </div>
                  <div className="text-sm text-green-600 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {professional.availability}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    View Profile
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Professionals
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfiles;