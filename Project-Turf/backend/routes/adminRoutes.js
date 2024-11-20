// adminRoutes.js
const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, getAdminDashboard } = require('../Controller/adminController');

// Admin Register
router.post('/auth/register', registerAdmin);

// Admin Login
router.post('/auth/login', loginAdmin);

// Admin Dashboard
router.get('/dashboard', getAdminDashboard);

module.exports = router;
