const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FormSchema = new Schema({
  
  law: {
    type: String,
    required: true
  },
  legalForm: {
    type: String,
    required: true
  },
  formType: {
    type: String,
    required: true,
    enum: ["SPC", "SSC"]
  },
  arabicName: {
    type: String,
    required: true
  },
  englishName: {
    type: String,
  },
	address: [{type: Schema.ObjectId, ref: 'Address'}],
  phone:{
    type: Number
  },
  fax: {
    type: String
  },
  boardOfDirectors: 
  [{ type: Schema.ObjectId, ref: 'BoardOfDirector' }],

  capitalCurr: {
    type: String,
    required: true
  },
  capitalVal: {
    type: Number
  },
 createdOn: {
   type: Date,
   required: true
 },
lastTouch: {
  type: String
},
status: {
  type: String
},
formId: {
  type: Schema.ObjectId, 
  auto: true
 },
 deadline: {
   type: Date,
 },
 bitIL: {
   type: Number
 },
 comments: {
   type: [String]
 }
})

module.exports = Form = mongoose.model("form", FormSchema);
