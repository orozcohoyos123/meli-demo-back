const controllers = require('../controllers');
const itemsRoutes = require('./items.routes');
const categoriesRoutes = require('./categories.routes');

const routes = (app) => {
    app.route('/').get(controllers.index);
    app.use('/items', itemsRoutes);
    //app.use('/categories', categoriesRoutes);
}

module.exports = routes;