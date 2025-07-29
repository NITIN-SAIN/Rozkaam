import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Gift, 
  Zap, 
  Heart, 
  Home,
  Wrench,
  Brain,
  Crown,
  Settings
} from 'lucide-react';

const SubscriptionPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Clean Living',
      icon: Home,
      description: 'Perfect for home hygiene & cleanliness',
      monthlyPrice: 599,
      yearlyPrice: 5999,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        '2 Deep Cleaning Sessions/month',
        'Pest Control (Quarterly)',
        'Air Purifier Maintenance',
        'Priority Booking',
        '24/7 Customer Support',
        'Eco-friendly Products',
        'Health Reports'
      ],
      savings: 'Save ₹1,189'
    },
    {
      name: 'Handy Pro',
      icon: Wrench,
      description: 'Quick repairs & maintenance solutions',
      monthlyPrice: 899,
      yearlyPrice: 8999,
      color: 'from-orange-500 to-red-500',
      popular: true,
      features: [
        'Unlimited Minor Repairs',
        '3 Major Service Calls/month',
        'Emergency SOS (Free)',
        'Appliance Health Check',
        'Premium Professionals',
        'Parts Warranty (6 months)',
        'Installation Services',
        'Home Safety Audit'
      ],
      savings: 'Save ₹1,789'
    },
    {
      name: 'Mindful Membership',
      icon: Brain,
      description: 'Mental wellness & therapy sessions',
      monthlyPrice: 1299,
      yearlyPrice: 12999,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        '4 Therapy Sessions/month',
        'Daily Meditation Access',
        'Personal Wellness Coach',
        'Stress Assessment Tools',
        'Group Therapy Sessions',
        'Mental Health Resources',
        'Crisis Support Hotline'
      ],
      savings: 'Save ₹2,589'
    },
    {
      name: 'Wellness Boost',
      icon: Heart,
      description: 'Hybrid plan with health & home care',
      monthlyPrice: 1799,
      yearlyPrice: 17999,
      color: 'from-green-500 to-teal-500',
      popular: false,
      features: [
        'All Clean Living Benefits',
        '2 Therapy Sessions/month',
        'Personal Trainer (2 sessions)',
        'Nutrition Consultation',
        'Home Gym Setup',
        'Health Monitoring',
        'Wellness Rewards Program'
      ],
      savings: 'Save ₹3,589'
    }
  ];

  const customPlan = {
    name: 'Custom Bundle',
    icon: Settings,
    description: 'Build your personalized service package'
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4 mr-2" />
            Subscription Plans
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get unlimited access to premium services with our flexible subscription plans. 
            Cancel anytime, upgrade or downgrade as needed.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-orange-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">
                  ₹{billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12)}
                  <span className="text-base text-gray-600 font-normal">/month</span>
                </div>
                {billingCycle === 'yearly' && (
                  <div className="text-sm text-green-600 font-medium">{plan.savings}</div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Choose Plan
              </button>

              {/* Gift Option */}
              <button className="w-full mt-2 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center justify-center">
                <Gift className="w-4 h-4 mr-2" />
                Gift This Plan
              </button>
            </div>
          ))}
        </div>

        {/* Custom Plan */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className={`w-16 h-16 bg-gradient-to-r from-gray-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4`}>
              <customPlan.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{customPlan.name}</h3>
            <p className="text-gray-600 mb-6">{customPlan.description}</p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <Zap className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <div className="text-xs font-medium">Pick Services</div>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <Settings className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <div className="text-xs font-medium">Set Frequency</div>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <Heart className="w-4 h-4 text-red-600 mx-auto mb-1" />
                <div className="text-xs font-medium">Get Pricing</div>
              </div>
            </div>

            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Build Custom Plan
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include free cancellation, 24/7 support, and our satisfaction guarantee
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Upgrade/downgrade freely</span>
            <span>✓ Money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;