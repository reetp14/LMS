"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define("Employees", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Employees.associate = (models) => {};
  return Employees;
};
