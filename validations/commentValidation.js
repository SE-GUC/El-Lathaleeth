const Joi = require('joi')

module.exports = {

    createValidation: (request) => {

        const direcSchema = {
            authorType: Joi.string().required(),
            author: Joi.string().required(),
            text: Joi.string().required(),
            read_at: Joi.optional()
        }


        return Joi.validate(request, direcSchema)


    },

    updateValidation: request => {

        return Joi.validate(request, updateSchema)
    },
}