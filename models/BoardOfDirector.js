class BoardOfDirector {
	constructor(name, typeInves, gender, nationality, typeID, idNum, birthdate, address, position) {
		this.address = address;
		this.birthdate = birthdate;
		this.gender = gender;
		this.idNum = idNum;
		this.name = name;
		this.nationality = nationality;
		this.position = position;
		this.typeID = typeID;
		this.typeInves = typeInves;
	}
}

module.exports = BoardOfDirector;
