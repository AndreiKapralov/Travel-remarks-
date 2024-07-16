"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Travel, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};


// "use strict";

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     queryInterface.bulkInsert("Products", [
//       {
//         userId: 1,
//         name: "Iphone 15 pro max",
//         photo:
//           "https://appdom.ru/image/cache/catalog/iphone/ip15/apple-iphone-15-blue-1x-1200x630.jpg",
//         description: "super phone",
//         price: "1500",
//       },
//     ]);
//   },

//   async down(queryInterface, Sequelize) {
//     queryInterface.bulkDelete("Products");
//   },
// };