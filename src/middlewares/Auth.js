const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Token = require('../models/Token');

const genAccessToken = user =>
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3m' });

module.exports = {
  async authenticate(req, res) {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({
          status: 'fail',
          message: 'Bad Request. Missing email or password field!',
        });

      const { dataValues: user } = await User.findOne({
        where: {
          email: `${req.body.email}`,
        },
      });
      const teste = await bcrypt.compare(req.body.password, user.password);
      console.log('teste', teste);
      if (teste) {
        const accessToken = genAccessToken({ id: user.id, user: user.name });
        const refreshToken = jwt.sign(
          { user: user.name, id: user.id },
          process.env.REFRESH_TOKEN_SECRET
        );
        return res.status(200).json({
          status: 'Login successful',
          accessToken,
          refreshToken,
        });
      }
      res.status(400).json({
        status: 'fail',
        message: 'Invalid credentials!',
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
