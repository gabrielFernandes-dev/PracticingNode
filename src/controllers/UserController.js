const bcrypt = require('bcrypt');
const User = require('../models/User');

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
        data: user,
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  async insertOne(req, res) {
    try {
      const { name, job, email, password, about } = req.body;
      if (!name || !job || !email || !password)
        return res
          .status(400)
          .json({ status: 'fail', message: 'BadRequest. Missing fields!' });
      const newUser = {
        name,
        job,
        about,
        email,
        password: await bcrypt.hash(password, 10),
      };
      const user = await User.create(newUser);
      const data = await User.findByPk(user.id, {
        attributes: { exclude: ['password'] },
      });
      res.status(201).json({
        status: 'success',
        data,
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  async updateOne(req, res) {
    try {
      const [user] = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (user === 0)
        return res
          .status(400)
          .json({ status: 'fail', message: 'Bad Request. User not found!' });
      res.status(200).json({
        status: 'success',
        data: await User.findByPk(+req.params.id),
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  async deleteOne(req, res) {
    try {
      const user = await User.destroy({
        where: {
          id: +req.params.id,
        },
      });
      if (user === 0)
        return res
          .status(400)
          .json({ status: 'fail', message: 'Bad Request. User not found!' });
      res.status(201).json({
        status: 'success',
        message: `User id=${req.params.id} was successfully deleted.`,
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
