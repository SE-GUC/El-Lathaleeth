const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardOfDirectorSchema = new Schema ({
	address: [{type: Schema.ObjectId, ref: 'Address'}],
	birthdate: {
		type: Date,
		required: true
	},
	gender: {
		type: String,
		enum: ["male", "female"],
		required: true
	},
	idNum:{
		type: Number,
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
		enum: ["passport","id"],
		required: true
	},
	typeInves: {
		type: String,
		enum: ["individual","corprate"],
		required: true
	}

	
})

<<<<<<< HEAD
module.exports = BoardOfDirector = mongoose.model("BoardOfDirector",BoardOfDirectorSchema);
=======
module.exports = BoardOfDirector = mongoose.model("BoardOfDirector",BoardOfDirectorSchema);
>>>>>>> 58d1d7af2e5e01cc8f71fc38d97ea5df5ccb1f27
