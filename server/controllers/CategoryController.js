const Category = require('../models/Category');
const { logger } = require("../config/logger");

const categoryController = {
    createCategory: async (req, res) => {
      try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
        logger.info('Category created successfully');
      } catch (error) {
        logger.error('Failed to create category', { error });
        res.status(500).json({ error: 'Failed to create category' });
      }
    },
  
    getCategory: async (req, res) => {
      try {
        const category = await Category.findById(req.params.id);
        if (!category) {
          logger.error('Category not found');
          return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
        logger.info('Category retrieved successfully');
      } catch (error) {
        logger.error('Failed to get category', { error });
        res.status(500).json({ error: 'Failed to get category' });
      }
    },
  
    getAllCategories: async (req, res) => {
      try {
        const categories = await Category.find();
        res.json(categories);
        logger.info('All categories retrieved successfully');
      } catch (error) {
        logger.error('Failed to get categories', { error });
        res.status(500).json({ error: 'Failed to get categories' });
      }
    },
  
    updateCategory: async (req, res) => {
      try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
          logger.error('Category not found');
          return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
        logger.info('Category updated successfully');
      } catch (error) {
        logger.error('Failed to update category', { error });
        res.status(500).json({ error: 'Failed to update category' });
      }
    },
  
    deleteCategory: async (req, res) => {
      try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
          logger.error('Category not found');
          return res.status(404).json({ error: 'Category not found' });
        }
        res.sendStatus(204);
        logger.info('Category deleted successfully');
      } catch (error) {
        logger.error('Failed to delete category', { error });
        res.status(500).json({ error: 'Failed to delete category' });
      }
    },
  
    getCategoryEvents: async (req, res) => {
      try {
        const category = await Category.findById(req.params.id);
        if (!category) {
          logger.error('Category not found');
          return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category.events);
        logger.info('Category events retrieved successfully');
      } catch (error) {
        logger.error('Failed to get category events', { error });
        res.status(500).json({ error: 'Failed to get category events' });
      }
    }
  };

module.exports = categoryController;
