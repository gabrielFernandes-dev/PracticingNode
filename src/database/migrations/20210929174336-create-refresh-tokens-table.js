'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tokens', {
      refresh_token: {
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
