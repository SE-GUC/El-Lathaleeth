const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formScheme=require("./Form").schema

const AdminSchema = new Schema({
  registered_investors: {type:formScheme}
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
