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


<<<<<<< HEAD
module.exports = Address = mongoose.model("address", AddressSchema);
=======
module.exports = Address = mongoose.model("address", AddressSchema);
>>>>>>> 58d1d7af2e5e01cc8f71fc38d97ea5df5ccb1f27
