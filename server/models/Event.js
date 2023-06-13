const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  cover: [{ type: String }],
  image: {
    type: [String],
    default: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  capacity: { type: Number, required: true },
  rating: { type: Number, default: 0 } 
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
