const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formScheme = require("./Form").schema


const LawSchema = new Schema({
  pending_forms: [{type:formScheme}],
  reviewed_forms: [{ type: formScheme }],
  speciality: { type: String, required: true },
  education: { type: String, required: true }
});

module.exports = Lawyer = mongoose.model("lawyer", LawSchema);
