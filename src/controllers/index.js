const itemController = require('./item');

const controllers = {
    index: (req, res) => {
        res.status(200).json({ message: 'API iniciada' })
    },
    item: itemController,
};

module.exports = controllers;