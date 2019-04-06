const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formScheme = require("./Form").schema;

const AdminSchema = new Schema({
  registered_employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "entity_emp"
    }
  ]
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
