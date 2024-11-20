import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
// import UserMenu from './UserMenu';
import Login from '../page/Login';

const Navbar = ({ user, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white fixed top-0 w-full shadow-md z-20 font-sans">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Left Side: Logo */}
                <div className="w-1/2 flex justify-center md:w-auto">
                    <Link to="/" className="text-3xl font-extrabold flex items-center">
                        <span className="text-red-500">Turf</span>
                        <span className="text-yellow-500">Hub</span>
                    </Link>
                </div>

                {/* Right Side: Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink
                        to="/"
                        className="hover:text-green-400 transition duration-300 transform hover:scale-105 font-bold text-xl"
                        activeClassName="text-green-400"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="hover:text-green-400 transition duration-300 transform hover:scale-105 font-bold text-xl"
                        activeClassName="text-green-400"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="hover:text-green-400 transition duration-300 transform hover:scale-105 font-bold text-xl"
                        activeClassName="text-green-400"
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/sports"
                        className="hover:text-green-400 transition duration-300 transform hover:scale-105 font-bold text-xl"
                        activeClassName="text-green-400"
                    >
                        Booking
                    </NavLink>
                    {/* User Icon with Dropdown */}
                    <div className="relative">
                        {/* Dynamic Login/Logout */}
                        {user ? (
                            <button
                                onClick={onLogout}
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" className="text-white hover:text-yellow-400 transition duration-200">
                                <FaUserCircle className="w-6 h-6" aria-label="Login" />
                            </Link>
                        )}
                        {isUserMenuOpen && <Login />}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white text-3xl md:hidden"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center py-4 bg-gray-800 text-white">
                    <NavLink
                        to="/"
                        className="py-2 text-lg hover:text-green-400 transition duration-300"
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="py-2 text-lg hover:text-green-400 transition duration-300"
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="py-2 text-lg hover:text-green-400 transition duration-300"
                        onClick={toggleMenu}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/sports"
                        className="py-2 text-lg hover:text-green-400 transition duration-300"
                        onClick={toggleMenu}
                    >
                        Booking
                    </NavLink>
                    {/* User Menu in Mobile */}
                    <div className="py-2 text-lg">
                        <button
                            onClick={toggleUserMenu}
                            className="hover:text-green-400 transition duration-300 flex items-center"
                        >
                            <FaUserCircle className="mr-2" />
                            Login
                        </button>
                        {isUserMenuOpen && <Login />}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
