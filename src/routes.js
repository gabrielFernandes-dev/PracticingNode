const UserController = require('./controllers/UserController');

const routes = require('express').Router();

routes.route('/').get((_req, res) => {
  res.status(200).json({ message: 'Root route works!' });
});

routes
  .route('/users')
  .get(UserController.findAll);

module.exports = routes;
