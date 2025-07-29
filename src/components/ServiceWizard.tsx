import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  DollarSign,
  Clock,
  Filter,
  Star
} from 'lucide-react';

interface ServiceWizardProps {
  onServiceSelect: (service: any) => void;
}

const ServiceWizard: React.FC<ServiceWizardProps> = ({ onServiceSelect }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    type: '',
    urgency: '',
    budget: '',
    location: ''
  });

  const steps = [
    {
      title: 'Service Type',
      key: 'type',
      options: [
        { id: 'cleaning', name: 'Cleaning & Hygiene', icon: '🧹' },
        { id: 'repair', name: 'Repairs & Maintenance', icon: '🔧' },
        { id: 'wellness', name: 'Mental Wellness', icon: '🧠' },
        { id: 'vehicle', name: 'Vehicle Services', icon: '🚗' }
      ]
    },
    {
      title: 'Urgency Level',
      key: 'urgency',
      options: [
        { id: 'emergency', name: 'Emergency (ASAP)', icon: '🚨', badge: 'SOS' },
        { id: 'today', name: 'Today', icon: '⚡' },
        { id: 'tomorrow', name: 'Tomorrow', icon: '📅' },
        { id: 'flexible', name: 'Flexible', icon: '🕐' }
      ]
    },
    {
      title: 'Budget Range',
      key: 'budget',
      options: [
        { id: 'basic', name: '₹199 - ₹999', icon: '💰', desc: 'Basic services' },
        { id: 'standard', name: '₹1,000 - ₹2,999', icon: '💎', desc: 'Standard package' },
        { id: 'premium', name: '₹3,000+', icon: '👑', desc: 'Premium services' },
        { id: 'consultation', name: 'Free Consultation', icon: '🆓', desc: 'Get quote first' }
      ]
    }
  ];

  const handleOptionSelect = (key: string, value: string) => {
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
    if (currentStep < steps.length) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      // Complete wizard
      handleWizardComplete();
    }
  };

  const handleWizardComplete = () => {
    onServiceSelect({
      name: 'Custom Service Request',
      type: 'wizard',
      filters: selectedFilters
    });
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Filter className="w-4 h-4 mr-2" />
            Smart Service Discovery
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Service Match
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer a few quick questions and we'll recommend the best professionals for your needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Step {currentStep} of {steps.length}</span>
              <span className="text-sm text-gray-600">{Math.round((currentStep / steps.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Step */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {currentStepData?.title}
              </h3>
              <p className="text-gray-600">
                Choose the option that best describes your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStepData?.options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(currentStepData.key, option.id)}
                  className={`
                    relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
                    ${selectedFilters[currentStepData.key as keyof typeof selectedFilters] === option.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                    }
                  `}
                >
                  {option.badge && (
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      {option.badge}
                    </div>
                  )}
                  
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{option.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.name}</h4>
                      {option.desc && (
                        <p className="text-sm text-gray-600">{option.desc}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Select this option</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="flex items-center px-4 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </button>

              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                disabled={currentStep === steps.length}
                className="flex items-center px-4 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-blue-600 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
              <MapPin className="w-4 h-4 mr-2 text-blue-600" />
              Near Me
            </button>
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
              <Calendar className="w-4 h-4 mr-2 text-green-600" />
              Available Today
            </button>
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
              <Star className="w-4 h-4 mr-2 text-yellow-600" />
              Top Rated
            </button>
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
              <DollarSign className="w-4 h-4 mr-2 text-purple-600" />
              Best Value
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWizard;