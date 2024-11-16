import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white fixed top-0 w-full shadow-md z-20 font-sans">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Left Side: Logo Centered */}
                <div className="w-1/2 flex justify-center md:w-auto">
                    <Link to="/" className="text-3xl font-extrabold flex items-center">
                        <span className="text-red-500">Turf</span>
                        <span className="text-yellow-500">Hub</span>
                    </Link>
                </div>

                {/* Right Side: Navigation Links for Desktop */}
                <div className="w-1/2 flex justify-end space-x-8 text-lg md:w-auto md:flex md:space-x-4 md:text-base hidden md:block">
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
                    {/* Login Icon */}
                    <NavLink
                        to="/login"
                        className="hover:text-green-400 transition duration-300 transform hover:scale-105 font-bold text-xl"
                        activeClassName="text-green-400"
                    >
                        <FaUserCircle className='text-2xl'/>
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white text-3xl md:hidden"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu (Toggle visibility) */}
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
                    {/* Login Icon */}
                    <NavLink
                        to="/login"
                        className="py-2 text-lg hover:text-green-400 transition duration-300"
                        onClick={toggleMenu}
                    >
                        <FaUserCircle />
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
