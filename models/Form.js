const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const investorSchema = require("./Investor").schema;
const BoardOfDirectorSchema = require("./BoardOfDirector").schema;
const commentSchema = require("./Comment").schema;

const FormSchema = new Schema({
  law: {
    type: String,
    required: true
  },
  caseNumber: {
    type: Number,
    required: true
  },
  legalForm: {
    type: String,
    required: true
  },
  formType: {
    type: String,
    required: true,
    enum: ["SPC", "SSC"]
  },
  arabicName: {
    type: String,
    required: true
  },
  englishName: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  fax: {
    type: String
  },
  boardOfDirectors: [{ type: BoardOfDirectorSchema, required: true }],

  capitalCurr: {
    type: String,
    required: true
  },
  capitalVal: {
    type: Number,
    required: true
  },
  createdOn: {
    type: Date,
    required: true
  },
  lastTouch: {
    type: String
  },
  status: {
    type: String,
    enum: [
      "posted",
      "lawyer check",
      "reviewer check",
      "company declared",
      "awaiting payment",
      "paid",
      "pending reviewer",
      "pending lawyer"
    ]
  },
  deadline: {
    type: Date
  },
  bitIL: {
    type: Number
  },
  comments: [
    {
      type: commentSchema
    }
  ],
  cost: {
    type: Number
  },
  investor: { type: investorSchema, required: true }
});

module.exports = Form = mongoose.model("forms", FormSchema);
