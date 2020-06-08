"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          email: 'stevejobs@jobs.com',
          firstName: 'Steve',
          lastName: 'Jobs', 
          password: '1234',
          isModerator: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'tupacshakur@2pac.com',
          firstName: 'Tupac',
          lastName: 'Shakur', 
          password: '1234',
          isModerator: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'elonmusk@tesla.com',
          firstName: 'Elon',
          lastName: 'Musk', 
          password: '1234',
          isModerator: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'moderator@man.com',
          firstName: 'Moderator',
          lastName: 'Man', 
          password: '4321',
          isModerator: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  },
};
