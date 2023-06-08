const Events = require('../models/Events');

exports.getAllEvents = (req, res) => {
    Events.find()
        .then(events => {
            res.status(200).json(events);
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while fetching events.' });
        });
};


exports.getEventById = (req, res) => {
    const eventId = req.params.id;

    Events.findById(eventId)
        .then(event => {
            if (!event) {
                return res.status(404).json({ message: 'Event not found.' });
            }
            res.status(200).json(event);
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while fetching the event.' });
        });
};

exports.addEvent = (req, res) => {
    const { title, category, description, startDate, endDate, location, ticketPrice } = req.body;

    const newEvent = new Events({
        title: title,
        category: category,
        description: description,
        startDate: startDate,
        endDate: endDate,
        location: location,
        ticketPrice: ticketPrice
    });

    newEvent.save()
        .then(event => {
            res.status(201).json(event);
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while adding the event.' });
        });
};