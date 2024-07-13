"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Travels", [
      {
        userId: 1,
        place: "Red square",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrWlGRFKAr9G9jyueX-Eu9DzkmTjyiHGxFw&s",
        description: "recommended ti visit",
        location: "Ruussia, Moscow",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Travels");
  },
};
