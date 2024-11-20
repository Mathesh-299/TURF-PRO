import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GroundBooking from '../booking/GroundBooking';
import AdminLogin from './admin/AdminLogin';
import AdminRegister from './admin/AdminRegister';
import Adminground from './component/Adminground';
import Navbar from './component/Navbar';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import Login from './page/Login';
import Main from './page/Main';
import Register from './page/Register';
import UserLogin from './page/UserLogin';
import Sports from './sports/Sports';

const App = () => {
    const [user, setUser] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const updateUser = () => setUser(localStorage.getItem('token'));
        window.addEventListener('storage', updateUser);
        return () => window.removeEventListener('storage', updateUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <Router>
            <Navbar user={user} onLogout={handleLogout} />
            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/userlogin" element={<UserLogin />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/bookings" element={<GroundBooking />} />
                    <Route path='/adminreg' element={<AdminRegister/>}/>
                    {user && (
                        <>
                            <Route path="/main" element={<Main />} />
                            <Route path="/adminground" element={<Adminground />} />
                        </>
                    )}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
