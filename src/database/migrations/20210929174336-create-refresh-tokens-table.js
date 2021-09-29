'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tokens', {
      refreshToken: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tokens');
  }
};
