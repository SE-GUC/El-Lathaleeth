const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpScheme = require("./Entity_Emp").schema;


const ComSchema = new Schema({
  author_type: {
    type: String,
    required: true,
    enum: ["Lawyer", "Reviewer"]
  },
  author: {
    type: EmpScheme,
    required: true
  },
  text:{
    type:String,
    required:true
  },
  postedOn:{type: Date,required:true},
  read_at:{type: Date}



});
// const uuid = require("uuid");
// class Comment {
//   constructor(author_type, author, text, read_at) {
//     this.id = uuid.v4();
//     this.author_type = author_type;
//     this.author = author;
//     this.text = text;
//     this.postedOn = new Date();
//     this.read_at = new Date(read_at);
//   }
// }
module.exports = Comment = mongoose.model("comment", ComSchema);