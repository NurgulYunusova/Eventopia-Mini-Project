const Event = require('../models/Event');

const eventController = {
  createEvent: async (req, res) => {
    try {
      const event = await Event.create(req.body);
      await event.populate('location categories'); // Populate location and categories
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create event' });
    }
  },

  getEvent: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id)
        .populate('location categories')
        .exec();
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get event' });
    }
  },

  getAllEvents: async (req, res) => {
    try {
      const events = await Event.find()
        .populate('location categories')
        .exec();
      res.json(events);
    } catch (error) {
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
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update event' });
    }
  },

  deleteEvent: async (req, res) => {
    try {
      const event = await Event.findByIdAndDelete(req.params.id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete event' });
    }
  },
};

module.exports = eventController;
