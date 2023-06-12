const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  cover: [{ type: String }],
  image: { type: String },
  capacity: { type: Number, required: true }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event; 
