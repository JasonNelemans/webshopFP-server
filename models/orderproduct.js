"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderProduct = sequelize.define(
    "orderProduct",
    {
      orderId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  orderProduct.associate = function (models) {
    orderProduct.belongsTo(models.order);
    orderProduct.belongsTo(models.product);
  };
  return orderProduct;
};
