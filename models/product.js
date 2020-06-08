"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stockAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  product.associate = function (models) {
    // associations can be defined here
  };
  return product;
};
