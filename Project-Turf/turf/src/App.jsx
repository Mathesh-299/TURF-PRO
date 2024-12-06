import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './page/About';
import AdminLogin from './page/AdminLogin';
import AdminRegister from './page/AdminRegister';
import Contact from './page/Contact';
import Home from './page/Home';
import Login from './page/Login';
import Main from './page/Main';
import Register from './page/Register';
import UserLogin from './page/userlogin';
import Sports from './sports/Sports';

const App = () => {


    return (
        <Router>
            <Navbar />
            <div className="pt-16">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/userlogin" element={<UserLogin />} />
                    <Route path="/main" element={<Main />} />
                    <Route path='/adminlogin' element={<AdminLogin/>}/>
                    <Route path='/adminregister' element={<AdminRegister/>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
