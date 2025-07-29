import React from 'react';
import { ArrowRight, Zap, Shield, Heart, Calendar } from 'lucide-react';

interface HeroProps {
  onServiceSelect: (service: any) => void;
  isLoggedIn: boolean;
}

const Hero: React.FC<HeroProps> = ({ onServiceSelect, isLoggedIn }) => {
  const handleBookService = () => {
    onServiceSelect({ 
      name: 'Quick Service Booking', 
      type: 'general',
      description: 'Book any service with our expert professionals'
    });
  };

  const emergencyServices = [
    { icon: Zap, name: 'Electrician', time: '30 mins' },
    { icon: Shield, name: 'Plumber', time: '45 mins' },
    { icon: Heart, name: 'Emergency Care', time: '15 mins' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by 50,000+ customers
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your One-Stop
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solution</span>
              <br />for Everything
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From home repairs to mental wellness, connect with verified professionals 
              for all your lifestyle needs. Safe, reliable, and convenient.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleBookService}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Book a Service
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300">
                Explore Plans
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Services</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Service Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Quick Emergency Services</h3>
                <div className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  SOS Available
                </div>
              </div>
              
              <div className="space-y-4">
                {emergencyServices.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => onServiceSelect({ 
                      name: service.name, 
                      type: 'emergency',
                      time: service.time 
                    })}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">{service.name}</span>
                    </div>
                    <div className="text-sm text-gray-500">~{service.time}</div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onServiceSelect({ name: 'Emergency SOS', type: 'sos' })}
                className="w-full mt-4 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Emergency SOS
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Calendar className="w-8 h-8 text-white" />
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;