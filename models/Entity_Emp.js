class Entity_Emp {
    constructor(firstName,middleName,lastName,dateOfBirth,emp_type,) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.fullName=function() {
            return this.firstName + " " +this.middleName+" "+this.lastName;}
        this.emp_type=emp_type
    };
}

module.exports = Entity_Emp