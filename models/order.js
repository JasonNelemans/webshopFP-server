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
    order.belongsTo(models.user);
    order.belongsToMany(models.product, {
      through: "orderProducts",
      foreignKey: "orderId"
    });
  };
  return order;
};
