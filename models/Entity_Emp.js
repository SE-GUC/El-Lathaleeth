const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LawSchema = require("./Lawyer").schema;
const AdminSchema = require("./Admin").schema;
const RevSchema = require("./Reviewer").schema;
const EmpSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },
  emp_type: {
    type: String,
    required: true,
    enum: ["Lawyer", "Investor", "Admin"]
  },
  lawyer_details: { type: LawSchema },
  reviewer_details: { type: RevSchema },
  admin_details: { type: AdminSchema },
  _id: { type: Schema.Types.ObjectId, auto: true },
  joined_on: {
    type: Date,
    required: true
  }
});

module.exports = Entity_Emp = mongoose.model("entity_emp", EmpSchema);
