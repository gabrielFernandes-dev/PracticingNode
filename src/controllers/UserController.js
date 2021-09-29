const User = require('../models/Users');

module.exports = {
  async findAll(req, res) {
    try {
      const filter = {
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
      };
      const users = await User.findAll(filter);
      res.status(200).json({
        status: 'success',
        data: users,
        total: users.length,
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
