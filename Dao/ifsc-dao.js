"use strict";
const ifscModel = require("../models/ifsc_code_list");
const Dao = require("./dao");
class IfscDao extends Dao {
  constructor() {
    super(ifscModel);
  }
}
module.exports = new IfscDao();