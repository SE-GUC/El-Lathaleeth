const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardOfDirectorSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true
  },
  idNum: {
    type: String,
    min: 8,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  position: {
    type: String
  },
  typeID: {
    type: String,
    enum: ["passport", "id"],
    required: true
  },
  typeInves: {
    type: String,
    enum: ["individual", "company"],
    required: true
  }
});

module.exports = BoardOfDirector = mongoose.model(
  "BoardOfDirector",
  BoardOfDirectorSchema
);
