const Event = require('../models/Event');
const { logger } = require("../config/logger");



const eventController = {
  createEvent: async (req, res) => {
    try {
      const event = await Event.create(req.body);
      await event.populate('location categories'); // Populate location and categories
      res.status(201).json(event);
      logger.info('Event created successfully');
    } catch (error) {
      logger.error('Failed to create event', { error });
      res.status(500).json({ error: 'Failed to create event' });
    }
  },

  getEvent: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id)
        .populate('location categories')
        .exec();
      if (!event) {
        logger.error('Event not found');
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
      logger.info('Event retrieved successfully');
    } catch (error) {
      logger.error('Failed to get event', { error });
      res.status(500).json({ error: 'Failed to get event' });
    }
  },

  getAllEvents: async (req, res) => {
    try {
      const events = await Event.find()
        .populate('location categories')
        .exec();
      res.json(events);
      logger.info('All events retrieved successfully');
    } catch (error) {
      logger.error('Failed to get events', { error });
      res.status(500).json({ error: 'Failed to get events' });
    }
  },

  updateEvent: async (req, res) => {
    try {
      const event = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
        .populate('location categories')
        .exec();
      if (!event) {
        logger.error('Event not found');
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
      logger.info('Event updated successfully');
    } catch (error) {
      logger.error('Failed to update event', { error });
      res.status(500).json({ error: 'Failed to update event' });
    }
  },

  deleteEvent: async (req, res) => {
    try {
      const event = await Event.findByIdAndDelete(req.params.id);
      if (!event) {
        logger.error('Event not found');
        return res.status(404).json({ error: 'Event not found' });
      }
      res.sendStatus(204);
      logger.info('Event deleted successfully');
    } catch (error) {
      logger.error('Failed to delete event', { error });
      res.status(500).json({ error: 'Failed to delete event' });
    }
  },
};


module.exports = eventController;
