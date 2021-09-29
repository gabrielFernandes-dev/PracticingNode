const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

/*
 * Models
 * */
const User = require('../models/Users');
const Connection = new Sequelize(dbConfig);

User.init(Connection);

module.exports = Connection;
