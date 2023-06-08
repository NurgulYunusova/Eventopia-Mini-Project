const mongoose = require('mongoose');

// Define the event schema
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    location: {
        address: {
            type: String,
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
});

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;
