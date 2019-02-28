const uuidv4 = require('uuid/v4');
class Entity_Emp {
    constructor(firstName,middleName,lastName,dateOfBirth,emp_type,form) {
        this.id=uuidv4()
        this.dateOfBirth = dateOfBirth;
        // this.fullName=function() {
            // return this.firstName + " " +this.middleName+" "+this.lastName;}
        this.firstName=firstName
        this.middleName=middleName
        this.lastName=lastName
        this.emp_type=emp_type
        this.form=form
        this.name=function(){return this.firstName+" "+this.middleName+" "+this.lastName}
    //     this.age=function _calculateAge(birthday) { // birthday is a date
    //         var ageDifMs = Date.now() - dateOfBirth.getTime();
    //         var ageDate = new Date(ageDifMs); // miliseconds from epoch
    //         return Math.abs(ageDate.getUTCFullYear() - 1970);}
    };

}

module.exports = Entity_Emp