// src/pages/Login.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 

const Login = () => {
    const [selectedRole, setSelectedRole] = useState(null); 

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-800 to-red-500">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">TurfHub</h2>

                <div className="flex justify-center space-x-4 mb-8">
                    <NavLink
                        to="/adminlogin" 
                        className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform ${selectedRole === 'admin'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-blue-500'
                        }`}
                        onClick={() => setSelectedRole('admin')}
                    >
                        Admin Login
                    </NavLink>
                    <NavLink
                        to="/userlogin" // Navigate to UserLogin page
                        className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform ${selectedRole === 'user'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-green-500'
                        }`}
                        onClick={() => setSelectedRole('user')}
                    >
                        User Login
                    </NavLink>
                </div>

                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    {selectedRole === 'admin' ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Admin Login</h3>
                            <p className="text-lg text-gray-600">You will be redirected to the admin login page.</p>
                        </div>
                    ) : selectedRole === 'user' ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">User Login</h3>
                            <p className="text-lg text-gray-600">You will be redirected to the user login page.</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h3 className="text-xl text-gray-600 mb-4">Select a role to log in.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
