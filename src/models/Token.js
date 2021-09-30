const { Model, DataTypes } = require('sequelize');

class Token extends Model {
  static init(sequelize) {
    super.init(
      {
        refreshToken: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Token;