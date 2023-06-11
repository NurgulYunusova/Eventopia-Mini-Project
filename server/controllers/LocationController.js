const Location = require('../models/Location');

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
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getAllLocations: async (req, res) => {
        try {
            const locations = await Location.find();
            res.json(locations);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getLocationById: async (req, res) => {
        try {
            const { locationId } = req.params;
            const location = await Location.findById(locationId);
            if (!location) {
                return res.status(404).json({ error: 'Location not found' });
            }
            res.json(location);
        } catch (error) {
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
                return res.status(404).json({ error: 'Location not found' });
            }
            res.json(updatedLocation);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteLocation: async (req, res) => {
        try {
            const { locationId } = req.params;
            const deletedLocation = await Location.findByIdAndDelete(locationId);
            if (!deletedLocation) {
                return res.status(404).json({ error: 'Location not found' });
            }
            res.json({ message: 'Location deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = locationController;
