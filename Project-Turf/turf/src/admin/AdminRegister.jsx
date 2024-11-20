import axios from 'axios';
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AdminBackground from '../assets/img/photo-1494199505258-5f95387f933c.jpeg';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before submission

    try {
      // Make sure the endpoint is correct (you might need to update it)
      const response = await axios.post('http://localhost:8000/api/auth/register', {
        email,
        username,
        password
      });

      if (response.status === 200) {
        alert('Admin registered successfully');
        navigate('/adminlogin'); // Redirect to admin login page after registration
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Registration failed. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${AdminBackground})` }}
    >
      {/* Overlay for background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Registration Form */}
      <div className="relative bg-white p-8 rounded-xl shadow-2xl w-full max-w-md z-10">
        {/* Form Header */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Admin <span className="text-red-500">Registration</span>
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Create your admin account to manage the dashboard.
        </p>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Registration Form */}
        <form className="space-y-6" onSubmit={handleRegister}>
          {/* Username Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500">
              <FaUser className="text-gray-400 ml-2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="flex-1 p-2 border-none focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500">
              <FaEnvelope className="text-gray-400 ml-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 p-2 border-none focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500">
              <FaLock className="text-gray-400 ml-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="flex-1 p-2 border-none focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-red-500/50 hover:from-red-600 hover:to-red-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link
              to="/adminlogin"
              className="text-red-500 hover:text-red-700 transition"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
