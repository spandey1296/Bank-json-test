"use strict";
const bankInfoModel = require("../models/banks");
const Dao = require("./dao");
class BankInfoDao extends Dao {
  constructor() {
    super(bankInfoModel);
  }
}
module.exports = new BankInfoDao();