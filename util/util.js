const axios = require('axios');
class Util {
static async getRazorPayIfscDetails(ifsc) {
    try {
      const details = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
      return details.data;
    } catch (e) {
      throw e;
    }
  }
  static get_bank_details(bank){
    return {
      ifscCode: bank.IFSC,
      bankName: bank.BANK,
      branchName: bank.BRANCH,
      bankCode: bank.BANKCODE,
      address: bank.ADDRESS,
      centre: bank.CENTRE,
      city: bank.CITY,
      district: bank.DISTRICT,
      state: bank.STATE,
      contact: bank.CONTACT,
      micr: bank.MICR,
      swift: bank.SWIFT,
      upi: bank.UPI,
      imps: bank.IMPS,
      neft: bank.NEFT,
      rtgs: bank.RTGS
    }
  }
}
module.exports = Util;