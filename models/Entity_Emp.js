class Entity_Emp {
    constructor(firstName,middleName,lastName,dateOfBirth,emp_type,form) {
        this.dateOfBirth = dateOfBirth;
        this.fullName=function() {
            return this.firstName + " " +this.middleName+" "+this.lastName;}
        this.emp_type=emp_type
        this.form=form
    };
}

module.exports = Entity_Emp