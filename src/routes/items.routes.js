const router = require('express').Router();
const controllers = require('../controllers');
const itemsController = require('../controllers/item');

router.get('', itemsController.getFilteredItems);
router.get('/:id', itemsController.getItemById);

module.exports = router;