const Sequelize = require("sequelize");

const db = new Sequelize("cardplay", "appuser", "fF6XsK-ndQuLp2at", {
  dialect: "mariadb",
  host: "flush2.a52p.private",
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
