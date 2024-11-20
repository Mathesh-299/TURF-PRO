import axios from 'axios';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaTimes, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AdminBackground from '../assets/img/photo-1494199505258-5f95387f933c.jpeg';

const AdminLogin = () => {
    const navigate = useNavigate();

    // States for form inputs, toggle, and error messages
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    // Toggle password visibility
    const togglePassword = () => setShowPassword(!showPassword);

    // Handle form close button
    const handleClose = () => navigate('/');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state before submission

        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', {
                email,
                password,
            });

            // Store the JWT token in localStorage
            localStorage.setItem('token', response.data.token);

            // Redirect to the admin dashboard
            navigate('/admin/dashboard');
        } catch (err) {
            const errorMessage =
                err.response?.status === 401
                    ? 'Invalid credentials. Please try again.'
                    : 'Something went wrong. Please try later.';
            setError(errorMessage);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${AdminBackground})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative bg-white p-8 rounded-xl shadow-2xl w-full max-w-md z-10">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
                    aria-label="Close"
                >
                    <FaTimes />
                </button>

                {/* Form Header */}
                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Admin <span className="text-red-500">Login</span>
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Welcome back! Enter your credentials to access the admin dashboard.
                </p>

                {/* Error message */}
                {error && (
                    <p className="text-red-500 text-center mb-4 animate-pulse">
                        {error}
                    </p>
                )}

                {/* Login Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <div className="flex items-center border rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500">
                            <FaUser className="text-gray-400 ml-2" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-1 p-2 border-none focus:outline-none"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="text-gray-400 ml-2 focus:outline-none"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-red-500/50 hover:from-red-600 hover:to-red-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Forgot Password Link */}
                <div className="mt-4 text-center">
                    <a
                        href="/forgot-password"
                        className="text-sm text-gray-500 hover:text-red-500 transition"
                    >
                        Forgot Password?
                    </a>
                </div>

                {/* Register Link */}
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-500">Don't have an account?</span>
                    <Link to={"/adminreg"}
                        className="text-sm text-blue-500 hover:text-blue-700 transition"
                    >
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
