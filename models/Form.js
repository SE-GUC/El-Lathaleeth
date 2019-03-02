const uuid = require('uuid');


class Form{
    constructor(bitIL,law,legalForm,formType,arabicName,englishName,location,phone,fax,investor,capitalCurr,capitalVal,boardOfDirectors){
        this.formType = formType
        this.location = location //location contain town,city,address
        this.arabicName = arabicName
        this.englishName = englishName
        this.phone = phone
        this.fax = fax
        this.investor = investor //investor array of info about current user
        this.boardOfDirectors = boardOfDirectors //table with BOD info
        this.capitalCurr = capitalCurr
        this.capitalVal = capitalVal
        this.law = law
        this.legalForm = legalForm
        this.createdOn = new Date()
        this.lastTouch = null
        this.status = null
        this.deadline = "handle deadline later"
        this.id = uuid.v4()
        this.bitIL = bitIL
        this.comments = []
    };

};
module.exports = Form