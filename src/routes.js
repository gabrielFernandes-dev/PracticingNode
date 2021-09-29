const routes = require('express').Router();

routes.route('/').get((_req, res) => {
  res.status(200).json({ message: 'Root route works!' });
});

module.exports = routes;
