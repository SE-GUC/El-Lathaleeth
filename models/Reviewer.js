const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formScheme = require("./Form").schema;

const RevSchema = new Schema({
  pending_forms: [{ type: formScheme }],
  reviewed_forms: [{ type: formScheme }]
});

module.exports = Reviewer = mongoose.model("reviewer", RevSchema);
