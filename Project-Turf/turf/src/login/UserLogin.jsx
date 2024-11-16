import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert("Logged in successfully!");
        navigate('/');
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        alert("Registered successfully!");
        navigate('/');
    };
    const closeForm = () => {
        setIsLogin(true); 
        navigate('/login'); 
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 px-4 sm:px-6">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm relative">
         
                <button
                    onClick={closeForm}
                    className="absolute top-3 right-3 text-xl text-gray-600 hover:text-gray-800"
                >
                    <FaTimes />
                </button>

                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 ">TurfHub</h2>
                <div className="flex justify-center space-x-4 mb-6 ">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`px-5 py-2 rounded-lg text-lg font-semibold transition duration-300 transform ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500'}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`px-5 py-2 rounded-lg text-lg font-semibold transition duration-300 transform ${!isLogin ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-500'}`}
                    >
                        Register
                    </button>
                </div>
                <div className="p-5 rounded-lg shadow-md bg-gray-50">
                    {isLogin ? (
                        <form onSubmit={handleLoginSubmit}>
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">Login</h3>
                            <div className="mb-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm outline-none focus:border-b-2 active:border-purple-700 hover:border-purple-700"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm outline-none focus:border-b-2 hover:border-purple-700"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg font-semibold"
                            >
                                Login
                            </button>
                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-600">Don't have an account? <button onClick={() => setIsLogin(false)} className="text-blue-500 hover:text-blue-700">Register here</button></p>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleRegisterSubmit} className='pb-8'>
                            <h3 className="text-xl font-semibold text-green-600 mb-3">Register</h3>

                            <div className="mb-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm outline-none focus:border-b-2 hover:border-purple-700"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    id="team"
                                    name="team"
                                    placeholder="Enter your team name (if applicable)"
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm outline-none focus:border-b-2 hover:border-purple-700"
                                />
                            </div>

                            <div className="mb-2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm outline-none focus:border-b-2 hover:border-purple-700"
                                />
                            </div>

                            <div className="mb-2">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm outline-none focus:border-b-2 hover:border-purple-700"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                    placeholder="Confirm your password"
                                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-sm outline-none focus:border-b-2 hover:border-purple-700"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 mt-3 bg-green-600 text-white rounded-lg font-semibold"
                            >
                                Register
                            </button>
                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-600">Already have an account? <button onClick={() => setIsLogin(true)} className="text-blue-500 hover:text-blue-700">Login here</button></p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
