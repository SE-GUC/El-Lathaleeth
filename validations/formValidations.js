const Joi = require('joi')

module.exports = {
    
    createValidation: (request,formType) => {
            const SPCschema = {
               law: Joi.string().required(),//drop down menu
               legalForm: Joi.string().required(),//drop down menu
               arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique 
               englishName: Joi.string(),
               location: {
                   address : Joi.string().required(),
                   city : Joi.string().required(),
                   town : Joi.string().required()
                },
               phone : Joi.string().length(11),
               fax : Joi.string(),
               capitalCurr : Joi.string().required(),//drop down menu
               capitalVal : Joi.number().positive().required(), //if foreign Joi.number().positive().max(100000).required()
               investor: Joi.string(), //validate all investor stuff at investor wait till he is made
               bitIL: Joi.number(),
               formType: Joi.any().valid(['SPC', 'SSC']).required(),//drop down menu
           }

           const direcSchema = {
                                   address: Joi.string().required(),
                                   birthdate: Joi.date().required(), // automatically put according to id, must be greater than 21 years
                                   gender: Joi.any().valid(['male', 'female']).required(),//drop down menu
                                   idNum: Joi.string().required(), //frontend validation on length
                                   name: Joi.string().required(),
                                   nationality: Joi.string().required(),//drop down menu, manager must be egypt if investor foreign
                                   position: Joi.string().required(),//drop down menu
                                   typeID: Joi.any().valid(['passport', 'id']).required(),//drop down menu must be id if investor egypt
                                   typeInves:Joi.any().valid(['individual', 'company']).required(),//drop down menu
           }

           const SSCschema = {
               law: Joi.string().required(),//drop down menu
               legalForm: Joi.string().required(),//drop down menu
               arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique 
               englishName: Joi.string(),
               location: { 
                   address:Joi.string().required(),
                   city: Joi.string().required(),
                   town:Joi.string().required()
                },
               phone: Joi.string().length(11),
               fax:Joi.string(),
               capitalCurr: Joi.string().required(),//drop down menu
               capitalVal: Joi.number().min(50000).max(999999999999).required(),
               investor: Joi.string(), //validate all investor stuff at investor wait till he is made
               bitIL: Joi.number(),
               formType: Joi.any().valid(['SPC', 'SSC']).required(),//drop down menu maybe same as up
               boardOfDirectors: Joi.array().min(1).items(Joi.object(direcSchema).required())
           }

        if(formType === "SPC"){
            return Joi.validate(request, SPCschema)
        }
        else if (formType === "SSC"){
            return Joi.validate(request, SSCschema)
        }
        
    },

    updateValidation: request => {

        const SPCschema = {
            law: Joi.string().required(),//drop down menu
            legalForm: Joi.string().required(),//drop down menu
            arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique 
            englishName: Joi.string(),
            location: {
                address : Joi.string().required(),
                city : Joi.string().required(),
                town : Joi.string().required()
             },
            phone : Joi.string().length(11),
            fax : Joi.string(),
            capitalCurr : Joi.string().required(),//drop down menu
            capitalVal : Joi.number().positive().required(), //if foreign Joi.number().positive().max(100000).required()
            investor: Joi.string(), //validate all investor stuff at investor wait till he is made
            bitIL: Joi.number(),
            formType: Joi.any().valid(['SPC', 'SSC'])//drop down menu

        }

        const direcSchema = {
                                address: Joi.string(),
                                birthdate: Joi.date(), // automatically put according to id, must be greater than 21 years
                                gender: Joi.any().valid(['male', 'female']),//drop down menu
                                idNum: Joi.string(), //frontend validation on length
                                name: Joi.string(),
                                nationality: Joi.string(),//drop down menu, manager must be egypt if investor foreign
                                position: Joi.string(),//drop down menu
                                typeID: Joi.any().valid(['passport', 'id']),//drop down menu must be id if investor egypt
                                typeInves:Joi.any().valid(['individual', 'company']),//drop down menu
        }

        const SSCschema = {
            law: Joi.string(),//drop down menu
            legalForm: Joi.string(),//drop down menu
            arabicName: Joi.string(), //make sure in next sprint that name of comapny is unique 
            englishName: Joi.string(),
            location: { 
                address:Joi.string(),
                city: Joi.string(),
                town:Joi.string()
             },
            phone: Joi.string().length(11),
            fax:Joi.string(),
            capitalCurr: Joi.string(),//drop down menu
            capitalVal: Joi.number().min(50000).max(999999999999),
            investor: Joi.string(), //validate all investor stuff at investor wait till he is made
            bitIL: Joi.number(),
            boardOfDirectors: Joi.array().min(1).items(Joi.object(direcSchema)),
            formType: Joi.any().valid(['SPC', 'SSC'])//drop down menu

        }

     if(formType === "SPC"){
         return Joi.validate(request, SPCschema)
     }
     else if (formType === "SSC"){
         return Joi.validate(request, SSCschema)
     }
    }, 
}