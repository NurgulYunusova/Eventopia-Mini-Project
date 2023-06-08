const express = require('express');
const EventRoutes = express.Router();
const eventController = require('../controllers/EventControllers');


EventRoutes.get('/', eventController.getAllEvents);
EventRoutes.get('/:id', eventController.getEventById);
EventRoutes.post('/', eventController.addEvent);

module.exports = {
    EventRoutes
};
