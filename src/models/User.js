const { Model, DataTypes } = require('sequelize');
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        job: DataTypes.STRING,
        about: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
