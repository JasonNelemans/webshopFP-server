"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: 'books',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'games',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'liquor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'music',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'clothes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'cars',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
