const Sequelize = require("sequelize");

const db = new Sequelize("kyc_data", "root", "Herbalife@47", {
  dialect: "mysql",
  host: "localhost",
  pool: {
    max: 1000,
    min: 0,
    idle: 1000000,
    acquire: 1000*10000,
    sync: {force: true},
    timestamps: false
  },
  
 
});











module.exports = db;
