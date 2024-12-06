import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for password visibility
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [usernameExists, setUsernameExists] = useState(false); // To check username existence
    const navigate = useNavigate();

    // Password strength check
    const checkPasswordStrength = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    // Form validation
    const validateForm = () => {
        if (!username || !password || !confirmPassword) {
            setErrorMessage("All fields are required");
            return false;
        }
        if (!checkPasswordStrength(password)) {
            setErrorMessage("Password must be at least 8 characters long and contain both letters and numbers.");
            return false;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return false;
        }
        if (usernameExists) {
            setErrorMessage("Username is already taken");
            return false;
        }
        return true;
    };

    const handleUsernameChange = async (e) => {
        setUsername(e.target.value);
        try {
            const response = await axios.post("http://localhost:8000/api/admin/check-username", { username: e.target.value });
            setUsernameExists(response.data.exists);
        } catch (err) {
            setUsernameExists(false); // Reset on error
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:8000/api/admin/register", {
                username,
                password,
            });
            setSuccessMessage(response.data.message);
            setUsername("");
            setPassword("");
            setConfirmPassword("");
        } catch (err) {
            setErrorMessage(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-teal-200 to-lime-200 flex justify-center items-center">
            <div className="flex max-w-6xl w-full bg-white p-8 rounded-xl shadow-lg">
                {/* Left side - Form */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-semibold text-center text-gray-700 mb-6">Admin Registration</h1>
                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Username Input */}
                        <div className="relative">
                            <label htmlFor="username" className="block text-gray-600 font-medium">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="Enter username"
                                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-300 focus:ring-blue-600"
                            />
                            {usernameExists && (
                                <p className="text-sm text-red-500 mt-2">This username is already taken</p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-300 focus:ring-blue-600"
                            />
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="relative">
                            <label htmlFor="confirmPassword" className="block text-gray-600 font-medium">Confirm Password</label>
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-300 focus:ring-blue-600"
                            />
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            >
                                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`w-full p-3 mt-4 text-white font-semibold rounded-md ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"} transition-all duration-300 ease-in-out`}
                            disabled={loading}
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>

                    {/* Error or Success Message */}
                    {errorMessage && (
                        <div className="mt-4 text-red-500 text-center">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    {successMessage && (
                        <div className="mt-4 text-green-500 text-center">
                            <p>{successMessage}</p>
                        </div>
                    )}

                    {/* Link to Login Page */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <span
                                className="text-blue-600 cursor-pointer hover:underline"
                                onClick={() => navigate("/adminlogin")}
                            >
                                Login here
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right side - Admin Related Info */}
                <div className="hidden md:block w-1/2 pl-12 space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-700">Welcome to TurfHub Admin</h2>
                    <p className="text-gray-600">
                        Manage your TurfHub services and bookings efficiently. As an admin, you have the ability to control user access, manage bookings, and ensure everything runs smoothly for all users.
                    </p>
                    <p className="text-gray-600">
                        Please fill out the form on the left to register as an admin and gain access to all admin features.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminRegister;
