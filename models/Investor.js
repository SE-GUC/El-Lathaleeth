const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestorSchema = new Schema({
  investorType: {
    type: String,
    required: true,
    enum: ["individual", "company"]
  },
  name:{
    type:String,
    required:true
  },
  gender: {
    type: String,
    enum: ["male", "female"]
  },
  nationality: {
    type: String,
    required: true
  },
  typeOfID: {
    type: String,
    enum: ["passport", "id"]
  },
  IDNumber: {
    type: String
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
  password: {
    type: String
  },
  capital: {
    type: Number,
    required: true
  },
  capitalCurrency: {
    type: String,
    required: true
  }, 
  investorFormID:{
    type: String
  }
});

module.exports = Investor = mongoose.model("investor", InvestorSchema);
