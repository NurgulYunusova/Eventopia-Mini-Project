const express = require('express');
const EventRoutes = express.Router();
const eventController = require('../controllers/EventControllers');


EventRoutes.get('/', eventController.getAllEvents);
EventRoutes.get('/:id', eventController.getEvent);
EventRoutes.post('/', eventController.createEvent);
EventRoutes.patch('/', eventController.updateEvent);
EventRoutes.delete('/', eventController.deleteEvent);

module.exports = {
    EventRoutes
};
