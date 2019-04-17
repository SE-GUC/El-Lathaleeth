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
    enum: ["male", "female",null,""]
  },
  nationality: {
    type: String,
    required: true
  },
  typeOfID: {
    type: String,
    enum: ["passport", "national id",null,""]
  },
  IDNumber: {
    type: String
  },
  dateOfBirth: {
    type: Date
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
    type: String  },
  investorFormID:{
    type: String
  }
});

module.exports = Investor = mongoose.model("investor", InvestorSchema);
