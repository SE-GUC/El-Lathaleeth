const express = require("express");
const Joi = require("joi");
const router = express.Router();
const uuid = require("uuid");

const Form = require("../../models/Form");
const Director = require("../../models/BoardOfDirector");
const Address = require("../../models/Address");

const forms = [
    new Form(0,"Laws drop down menu",
        "Legal form of company drop down",
        "SSC",
        "لينا للانتاج",
        "Lina Productions",
        new Address("Apart2", "Sheikh Zayed", "Giza"),
        "012223533443",
        "23344",
        "I am investor deats",
        "Euro",
        500000,
        [new Director("Mohamed", "individual", "male", "Egypt", "passport", "A2938920", new Date("1970-03-25"), "address", "manager"),
        new Director("Ali", "individual", "male", "Egypt", "passport", "A2938920", new Date("1970-03-25"), "address", "manager2")]),
    new Form(1,"Laws drop down menu",
        "Legal form of company drop down",
        "SPC",
        "لينا للانتاج",
        "Lina Productions",
        new Address("Apart2", "Sheikh Zayed", "Giza"),
        "012223533443",
        "23344",
        "I am investor deats",
        "Euro",
        500000)

];

router.get('/', (req, res) => res.json({ data: forms }));

router.delete('/', (req, res) => 
{
    const id = req.params.id
    const form = forms.find(form => form.id === id)
    const index = forms.indexOf(form)
    forms.splice(index)
    res.send(forms)
   
})

router.post('/', (req, res) => {
    const formType = req.body.formType
    const location = new Address(req.body.location)
    const arabicName = req.body.arabicName
    const englishName = req.body.englishName
    const phone = req.body.phone
    const fax = req.body.fax
    const investor = req.body.investor
    const boardOfDirectors = req.body.boardOfDirectors
    const capitalCurr = req.body.capitalCurr
    const capitalVal = req.body.capitalVal
    const law = req.body.law
    const legalForm = req.body.legalForm
    const bitIL = req.body.bitIL
    
    if(formType === "SPC"){
         const schema = {
            law: Joi.string().required(),//drop down menu
            legalForm: Joi.string().required,//drop down menu
            arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique 
            englishName: Joi.string(),
            location: {address:Joi.string().required,city:Joi.string().required,town:Joi.string().required},
            phone: Joi.string().length(11),
            fax:Joi.string(),
            capitalCurr: Joi.string().required().label('currency'),//drop down menu
            capitalVal: Joi.number().positive().required().when(investor.nationality ==! "Egypt",{
                is: true,
                then:Joi.number().positive().max(100000).required()
            }),
            investor: Joi.string(), //validate all investor stuff at investor wait till he is made
            bitIL: Joi.binary(),
            formType: Joi.any().valid(['SPC', 'SSC']).required(),//drop down menu
        }
    }
    else if (formType==="SSC"){
        const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 21));
        const direcSchema = {
                                address: Joi.string().required(),
                                birthdate: Joi.date().max(cutoffDate).required(), // automatically put according to id, must be greater than 21 years
                                gender: Joi.any().valid(['male', 'female']).required(),//drop down menu
                                idNum: Joi.string().required().length(14),
                                name: Joi.string().required(),
                                nationality: Joi.string().required(),//drop down menu, manager must be egypt if investor foreign
                                position: Joi.string().required(),//drop down menu
                                typeID: Joi.any().valid(['passport', 'id']).required(),//drop down menu must be id if investor egypt
                                typeInves:Joi.any().valid(['individual', 'company']).required(),//drop down menu
        }
        const schema = {
            law: Joi.string().required(),//drop down menu
            legalForm: Joi.string().required,//drop down menu
            arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique 
            englishName: Joi.string(),
            location: {address:Joi.string().required,city:Joi.string().required,town:Joi.string().required},
            phone: Joi.string().length(11),
            fax:Joi.string(),
            capitalCurr: Joi.string().required(),//drop down menu
            capitalVal: Joi.number().min(50000).max(999999999999).required(),
            investor: Joi.string(), //validate all investor stuff at investor wait till he is made
            bitIL: Joi.binary(),
            formType: Joi.any().valid(['SPC', 'SSC']).required(),//drop down menu maybe same as up
            boardOfDirectors: Joi.array().min(1).items(Joi.object(direcSchema).required)
        }

        const newForm = {
            law,
            legalForm,
            formType,
            arabicName,
            englishName,
            location,
            phone,
            fax,
            investor,
            capitalCurr,
            capitalVal,
            bitIL,
            boardOfDirectors,
            id: uuid.v4()
          };
          forms.push(new Form(newForm));
          return res.json({ data: newForm });
        }
    });



//Updating a form
router.put ("/", (req,res) =>{

    console.log("0")
    const id = req.params.id
    const location = new Address (req.body.location) //location contain town,city,address
    const arabicName = req.body.arabicName
    const englishName = req.body.englishName
    const phone = req.body.phone
    const fax = req.body.fax
    const investor = req.body.investor //investor array of info about current user
    const boardOfDirectors = req.body.boardOfDirectors //table with BOD info
    const capitalCurr = req.body.capitalCurr
    const capitalVal = req.body.capitalVal
    const law = req.body.law
    const legalForm = req.body.legalForm
    const bitIL = req.body.bitIL
    if(formType === "SPC"){
        const schema = {
           law: Joi.string().required(),//drop down menu
           legalForm: Joi.string().required,//drop down menu
           arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique 
           englishName: Joi.string(),
           location: {address:Joi.string().required,city:Joi.string().required,town:Joi.string().required},
           phone: Joi.string().length(11),
           fax:Joi.string(),
           capitalCurr: Joi.string().required().label('currency'),//drop down menu
           capitalVal: Joi.number().positive().required().when(investor.nationality ==! "Egypt",{
               is: true,
               then:Joi.number().positive().max(100000).required()
           }),
           investor: Joi.string(), //validate all investor stuff at investor wait till he is made
           bitIL: Joi.binary(),
           formType: Joi.any().valid(['SPC', 'SSC']).required(),//drop down menu
       }
   }
   else if (formType==="SSC"){
       const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 21));
       const direcSchema = {
                               address: Joi.string().required(),
                               birthdate: Joi.date().max(cutoffDate).required(), // automatically put according to id, must be greater than 21 years
                               gender: Joi.any().valid(['male', 'female']).required(),//drop down menu
                               idNum: Joi.string().required().length(14),
                               name: Joi.string().required(),
                               nationality: Joi.string().required(),//drop down menu, manager must be egypt if investor foreign
                               position: Joi.string().required(),//drop down menu
                               typeID: Joi.any().valid(['passport', 'id']).required(),//drop down menu must be id if investor egypt
                               typeInves:Joi.any().valid(['individual', 'company']).required(),//drop down menu
       }
       const schema = {
           law: Joi.string().required(),//drop down menu
           legalForm: Joi.string().required,//drop down menu
           arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique 
           englishName: Joi.string(),
           location: {address:Joi.string().required,city:Joi.string().required,town:Joi.string().required},
           phone: Joi.string().length(11),
           fax:Joi.string(),
           capitalCurr: Joi.string().required(),//drop down menu
           capitalVal: Joi.number().min(50000).max(999999999999).required(),
           investor: Joi.string(), //validate all investor stuff at investor wait till he is made
           bitIL: Joi.binary(),
           formType: Joi.any().valid(['SPC', 'SSC']).required(),//drop down menu maybe same as up
           boardOfDirectors: Joi.array().min(1).items(Joi.object(direcSchema).required)
       }
   }
   const result = Joi.validate(req.body, schema)

   if(result.error){
    return res.status(400).send({ error: result.error.details[0].message })
   }
   const updatedForm = forms.find(function(user) {
       console.log("1")
       return user["id"] === id
   }) 

   updatedForm["location"] = location
   updatedForm["aracicName"] = arabicName
   updatedForm["englishName"] = englishName
   updatedForm["phone"] = phone
   updatedForm["fax"] = fax
   updatedForm["investor"] = investor
   updatedForm["boardOfDirectors"] = boardOfDirectors
   updatedForm["capitalCurr"] = capitalCurr
   updatedForm["capitalVal"] = capitalVal
   updatedForm["law"] = law
   updatedForm["legalForm"] = legalForm
   updatedForm["bitIL"] = bitIL
   console.log("3");
   return res.json({ data: updatedEmp });
});

module.exports = router;
