import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ProfileCard from '../components/Profile/ProfileCard';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Your Profile</h1>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;