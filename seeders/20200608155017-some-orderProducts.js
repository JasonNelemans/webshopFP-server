"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orderProducts",
      [
        {
          orderId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 13,
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
