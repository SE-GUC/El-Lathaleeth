const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formScheme = require("./Form").schema;

const RevSchema = new Schema({
  pending_forms: [{
    type: Schema.Types.ObjectId,
    ref: 'forms'
    
  }],
  reviewed_forms: [{
    type: Schema.Types.ObjectId,
    ref: 'forms'
    
  }]
});

module.exports = Reviewer = mongoose.model("reviewer", RevSchema);
