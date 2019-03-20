const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  emp_details: [],
  _id: { type: Schema.ObjectId, auto: true },
  joined_on: {
    type: Date,
    required: true
  }
});

module.exports = Entity_Emp = mongoose.model("entity_emp", EmpSchema);
