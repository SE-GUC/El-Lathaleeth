const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  registered_investors: []
});

module.exports = Admin = mongoose.model("admin", AdminSchema);

