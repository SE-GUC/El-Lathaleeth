const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
	address: {
		type: String,
		required: true
	  },
	  city: {
		type: String,
		required: true
	  },
	  town: {
		type: String,
		required: true
	  },

})	


module.exports = Address = mongoose.model("address", AddressSchema);
