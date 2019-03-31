const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formScheme = require("./Form").schema;

const LawSchema = new Schema({
  pending_forms: [{
    type: Schema.Types.ObjectId,
    ref: 'forms'
     }],
  reviewed_forms: [{
    type: Schema.Types.ObjectId,
    ref: 'forms'
  }],
  to_be_filled_for: [{
    type: Schema.Types.ObjectId,
    ref: 'investor'
  }],
  filled_forms: [{
    type: Schema.Types.ObjectId,
    ref: 'forms'
  }],
  speciality: { type: String, required: true },
  education: { type: String, required: true }
});

module.exports = Lawyer = mongoose.model("lawyer", LawSchema);
