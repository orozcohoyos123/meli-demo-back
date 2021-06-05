const itemController = require('./item.controller')

const controllers = {
    getFilteredItems: itemController.getFilteredItems,
    getItemById: itemController.getItemById,
}

module.exports = controllers; 