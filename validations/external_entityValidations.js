const Joi = require('joi')

module.exports = {

    createValidation: (request) => {

        const direcSchema = {
            email: Joi.string().email().required(),
            fax:Joi.string().required(),
            telephone:Joi.string().required(),
            address:Joi.required(),
            name:Joi.string().required()

        }


        return Joi.validate(request, direcSchema)


    },

    updateValidation: request => {

        return Joi.validate(request, updateSchema)
    },
}