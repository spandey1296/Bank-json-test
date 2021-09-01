"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const ifsc_code_list = sequelize.define(
  "ifsc_code_list",
  {
    ifscId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "ifsc_id",
    },
    ifscCode: {
      type: Sequelize.STRING,
      field: "ifsc_code",
      allowNull: false,
    },

    bankName: {
      type: Sequelize.STRING,
      field: "bank_name",
      allowNull: false,
    },
    branchName: {
      type: Sequelize.STRING,
      field: "branch_name",
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM("active", "inactive", "deleted"),
      field: "status",
      allowNull: false,
      defaultValue: "active",
    },
    bankCode: {
      type: Sequelize.STRING,
      field: 'bank_code',
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      field: 'address',
      allowNull: true
    },
    centre: {
      type: Sequelize.STRING,
      field: 'centre',
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      field: 'city',
      allowNull: true
    },
    district: {
      type: Sequelize.STRING,
      field: 'district',
      allowNull: true
    },
    state: {
      type: Sequelize.STRING,
      field: 'state',
      allowNull: true
    },
    contact: {
      type: Sequelize.STRING,
      field: 'contact',
      allowNull: true
    },
    micr: {
      type: Sequelize.STRING,
      field: 'micr',
      allowNull: true
    },
    swift: {
      type: Sequelize.STRING,
      field: 'swift',
      allowNull: true
    },
    upi: {
      type: Sequelize.BOOLEAN,
      field: 'upi',
      defaultValue: false
    },
    imps: {
      type: Sequelize.BOOLEAN,
      field: 'imps',
      defaultValue: false
    },
    neft: {
      type: Sequelize.BOOLEAN,
      field: 'neft',
      defaultValue: false
    },
    rtgs: {
      type: Sequelize.BOOLEAN,
      field: 'rtgs',
      defaultValue: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true, // Model tableName will be the same as the model name
  }
);

module.exports = ifsc_code_list;
