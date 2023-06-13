const express = require('express');
const CategoryRoutes = express.Router();
const categoryController = require('../controllers/CategoryController');


CategoryRoutes.get('/', categoryController.getAllCategories);
CategoryRoutes.get('/:id', categoryController.getCategory);
CategoryRoutes.get('/:id', categoryController.getCategoryEvents);
CategoryRoutes.post('/', categoryController.createCategory);
CategoryRoutes.patch('/:id', categoryController.updateCategory);
CategoryRoutes.delete('/', categoryController.deleteCategory);

module.exports = {
    CategoryRoutes
};