// controllers/bookingController.js
const Booking = require('../models/booking');

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).send('Server Error');
  }
};

// Book a slot
exports.bookSlot = async (req, res) => {
  const { date, slot } = req.body;

  try {
    // Find booking for the selected date
    let booking = await Booking.findOne({ date });

    // If booking does not exist, create a new one
    if (!booking) {
      booking = new Booking({ date, slots: { afternoon: false, evening: false, night: false } });
    }

    // Update the selected slot
    booking.slots[slot] = true;

    await booking.save();
    res.status(200).send('Booking Successful');
  } catch (error) {
    console.error('Error booking slot:', error);
    res.status(500).send('Failed to book the slot');
  }
};
