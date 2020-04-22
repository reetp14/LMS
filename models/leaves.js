"use strict";
module.exports = (sequelize, DataTypes) => {
  const Leaves = sequelize.define(
    "Leaves",
    {
      Type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Leaves.associate = function (models) {
    // associations can be defined here
  };
  return Leaves;
};
