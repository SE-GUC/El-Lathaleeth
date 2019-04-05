const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const external_entity_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    required: true
  },
  fax: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  }
});
module.exports = external_entity = mongoose.model(
  "external_entities",
  external_entity_Schema
);
