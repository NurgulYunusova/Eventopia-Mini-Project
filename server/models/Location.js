const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  mapLink: { type: String }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
