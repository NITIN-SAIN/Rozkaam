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

interface UserDashboardProps {
  onViewChange: (view: string) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ onViewChange }) => {
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
    { id: 'wellness', name: 'Wellness Goals', icon: Heart },
    { id: 'wallet', name: 'Wallet & Billing', icon: Wallet },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Wallet className="w-6 h-6" />
                  <span className="text-xs opacity-75">Available</span>
                </div>
                <div className="text-2xl font-bold">₹{userStats.walletBalance.toLocaleString()}</div>
                <div className="text-sm opacity-75">Wallet Balance</div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Crown className="w-6 h-6" />
                  <span className="text-xs opacity-75">Active</span>
                </div>
                <div className="text-lg font-bold">{userStats.subscriptionPlan}</div>
                <div className="text-sm opacity-75">Current Plan</div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Star className="w-6 h-6" />
                  <span className="text-xs opacity-75">Points</span>
                </div>
                <div className="text-2xl font-bold">{userStats.loyaltyPoints}</div>
                <div className="text-sm opacity-75">Loyalty Rewards</div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Heart className="w-6 h-6" />
                  <span className="text-xs opacity-75">Score</span>
                </div>
                <div className="text-2xl font-bold">{userStats.ecoScore}</div>
                <div className="text-sm opacity-75">Eco Impact</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h3>
              <div className="space-y-4">
                {recentBookings.slice(0, 3).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{booking.service}</h4>
                        <p className="text-sm text-gray-600">{booking.professional}</p>
                        <p className="text-xs text-gray-500">{booking.date} at {booking.time}</p>
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
        );

      case 'wellness':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Wellness Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {wellnessGoals.map((goal, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="url(#gradient-${index})"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${(goal.current / goal.target) * 251.2} 251.2`}
                        />
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" className="text-purple-500" stopColor="currentColor" />
                            <stop offset="100%" className="text-pink-500" stopColor="currentColor" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">
                          {Math.round((goal.current / goal.target) * 100)}%
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{goal.name}</h4>
                    <p className="text-sm text-gray-600">
                      {goal.current} / {goal.target} {goal.unit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {tabs.find(tab => tab.id === selectedTab)?.name}
            </h3>
            <p className="text-gray-600">Content for {selectedTab} tab will be implemented here.</p>
          </div>
        );
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
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <Gift className="w-4 h-4 mr-2 text-purple-600" />
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