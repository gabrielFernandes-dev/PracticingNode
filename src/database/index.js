const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

/*
 * Models
 * */
const Token = require('../models/Token');
const User = require('../models/User');
const Connection = new Sequelize(dbConfig);

User.init(Connection);
Token.init(Connection);

module.exports = Connection;
