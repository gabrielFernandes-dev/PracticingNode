const User = require('../models/Users');

module.exports = {
  async findAll(req, res) {
    try {
      const filter = {
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
        attributes: { exclude: ['password'] },
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

  async findOne(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: { exclude: ['password'] },
      });
      if (!user)
        return res
          .status(200)
          .json({ status: 'success', message: 'User not found!' });
      res.status(200).json({
        status: 'success',
        data: user
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
