"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Travel extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Travel.init(
    {
      userId: DataTypes.INTEGER,
      place: DataTypes.STRING,
      photo: DataTypes.STRING,
      description: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Travel",
    }
  );
  return Travel;
};
