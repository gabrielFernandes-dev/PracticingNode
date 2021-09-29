const UserController = require('./controllers/UserController');

const routes = require('express').Router();

routes.route('/').get((_req, res) => {
  res.status(200).json({ message: 'Root route works!' });
});

/* 
* =============
* Users Route
* */
routes
  .route('/users')
  .get(UserController.findAll)
  .post(UserController.insertOne);
routes
  .route('/users/:id')
  .get(UserController.findOne)
  .put(UserController.updateOne)
  .patch(UserController.updateOne);

module.exports = routes;
