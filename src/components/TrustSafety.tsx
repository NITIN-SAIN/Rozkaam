import React from 'react';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  FileText, 
  Phone,
  Award,
  Heart,
  Zap,
  Users,
  Eye
} from 'lucide-react';

const TrustSafety: React.FC = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'KYC Verified Professionals',
      description: 'All service providers undergo thorough background verification including ID proof, address verification, and skill assessment.',
      stats: '100% verified',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Encrypted Transactions',
      description: 'All payments and personal data are protected with bank-grade encryption and secure payment gateways.',
      stats: '256-bit SSL',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Award,
      title: 'Insurance Coverage',
      description: 'Major services come with insurance coverage for damages and accidents during service delivery.',
      stats: 'Up to ₹5 lakhs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Real-time Tracking',
      description: 'Track your service professional in real-time and receive live updates throughout the service.',
      stats: 'Live GPS',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const safetyProtocols = [
    {
      icon: Heart,
      title: 'Health & Hygiene',
      items: [
        'Temperature checks for all professionals',
        'Sanitized equipment and tools',
        'Personal protective equipment mandatory',
        'Health certificates updated monthly'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Quality Standards',
      items: [
        'Regular skill assessment and training',
        'Customer feedback monitoring',
        'Performance-based rating system',
        'Continuous improvement programs'
      ]
    },
    {
      icon: Phone,
      title: '24/7 Support',
      items: [
        'Emergency helpline always available',
        'Dedicated complaint resolution team',
        'Multi-language customer support',
        'Real-time chat assistance'
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 27001', desc: 'Information Security' },
    { name: 'PCI DSS', desc: 'Payment Security' },
    { name: 'GDPR', desc: 'Data Protection' },
    { name: 'SOC 2', desc: 'Service Security' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Trust & Safety
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Safety is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of safety, security, and trust to ensure 
            you have complete peace of mind with every service.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {feature.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Coverage</span>
                <span className="text-sm font-medium text-blue-600">
                  {feature.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Protocols */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Safety Protocols
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {safetyProtocols.map((protocol, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <protocol.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {protocol.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {protocol.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Security Certifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 text-center shadow-sm"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {cert.name}
                    </div>
                    <div className="text-xs text-gray-600">{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Stats */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Trust Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Customer Satisfaction</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-30 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">98.5%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Background Verification</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-full h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">On-time Service</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-28 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">96.2%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Payment Security</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-full h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Helpline: 1800-ROZKAAM (24/7)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;