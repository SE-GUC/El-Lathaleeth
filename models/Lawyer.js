const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LawSchema = new Schema({
  pending_forms: [],
  reviewed_forms: [],
  speciality: { type: String, required: true },
  education: { type: String, required: true }
});

module.exports = Lawyer = mongoose.model("lawyer", LawSchema);
