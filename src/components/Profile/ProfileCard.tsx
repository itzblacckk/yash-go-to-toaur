import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Settings, User, Calendar, Mountain, Heart, Bell } from 'lucide-react';

const ProfileCard = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const userStats = [
    { icon: Calendar, label: 'Tours Booked', value: '3' },
    { icon: Mountain, label: 'Peaks Climbed', value: '7' },
    { icon: Heart, label: 'Favorite Tours', value: '4' }
  ];

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Profile Card */}
      <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
          ) : (
            <User className="w-20 h-20 p-4 bg-gray-100 rounded-full" />
          )}
          <div>
            <h2 className="text-2xl font-bold">{user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-green-700 mt-1">Premium Member</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {userStats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-green-700" />
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors">
            <Settings className="w-4 h-4" />
            <span>Account Settings</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors">
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </button>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center space-x-2 bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Upcoming Tours */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Upcoming Tours</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="font-semibold">Alpine Adventure Trek</div>
            <div className="text-sm text-gray-600">March 15, 2024</div>
            <div className="text-sm text-green-700 mt-2">Confirmed</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="font-semibold">Summit Expedition</div>
            <div className="text-sm text-gray-600">April 22, 2024</div>
            <div className="text-sm text-yellow-600 mt-2">Pending</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;