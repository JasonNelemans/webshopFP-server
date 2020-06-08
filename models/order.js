"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  order.associate = function (models) {
    // associations can be defined here
  };
  return order;
};
