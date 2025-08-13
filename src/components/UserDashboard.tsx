import React, { useState } from 'react';
import { 
  Calendar, 
  Wallet, 
  Crown, 
  Clock, 
  Star,
  MapPin,
  Plus,
  Bell,
  Settings,
  TrendingUp,
  Heart,
  Shield,
  Gift,
  Download
} from 'lucide-react';

const UserDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const userStats = {
    walletBalance: 2450,
    subscriptionPlan: 'Handy Pro',
    nextRenewal: '15 Feb 2025',
    totalBookings: 24,
    completedServices: 21,
    pendingBookings: 2,
    loyaltyPoints: 1250,
    ecoScore: 87
  };

  const recentBookings = [
    {
      id: 1,
      service: 'Electrical Repair',
      professional: 'Rajesh Kumar',
      date: '2025-01-15',
      time: '10:00 AM',
      status: 'completed',
      rating: 5,
      amount: 450
    },
    {
      id: 2,
      service: 'Deep Cleaning',
      professional: 'Mohammed Ali',
      date: '2025-01-18',
      time: '2:00 PM',
      status: 'upcoming',
      amount: 800
    },
    {
      id: 3,
      service: 'Therapy Session',
      professional: 'Dr. Priya Sharma',
      date: '2025-01-20',
      time: '6:00 PM',
      status: 'upcoming',
      amount: 1200
    }
  ];

  const wellnessGoals = [
    {
      name: 'Meditation Streak',
      current: 7,
      target: 30,
      unit: 'days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Therapy Sessions',
      current: 3,
      target: 4,
      unit: 'sessions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Home Wellness Score',
      current: 87,
      target: 100,
      unit: 'points',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'bookings', name: 'My Bookings', icon: Calendar },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'wellness', name: 'Wellness', icon: Heart },
    { id: 'payments', name: 'Payments', icon: Wallet },
    { id: 'support', name: 'Support', icon: Shield }
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{userStats.totalBookings}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Total Bookings</h3>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{userStats.completedServices}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Completed</h3>
                <p className="text-xs text-gray-500 mt-1">Services done</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{userStats.pendingBookings}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Pending</h3>
                <p className="text-xs text-gray-500 mt-1">Awaiting service</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{userStats.ecoScore}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Eco Score</h3>
                <p className="text-xs text-gray-500 mt-1">Environmental impact</p>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{booking.service}</h4>
                          <p className="text-sm text-gray-600">{booking.professional}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">{booking.date} at {booking.time}</span>
                            {booking.rating && (
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-gray-600">{booking.rating}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mt-1">₹{booking.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wellness Goals */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Wellness Goals</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {wellnessGoals.map((goal, index) => (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 relative">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeDasharray={`${(goal.current / goal.target) * 100}, 100`}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" className={`stop-color-${goal.color.split('-')[1]}`} />
                              <stop offset="100%" className={`stop-color-${goal.color.split('-')[3]}`} />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">{goal.current}</div>
                            <div className="text-xs text-gray-600">/ {goal.target}</div>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">{goal.name}</h4>
                      <p className="text-sm text-gray-600">{goal.unit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Bookings</h3>
            <p className="text-gray-600">Booking management interface will be implemented here.</p>
          </div>
        );

      case 'services':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <p className="text-gray-600">Service management interface will be implemented here.</p>
          </div>
        );

      case 'wellness':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Wellness</h3>
            <p className="text-gray-600">Wellness tracking interface will be implemented here.</p>
          </div>
        );

      case 'payments':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payments</h3>
            <p className="text-gray-600">Payment management interface will be implemented here.</p>
          </div>
        );

      case 'support':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600">Support interface will be implemented here.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600">Manage your services, bookings, and wellness journey</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Book Service
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              Schedule Service
            </button>
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <Bell className="w-4 h-4 mr-2 text-green-600" />
              Notifications
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <Gift className="w-4 h-4 mr-2" />
              Refer & Earn
            </button>
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <Download className="w-4 h-4 mr-2 text-orange-600" />
              Download Invoice
            </button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default UserDashboard;