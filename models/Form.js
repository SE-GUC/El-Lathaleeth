const uuid = require("uuid");
const Address = require("../models/Address");

class Form {
  constructor(
    bitIL,
    law,
    legalForm,
    formType,
    arabicName,
    englishName,
    address,
    town,
    city,
    phone,
    fax,
    investor,
    capitalCurr,
    capitalVal,
    boardOfDirectors
  ) {
    this.formType = formType;
    this.location = new Address(address, town, city); //location contain town,city,address
    this.arabicName = arabicName;
    this.englishName = englishName;
    this.phone = phone;
    this.fax = fax;
    this.investor = investor; //investor array of info about current user
    this.boardOfDirectors = boardOfDirectors; //table with BOD info
    this.capitalCurr = capitalCurr;
    this.capitalVal = capitalVal;
    this.law = law;
    this.legalForm = legalForm;
    this.createdOn = new Date();
    this.lastTouch = null;
    this.status = null;
    this.deadline = "handle deadline later";
    this.id = uuid.v4();
    this.bitIL = bitIL;
    this.comments = [];
  }
}
module.exports = Form;
