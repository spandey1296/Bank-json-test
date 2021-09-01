"use strict";
const bankNameModel = require("../models/bank_detail");
const Dao = require("./dao");
class BankNameDao extends Dao {
  constructor() {
    super(bankNameModel);
  }
}
module.exports = new BankNameDao();