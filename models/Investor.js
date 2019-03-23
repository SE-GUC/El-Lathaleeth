const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestorSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"]
    },
    nationality: {
      type: String,
      required: true
    },
    investorType: {
      type: String,
      required: true,
      enum: ["individual", "company"]
    },
    typeOfID: {
      type: String,
      required: true,
      enum: ["passport", "id"]
    },
    IDNumber: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    },
    faxNumber: {
      type: String
    },
    creditCardNumber: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    capital: {
      type: Number,
      required: true
    },
    capitalCurrency: {
      type: String,
      required: true
    }
});

module.exports = Investor = mongoose.model("investor", InvestorSchema );
