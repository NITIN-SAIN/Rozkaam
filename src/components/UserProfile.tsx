import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Mail, Settings } from 'lucide-react';

export default function UserProfile() {
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    try {
      setLoading(true);
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600">Manage your account settings and preferences</p>
          </div>

          {/* Profile Information */}
          <div className="px-6 py-6">
            <div className="flex items-center space-x-6">
              <div className="h-20 w-20 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">
                  {currentUser?.displayName?.charAt(0) || currentUser?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {currentUser?.displayName || 'User'}
                </h2>
                <p className="text-gray-600">{currentUser?.email}</p>
                <p className="text-sm text-gray-500">
                  Member since {currentUser?.metadata.creationTime ? 
                    new Date(currentUser.metadata.creationTime).toLocaleDateString() : 
                    'Recently'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Display Name</p>
                  <p className="text-sm text-gray-600">{currentUser?.displayName || 'Not set'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email Address</p>
                  <p className="text-sm text-gray-600">{currentUser?.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Settings className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Account Status</p>
                  <p className="text-sm text-gray-600">
                    {currentUser?.emailVerified ? 'Verified' : 'Not verified'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Account Actions</h3>
                <p className="text-sm text-gray-600">Manage your account settings</p>
              </div>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {loading ? 'Signing out...' : 'Sign out'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 