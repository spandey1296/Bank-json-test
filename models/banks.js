const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const BankDetail = sequelize.define("bank_detail", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field:"bank_id",
  },
  bankCode: {
    type: Sequelize.STRING,
    allowNull: false,
    field:"bank_code",
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true,
    field:"type",
  },
  ifsc: {
    type: Sequelize.STRING,
    allowNull:true,
    field:"ifsc",
     
  },
  micr: {
    type: Sequelize.STRING,
    allowNull: true,
    field:"micr",
  },
  iin: {
    type: Sequelize.STRING,
    allowNull:true,
    field:"iin",

  },
  apbs: {
    type: Sequelize.BOOLEAN,
    field:"apbs",
    defaultValue:false,

  },
  achCredit: {
    type: Sequelize.BOOLEAN,
    defaultValue:false,
    field:"ach_credit"
    
  },
  achDebit: {
    type: Sequelize.BOOLEAN,
    defaultValue:false,
    field:"ach_debit",
  },
   nachDebit: {
    type: Sequelize.BOOLEAN,
    defaultValue:false,
    field:"nach_debit",
    
  },
  upi: {
    type: Sequelize.BOOLEAN,
    defaultValue:false,
    field:"upi",
    
  },


},{
  timestamps: false,
  freezeTableName: true,
});

module.exports = BankDetail;
