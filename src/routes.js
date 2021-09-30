const StarWarsAPIController = require('./controllers/StarWarsAPIController');
const UserController = require('./controllers/UserController');
const { authorize } = require('./middlewares/Auth');
const routes = require('express').Router();

routes.route('/').get((_req, res) => {
  res.status(200).json({ message: 'Root route works!' });
});

/* *
 * =============
 * Users Route
 */
routes
  .route('/users')
  .get(UserController.findAll)
  .post(UserController.insertOne);
routes
  .route('/users/:id')
  .get(UserController.findOne)
  .put(UserController.updateOne)
  .patch(UserController.updateOne)
  .delete(UserController.deleteOne);

/* *
 * =============
 * Star Wars Integration Route
 */
routes.route('/sw/people/:id').get(authorize, StarWarsAPIController.getCharacter);
routes.route('/sw/planets/:id').get(authorize, StarWarsAPIController.getPlanet);
routes.route('/sw/starships/:id').get(authorize, StarWarsAPIController.getStarship);

module.exports = routes;
