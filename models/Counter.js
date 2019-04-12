const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ComSchema = new Schema({
    count: {
       type: Number,
       required:true
    },
    name:String
})
module.exports = Counter = mongoose.model("counter", ComSchema);