"use strict";
module.exports = (sequelize, DataTypes) => {
  const EmployeeLeaves = sequelize.define(
    "EmployeeLeaves",
    {
      start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      e_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      l_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  EmployeeLeaves.associate = (models) => {
    // EmployeeLeaves.hasMany(
    //   models.Employees,
    //   { onDelete: "cascade" },
    //   { hooks: "true" }
    // );
    // EmployeeLeaves.hasMany(
    //   models.Leaves,
    //   { onDelete: "cascade" },
    //   { hooks: "true" }
    // );
  };
  return EmployeeLeaves;
};
