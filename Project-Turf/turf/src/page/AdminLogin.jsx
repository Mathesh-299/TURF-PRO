import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false); // Loading state for button
    const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility toggle state
    const navigate = useNavigate();

    // Form validation
    const validateForm = () => {
        if (!username || !password) {
            setErrorMessage("Both username and password are required");
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; // Only proceed if form is valid

        setLoading(true);
        setErrorMessage(""); // Reset any previous error messages

        try {
            const response = await axios.post("http://localhost:8000/api/admin/login", {
                username,
                password
            });

            const { token } = response.data;
            localStorage.setItem("adminToken", token); // Store JWT token in localStorage
            navigate("/sports"); // Redirect to sports page
        } catch (err) {
            setErrorMessage("Invalid credentials. Please try again.");
        } finally {
            setLoading(false); // Hide loading spinner after request completion
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#a8c0ff] via-[#f0f4f8] to-[#b4e1ff]">
            <div className="flex w-full max-w-screen-lg justify-between items-center bg-white/35 p-12 rounded-3xl shadow-xl relative overflow-hidden">
                {/* Left Side - Admin Login Form */}
                <div className="w-full md:w-1/2 p-8 z-10">
                    <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
                        Admin Login
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-8">
                        {/* Username Input */}
                        <div className="relative">
                            <label htmlFor="username" className="block text-lg font-semibold text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full p-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
                            />
                        </div>

                        {/* Password Input */}
                        {/* Password Input */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full p-4 text-lg rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
                            />
                            <span
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                aria-label="Toggle password visibility"
                            >
                                {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                            </span>
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`w-full p-4 text-white font-semibold rounded-lg ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"} transition-all duration-300 ease-in-out`}
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    {/* Error Message */}
                    {errorMessage && (
                        <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
                    )}

                    {/* Link to Registration Page */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <span
                                className="text-blue-600 cursor-pointer hover:underline"
                                onClick={() => navigate("/adminregister")}
                            >
                                Register here
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right Side - Admin Related Content */}
                <div className="hidden md:block w-1/2 bg-gradient-to-tl from-[#ffdde1] via-[#ffdde1] to-[#b5e1f6] text-gray-800 p-8 rounded-3xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">Welcome to the Admin Panel</h2>
                    <p className="text-lg mb-4">Manage and control the Turf Hub efficiently. As an admin, you can monitor bookings, manage sports categories, and more.</p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Manage Turf Bookings</li>
                        <li>Add New Sports Categories</li>
                        <li>View User Activities</li>
                        <li>Control Turf Locations</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
