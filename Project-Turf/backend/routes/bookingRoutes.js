// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const { getBookings, bookSlot } = require('../Controller/bookingController');

// Route to fetch all bookings
router.get('/', getBookings);

// Route to book a slot
router.post('/', bookSlot);

module.exports = router;
