const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RevSchema = new Schema({
  pending_forms: [],
  reviewed_forms: []
});

module.exports = Reviewer = mongoose.model("reviewer", RevSchema);
