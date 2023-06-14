const Location = require('../models/Location');
const { logger } = require("../config/logger");

const locationController = {
    createLocation: async (req, res) => {
      try {
        const { name, address, city, state, country, mapLink } = req.body;
        const location = new Location({
          name,
          address,
          city,
          state,
          country,
          mapLink
        });
        const savedLocation = await location.save();
        res.status(201).json(savedLocation);
        logger.info('Location created successfully');
      } catch (error) {
        logger.error('Internal server error while creating location', { error });
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  
    getAllLocations: async (req, res) => {
      try {
        const locations = await Location.find();
        res.json(locations);
        logger.info('All locations retrieved successfully');
      } catch (error) {
        logger.error('Internal server error while getting locations', { error });
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  
    getLocationById: async (req, res) => {
      try {
        const { locationId } = req.params;
        const location = await Location.findById(locationId);
        if (!location) {
          logger.error('Location not found');
          return res.status(404).json({ error: 'Location not found' });
        }
        res.json(location);
        logger.info('Location retrieved successfully');
      } catch (error) {
        logger.error('Internal server error while getting location', { error });
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  
    updateLocation: async (req, res) => {
      try {
        const { locationId } = req.params;
        const { name, address, city, state, country, mapLink } = req.body;
        const updatedLocation = await Location.findByIdAndUpdate(
          locationId,
          {
            name,
            address,
            city,
            state,
            country,
            mapLink
          },
          { new: true }
        );
        if (!updatedLocation) {
          logger.error('Location not found');
          return res.status(404).json({ error: 'Location not found' });
        }
        res.json(updatedLocation);
        logger.info('Location updated successfully');
      } catch (error) {
        logger.error('Internal server error while updating location', { error });
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  
    deleteLocation: async (req, res) => {
      try {
        const { locationId } = req.params;
        const deletedLocation = await Location.findByIdAndDelete(locationId);
        if (!deletedLocation) {
          logger.error('Location not found');
          return res.status(404).json({ error: 'Location not found' });
        }
        res.json({ message: 'Location deleted successfully' });
        logger.info('Location deleted successfully');
      } catch (error) {
        logger.error('Internal server error while deleting location', { error });
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };

module.exports = locationController;
