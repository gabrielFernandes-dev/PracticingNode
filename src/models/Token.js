const { Model, DataTypes } = require('sequelize');

class Token extends Model {
  static init(sequelize) {
    super.init(
      {
        refresh_token: { primaryKey: true, type: DataTypes.STRING },
      },
      {
        timestamps: false,
        sequelize,
      }
    );
  }
}

module.exports = Token;
