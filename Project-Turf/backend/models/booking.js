// models/bookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  slots: {
    afternoon: { type: Boolean, default: false },
    evening: { type: Boolean, default: false },
    night: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
