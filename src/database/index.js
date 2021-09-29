const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Connection = new Sequelize(dbConfig);
module.exports = Connection;
