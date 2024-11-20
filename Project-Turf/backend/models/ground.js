const mongoose = require('mongoose');

const GroundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  schedule: { type: String, required: true },
});

module.exports = mongoose.model('Ground', GroundSchema);
