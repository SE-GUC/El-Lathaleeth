const uuid = require('uuid');

class Investor {
    constructor(firstName, middleName, lastName, gender, nationality, investorType, typeOfID, IDNumber, dateOfBirth, address, phoneNumber, faxNumber, email, capital, capitalCurrency){
        this.firstName=firstName;
        this.middleName=middleName;
        this.lastName=lastName;
        this.fullname=function(){
            return this.firstName + " " + this.middleName + " " + this.lastName;
        };
        this.gender=gender;
        this.nationality=nationality;
        this.investorType=investorType;  //available in SSC form but not SPC form
        this.typeOfID=typeOfID;
        this.IDNumber=IDNumber;
        this.dateOfBirth=dateOfBirth;
        this.address=address;
        this.phoneNumber=phoneNumber;
        this.faxNumber=faxNumber;
        this.email=email;
        this.capital=capital;
        this.capitalCurrency=capitalCurrency;
        this.id=uuidv4();
    };
};

module.exports = Investor;