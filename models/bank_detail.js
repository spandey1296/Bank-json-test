const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const BankDetail = sequelize.define("bank_name_list", {
  
  bankCode: {
    type: Sequelize.STRING,
    allowNull: false,
    field:"bank_code",
    primaryKey: true,
  },
  bankName: {
    type: Sequelize.STRING,
    allowNull: false,
    field:"bank_name",
  },
},{
  timestamps: false,
  freezeTableName: true, 
});

module.exports = BankDetail;
